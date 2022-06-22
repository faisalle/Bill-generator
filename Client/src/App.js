import './App.css';
import jsPDF from 'jspdf'

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

        doc.text(13,30,`Nom:`)
        doc.text(13,37,`Adresse:`)
        doc.text(13,44,`Complément:`)
        doc.text(13,51,`Ville:`)
        doc.text(13,58,`SIREN:`)
        doc.text(13,65,`SIRET:`)

        //---------PARTIE CLIENT---------------

        doc.text(118,30,`Nom:`)
        doc.text(118,37,`Adresse:`)
        doc.text(118,44,`Complément:`)
        doc.text(118,51,`Ville:`)
        doc.text(118,58,`SIREN:`)
        doc.text(118,65,`SIRET:`)

        //------ Designation de la prestation, Quantité, Prix Unitaire HT €, TOTAL HT €
        //------ Taleau Debut --------
        doc.rect(10,78,190,104)
        //------Trait Horizontal------
        doc.line(10,92,200,92)
        doc.line(10,102,200,102) 
        doc.line(10,112,200,112) 
        doc.line(10,122,200,122) 
        doc.line(10,132,200,132) 
        doc.line(10,142,200,142) 
        doc.line(10,152,200,152) 
        doc.line(10,162,200,162) 
        doc.line(10,172,200,172) 
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
        //----Premiere ligne -----
        doc.text(30,100,`Site web`)
        doc.text(88,100,`25000`)
        doc.text(120,100,`25000 €`)
        doc.text(170,100,`25000 €`)
        //----Deuxieme ligne -----
        doc.text(30,110,`Site web`)
        doc.text(88,110,`25000`)
        doc.text(120,110,`25000€`)
        doc.text(170,110,`25000€`)
        //----Troisieme ligne -----
        doc.text(30,120,`Site web`)
        doc.text(88,120,`25000`)
        doc.text(120,120,`25000€`)
        doc.text(170,120,`25000€`)
        //----Quatrieme ligne -----
        doc.text(30,130,`Site web`)
        doc.text(88,130,`25000`)
        doc.text(120,130,`25000€`)
        doc.text(170,130,`25000€`)
        //----Cinquieme ligne -----
        doc.text(30,140,`Site web`)
        doc.text(88,140,`25000`)
        doc.text(120,140,`25000€`)
        doc.text(170,140,`25000€`)
        //----Sixieme ligne -----
        doc.text(30,150,`Site web`)
        doc.text(88,150,`25000`)
        doc.text(120,150,`25000€`)
        doc.text(170,150,`25000€`)
        //----Septieme ligne -----
        doc.text(30,160,`Site web`)
        doc.text(88,160,`25000`)
        doc.text(120,160,`25000€`)
        doc.text(170,160,`25000€`)
        //----Huitieme ligne -----
        doc.text(30,170,`Site web`)
        doc.text(88,170,`25000`)
        doc.text(120,170,`25000€`)
        doc.text(170,170,`25000€`)
        //----Neuvieme ligne -----
        doc.text(30,180,`Site web`)
        doc.text(88,180,`25000`)
        doc.text(120,180,`25000€`)
        doc.text(170,180,`25000€`)
    
    
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


        

        doc.save('hello-world.PDF');


  return (
    <div className="App">
        HELLLLLLOWWWWWWW
        <button>clique here</button>
    </div>
  );
}

export default App;
