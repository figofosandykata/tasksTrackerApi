$(document).ready(function (){
    var socket=io()
    var name=Cookies.get('name')
    if(!name) {
      name=window.prompt('What is your name ?')
      Cookies.set('name',name)
    }
    socket.emit('name',name)
    function leadZero(number){
      if(number<10){
        return `0${number}`
      }
      return number
    }
    function getTime(time){
      hour=time.getHours()
      minute=time.getMinutes()
      second=time.getSeconds()
      return `${leadZero(hour)}:${leadZero(minute)}:${leadZero(second)}`
    }
    $('form').submit(function(e){
      e.preventDefault()
      var thisTime=new Date()
      socket.emit('name',name)
      socket.emit('time',`${getTime(thisTime)}`)
      socket.emit('message',$('#m').val())
      $('#m').val('')
      return false
    })
    renderingMessage=(messageDetail)=>{
      $('#messages').append($(`<li><p>${messageDetail.time} ${messageDetail.name}</p><p>${messageDetail.message}</p></li>`))
    }
    socket.on('chat detail',chatDetail=>{
      renderingMessage(chatDetail)
    })
    $.get('/load',data=>{
      data.forEach(message => {
        renderingMessage(message)
      });
    })
})