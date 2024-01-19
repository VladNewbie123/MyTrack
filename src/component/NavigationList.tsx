import React from "react";
import {Link} from "react-router-dom";

interface NavigationItem {
    to: string;
    label: string;
}

interface HeaderNavigationProps {
    items: NavigationItem[];
    t: (key: string) => string;
}

const NavigationList: React.FC<HeaderNavigationProps> = ({items, t}) => (
    <ul className="header_nav_list">
        {items.map(({to, label}, index) => (
            <li key={index} className="header_nav-item">
                <Link className="header_a" to={to}>
                    {t(label)}
                </Link>
            </li>
        ))}
    </ul>
)

export default NavigationList