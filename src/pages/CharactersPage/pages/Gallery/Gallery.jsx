import { Link } from 'react-router-dom';
import './Gallery.scss';


export function Gallery(props){
    return(
        <div className="c-gallery">
            <div className="row">
                {props.charactersList.map((item,i) => (
                    <div className="col-12 col-md-sm6 col-md-4 col-lg-2 "  key={i}>
                        <div className="card">
                        <Link to={"/characters/"+ item.name}>
                            <img className="card__img" src={item.image} alt=""/>
                            <div className="text">{item.name}</div></Link>
                        </div>
                    </div>
                ))}
            </div>   
        </div>    
    )
  } 

 {/* <div>
                {character.allegiances.map((item,i)=>(
                        <li key={i}>
                            {item}
                        </li>
                 
                ))}
            
               </div>*/}
