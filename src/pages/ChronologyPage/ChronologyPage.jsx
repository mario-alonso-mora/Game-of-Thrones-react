import { useEffect, useState } from "react";
import { Navbar } from "../../core/Navbar/Navbar";
import axios from 'axios';
import "./ChronologyPage.scss"
import vector from "../../assets/image/arrow3.png";
import { Link } from "react-router-dom";

let charactersOrdered = [];
let characterPair=[];
let characterOdd=[];
export function ChronologyPage(){


    const [charPair, setCharPair]= useState([])
    const [charOdd, setCharOdd]= useState([])
    const [highToLow, setHighToLow] =  useState(true);

    const getCharacters = ()=>{
        axios('https://api.got.show/api/show/characters/' ).then(res=>{
            charactersOrdered = [];
            for(const character of res.data){
                if(character.age){
                    if(character.age.age){
                        charactersOrdered.push(character);
                    }
                }
            };
        console.log(charactersOrdered)    


        showOrderCharacters();
        setHighToLow(false)
       
         });
    }

    
    const showOrderCharacters = () =>{
        if(highToLow){
            charactersOrdered.sort((a,b)=> a.age.age - b.age.age);
        }else{
            charactersOrdered.sort((a,b)=> b.age.age - a.age.age);
        }

        characterPair=[];
        characterOdd=[];

        for(let i = 0; i< charactersOrdered.length; i++) {
            if(i%2 === 0){
                characterPair.push(charactersOrdered[i]);
            }else{
                characterOdd.push(charactersOrdered[i]);
            }
        };
        console.log(charPair);
        console.log(charOdd);
        

        setCharPair(characterPair);
        setCharOdd(characterOdd);


    }
    useEffect( () =>{
        getCharacters();
    },[]

    )

    const changeOrder=() =>{
        if (highToLow){
            setHighToLow(false);
            showOrderCharacters();
        }else{
            setHighToLow(true);
            showOrderCharacters();

        }
    }

    console.log(characterPair);
    console.log(characterOdd);
    

    return(
    <div>   
    <div data-simplebar data-simplebar-auto-hide="false" data-simplebar-scrollbar-max-size="700" className="c-crono">

        <div  className="c-crono__div">
            

            <div className="c-crono__images">
                <div className="c-crono__btn">
                    <button onClick={changeOrder} className="c-crono__button">
                    {" "}{charPair[0] ? charPair[0].age.age : "0"}{" "}</button>
                    <div className="c-crono__img">
                        <img src={vector} alt="" className={highToLow ? "c-crono__vector" : "c-crono c-crono__vector--invert"}/>
                        <hr className="c-crono__hr"/>
                    </div>
                </div>
            


            <div className="c-crono__list">
                <div className="c-crono__column">
                    {charPair.map((item, i) => (
                    <div className="c-crono__p" key={i}>
                        <p>{item.age.age}</p>
                        <p>{item.name}</p>
                        <Link to={"/characters/"+ item.name}>
                            <img  src={item.image} />
                        </Link>
                    </div>
                    ))}
                </div>
                <hr className="c-crono__hr2"></hr>
                <div className="c-crono__column c-crono__column--right">
                {charOdd.map((item, i) => (
                <div className="c-crono__p" key={i}>
                    <p>{item.age.age}</p>
                    <p>{item.name}</p>
                    <Link to={"/characters/"+ item.name}>
                            <img  src={item.image} />
                    </Link>
                </div>
                ))}
            </div>
            </div>
            
        </div>
    </div>
    
</div>
<Navbar/>
</div>
      
    
    )
}

