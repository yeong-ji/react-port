import React from 'react';
import { Link } from 'react-router-dom';

function Port({ id, sub_title1, sub_title2, title, code1, code2, code3, image, code_data1, code_data2, code_data3 }){
    const codeLink = '<pre><code><span class="token"><span class="tag">&lt;</span><span class="tag">a</span> <span class="attr">href</span>=<span class="val">"#site"</span><span class="tag">></span>사이트 보기<span class="tag">&lt;/</span><span class="tag">a</span><span class="tag">></span></span></code></pre>';
    return(
        <li className="port">
            <div className="port-cont">
                <div className="port-text-wrap">
                    <span>{sub_title1}</span>
                    <span>{sub_title2}</span>
                    <h2>{title}</h2>
                </div>
                <div className="port-code-wrap">
                    <div></div>
                    <ul>
                        <li data-index-number="1"><i className="fa fa-cog" aria-hidden="true"></i><span>{code1}<i className="fa fa-angle-right" aria-hidden="true"></i></span></li>
                        <li data-index-number="2"><i className="fa fa-cog" aria-hidden="true"></i><span>{code2}<i className="fa fa-angle-right" aria-hidden="true"></i></span></li>
                        <li data-index-number="3"><i className="fa fa-cog" aria-hidden="true"></i><span>{code3}<i className="fa fa-angle-right" aria-hidden="true"></i></span></li>
                    </ul>
                    <span className="port-code-link" data-index-number="4" dangerouslySetInnerHTML={ {__html: codeLink} }></span>
                </div>
            </div>
            <div className="port-img-wrap">
            <figure className="show">
                <Link to="#"><img src={image} alt={title} /></Link>
                <ul className="code-tab">
                    <li dangerouslySetInnerHTML={ {__html: code_data1} }></li>
                    <li dangerouslySetInnerHTML={ {__html: code_data2} }></li>
                    <li dangerouslySetInnerHTML={ {__html: code_data3} }></li>
                </ul>
            </figure>
            </div>
        </li>
    );
}

export default Port;