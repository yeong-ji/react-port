import React from 'react';
import { Link } from 'react-router-dom';

function Ani({id, sub_title, title, frame, text1, text2, text3, link }){
    return(
        <li>
            <div className="ani-tit">
                <span>{sub_title}</span>
                <h3>{title}</h3>
                <span className="ani-btn"></span>
            </div>
            <div className="ani-cont">
                <div>
                    <div className="ani-img"><iframe src={frame} title={title}></iframe></div>
                    <div className="ani-text">
                        <div>{text1}<br />
                        {text2}<br />
                        {text3}</div>
                        <div className="btn">
                            <Link to={link} target="_blank"><span>코드보기</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Ani;