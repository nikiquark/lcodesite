import i18next from "i18next";
import { useState } from "react";
import './LanguageSelect.css'

function LanguageSelect(){
    const [isEnglish, setIsEnglish] = useState(i18next.language === 'en');
    function setEnglish(){
        setIsEnglish(true);
        i18next.changeLanguage('en');
    }
    function setRussian(){
        setIsEnglish(false);
        i18next.changeLanguage('ru');
    }
    
    return (
        <div className="language-select">
                <span className={isEnglish?'active':''} onClick={setEnglish}>ENG</span>
                <span className={!isEnglish?'active':''} onClick={setRussian}>RUS</span> 
        </div>
    )
}

export default LanguageSelect;