import { Route, Switch } from "react-router-dom";
import { CharactersPage } from "../../pages/CharactersPage/CharactersPage";
import { CharactersDetailPage } from "../../pages/CharactersPage/pages/CharactersDetails/CharacterDetailPage"
import { ChronologyPage } from "../../pages/ChronologyPage/ChronologyPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { HousesPage } from "../../pages/HousesPage/HousesPage";
import { HousesDetailPage } from "../../pages/HousesPage/pages/HousesDetails/HousesDetailPage";




export function Routes(){

    return(
        <Switch>
          <Route exact path = "/">
            <HomePage/>
          </Route>
          <Route exact path = "/characters">
            <CharactersPage/>
          </Route> 
          <Route exact path = "/characters/:name">
            <CharactersDetailPage/>
          </Route> 
          <Route exact path = "/houses">
            <HousesPage/>
          </Route> 
          <Route exact path = "/houses/:namehouse">
            <HousesDetailPage/>
          </Route> 
          <Route exact path = "/chronology">
            <ChronologyPage/>
          </Route> 
           
          {/* <Route exact path = "/CharactersPage/:idCharacter">
            <CharactersPage/>
          </Route>   */}
      </Switch>
       
    )
}