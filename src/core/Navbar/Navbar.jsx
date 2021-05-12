import { NavLink } from "react-router-dom";
import './Navbar.scss';
import { useTranslation } from "react-i18next";

export function Navbar(){
    const { t, i18n } = useTranslation(["translation"]);


    return(
        <nav className="c-nav">
            {/* <NavLink className="c-nav__link" exact to="/">home</NavLink> */}
            <NavLink className="c-nav__link" activeClassName="c-nav__link--active" to="/characters">{t("Characters")}</NavLink>
            <NavLink className="c-nav__link" activeClassName="c-nav__link--active" to="/houses">{t("Houses")}</NavLink>
            <NavLink className="c-nav__link" activeClassName="c-nav__link--active" to="/chronology">{t("Chronology")}</NavLink>
        </nav>
    )

}