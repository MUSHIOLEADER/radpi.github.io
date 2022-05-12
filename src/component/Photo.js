import image1 from './../images/image1.jpg';
import image2 from './../images/image2.PNG'
import image3 from './../images/image3.PNG'

const Photo = () => {
    return ( 
        <div className="trois">
                <h1 id='l'>QUELQUES FIGURES DE RADPI</h1>
                <div className="photo">
                    <img className='image1' src={image1} alt="" />
                    <img className='image2' src={image2} alt="" />
                    <img className='image3' src={image3} alt="" />
                </div>
        </div>
     );
}
 
export default Photo;