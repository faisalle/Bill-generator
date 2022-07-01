const textPresent = (node) => {
    if (node.children[0].value||
    node.children[2].value||
    node.children[4].value||
    node.children[6].value)
        return true
    return false
}
const copyLineArray = (src,dest) => {
    var srcChildren = document.getElementById(`lineArray${src}`).children
    var destChildren = document.getElementById(`lineArray${dest}`).children
    destChildren[0].value = srcChildren[0].value
    destChildren[2].value = srcChildren[2].value
    destChildren[4].value = srcChildren[4].value
    destChildren[6].value = srcChildren[6].value

}
const empty = (c) => {
    var children = document.getElementById(`lineArray${c}`).children
    children[0].value=''
    children[2].value=''
    children[4].value=''
    children[6].value=''

}

const loopCopy = (c) => {
    while( c<8 && textPresent(document.getElementById(`lineArray${c+1}`))){
        copyLineArray(c+1,c)
        empty(c+1)
        c++;
    }
    if (c<8)
    document.getElementById(`lineArray${c+1}`).style.display='none'
}

const inputHandlerArray = (e) =>{
  //  console.log(e.target.parentNode)
    var c = parseInt(e.target.parentNode.id.split('lineArray')[1])
    if (textPresent(e.target.parentNode)){
        console.log(c)
        if(c<8)
            document.getElementById(`lineArray${c+1}`).style.display='block'
    }
    else {
    loopCopy(c)
    //document.getElementById(`lineArray${c+1}`).style.display='none'
    }
} 

const getArray = () => {
    var array = []
    for(var c=0 ; c<9 ; c++){
        array.push(
            <div id={`lineArray${c}`} key={c} className={c%2 ?'white input' : 'input'}
            style={{display:c? 'none': 'block'}} onInput={(e) => inputHandlerArray(e)} >
                <input id='name'/>
                <br/>
                <input id='quantity'/>
                <br/>
                <input id='price'/>
                <br/>
                <input id='totalPrice'/>
            </div>
        )
    }
    return(array)
}

const Array = () => {
    
    return(
        <div>
            {getArray()}
        </div>
    )
}




export default  Array;