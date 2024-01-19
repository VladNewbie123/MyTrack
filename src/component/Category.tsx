import React from "react";

interface CategoryProps {
    theme: string;
    t: (arg0: string) => React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({theme, t}) => {
    const headerList = [
        { category: 'artist', class: 'hML1' },
        { category: 'track', class: 'hML2' },
        { category: 'collection', class: 'hML3' },
        { category: 'genre', class: 'hML4' }
    ];

    return (
        <div>
            {headerList.map(({ category, class: className }, index) => (
                <h2 key={category} className={`${className} ${theme === 'dark' ? 'dark-' + className : ''}`}>
                    {t(category)}
                </h2>
            ))}
        </div>
    );
};

export default Category;