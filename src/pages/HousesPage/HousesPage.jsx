import { useState,useEffect } from "react"
import { GalleryHouses } from "./pages/Gallery/GalleryHouses";
import axios from 'axios';
import { SearchForm } from "../../shared/SearchForm/SearchForm";
import { Navbar } from "../../core/Navbar/Navbar";
import { Loader } from "../../shared/Loader/Loader"


let allHouses = [];
export function HousesPage(){
    const[houses,setHouses]= useState([])
    const [loader, setLoader] = useState(true);

    const getHouses = ()=>{
        axios('https://api.got.show/api/show/houses/').then(res=>{
            allHouses = res.data
            console.log(res.data)
            setHouses(res.data)
            setLoader(false)
         });
    }

    const filterHouses = (filterHousesName)=>{
        const housesFiltered= allHouses.filter(houses =>
            houses.name.toLowerCase().includes(filterHousesName.toLowerCase()));
        setHouses(housesFiltered);
    }

    useEffect(getHouses,[])
    return(
        <div>
            <SearchForm  fnFilter={filterHouses}/>
            {loader ? <Loader/> : <GalleryHouses housesList={houses}/>}
            <Navbar/>
        </div>
    )
}
