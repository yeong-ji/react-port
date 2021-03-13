import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import Title from '../basics/Title';
import Port from '../basics/Port';
import axios from 'axios';
import Loader from '../Loader';


class Portfolio extends React.Component {

    state = {
        isLoading: true,
        ports : []
    };

    appear = () => {
        //등장애니메이션 작업하기!!
        console.log("등장")
        const codeContents = document.querySelectorAll(".code-tab");
        const tabMenu = document.querySelectorAll(".port-code-wrap");
        
        tabMenu.forEach((el, index)=>{
            el.children[1].addEventListener('click',(e)=>{
                //e.preventDefault();
                let btnTarget = e.target.parentNode;
                let idx = btnTarget.dataset.indexNumber;
                for(let i=0; i<el.children.length; i++){
                    el.children[i].classList.remove("active");
                    codeContents[index].children[i].classList.remove("show");
                    codeContents[index].previousElementSibling.classList.remove("show");
                }
                btnTarget.classList.add("active");
                codeContents[index].children[idx-1].classList.add("show");
            })
            el.children[2].addEventListener('click',(e)=>{
                for(let i=0; i<el.children.length; i++){
                    codeContents[index].children[i].classList.remove("show");
                    codeContents[index].previousElementSibling.classList.add("show");
                }
            })
        })
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

    getPorts = async () => {
        const ports = await axios.get('https://yeong-ji.github.io/port_animation/data/ports.json');
        console.log(ports.data.data.ports);
        this.setState({ports: ports.data.data.ports, isLoading:false});
    } 

    componentDidMount(){
        //2초뒤에 실행  가상으로 로딩이 돌아가는것을 보여주려고 setTimeout을 써줌
        setTimeout(() => {
           //this.setState({ isLoading: false });
           //4초뒤에 getPorts가 실행 
            this.getPorts();
            this.loadingAni(()=>{
                this.loadSecond();
            });
        }, 2000);
    }

    render(){
        const { isLoading, ports } = this.state;
        return (
            <React.Fragment>
                { isLoading ? (
                    <Loader />
                ) : (
                <div>
                <Header color="black" />
                <Layout>
                    <Title text={['portfolio', 'let\'s discover our best projects ever', 'let\'s discover', 'our best', 'projects ever']} color="black" />
                    <section id="section2" className="black">
                        <div className="sec2">
                            <div className="content-box">
                                <ul>
                                    {ports.map((port) => (
                                        <Port
                                            key={port.id}
                                            id={port.id}
                                            sub_title1={port.sub_title1}
                                            sub_title2={port.sub_title2}
                                            title={port.title}
                                            code1={port.code1}
                                            code2={port.code2}
                                            code3={port.code3}
                                            image={port.image}
                                            code_data1={port.code_data1}
                                            code_data2={port.code_data2}
                                            code_data3={port.code_data3}
                                        />
                                    ))}
                                </ul>
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

    componentWillUnmount(){
        const codeContents = document.querySelectorAll(".code-tab");
        const tabMenu = document.querySelectorAll(".port-code-wrap");

        tabMenu.forEach((el, index)=>{
            el.children[1].removeEventListener('click',(e)=>{
                //e.preventDefault();
                let btnTarget = e.target.parentNode;
                let idx = btnTarget.dataset.indexNumber;
                for(let i=0; i<el.children.length; i++){
                    el.children[i].classList.remove("active");
                    codeContents[index].children[i].classList.remove("show");
                    codeContents[index].previousElementSibling.classList.remove("show");
                }
                btnTarget.classList.add("active");
                codeContents[index].children[idx-1].classList.add("show");
            })
            el.children[2].removeEventListener('click',(e)=>{
                for(let i=0; i<el.children.length; i++){
                    codeContents[index].children[i].classList.remove("show");
                    codeContents[index].previousElementSibling.classList.add("show");
                }
            })
        })
    }
}

export default Portfolio;