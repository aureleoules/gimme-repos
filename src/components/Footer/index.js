import React from 'react';
import './styles.scss';

function Footer(props) {
    return (
        <div className="footer">
            <hr/>
            <div className="container">
                <p>Thanks <a target="_blank" href="https://github.com/TrAyZeN">@TrAyZeN</a> for the API!</p>
                <p>Built by <a target="_blank" href="https://github.com/aureleoules">@aureleoules</a></p>
            </div>
        </div>
    )
}

export default Footer;