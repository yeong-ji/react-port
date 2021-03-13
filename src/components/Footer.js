import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer>
            <div className="content-box">
                <div className="foot">
                    <span><span>speak to</span> a me now!</span>
                    <h2>
                        <div className="cursor">
                            <figure>
                                <img src="https://yeong-ji.github.io/port_animation/images/cursor.png" alt="커서이미지" />
                            </figure>
                        </div>
                        <span className="foot-tit">GET&nbsp;IN&nbsp;TOUCH</span>
                        </h2>
                    <div>
                        <address>ⓒ yeong portfolio 2021</address>
                        <ul>
                            <li><Link to="https://blog.naver.com/rladudwl210"><span className="sr-only">naver blog</span></Link></li>
                            <li><Link to="https://www.figma.com/file/x5SGbXNJzAqxTDXGcxpzNq/Untitled"><span className="sr-only">figma</span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;