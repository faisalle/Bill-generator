import './App.css';
import jsPDF from 'jspdf'
import {tabfill,tabline} from './Tab'
import  Array  from './grid'

 
const Prestataire = () => {
    return(
        <div className='prestataire'>
            <div>
                <label htmlFor="pName">Nom du prestataire</label>
                <input type="text" id="pName" name="firstname" placeholder="Nom" maxLength={25} />
            </div>
            <div>
                <label htmlFor="pAddress">Adresse du prestataire:</label>
                <input type="text" id="pAddress" name="lastname" placeholder='Adresse' maxLength={30} />
            </div>
            <div>
                <label htmlFor="pComplement">Complément d'adresse du prestataire :</label>
                <input type="text" id="pComplement" name="complement" placeholder="Complement d'adrresse" maxLength={30} />
            </div>
            <div>
                <label htmlFor="pCity">Ville du Prestataire:</label>
                <input type="text" id="pCity" name="ville" placeholder='Ville' maxLength={30} />
            </div>
            <div>
                <label htmlFor="pPcode">Code postale du Prestataire:</label>
                <input type="text" id="pPcode" name="ville" placeholder='Code postale' maxLength={10}/>
            </div>
            <div>
                <label htmlFor="pSiren">Siren du prestataire:</label>
                <input type="text" id="pSiren" name="siren" placeholder='SIREN' minLength={14} maxLength={14}/>
            </div>
            <div>
                <label htmlFor="pSiret">Siret du prestataire:</label>
                <input type="text" id="pSiret" name="siret" placeholder='Siret' minLength={14} maxLength={14}/>
            </div>
        </div>
    )
}
const Client = () => { 
    return(
        <div className='client'>
            <div>
                <label htmlFor="cName">Client Name</label>
                <input type="text" id="cName" name="firstname" placeholder="Nom " maxLength={30}/>
            </div>            
            <div>
                <label htmlFor="cAddress"> Adresse du client:</label>
                <input type="text" id="cAddress" name="lastname" placeholder='Adresse' maxLength={30}/>
            </div>                
            <div>
                <label htmlFor="cComplement">Complement d'adresse du client </label>
                <input type="text" id="cComplement" name="complement" placeholder="Complement d'adresse" maxLength={30}/>
            </div>
            <div>
                <label htmlFor="cCity">Ville du client:</label>
                <input type="text" id="cCity" name="ville" placeholder='Ville' maxLength={30}/>
            <div>
                <label htmlFor="cPcode">Code postale du client:</label>
                <input type="text" id="cPcode" name="ville" placeholder='Code postale' maxLength={10}/>
            </div>
            </div>            
            <div>
                <label htmlFor="cSiren">Siren du client:</label>
                <input type="text" id="cSiren" name="siren" placeholder='SIREN' minLength={14} maxLength={14}/>
            </div>
            <div>
                <label htmlFor="cSiret">Siret du client:</label>
                <input type="text" id="cSiret" name="siret" placeholder='Siret' minLength={14} maxLength={14}/>
            </div>
        </div>
    )
}



const App = () => {
   
    const generatePdf = (doc,e) => {
        
        
        
        //---numero de facture, nom du site, date, lieu---
        var date = new Date().toLocaleDateString("fr")

        doc.setFontSize(10)
        doc.text(5,5,`Facture N°: ${e.target.billN.value}`)
        doc.text(60,5,`${e.target.billT.value}`)
        doc.text(130,5,`${date}`)
        doc.text(160,5,`${e.target.cCity.value}`)

        doc.line(0, 6, 210, 6)

        //------- PRESTATAIRE ET CLIENT --------

        doc.setLineWidth(0.5)
        doc.roundedRect(10, 20, 85, 55, 5, 5)
        doc.roundedRect(115, 20, 85, 55, 5, 5)
        doc.setFontSize(14)
        doc.setFont('times','bold')
        doc.text(33, 16, 'PRESTATAIRE')
        doc.text(146, 16, 'CLIENT' )

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
        doc.text(11,86,`DESIGNATION DE LA PRESTATION`)
        doc.text(82,86,`QUANTITE`)
        doc.text(108,86,`PRIX UNITAIRE HT €`)
        doc.text(162,86,`TOTAL HT €`)

        //----Remplissage ligne par ligne-----
        doc.setFont('times','normal')

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
    
    const download = (e) => {
        e.preventDefault()
        var doc = new jsPDF() 
        generatePdf(doc,e)
        doc.save('Facture.PDF')
    }


   

  return (
    <div className="App">
        <div className='all'>
        <h3 className='center'>Facture Genrator</h3>
        <form onSubmit={(e)=> download(e)}>
            
            <div>
                <label htmlFor="billN">Numero de la facture :</label>
                <input type="text" id="billN" name="billNumber" placeholder="Facture n°:"/>
            </div>
            <div>
                <label htmlFor="billT">titre de la facture :</label>
                <input type="text" id="billT" name="billTittle" placeholder="titre :"/>
            </div>
            

            <div className='flex'>
                <Prestataire/>
                <Client/>
            </div>
                <Array/>
            <div>
                <label htmlFor="Dsignature">Date de signature :</label>
                <input type="date" id="Dsignature" name="signature" />
            </div>
            <div>
                <label htmlFor="Dsettlement">Date de reglement :</label>
                <input type="date" id="Dsettlement" name="reglement" />
            </div>
            <div>
                <label htmlFor="Datelast">Date butoire de livraison :</label>
                <input type="date" id="Datelast" name="firstname" />
            </div>
            
                <input type="submit" value="Submit"/>

        </form>
        </div>
    </div>
  );
}

export default App;
