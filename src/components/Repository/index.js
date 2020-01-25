import React from 'react';
import './styles.scss';

function Repository(props) {

    const defaultDescription = "No information for this project."

    return (
        <div className="repository">
            <a target="_blank" href={props.html_url}>
                {props.name}
            </a>
            <p>{props.description || defaultDescription}</p>
        </div>
    )
}

export default Repository;