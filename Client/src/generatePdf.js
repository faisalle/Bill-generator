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
const header = (doc,e) => {
    //---numero de facture, nom du site, date, lieu---
    var date = new Date().toLocaleDateString("fr")
    doc.setFontSize(10)
    doc.text(5,5,`Facture N°: ${e.target.billN.value}`)
    doc.text(60,5,`${e.target.billT.value}`)
    doc.text(130,5,`${date}`)
    doc.text(160,5,`${e.target.cCity.value}`)
    doc.line(0, 6, 210, 6)
}
const title = (doc,e) => {
 //------- PRESTATAIRE ET CLIENT --------
 doc.setLineWidth(0.5)
 doc.roundedRect(10, 20, 85, 55, 5, 5)
 doc.roundedRect(115, 20, 85, 55, 5, 5)
 doc.setFontSize(14)
 doc.setFont('times','bold')
 doc.text(33, 16, 'PRESTATAIRE')
 doc.text(146, 16, 'CLIENT' )
}
const prestataire = (doc,e) => {
     //---------Nom,Adresse,complément,Ville,SIREN,SIRET---------
     doc.setFontSize(11)
     //---------PARTIE PRESTATAIRE----------
     doc.setFont('times','bold')
     doc.text(13,28,`Nom:`)
     doc.setFont('times','normal')
     doc.text(23,28,`${e.target.pName.value}`)
     doc.setFont('times','bold')
     doc.text(13,35,`Adresse:`)
     doc.setFont('times','normal')
     doc.text(28,35,`${e.target.pAddress.value}`)
     doc.setFont('times','bold')
     doc.text(13,42,`Complément:`)
     doc.setFont('times','normal')
     doc.text(37,42,`${e.target.pComplement.value}`)
     doc.setFont('times','bold')
     doc.text(13,49,`Ville:`)
     doc.setFont('times','normal')
     doc.text(23,49,`${e.target.pCity.value}`)
     doc.setFont('times','bold')
     doc.text(13,56,`Code postal:`)
     doc.setFont('times','normal')
     doc.text(37,56,`${e.target.pPcode.value}`)
     doc.setFont('times','bold')
     doc.text(13,63,`SIREN:`)
     doc.setFont('times','normal')
     doc.text(28,63,`${e.target.pSiren.value}`)
     doc.setFont('times','bold')
     doc.text(13,70,`SIRET:`)
     doc.setFont('times','normal')
     doc.text(28,70,`${e.target.pSiret.value}`)
}
const client = (doc,e) => {
//---------PARTIE CLIENT---------------
    doc.setFont('times','bold')
    doc.text(118,28,`Nom:`)
    doc.setFont('times','normal')
    doc.text(128,28,`${e.target.cName.value}`)
    doc.setFont('times','bold')
    doc.text(118,35,`Adresse:`)
    doc.setFont('times','normal')
    doc.text(133,35,`${e.target.cAddress.value}`)
    doc.setFont('times','bold')
    doc.text(118,42,`Complément:`)
    doc.setFont('times','normal')
    doc.text(142,42,`${e.target.cName.value}`)
    doc.setFont('times','bold')
    doc.text(118,49,`Ville:`)
    doc.setFont('times','normal')
    doc.text(128,49,`${e.target.cCity.value}`)
    doc.setFont('times','bold')
    doc.text(118,56,`Code postal:`)
    doc.setFont('times','normal')
    doc.text(142,56,`${e.target.cPcode.value}`)
    doc.setFont('times','bold')
    doc.text(118,63,`SIREN:`)
    doc.setFont('times','normal')
    doc.text(133,63,`${e.target.cSiren.value}`)
    doc.setFont('times','bold')
    doc.text(118,70,`SIRET:`)
    doc.setFont('times','normal')
    doc.text(133,70,`${e.target.cSiret.value}`)
    doc.setFont('times','bold')
}
const tab = (doc,e) => {
     //------ Designation de la prestation, Quantité, Prix Unitaire HT €, TOTAL HT €
    //------ Taleau Debut --------
    doc.rect(10,78,190,104)
    doc.line(10,92,200,92)
    //------Trait Horizontal------
    tabline(doc)
    //-------Trait Vertical-------
    doc.line(80, 78, 80, 182)
    doc.line(105, 78, 105, 182)
    doc.line(150, 78, 150, 182)
    //-------Tableau Fin----------
}
const tabTittle = (doc,e) => {
    doc.text(11,86,`DESIGNATION DE LA PRESTATION`)
    doc.text(82,86,`QUANTITE`)
    doc.text(108,86,`PRIX UNITAIRE HT €`)
    doc.text(162,86,`TOTAL HT €`)
    //----Remplissage ligne par ligne-----
    doc.setFont('times','normal')
}
const dateTab = (doc,e) => {
    var globalTotal = tabfill(doc,e)
    //------ Date de signature, Date de reglement, Date butoire de livraison
    //------ Tableau et Date------
    doc.rect(10,190,95,40)
    doc.setFont('times','bold')
    //------Date de signature------
    doc.line(10,200,105,200)
    doc.text(15,196,`Date de signature : ${e.target.Dsignature.value}`)
    //------Date de reglement------
    doc.line(10,210,105,210)
    doc.text(15,206,`Date de reglement : ${e.target.Dsettlement.value}`)
    //------Date butoire de livraison------
    doc.line(10,220,105,220)
    doc.text(15,216,`Date butoire de livraison : ${e.target.Datelast.value}`)
    return globalTotal
}
const footer = (globalTotal,doc,e) => {
     //------ TOTAL HT -----
     doc.setLineWidth(2)
     doc.rect(130,190,70,40)
     doc.setFontSize(18)
     doc.setFont('times','bold')
     doc.text(135,200,'TOTAL HT :')
     doc.text(135,210,`${globalTotal}€` )
     
     doc.setLineWidth(0.3)
 
     //------ Signature prestataire et client -------
     doc.rect(15,255,70,30)
     doc.rect(120,255,70,30)
     doc.setFontSize(12)
     doc.text(25,250,'Signature du prestataire : ')
     doc.text(135,250,'Signature du client : ')
     //------ Bas de page------
     doc.line(0, 290, 210, 290)  
 }
    

const generatePdf = (doc,e) => {  
    header(doc,e)
    title(doc,e)
    prestataire(doc,e)
    client(doc,e)
    tab(doc,e)
    tabTittle(doc,e)
    var globalTotal = dateTab (doc,e)
    footer(globalTotal,doc,e) 
}
   

export default generatePdf;
