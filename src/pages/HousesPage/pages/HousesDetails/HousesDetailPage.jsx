import { useHistory, useParams } from "react-router";
import axios from 'axios';
import { useEffect, useState } from "react";
import './HousesDetailPage.scss';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logo } from '../../../../assets/image/gotimg.png';

export function HousesDetailPage(){
    const history = useHistory();

    const { t, i18n } = useTranslation(["translation"]);

    const[houses,setHouses]= useState([])

    
    const { namehouse }= useParams();

    const getHouses = ()=>{
        axios('https://api.got.show/api/show/houses/'+ namehouse).then(res=>{
            console.log(namehouse)
            console.log(res.data)
            setHouses(res.data[0])
            
         });
    }

    
    useEffect(()=>getHouses(),[])

   

return(
    <div>
    
        <span onClick={()=>{history.goBack()}} className="icon-arrow-left"><p>{t("Return")}</p></span>
    <div className="houseDetail">
        <div className="flags">
            
            {houses.logoURL ? <img className="flags__img" src={houses.logoURL} alt="houseimg"/> : 
            <img className="flags__img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7YxVK4e_q4ZV0hznq6TEEQ6R4LSCE5s1Tg&usqp=CAU" alt="imagen"/> }

            <p className="flags__text">{houses.name}</p>
        </div>
        <div className="list">
            <div className="list__words">
                <h2>{t("Words")}</h2>
                <p>{houses.words}</p>
            </div>
            <div className="list__seat">
                <h2>{t("Seat")}</h2>
                <p>{houses.seat}</p>
            </div>
            <div className="list__region">
                <h2>{t("Region")}</h2>
                <p>{houses.region}</p>
            </div>
            <div className="list__allegiance">
                <h2>{t("Alliances")}</h2>
                {Array.isArray(houses.allegiance) ? houses.allegiance.map( (item,i)=>
                <p key={i}>{item}</p>) : <p>{houses.allegiance}</p> }
            </div>
            <div className="list__religion">
                <h2>{t("Religions")}</h2>
                {Array.isArray(houses.religion) ? houses.religion.map( (item,i)=>
                <p key={i}>{item}</p>) : <p>{houses.religion}</p> }
            </div>
            <div className="list__createdAt">
                <h2>{t("Foundations")}</h2>
                <p>{houses.createdAt}</p>
            </div>
        </div>
        
        
    </div>
    </div>

    )
}
