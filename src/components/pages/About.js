import React from 'react';
import Title from '../basics/Title';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import AboutAdv from '../basics/AboutAdv';
import axios from 'axios';
import Loader from '../Loader';

class About extends React.Component {
    state = {
        isLoading: true,
        abouts : []
    };

    //스크롤 이벤트 함수
    scrollEve = () => {
        
        let scrollTop = window.pageYOffset;
            //3번째 섹션에 왔을 때 스크롤탑을 0으로 초기화
        let offset = scrollTop -  document.querySelector("#section3").offsetTop;

        if( scrollTop > document.querySelector("#section3").offsetTop && offset < window.innerWidth*0.51 ){
            document.querySelector(".sec3-wrap>div:nth-child(2)").style.left = -offset+"px";
        } else if( scrollTop < document.querySelector("#section3").offsetTop ) {
            document.querySelector(".sec3-wrap>div:nth-child(2)").style.left= 0;
        }
        
        if( scrollTop > document.querySelector("footer").offsetTop - window.innerHeight*1.05 ){
            document.querySelector(".sec3-wrap>div:nth-child(2)").style.left = -50+"vw";
        }
    
    }
    appear = () => {
        //등장애니메이션 작업하기!!
        console.log("등장")
        window.addEventListener("scroll", this.scrollEve);
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

    getAbouts = async () => {
        const abouts = await axios.get('https://yeong-ji.github.io/port_animation/data/about.json');
        //console.log(abouts.data.data.abouts);
        this.setState({abouts: abouts.data.data.abouts, isLoading:false});
    } 

    componentDidMount(){
        //2초뒤에 실행  가상으로 로딩이 돌아가는것을 보여주려고 setTimeout을 써줌
        setTimeout(() => {
           //this.setState({ isLoading: false });
           //4초뒤에 getPorts가 실행 
           this.getAbouts();
           this.loadingAni(()=>{
               this.loadSecond();
           });
        }, 2000);
    }


    render(){
        const { isLoading, abouts } = this.state;
        return(
            <React.Fragment>
                { isLoading ? (
                    <Loader />
                ) : (
                <div>
                <Header />
                <Layout>
                    <Title text={['about', 'hello I am yeong ji a try to be creative web developer', 'hello', 'I am yeong ji', 'a try to be creative', 'web developer']} />
                    {/* //section1 */}
                <section id="section2" className="about">
                    <div className="sec2">
                        <p>안녕하세요. 프론트 엔드 개발자를 목표로 준비하고 있으며, 배운것을 최대한 활용하려 노력했습니다.</p>
                        <figure>
                            <img src="https://yeong-ji.github.io/port_animation/images/me.jpg" alt="증명사진" />
                        </figure>
                        <p>클라이언트 입장에서 생각하고 계속해서 기술을 익히며 성장하는 개발자가 되겠습니다.</p>
                    </div>
                </section>
                    {/* //section2 */}
                    <section id="section3" className="about">
                        <div className="sec3">
                            <div className="sec3-wrap">
                                <div>
                                    <div className="content-box">
                                        <h2 className="sr-only">Introducing my Advantages</h2>
                                        <div className="text-box">
                                            <p aria-hidden="true">Introducing</p>
                                            <p aria-hidden="true">My <span className="line">Advantages</span></p>
                                        </div>
                                        <p>
                                            <span>안녕하세요.  김영지 입니다.</span>
                                                &zwj;
                                            <span>저는 웹 페이지의 동적 모션을 좋아하고,</span> 
                                            <span>다양한 인터랙션 + 새로운 기술에 관심이 많습니다.</span>
                                            ‍   &zwj;
                                            <span>처음 코딩을 배우며 느꼈던 재미와 신입의 열정적 자세로 즐겁게 일하겠습니다!</span>
                                            <span>신입이지만 사회 경험들을 바탕으로 직원들과 원활하게 소통하며 협업해 나가겠습니다!</span>
                                                &zwj;
                                            <span>지속적인 성장을 통해 견고한 UI를 개발하는 프론트 엔드개발자가 되는 것이 목표입니다.</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-box">
                                        <div className="adv-wrap">
                                                {abouts.map((about) => (
                                                    <AboutAdv
                                                        key={about.id}
                                                        id={about.id}
                                                        image={about.image}
                                                        title={about.title}
                                                        text={about.text}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
                <Footer />
                </div>
                )}
            </React.Fragment>
        );
    }

    //스크롤 이벤트 제거 
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollEve);
    }
}

export default About;