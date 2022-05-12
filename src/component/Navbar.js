import logo from './../images/logo.PNG'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


  
const Navbar = () => {

            const listboard1=()=>{
                alert('malo');
                <Link  to={'/page1'} ></Link>
            }
    return (
            
        <div className="banner_container">

        


            <div className="seconddive" id='seconddive'>
            <div className='malo'>
           
                 <h3 className="firsth1">Radpi </h3>
            
                  <img src={logo} alt={logo} />
            </div>
            <div className="div1" id='div1'>

  

                   <Link className="para1"><p >Qui nous sommes </p></Link>
                    <Link className="para1"><p>Ce que nous faisons </p></Link>
                    <Link className="para1"><p >Ou nous travaillons </p></Link>
                     <Link className="para1"><p >Ce que nous offrons </p></Link>
                    <input type="search" name="" id="seekfor" className='input-form' /><FontAwesomeIcon className='leader1' icon={faMagnifyingGlass}/>
            </div>

            <div className="listboard" id="listboard">
            <a href="/"  className="list1">A propos de nous</a><hr />
            <a  href='/' className="list2">Notre histoire</a><hr />
            <a href="/" className="list3">Comment nous travaillons</a><hr />
            <a href="/" className="list4">Travailler pour Radpi</a><hr />
            <a href="/" className="list5">Nous contacter</a>
            </div>

                

            </div>

    </div> );
}
 
export default Navbar;