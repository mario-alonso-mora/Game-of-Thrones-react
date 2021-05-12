import './Menu.scss';
import logo from '../../assets/image/home.svg';
import uk from '../../assets/image/flagen.svg';
import spain from '../../assets/image/flages.svg';

import { useTranslation } from "react-i18next";

import { NavLink, useLocation } from "react-router-dom";

export function Menu(){

    const location = useLocation();
    const { t, i18n } = useTranslation(["translation"]);
    const changeLanguage = (code)=>{
        i18n.changeLanguage(code);
    };
    return(
        <div className="c-menu">
            
                {location.pathname != "/" &&
                <NavLink className="c-menu__link" activeClassName="c-menu__link--active" exact to="/"><img className="c-menu__house" src={logo} alt=""/></NavLink>
                }

                <img src={spain} alt={t("translation:es")} className="c-menu__img" onClick={() => changeLanguage("es")}/>
                <img src={uk} alt={t("translation:es")} className="c-menu__img" onClick={() => changeLanguage("en")}/>
        </div>
    );

}
