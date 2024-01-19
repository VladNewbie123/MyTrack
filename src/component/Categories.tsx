import {useTheme} from "./ThemeContext";
import {useTranslation} from "react-i18next";
import Category from "./Category";

const Categories = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    return (
        <div className="blog mb-1 p-1.5">
            <Category theme={theme} t={t}/>
        </div>
    );
};

export default Categories;