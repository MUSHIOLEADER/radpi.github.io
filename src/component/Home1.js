import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE} from '@fortawesome/free-solid-svg-icons'
import { faM} from '@fortawesome/free-solid-svg-icons'
import { faG} from '@fortawesome/free-solid-svg-icons'
import { faS} from '@fortawesome/free-solid-svg-icons'
const Home1 = () => {
       const firsthover= ()=>{
              document.getElementById('leader21').style.color="rgb(171, 10, 10)";
              document.getElementById('p1').style.color="rgb(171, 10, 10)";
       }
       const firsthover1= ()=>{
              document.getElementById('leader21').style.color="rgb(9, 9, 43)";
              document.getElementById('p1').style.color="rgb(9, 9, 43)";
       }
       const secondhover= ()=>{
              document.getElementById('leader41').style.color="rgb(171, 10, 10)";
              document.getElementById('p4').style.color="rgb(171, 10, 10)";
       }
       const secondhover1= ()=>{
              document.getElementById('leader41').style.color="rgb(9, 9, 43)";
              document.getElementById('p4').style.color="rgb(9, 9, 43)";
       }
       const thirdhover= ()=>{
              document.getElementById('leader23').style.color="rgb(171, 10, 10)";
              document.getElementById('p5').style.color="rgb(171, 10, 10)";
       }
       const thirdhover1= ()=>{
              document.getElementById('leader23').style.color="rgb(9, 9, 43)";
              document.getElementById('p5').style.color="rgb(9, 9, 43)";
       }
       const thirdhover2= ()=>{
              document.getElementById('leader61').style.color="rgb(171, 10, 10)";
              document.getElementById('p66').style.color="rgb(171, 10, 10)";
       }
       const thirdhover21= ()=>{
              document.getElementById('leader61').style.color="rgb(9, 9, 43)";
              document.getElementById('p66').style.color="rgb(9, 9, 43)";
       }

    return ( 
            <div className="hom1">
            
            <div className="main2">
                   <h1 className="title1" >Notre champs d'expertise</h1> 
                    <div className="main21">
                        <div className="main3" onMouseOver={
                               ()=>{
                                      firsthover();
                               }
                        } onMouseOut={
                               ()=>{
                                      firsthover1();
                               }
                        }>
                               <FontAwesomeIcon className='leader21'id='leader21' icon={faE}/>
                                <h1 className="p1" id='p1'>Experience sectoriel</h1>
                                
                                <p className="p11"> RADPI a des connaissances sûres dans la mise en 
                                œuvre des activités...</p>
                        </div>

                        <div className="main4"  onMouseOver={()=>{secondhover()}} onMouseOut={()=>{secondhover1()}}>

                           <FontAwesomeIcon className='leader41' id='leader41' icon={faM}/>
                            <h1 className="p4" id='p4'>Mission</h1>
                            
                            <p className="p42">est de renforcer la capacité de résilience 
                            communau...</p>
                        </div>
                    </div>
                    <div className="main22">
                         <div className="main5" onMouseOver={()=>{thirdhover()}} onMouseOut={()=>{thirdhover1()}}>
                                <FontAwesomeIcon className='leader23' id='leader23' icon={faG}/>
                                <h1 className="p5" id='p5'>Gestion et coordination</h1>
                                
                                <p className="p55">RADPI dispose d’un Bureau établi
                                à Bukavu au Sud-Kivu...</p>
                         </div>
                         <div className="main6" onMouseOver={()=>{thirdhover2()}} onMouseOut={()=>{thirdhover21()}}>
                               <FontAwesomeIcon className='leader61' id='leader61' icon={faS}/>
                                <h1 className="p66" id='p66'>Strategies et Approche...</h1>
                                
                                <p className="p6">RADPI focalise son attention sur les activités...</p>
                         </div>
                    
                    </div>


         </div>

            
            </div>

     );
}
 
export default Home1;