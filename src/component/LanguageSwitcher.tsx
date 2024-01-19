import React from "react";
import Button from "./Button";

interface LanguageSwitcherProps {
    changeLanguage: (land: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({changeLanguage}) => (
    <>
        <Button className="language-button" onClick={() => changeLanguage('en')}>
            English
        </Button>
        <Button className="language-button" onClick={() => changeLanguage('uk')}>
            Українська
        </Button>
    </>
);

export default LanguageSwitcher;