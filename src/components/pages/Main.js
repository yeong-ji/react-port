import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Loader from '../Loader';

class Main extends React.Component {
    state = {
        isLoading: true,
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
    
    componentDidMount(){
        //2초뒤에 실행  가상으로 로딩이 돌아가는것을 보여주려고 setTimeout을 써줌
        setTimeout(() => {
           this.setState({ isLoading: false });
           //4초뒤에 getPorts가 실행 
           this.loadingAni(()=>{
                this.loadSecond();
           });
        }, 2000);
    }

    render(){
        const { isLoading } = this.state;
        return (
            <React.Fragment>
                { isLoading ? (
                    <Loader />
                ) : (
                <div>
                    <Header />
                    <Layout>
                        <section id="main">
                        <div className="main content-box">
                            <div className="main-text-wrap">
                                <p className="main-sub-title">
                                    <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span><span>E</span><span>n</span><span>d</span><span>&nbsp;</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
                                </p>
                                <h1 className="sr-only">I developed this website with React.js</h1>
                                <div className="main-title">
                                    <span>I developed this</span>
                                    <span>website with React.js</span>
                                </div>
                                <p className="main-sub-title2">
                                    <span>T</span><span>h</span><span>a</span><span>n</span><span>k</span><span>&nbsp;</span><span>y</span><span>o</span><span>u</span><span>&nbsp;</span><span>f</span><span>o</span><span>r</span><span>&nbsp;</span><span>v</span><span>i</span><span>s</span><span>i</span><span>t</span><span>i</span><span>n</span><span>g</span>
                                </p>
                            </div>
                            <div className="main-img">
                                <img src="https://yeong-ji.github.io/port_animation/images/main-img.png" alt="메인이미지" />
                            </div>
                        </div>
                        </section>
                        {/* //section1 */}
                    </Layout>
                </div>
                )}
            </React.Fragment>
        );
    }
}

export default Main;