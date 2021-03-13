import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render(){
        return (
            <React.Fragment>
                 <div id="skip">
                     <Link to="#">바로가기 스킵메뉴</Link>
                 </div>
                 {/* skip */}
                 <div id="loading">
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                 </div>
                 {/* 로딩애니 */}
                 <header>
                     <div id="header" className={this.props.color}>
                         <div className="logo">
                             <Link to="/"><span>Yeong's</span></Link>
                         </div>
                         <nav className="menu">
                             <div className="nav">
                                 <div className="nav-background">
                                     <div className="nav-bg nav-bg1"></div>
                                     <div className="nav-bg nav-bg2"></div>
                                     <div className="nav-bg nav-bg3"></div>
                                     <div className="nav-bg nav-bg4"></div>
                                 </div>
                                 <h2 className="sr-only">메인 메뉴</h2>
                                 <ul>
                                     <li><Link to="/"><span>home</span></Link></li>
                                     <li><Link to="/About"><span>about</span></Link></li>
                                     <li><Link to="/Portfolio"><span>portfolio</span></Link></li>
                                     <li><Link to="/Contact"><span>contact</span></Link></li>
                                     <li><Link to="/Animation"><span>animation</span></Link></li>
                                     <li><Link to="/Javascript"><span>javascript</span></Link></li>
                                     {/* <li><a href="javascript:navLink1()">home</a></li>
                                     <li><a href="javascript:navLink2()">about</a></li>
                                     <li><a href="javascript:navLink3()">portfolio</a></li>
                                     <li><a href="javascript:navLink6()">contact</a></li>
                                     <li><a href="javascript:navLink4()">animation</a></li>
                                     <li><a href="javascript:navLink5()">javascript</a></li> */}
                                 </ul>
                             </div>
                             {/* 햄버거 버튼 */}
                             <div className="menu-line">
                                 <div className="hamburger">
                                     <span className="line"></span>
                                     <span className="line"></span>
                                     <span className="line"></span>
                                 </div>
                                 <div className="hamburger-close">
                                 </div>
                             </div>
                         </nav>
                     </div> 
                 </header>
                 {/* header */}
            </React.Fragment>
                
             );
    }
}

export default Header;

