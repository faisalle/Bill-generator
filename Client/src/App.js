import './App.css';
import jsPDF from 'jspdf'
import  Array  from './grid'
import  generatePdf  from './generatePdf';

 
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
