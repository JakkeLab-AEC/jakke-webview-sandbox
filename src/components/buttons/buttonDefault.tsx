import React from 'react';
import './buttonDefaultStyle.css';

interface ButtonDefaultProps {
    text: string, 
    width?: number|string, 
    style?: "positive"|"negative"|"neutral"
    isEnabled: boolean,
    onClickHandler?:(e:React.MouseEvent<HTMLButtonElement>) => void
}

export const ButtonDefault:React.FC<ButtonDefaultProps> = ({text, width, style, isEnabled, onClickHandler}) => {
    if(!style) {
        style = "neutral"
    }

    const styleFactor = isEnabled ? `btn-${style}` : 'btn-disabled';

    return (
        <button 
            className={styleFactor}
            onClick={onClickHandler} 
            style={{width: width, borderRadius: 4}} 
            disabled={!isEnabled}>
            {text}
        </button>
    )
}