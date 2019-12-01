$(document).ready(function (){
  let name,thisTime,message
  let channel='lobby'
  const socket=io()
  const leadZero=(num)=>{
    if(num<10) {
      return `0${num}`
    }
    return num
  }
  const getTime=(time)=>{
    const hour=time.getHours()
    const minute=time.getMinutes()
    const second=time.getSeconds()
    return `${leadZero(hour)}:${leadZero(minute)}:${leadZero(second)}`
  }
  const convert=msg=>{
    return msg.replace(/\</g,'&lt').replace(/\>/g,'&gt')
  }
  const sendMessage=(room,user,chat)=>{
    socket.emit('channel',room)
    socket.emit('name',user)
    thisTime=new Date()
    socket.emit('time',`${getTime(thisTime)}`)
    socket.emit('message',convert(chat))
  }
  const getChannel=()=>{$.get('/channels',data=>{
    if(data.length==0){
        name=window.prompt('What is your name ?')
        message=window.prompt('What is your first message ?')
        Cookies.set('name',name)
        sendMessage(channel,name,message)
        return
    }
    const channels=[]
    data.forEach(room => {
      if(channels.length==0){
        channels.push(room)
      }
      if(!channels.some(eachChannel=>eachChannel==room)){
        channels.push(room)
      }
    })
    $('#channels').empty()
    channels.forEach(room=>{
      $('#channels').append($(
        `<li><a href='' id='${room}'><h3>#${room}</h3></a></li>`
      ))
      $(`#${room}`).click(evt=>{
        evt.preventDefault()
        channel=room
        socket.emit('channel',channel)
        socket.emit('name',name)
        loadMessage()
      })  
    })
  })}
  const loadMessage=()=>{
    $.get('/load',data=>{
      $('#messages').empty() 
      data.forEach(message => {
        if(message.channel==channel) {
          renderingMessage(message)
        }
      });
    })
  }
  $('#addChannel').click((evt)=>{
    evt.preventDefault()
    channel=window.prompt(`What is new channel's name ?`)
    if(channel!=null) {
      if((/[^\w]/).test(channel)) {
        alert(`Channel's name must don't have any punctuantion or whitespace`)
      } else {
        message=window.prompt('What is your message ?')
        sendMessage(channel,name,message)
        getChannel()
        loadMessage()
      }
    }
  })
  getChannel()
  loadMessage()
  $('form').submit(function(e){
    e.preventDefault()
    message=$('#m').val()
    sendMessage(channel,name,message)
    $('#m').val('')
    return false
  })
  const renderingMessage=(messageDetail)=>{
    $('#messages').append($(`<li><p>${messageDetail.time} ${messageDetail.name}</p><p>${messageDetail.message}</p></li>`))
  }
  socket.on('chat detail',chatDetail=>{
    renderingMessage(chatDetail)
  })
  name=Cookies.get('name')
  if(!name) {
    name=window.prompt('What is your name ?')
    Cookies.set('name',name)
  }
  socket.emit('channel',channel)
  socket.emit('name',name)
})