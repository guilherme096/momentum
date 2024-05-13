import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton(props) {
    const navigate = useNavigate();

    const goBack = () => {
        console.log("Going back");
        navigate(-1); 
    };

    return (
        <button {...props} onClick={goBack}>Go Back</button>
    );
}

