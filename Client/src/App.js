import './App.css';
import jsPDF from 'jspdf'
import {tabfill,tabline} from './Tab'
import  Array  from './grid'
 
const Prestataire = () => {
    return(
        <div className='prestataire'>
            <div>
                <label for="Pname">Prestataire Name</label>
                <input type="text" id="Pname" name="firstname" placeholder="Name"/>
            </div>
            <div>
                <label for="Paddress">Prestataire Address:</label>
                <input type="text" id="Padresse" name="lastname" placeholder='Address'/>
            </div>
            <div>
                <label for="Pcomplement">Prestataire Complément </label>
                <input type="text" id="Pcomplement" name="complement" placeholder='Complement'/>
            </div>
            <div>
                <label for="Pcity">Prestataire City:</label>
                <input type="text" id="Pville" name="ville" placeholder='City'/>
            </div>
            <div>
                <label for="Psiren">Prestataire SIREN:</label>
                <input type="text" id="Psiren" name="siren" placeholder='SIREN'/>
            </div>
            <div>
                <label for="Psiret">Prestataire SIRET:</label>
                <input type="text" id="Psiret" name="siret" placeholder='Siret'/>
            </div>
        </div>
    )
}
const Client = () => {
    return(
        <div className='client'>
            <div>
                <label for="Cname">Client Name</label>
                <input type="text" id="Cname" name="firstname" placeholder="Name"/>
            </div>            
            <div>
                <label for="Caddress"> Client Address:</label>
                <input type="text" id="Cadresse" name="lastname" placeholder='Address'/>
            </div>                
            <div>
                <label for="Ccomplement">Client Complément </label>
                <input type="text" id="Ccomplement" name="complement" placeholder='Complement'/>
            </div>
            <div>
                <label for="Cville">Client City:</label>
                <input type="text" id="Cville" name="ville" placeholder='City'/>
            </div>            
            <div>
                <label for="Csiren">Client SIREN:</label>
                <input type="text" id="Csiren" name="siren" placeholder='SIREN'/>
            </div>
            <div>
                <label for="Csiret">Client SIRET:</label>
                <input type="text" id="Csiret" name="siret" placeholder='Siret'/>
            </div>
        </div>
    )
}



const App = () => {
    

    var doc = new jsPDF();
        //---numero de facture, nom du site, date, lieu---

        doc.setFontSize(10)
        doc.text(5,5,'Facture N°: 000000')
        doc.text(75,5,'QQCHOSE POURSITE','center')
        doc.text(115,5,'Date : 11/06/2022')
        doc.text(175,5,'Neuilly-sur-seine')
        doc.line(0, 6, 210, 6)

        //------- PRESTATAIRE ET CLIENT --------

        doc.setLineWidth(0.5)
        doc.roundedRect(10, 20, 85, 52, 5, 5)
        doc.roundedRect(115, 20, 85, 52, 5, 5)
        doc.setFontSize(14)
        doc.setFont('times','bold')
        doc.text(33, 19, 'PRESTATAIRE')
        doc.text(151, 19, 'CLIENT' )

        //---------Nom,Adresse,complément,Ville,SIREN,SIRET---------

        doc.setFontSize(11)

        //---------PARTIE PRESTATAIRE----------
       

        doc.text(13,30,`Name:`)
        doc.text(13,37,`Address:`)
        doc.text(13,44,`Complément:`)
        doc.text(13,51,`Ville:`)
        doc.text(13,58,`SIREN:`)
        doc.text(13,65,`SIRET:`)

        //---------PARTIE CLIENT---------------

        doc.text(118,30,`Name`)
        doc.text(118,37,`Address:`)
        doc.text(118,44,`Complément:`)
        doc.text(118,51,`Ville:`)
        doc.text(118,58,`SIREN:`)
        doc.text(118,65,`SIRET:`)

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
        tabfill(doc)
    
        //------ Date de signature, Date de reglement, Date butoire de livraison
        //------ Tableau et Date------
        doc.rect(10,190,95,40)
        doc.setFont('times','bold')
        //------Date de signature------
        doc.line(10,200,105,200)
        doc.text(15,196,'Date de signature : 22/02/2222')
        //------Date de reglement------
        doc.line(10,210,105,210)
        doc.text(15,206,'Date de reglement : 22/02/2222')
        //------Date butoire de livraison------
        doc.line(10,220,105,220)
        doc.text(15,216,'Date butoire de livraison : 02/02/2222')


        //------ TOTAL HT -----
        doc.setLineWidth(2)
        doc.rect(130,190,70,40)
        doc.setFontSize(18)
        doc.setFont('times','bold')
        doc.text(135,200,'TOTAL HT :')
        doc.text(135,210,'25000,00 €')
        
        doc.setLineWidth(0.3)

        //------ Signature prestataire et client -------
        doc.rect(15,255,70,30)
        doc.rect(120,255,70,30)
        doc.setFontSize(12)
        doc.text(25,250,'Signature du prestataire : ')
        doc.text(135,250,'Signature du client : ')
        //------ Bas de page------
        doc.line(0, 290, 210, 290)
        

        const download = () => {
            doc.save('Facture.PDF')
        }

  return (
    <div className="App">
        <div className='all'>
        <h3 className='center'>Facture Genrator</h3>
        <form>

            <div className='flex'>
                <Prestataire/>
                <Client/>
             </div>
                <Array/>
             


                <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>
            
                <input type="submit" value="Submit" onClick={download}/>

        </form>
        </div>
    </div>
  );
}

export default App;
