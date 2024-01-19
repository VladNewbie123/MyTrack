import React, {useState} from 'react';
import {useTheme} from './ThemeContext';
import {useTranslation} from 'react-i18next';
import {Routes, Route} from "react-router-dom";

import {Track} from '../pages/Track'
import {NotFound} from "../pages/NotFound";
import LanguageSwitcher from "./LanguageSwitcher";
import HeaderNavigation from "./HeaderNavigation";
import Button from "./Button";

const Header = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const {theme, toggleTheme} = useTheme();
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    };


    const toggleAndChangeBodyTheme = () => {
        toggleTheme(); // Переключение темы

        // Добавление/удаление класса к body
        document.body.classList.toggle('dark-body', theme === 'light');
    };

    return (
        <>
            <header className={`header ${theme === 'dark' ? 'dark-theme' : ''}`}>
                <HeaderNavigation
                    items={[
                        { to: '/', label: 'home' },
                        { to: '/track', label: 'track' },
                        { to: '/', label: 'audioBook' },
                    ]}
                    t={t}
                />
                <Button
                    type="burger"
                    className={`burger-btn ${isOpen ? 'active' : ''}`}
                    onClick={() => setOpen(!isOpen)}
                >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </Button>
                <Button
                    type="theme"
                    onClick={toggleAndChangeBodyTheme}
                    text={` ${
                        theme === 'dark' ? t('lightTheme') : t('darkTheme')
                    }`}
                />
                <LanguageSwitcher changeLanguage={changeLanguage} />
            </header>
            <Routes>
                <Route path="/track" element={<Track />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>

    );
};

export default Header;


