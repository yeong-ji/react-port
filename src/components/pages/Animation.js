import React from 'react';
import Title from '../basics/Title';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import axios from 'axios';
import Ani from '../basics/Ani';
import Loader from '../Loader';

class Animation extends React.Component {
    state = {
        isLoading: true,
        anis : []
    };

    appear = () => {
        //등장애니메이션 작업하기!!
        console.log("등장")
    
    //애니메이션 컨텐츠 클릭
    // variables
    let accordionBtn = document.querySelectorAll('.ani-tit');
    let allTexts = document.querySelectorAll('.ani-cont');
    let accIcon = document.querySelectorAll('.ani-btn');

    // event listener
    accordionBtn.forEach((el) => {
        el.addEventListener('click', toggleAccordion)
    });

    // function   화살표 함수가 왜 안되는지....
    function toggleAccordion(el) {
    let targetText = el.currentTarget.nextElementSibling.classList;
    let targetAccIcon = el.currentTarget.children[2];
    let target = el.currentTarget;
    
        if (targetText.contains('show')) {
            targetText.remove('show');
            targetAccIcon.classList.remove('anime');
            target.classList.remove('accordionTitleActive');
        } 
        else {
            accordionBtn.forEach(function (el) {
                el.classList.remove('accordionTitleActive');
                
                allTexts.forEach(function (el) {
                    el.classList.remove('show');
                })
                
                accIcon.forEach(function (el) {
                el.classList.remove('anime');
                }) 
                
            })
            
                targetText.add('show');
                target.classList.add('accordionTitleActive');
                targetAccIcon.classList.add('anime');
        }  
    }
        
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

    getAnis = async () => {
        const anis = await axios.get('https://yeong-ji.github.io/port_animation/data/animation.json');
        this.setState({anis: anis.data.data.anis, isLoading:false});
    }

    componentDidMount(){
        setTimeout(() => {
            //Animation 컴퍼넌트의 getAnis 실행
            this.getAnis();
            this.loadingAni(()=>{
                this.loadSecond();
            });
        }, 2000)
    }

    render(){
        //객체분해 할당
        const { isLoading, anis } = this.state;
        return(
            <React.Fragment>
                { isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Header />
                        <Layout>
                            <Title text={['work', 'animation', 'it takes 7 seconds', 'to make an', 'impression', 'me do it in 5']} />
                            <section id="section2" className="work">
                                <div className="sec2 content-box">
                                <figure>
                                        <div className="workImg1"><img src="https://yeong-ji.github.io/port_animation/images/react-ai1.jpg" alt="애니메이션 목업" /></div>
                                    <img src="https://yeong-ji.github.io/port_animation/images/react-ai2.jpg" alt="애니메이션 목업" />
                                </figure>
                                <div>
                                        <div className="ani-text-wrap">
                                            <h2>애니메이션</h2>
                                            <p>순수CSS만 이용하여 애니메이션 제작, 피그마로 간단한 벡터이미지를
                                            만들어서 svg로 변환하여 애니메이션 제작 등을 연습하였습니다.
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
                                        {anis.map((ani) => (
                                            <Ani 
                                                key={ani.id}
                                                id={ani.id}
                                                sub_title={ani.sub_title}
                                                title={ani.title}
                                                frame={ani.frame}
                                                text1={ani.text1}
                                                text2={ani.text2}
                                                text3={ani.text3}
                                                link={ani.link}
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
    
      //애니메이션 컨텐츠 클릭
    // variables
    let accordionBtn = document.querySelectorAll('.ani-tit');
    let allTexts = document.querySelectorAll('.ani-cont');
    let accIcon = document.querySelectorAll('.ani-btn');

    // event listener
    accordionBtn.forEach((el) => {
        el.removeEventListener('click', toggleAccordion)
    });

    // function   화살표 함수가 왜 안되는지....
    function toggleAccordion(el) {
    let targetText = el.currentTarget.nextElementSibling.classList;
    let targetAccIcon = el.currentTarget.children[2];
    let target = el.currentTarget;
    
        if (targetText.contains('show')) {
            targetText.remove('show');
            targetAccIcon.classList.remove('anime');
            target.classList.remove('accordionTitleActive');
        } 
        else {
            accordionBtn.forEach(function (el) {
                el.classList.remove('accordionTitleActive');
                
                allTexts.forEach(function (el) {
                    el.classList.remove('show');
                })
                
                accIcon.forEach(function (el) {
                el.classList.remove('anime');
                }) 
                
            })
            
                targetText.add('show');
                target.classList.add('accordionTitleActive');
                targetAccIcon.classList.add('anime');
        }  
    }
        
    }
}

export default Animation;