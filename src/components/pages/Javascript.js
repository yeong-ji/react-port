import React from 'react';
import Title from '../basics/Title';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import axios from 'axios';
import Script from '../basics/Script';
import Loader from '../Loader';

class Javascript extends React.Component {
    state = {
        isLoading: true,
        scripts : []
    };

    appear = () => {
        //등장애니메이션 작업하기!!
        console.log("등장")
    }

    loadSecond = () => {
        //화면 등장 애니메이션 이후 메뉴클릭이벤트 활성화!!
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            this.appear();
            document.querySelector('#header .menu .hamburger').addEventListener('click', function(){
                document.querySelector('#header .menu').classList.add('close');
                document.querySelector('#header .menu .nav').classList.add('active');
                document.querySelector('#header .menu .nav').classList.remove('not_active');
            });

            document.querySelector('#header .menu .hamburger-close').addEventListener('click', function(){
                setTimeout(()=>{
                    document.querySelector('#header .menu').classList.remove('close');
                },3600)
                document.querySelector('#header .menu .nav').classList.remove('active');
                document.querySelector('#header .menu .nav').classList.add('not_active');
            });
        },2000)
    }

    loadingAni = (callback) => {
        setTimeout(() => {
            document.getElementById("loading").classList.add("start");
            callback();
         }, 1000);
    }

    getScripts = async () => {
        const scripts = await axios.get('https://yeong-ji.github.io/port_animation/data/javascript.json');
        this.setState({scripts: scripts.data.data.scripts, isLoading:false});
    }

    componentDidMount(){
        setTimeout(() => {
            //Javascript 컴퍼넌트의 getScripts 실행
            this.getScripts();
            this.loadingAni(()=>{
                this.loadSecond();
            });
        }, 2000)
    }

    render(){
        //객체분해 할당
        const { isLoading, scripts } = this.state;
        return(
            <React.Fragment>
                { isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Header />
                        <Layout>
                            <Title text={['work', 'javascript', 'it takes 7 seconds', 'to make an', 'impression', 'me do it in 5']} />
                            <section id="section2" className="work">
                                <div className="sec2 content-box">
                                <figure>
                                        <div className="workImg1"><img src="https://yeong-ji.github.io/port_animation/images/react-js1.jpg" alt="자바스크립트 목업" /></div>
                                        <img src="https://yeong-ji.github.io/port_animation/images/react-js2.jpg" alt="자바스크립트 목업" />
                                </figure>
                                <div>
                                        <div className="script-text-wrap">
                                            <h2>자바스크립트</h2>
                                            <p>자바스크립트 강의를 시청하며 따라서 제작해보았습니다.
                                                에크마스크립트6 문법과 자바스크립트 활용 방법을 공부했습니다.
                                            </p>
                                        </div>
                                        <div className="rolling-wrap">
                                            <div>
                                                <span>github</span>
                                                <span>코드보기</span>
                                                <span>github</span>
                                                <span>코드보기</span>
                                                <span>github</span>
                                                <span>코드보기</span>
                                            </div>
                                            <div>
                                                <span>github</span>
                                                <span>코드보기</span>
                                                <span>github</span>
                                                <span>코드보기</span>
                                                <span>github</span>
                                                <span>코드보기</span>
                                            </div>
                                        </div>
                                        <div className="scroll-down">
                                            <div>
                                                <span>scroll</span>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </section>
                            {/* //section2  */}
                            <section id="section3" className="work">
                                <div className="sec3 content-box">
                                    <ul>
                                        {scripts.map((script) => (
                                            <Script 
                                                key={script.id}
                                                id={script.id}
                                                sub_title={script.sub_title}
                                                title={script.title}
                                                year={script.year}
                                                frame={script.frame}
                                                text1={script.text1}
                                                text2={script.text2}
                                                text3={script.text3}
                                                link={script.link}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </Layout>
                        <Footer />
                    </div>
                )}
            </React.Fragment>
        );
    }

    componentWillUnmount(){
        
    }
}

export default Javascript;