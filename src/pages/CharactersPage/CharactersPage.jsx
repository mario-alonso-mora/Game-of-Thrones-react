import { useEffect, useState } from "react"
import axios from 'axios';
import { Gallery } from "./pages/Gallery/Gallery";
import { SearchForm } from "../../shared/SearchForm/SearchForm";
import { Navbar } from "../../core/Navbar/Navbar";
import { Loader } from "../../shared/Loader/Loader"




let allCharacters = [];
export function CharactersPage(){
    const[characters,setCharacters]= useState([]);
    const [loader, setLoader] = useState(true);


    const getCharacters = ()=>{
        axios('https://api.got.show/api/show/characters/' ).then(res=>{
            allCharacters = res.data
            console.log(res.data)
            setCharacters(res.data)
            setLoader(false)
         });
    }

    // const getCharactersFilter =(characterFiltered)=>{
    //     axios('https://api.got.show/api/show/characters/'+characterFiltered).then(res=>{
    //         console.log(res.data)
    //         setCharacters(res.data)
    //     });
    // }
    const filterCharacters = (filterCharactersName)=>{
        const characteresFiltered= allCharacters.filter(characters =>
            characters.name.toLowerCase().includes(filterCharactersName.toLowerCase()));
        setCharacters(characteresFiltered);
    }


    useEffect(getCharacters,[])
    return(
        <div>
            <SearchForm fnFilter={filterCharacters}/>
            {loader ? <Loader/> : <Gallery charactersList={characters}/>}
            <Navbar/>
        </div>
    )
}
