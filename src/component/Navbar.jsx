import { Link } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import './navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useEffect } from "react";

function Navbar(){
    useEffect(()=>{
        const bars = document.querySelectorAll('nav>ul>li>a');
        const toggler = document.getElementById('menu-collapse');
        for (let i of bars){
            i.addEventListener('click', ()=>{toggler.checked = false})
        }
    }, [])
    const {t} = useTranslation();
    return (
        <div className="nav-wrapper">
            <input className="collapse-input" id="menu-collapse" type='checkbox'/>
            <div className="not-collapse">
                <h1 className="logo">LCODE</h1>
                <div className="menu-button">
                    <label htmlFor="menu-collapse">
                        <AiOutlineMenu/>
                    </label>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">{t('navbar:about')}</Link>
                    </li>
                    <li>
                        <Link to="/theory">{t('navbar:theory')}</Link>
                    </li>
                    <li>
                        <Link to="/team">{t('navbar:team')}</Link>
                    </li>
                    <li>
                        <Link to="/partnership">{t('navbar:partnership')}</Link>
                    </li>
                    <li>
                        <Link to="/publications">{t('navbar:publications')}</Link>
                    </li>                
                </ul>
                <LanguageSelect/>
                
            </nav>
            
        </div>
    );
}

export default Navbar;