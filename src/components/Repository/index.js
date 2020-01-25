import React from 'react';
import './styles.scss';
import StarIcon from '../../assets/icons/star.svg';

function Repository(props) {

    const defaultDescription = "No information for this project."
    let lang = props.language.toLowerCase();

    switch(lang) {
        case "c++":
            lang = "cpp";
            break;
        case "c#":
            lang = "c#";
            break;
        default:
            break;
    }

    let img;
    try {
        img = require('../../assets/icons/' + lang + '-original.svg');
    } catch {
        console.log("Could not find icon for", lang);
    }


    return (
        <div className="repository">
            <div className="top-right">
                <span>{props.stargazers_count}</span>
                <img className="star" src={StarIcon}/>
            </div>
            <div className="top">
                {img && <img src={img}/>}
                <a target="_blank" href={props.html_url}>
                    {props.name}
                </a>
            </div>
            <p>{props.description || defaultDescription}</p>
            <p>
                Built by <a href={"https://github.com/" + props.owner.login}>@{props.owner.login}</a>
            </p>
        </div>
    )
}

export default Repository;