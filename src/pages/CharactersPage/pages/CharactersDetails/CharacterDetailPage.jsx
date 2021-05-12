import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './CharacterDetailPage.scss';
import { Link } from 'react-router-dom';
import 'simplebar';
import 'simplebar/src/simplebar.css';
import { useTranslation } from "react-i18next";


let arrayAllegiances = [];
export function CharactersDetailPage() {
	const history = useHistory();


	const { t, i18n } = useTranslation(["translation"]);

	const [ character, setCharacters ] = useState([]);

	const [ houses, setHouses ] = useState([]);

	const { name } = useParams();

	const getCharacter = () => {
		axios('https://api.got.show/api/show/characters/' + name).then((res) => {
			console.log(name);
			console.log(res.data);
			setCharacters(res.data);
			arrayAllegiances = character.allegiances;	
		});
	};

	const getHouses = () => {
		if(character.house == 'House Baratheon of King&apos;s Landing'){
			character.house ="House Baratheon"
			console.log(character.house);
		}
		console.log(character.house);
		console.log(character.house);
		console.log(character.house);
		axios('https://api.got.show/api/show/houses/' + character.house).then((res) => {
			if (res.data[0] != undefined) {
				setHouses(res.data[0]);
				console.log(res.data[0]);
			}
		});
	};
	
	useEffect(() => getCharacter(), []);

	useEffect(() => getHouses(), [ character.house ]);

	return (
		<div>
		
        <span onClick={()=>{history.goBack()}} className="icon-arrow-left"><p>{t("Return")}</p></span>
		<div className="c-detail">
			
			
			
                <div className="character">
					<img className="character__img" src={character.image} alt="img" />
					<p className="character__text">{character.name}</p>
                </div>
			
			
			<div  className="list">
				<div className="list__house">
				
					<h2>{t("Houses")}</h2>
					{houses.logoURL ? 
					<Link exact to={'/houses/'+houses.name}>
					{houses.logoURL ? <img src={houses.logoURL}  alt =""/> : 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7YxVK4e_q4ZV0hznq6TEEQ6R4LSCE5s1Tg&usqp=CAU"  alt =""/> }
					</Link> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7YxVK4e_q4ZV0hznq6TEEQ6R4LSCE5s1Tg&usqp=CAU"  alt =""/>}

				</div>
			
				<div className="list__allegiances">
					<h2>{t("Alliances")}</h2>
					{Array.isArray(character.allegiances) ? (
						character.allegiances.map((item, i) => <p key={i}>{item}</p>)
					) : (
						<p>{character.allegiances}</p>
					)}
				</div>
				<div className="list__appearances">
					<h2>{t("Appearances")}</h2>
                    <div data-simplebar data-simplebar-auto-hide="false" data-simplebar-scrollbar-max-size="26.5" className="scroll">
						<div>
					    {Array.isArray(character.appearances) ? (
						character.appearances.map((item, i) => <p key={i}>{item}</p>)
					    ) : (
						<p>{character.appearances}</p>
					    )}
						</div>
                    </div>
				</div>
                <div className="list__father">
				    <h2>{t("Father")}</h2>
				    <p>{character.father}</p>
			    </div>
                <div className="list__siblings">
				    <h2>{t("Decendents")}</h2>
				    {Array.isArray(character.siblings) ? (
					character.siblings.map((item, i) => <p key={i}>{item}</p>)
				    ) : (
					<p>{character.siblings}</p>
				    )}
			    </div>
                <div className="list__titles">
				    <h2>{t("Titles")}</h2>
                    <div data-simplebar data-simplebar-auto-hide="false" data-simplebar-scrollbar-max-size="26.5"   className="scroll">
						<div>
				        	{Array.isArray(character.titles) ? (
					    	character.titles.map((item, i) => <p key={i}>{item}</p>)
				        	) : (
					    	<p>{character.titles}</p>
				        	)}
						</div>
                    </div>
			    </div>


			</div>

			
			
			
		</div>
		</div>
       
	);
}
