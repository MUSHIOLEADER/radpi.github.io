import ccqf1 from './../images/ccqf1.PNG';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Cqf = () => {
    return ( 
        <div className="Cqf">
        <h1>Ce que nous offrons</h1> 
        <div className="Cqf1">
        
            <p className="Cqf2">RADPI focalise son attention sur l’approche <br />
                                communautaire en s’appuyant sur l’expertise  <br />
                                des  membres dela société  civile  dans les  <br />
                                territoires où ses activités sont orientées. 
            </p><a href="/" className='line'>Savoir Plus Par Rapport a ce nous offrons</a><FontAwesomeIcon className='icon2333' icon={faAngleRight}/>
            <img className='image2' src={ccqf1} alt="" />                    
                
        </div>
          
        
    
    </div>

     );
}
 
export default Cqf;