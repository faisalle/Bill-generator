const tabfill = (doc,e) => {
    var i = 0 ; var Y = 100;
    var globalTotal = 0;
    while (i < 9) {

        console.log(e.target[`lineArray${i}`])
        var quantity = parseInt(e.target.quantity[i].value)
        var price = parseInt(e.target.price[i].value)
        var total = quantity * price


        doc.text(45,Y,`${e.target.name[i].value}`,'center')
        doc.text(92,Y,`${isNaN(quantity) ? '' : quantity }`,'center')
        doc.text(127,Y,`${isNaN(price) ? '' : price}`,'center')
        doc.text(175,Y,`${isNaN(total) ? '' : total}`,'center')
        globalTotal += isNaN(total) ? 0 : total
        Y=Y+10 ; i++
    }
    return globalTotal
}

const tabline = (doc) =>{
        var i=0;var Y=102
        while (i<8){
            doc.line(10,Y,200,Y)
            i++;Y=Y+10
         }  
        }   

module.exports = {tabfill,tabline};