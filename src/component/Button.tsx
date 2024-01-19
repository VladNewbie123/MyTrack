import React from "react";

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    text?: string;
    type?: 'default' | 'theme' | 'language' | 'burger';
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
                                           className = '',
                                           onClick,
                                           text,
                                           type = 'default',
                                           children,}) => {

    const buttonClass =
        type === 'theme'
            ? `button_theme ${className}`
            : type === 'language'
                ? `language-button ${className}`
                : type === 'burger'
                    ? `burger-btn ${className}`
                    : `button ${className}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
            {children}
        </button>
    );
};

export default Button;