import code from './../images/code.JPG';
import dignite from './../images/dignite.PNG';
import pinte from './../images/pinte.jpg';
import enfant from './../images/enfant.PNG'
import image1 from './../images/image1.jpg';
import image2 from './../images/image2.PNG'
import radpi from './../images/radpi.jpg'
import image3 from './../images/image3.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Page2 = () => {
    const firstfunction= ()=>{
            document.getElementById('first').style.display='inherit';
            document.getElementById('malo29').style.display='inherit';
            document.getElementById('pint').style.display='none';
            document.getElementById('titre12').style.display='inherit';
            document.getElementById('histoitetitle').style.display='none';
            document.getElementById('histoirediv').style.display='none'
            document.getElementById('travail123').style.display='none';
            document.getElementById('travail1').style.display='none';
            document.getElementById('howmakae').style.display='none'
            document.getElementById('howmakae1').style.display='none'
    }
    const firstfunction1= ()=>{
        document.getElementById('first').style.display='inherit';
        document.getElementById('malo29').style.display='inherit';
        document.getElementById('pint').style.display='none';
       
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail1').style.display='none';
}
    const secondfuntion1= () =>{
        document.getElementById('h1title').style.display='inherit';
        document.getElementById('malo30').style.display='flex';  
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='inherit';
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'
    }
    const secondfuntion2= () =>{
        document.getElementById('h1title1').style.display='inherit';
        document.getElementById('thirdp').style.display='flex';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='inherit';
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'

    }
    const secondfuntion3= () =>{
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        document.getElementById('l').style.display='inherit';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='inherit';
        document.getElementById('malo29').style.display='inherit';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='inherit';
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'
    }
    const firstfunctionne=()=>{
        document.getElementById('histoitetitle').style.display='inherit';
        document.getElementById('histoirediv').style.display='inherit'
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail123').style.display='none';
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail1').style.display='none';
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'
    }


    const firstfunctionnne=()=>{
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        document.getElementById('l').style.display='none';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='inherit';
        document.getElementById('titre12').style.display='none';
        document.getElementById('photo').style.display='none';
        document.getElementById('travail123').style.display='inherit';
        document.getElementById('travail1').style.display='inherit';
        alert('veuillez descendre pour voir le resultat');
    }




    const Howwemake=()=>{
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        document.getElementById('l').style.display='none';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='inherit';
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail123').style.display='none';
        document.getElementById('travail1').style.display='none';
        document.getElementById('photo').style.display='none';
        document.getElementById('howmakae').style.display='inherit'
        document.getElementById('howmakae1').style.display='inherit'
        alert('veuillez descendre pour voir le resultat');
    }




    return ( 

            <div className="page1">
                    
            
                    <div className="page11">
                        <a className="page12" onClick={()=>{firstfunction()}} >À Propos de nous</a>
                        <a   className="page13" onClick={()=>{firstfunctionne()}}>Notre Histoire</a>
                        <a  className="page13" onClick={()=>{Howwemake()}}>Comment Nous travaillons</a>
                        <a  className="page14" onClick={()=>{firstfunctionnne()}}>Travailler Pour Radpi</a>
                        <a  className="page15">Nous Contacter</a>
                
                    </div>
                    <img  className='pint' id='pint' src={pinte} alt="" />



                    <div className="histoire">
                    <h1 className="histoitetitle" id='histoitetitle'>Notre Histoire</h1>
                   <div className='histoirediv' id='histoirediv'> <p className="histoirepara">En effet, Le Réseau d’Action pour le Développement <br />
                     et Progrès Intégrés, (RADPI en sigle) est une organisation Indépendante, 
                    non confessionnelle, Neutre,<br />
                     apolitique et non gouvernementale de droit 
                    congolais créée 10 Mai 2006  et autorisé de fonctionner <br />
                    sous N°JUST.GS.112/S-KV/3264/2009,  N° Impôt : A1600462W 
                    et N° d’Enregistrement ONEM BUNIA :  <br />
                    09P/B/A/137. 
                    RADPI  est enregistré aux différents ministères nationaux 
                    et provinciaux du plan, <br /> Education, Action Humanitaires, 
                    environnement et développement durable.  
                    Il  est doté des statuts  <br />
                    légalisés et d’une personnalité juridique  
                     enregistrée sous N° Accusé  de Réception n° F.92/16.167  <br />
                     du ministère 
                     National de la justice depuis 2016. <br />
                    </p>
                   
                    
                    </div>
        
                    </div>

                        <div className="howwemake" id=''>
                                <h1 id='howmakae'>Comment Nous Travaillons</h1>
                                <p className="howmakae" id='howmakae1'>
                                
                                       De part son expérience antérieure, RADPI a une expérience
                                       dans le domaine de passation des messages liés au secteur 
                                       de Protection, Education, Santé, Eau hygiène et Assainis
                                       sement, Relèvement communautaire,… et des réponses contre 
                                       toutes formes de violences et abus faites aux femmes et aux 
                                       enfants et jeunes dès les évaluations des besoins, la mise en œuvre des
                                        activités, 
                                       le suivi à l’évaluation post réalisation. Son approche et ses mécanismes
                                        permettent à
                                        RADPI de mobiliser des partenariats avec des organisations 
                                        nationales
                                         qu’internationales en consœur comme BVES, Fondation Panzi, MERCY CORPS,
                                        PNUD,NRC,ACTED,WCH, RACOJ, … et des 
                                        institutions étatique dont la Division des affaires sociales, 
                                        Division de la jeunesse, INC-EPSP, Division de Genre famille et
                                         enfant. Au même moment, il est membre des groupes de travail pour
                                          la protection de l’enfant, du cluster éducation. Ces interactions 
                                          ont permis depuis longtemps
                                         le renforcement de capacités de son staff dans les secteurs d’interventions
                                
                                </p>
                        </div>


                    <div className="travail">
                            <h1 className="travail1" id='travail1'>
                            
                                Travailler Pour Radpi
                            </h1>
                        
                             <div className='travail123' id='travail123'>1. CONDUITE PERSONNELLE ET PROFESSIONNELLE <br /> <br />
                               •	Je m’engage à ne pas abuser du pouvoir et l’influence que j’ai en vertu de ma<br />    <br />      position sur la vie et le bien-être du personnel, des bénéficiaires de nos activités et d’autres personnes ;
                               •	Je serai patient, respectueux et courtois envers toutes
                                    les personnes avec qui je traite y compris les collègues, 
                                      les bénéficiaires, les dirigeants locaux et représentant
                                     gouvernementaux, les représentants des partenaires opérationnels
                                     et d’exécution, les donateurs et d’autres collègues des ONGs  et de l’ONU. <br />
                                •	Je m’habillerai d’une manière  appropriée à  la mission et au contexte culturel <br /> 
                            4. CONFLIT D’INTERET <br />
                                •	Je remplirai mes fonctions officielles et gérer mes affaires privées à
                                    une manière qui évite le conflit d’intérêt, en préservant et en renforçant 
                                  la confiance du public vis-à-vis de RADPI asbl. <br />
                                •	Je m‘engage à respecter le mandat, les Objectifs, les valeurs de RADPI asbl et
                                      s’assurer que les opinions personnelles, les comportements, y compris les conviction
                                     s politiques et /ou religieuses ne portent pas atteintes aux fonctions officielles
                                     aux activités effectuées au nom de RADPI asbl. <br /> <br />
                            2. RESSOURCES FINANCIERES ET MATERIELLES <br />  <br /> <br />
                            •	Je sauvegarderai et ferai un usage responsable de l’information
                             et des ressources auxquelles j’aurai accès en raison de mon engagement 
                             avec RADPI asbl <br />
                            •	Je gérerai les ressources  financière et matérielles de
                             RADPI asbl avec le plus grand soin, en préservant ceux- ci tout 
                             au moment contre le vol ou autres dommages, et les conserverait
                              correctement en sorte que l’utilisation non autoriser ou le mauvais
                               usage prive ne se produisent. <br />
                            •	Je protégerai et utiliserai les ressources humaines,<br />
                             financières  et matérielles de RADPI asbl de façon efficace 
                             en gardant en esprit que ces ressources auraient été mise à la
                              disposition de RADPI asbl au profil des PDIs, Enfants, femmes et
                               autres catégorie des bénéficiaires relevant du mandant de  RADPI asbl. <br /> <br />
                            
                            
                            3. MEDIAS ET INFORMATION <br /> <br />
                            •	Bien que RADPI asbl ait une attitude ouverte et positive 
                            en vers les médias, je m’abstiendrais de faire des commentaires
                             aux medias et aux journalistes au nom de RADPI asbl sans l’accord 
                             préalable du Coordinateur National  ou le chef de section de l’information
                              au siège social ; <br />
                            •	Je m’engage à la fois tout en travaillent avec et /
                             ou pour et après avoir quitté RADPI asbl de ne pas révéler à
                              des tiers des informations confidentielles que j’aurais obtenues 
                              en travaillant avec ou pour RADPI asbl ; <br /> <br />
                            4. SECURITE <br /> <br />
                            •	Je prendrais en considération de  la sécurité du personnel RADPI asbl 
                            dans les décisions opérationnelles <br />
                            •	Je ferai le suivi des instructions sécuritaires selon les règles 
                            et procédure de sécurités de RADPI asbl quand je suis dans la zone d’opération
                             (intervention) <br /><br />
                            5. INTERDICTION DE L’EXPLOITATION ET ABUS SEXUEL <br /> <br />
                            L’Exploitation et abus sexuelle est une infraction pénale et un
                             comportement inacceptable pour le personnel RADPI asbl.
                            Les relations sexuelles entre les agents de RADPI RDC, les agents de RADPI
                             RDC et les bénéficiaires de l’aide, qui mettent en danger la crédibilité et
                              l’intégrité de l’œuvre de RADPI RDC sont strictement interdits.
                            	Je ne me livrerai à aucune activité sexuelle avec des personnes
                             (adultes ou enfants) qui bénéficient ou qui ont bénéficiés de la protection
                              de RADPI asbl ou de  son aide ;
                            	Je ne dois ni produire, ni acheter, ni distribuer ou utiliser 
                            les matériels pornographiques dans le Bureau  de RADPI asbl ou sur les
                             équipements de RADPI asbl.
                            
                    
                                </div>







                    </div>






                    <div className="aboutus">
                            <h1 className='titre12' id='titre12'>À Propos de nous</h1>
                            <div className="first" >
                               <h3 id='first'>CODE DE  CONDUITE POUR LE PERSONNEL RADPI RDC.</h3>
                            
                                <div className="malo29" id='malo29'>
                                    <p className="firstp">RADPI RDC est réputé pour son <br />
                                            assistance humanitaire professionnelle et ses <br />
                                            normes éthiques élevées Ce code de conduite est <br />
                                            destiné à servir de plateforme et d’engagement <br /> 
                                            formel en vue  d’amener le personnel RADPI <br />
                                            asbl et  ses membres du  personnel représentant<br /> 
                                            et/ ou  accompagnant RADPI asbl  tant au bureau  <br />
                                            que dans  les missions sur le terrain, à être  <br />
                                            responsable vis-à-vis des leurs actes et compor <br />
                                            tements. IL s’agit d’un code conduite pour le person <br />
                                            nel RADPI asbl, et s’applique au non-membre représentant <br />
                                            et ou accompagnant RADPI asbl dans ses missions sur le <br />
                                             terrain tel que :Les Journaliers, Les Consultants ;Les  <br />
                                             enquêteurs;Les Etudiants 
                                            <span className='namespacing' onClick={()=>{secondfuntion1()}}>...Savoir plus  <FontAwesomeIcon  icon={faAngleDown}/></span>
                                    </p>
                                    <img src={code} alt="" />
                                </div>

                            <h1 className='h1title' id='h1title'>RESPECT ET DIGNITE</h1>
                            <div className="mali30" id='malo30'>
                            <p className="secondp">
                            	Je respecterai toutes les personnes <br />
                                de manières égales et sans aucune  <br />
                                distinction ou discrimination fondée sur  <br />
                                la nationalité, la race, l’ethnie, la tribu, <br />
                                le sexe,les convictions religieuses, opinons  <br />
                                politique etc. <br />
                                Je me tiendrai informé du mandat de <br />
                                RADPI asbl, ses politiques, ses objectifs et ses <br />
                                activitéssur le terrain où RADPI asbl intervient. <br />
                            	Je m’engage à respecter les lois locales, <br /> 
                                les us et coutumes de la culture locale. <br />
                                
                                <span className='namespacing' onClick={()=>{secondfuntion2()}}>...Savoir plus  <FontAwesomeIcon  icon={faAngleDown}/></span>
                            </p>
                            <img src={dignite} alt="" />

                            </div>
                            </div>

                          <h1 className='h1title1' id='h1title1'>VALEUR ET CONSIDERATION DES PDIs & ENFANTS </h1>  
                          <div className="thirdp" id='thirdp'>
                              <p> Il est important pour tous les employés et autres<br />
                                   personnes en contact avec les Déplacés & Enfants <br />
                                  Veuillez à : Être conscient des situations qui peuvent <br />
                                  présenter des risques et de gérer des situations; <br />
                          	      Planifier et organiser le travail et le lieu de travail  <br />
                                  de manière à minimiser les risques autant que possible,  
                                  être <br /> disponible pour travailler avec des enfants;Veiller à ce  
                                  qu’une  <br/>culture de la transparence existe pour permettre à toutes <br />
                                  les questions ou des préoccupations à être posées et débattues; <br />
                              	  Veiller à ce que le sentiment de responsabilité existe entre <br />
                                  personnel de façon à ce que des mauvaises pratiques ou les  <br />
                                  comportements potentiellement abusifs ne se laisse paspasser. <br />
                                  <span className='namespacing' onClick={()=>{secondfuntion3()}} >Retourner au debut <FontAwesomeIcon  icon={faAngleDown}/></span>
                            </p>
                            <img src={enfant} alt="" />
                          
                          </div>
                    </div>
                    <div className="trois">
                    <h1 id='l'>QUELQUES FIGURES DE RADPI</h1>
                    <div className="photo" id='photo'>
                        <img className='image1' src={image1} alt="" />
                        <img className='image2' src={image2} alt="" />
                        <img className='image3' src={image3} alt="" />
                    </div>
            </div>


            </div>

     );
}
 
export default Page2;