const tabfill = (doc) => {
    var i = 0 ; var Y = 100;
    while (i < 9) {
        doc.text(30,Y,'Site web')
        doc.text(88,Y,`25000`)
        doc.text(120,Y,`25000 €`)
        doc.text(170,Y,`25000 €`)
        Y=Y+10 ; i++
    }
}

const tabline = (doc) =>{
        var i=0;var Y=102
        while (i<8){
            doc.line(10,Y,200,Y)
            i++;Y=Y+10
         }  
        }   

module.exports = {tabfill,tabline};