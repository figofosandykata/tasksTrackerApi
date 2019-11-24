let solution=require('./solution')
let posibility=require('./posible')

const main=(init,trgt)=>{
    let step=solution.main(init,trgt,4,{
        $1:current=>{
            let result=posibility.replaceWildCardToColour(current,'Orange')
            let message='replace WildCard to [WildCard,Orange]'
            return{result,message}
        },
        $2:current=>{
            let result=posibility.replaceColourToWildCard(current,'Cyan')
            let message='replace [WildCard,Cyan] to WildCard'
            return{result,message}
        },
        $3:current=>{
            let result=posibility.replace2to1(current,'Orange','Orange','Cyan')
            let message='replace [Orange,Orange] to Cyan'
            return{result,message}
        },
        $4:current=>{
            let result=posibility.replace1to1(current,'Cyan','Orange')
            let message='replace Cyan to Orange'
            return{result,message}
        }
    })
    getStep=()=>{
        return step
    }
    return {getStep}
}

module.exports={main}