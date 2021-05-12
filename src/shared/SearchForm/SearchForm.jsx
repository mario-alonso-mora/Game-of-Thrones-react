import { useForm } from "react-hook-form";
import '../SearchForm/SearchForm.scss';
import { useTranslation } from "react-i18next";


export function SearchForm(props){
    const { register,handleSubmit } = useForm();

    const filter = data =>{
        props.fnFilter(data.name);
     }

     const { t, i18n } = useTranslation(["translation"]);


    return(
           <form>
               <label className="search">
                   <span className="icon-search"></span>
                   <input className="search__input" type="text" name="name" placeholder={t("Search")+"..."} ref={register} onInput={handleSubmit(filter)}/>
               </label>
           </form>
    )
}