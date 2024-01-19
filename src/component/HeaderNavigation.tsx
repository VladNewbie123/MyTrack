import React from "react";
import NavigationList from "./NavigationList";

interface NavigationItem {
    to: string;
    label: string;
}
interface HeaderNavigationProps {
    items: NavigationItem[];
    t: (key: string) => string;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({items, t}) => (
    <nav className="header_nav">
        <NavigationList items={items} t={t}/>
    </nav>
);

export default HeaderNavigation;