import photo from './../images/photo.JPG';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Wwd = () => {
    return (  

        <div className="wwd">
           
            <div className="wwd1">
            <h1>Ce que nous faisons</h1>
                <p className="wwd2"> RADPI est une organisation non gouvernementale de droit <br />
                                     congolais de protection et de droit humains créée le 10 <br />
                                      Mai 2009 sous l’initiative des acteurs dynamiques interb <br />
                                      disciplinaires et cela dans le contexte poste  conflits  <br />
                                      caractérisé par <span>la dégradation  sensible  et  prolongée</span> <br />
                                      des conditions de vie des populations et spécifiquement <br />
                                      les femmes, les jeunes  et  les  enfants   subissant des <br />
                                      viols et violences sexuelles, des arrestations, des <br />
                                      exécutions sommaires, le recrutement,l’Enrôlement et l’uti <br />
                                      lisation dans les forces et groupes armés</p>
                                      <a href="/">Ou Nous travaillons</a><FontAwesomeIcon className='icon233' icon={faAngleRight}/>
                    
            </div>
            <img className='image1' src={photo} alt="" />
        
        </div>
    );
}
 
export default Wwd;