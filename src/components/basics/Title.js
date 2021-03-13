import React from 'react';

function Title({text, color }){
    return (
        <section id="section1" className={ color }>
            <div className="sec1 content-box">
                <span>{text[0]}</span>
                <h1 className="sr-only">{text[1]}</h1>
                <div className="text-box">
                    <p aria-hidden="true"><span className="tit">{text[2]}</span></p>
                    <p aria-hidden="true"><span className="tit">{text[3]}</span></p>
                    <p aria-hidden="true"><span className="tit"><span className="line">{text[4]}</span></span></p>
                    <p aria-hidden="true"><span className="tit">{text[5]}</span></p>
                </div>
            </div>
        </section>
    )
}

export default Title;