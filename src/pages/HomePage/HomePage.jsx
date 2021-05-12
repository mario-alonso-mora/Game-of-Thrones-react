
import { Navbar } from '../../core/Navbar/Navbar';
import './HomePage.scss';
// import logo  from '../../assets/image/background.png'


export function HomePage(){


    return(
     <div className="c-home">

        <div className="c-home__img">
            {/* <img src={logo} alt=""/> */}
            <h1 >game of thrones</h1>   
        </div>
        <Navbar/>
        
     </div>

    )
}