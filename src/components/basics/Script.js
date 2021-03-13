import React from 'react';
import { Link } from 'react-router-dom';

function Script({id, sub_title, title, year, frame, text1, text2, text3, link }){
    return(
        <li>
            <div className="script-tit">
                <span>{sub_title}</span>
                <h3>{title}</h3>
                <span>{year}</span>
            </div>
            <div className="script-cont">
                <div className="script-img"><div></div><iframe src={frame} title={title}></iframe></div>
                <div className="script-text">
                    <div>{text1}<br />
                    {text2}<br />
                    {text3}</div>
                    <div className="btn">
                        <Link to={link} target="_blank"><span>코드보기</span></Link>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Script;