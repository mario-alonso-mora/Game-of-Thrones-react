import { Link } from 'react-router-dom';
import '../Gallery/GalleryHouse.scss';


export function GalleryHouses(props){
    const houses = props.housesList;
    return(
        <div className="c-houses">
            <div className="row ">
                {houses.map((item,i)=>
                <div className="col-12 col-md-sm6 col-md-4 col-lg-2"  key={i}>
                    <Link to={"/houses/"+ item.name}>
                        <div className="flag">
                            <div className="flag__img">
                                {item.logoURL ? <img src={item.logoURL} alt =""/> : 
                                <img style={{height: '240px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7YxVK4e_q4ZV0hznq6TEEQ6R4LSCE5s1Tg&usqp=CAU" alt =""/> }
                            </div>
                            <div className="flag__text">
                                <p>{item.name}</p>
                            </div>
                    
                        </div>
                    </Link>
                </div> 
                )}
            </div>   
        </div>
)};

