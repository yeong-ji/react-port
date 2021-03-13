import React from 'react';

function AboutAdv({ id, image, title, text }){
    return(
        <div className="adv-cont">
            <figure>
                <div className="adv-img">
                    <img src={image} alt={title} />
                </div>
                <figcaption>
                <h3><div>{title}</div></h3>
                    <span>
                        {text}
                    </span>
                </figcaption>
            </figure>
        </div>
    );
}

export default AboutAdv;