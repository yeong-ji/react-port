import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import Loader from '../Loader';

class Contact extends React.Component{
    state = {
        isLoading: true,
    };

    scrollEve = () => {
        let scrollTop = window.pageYOffset;
    
        if( scrollTop > document.querySelector("footer").offsetTop - window.innerHeight ){
            document.querySelector(".contact-left").style.position = "relative";
            document.querySelector(".contact-left").style.zIndex = 0;
        } else {
            document.querySelector(".contact-left").style.position = "fixed";
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
        },1000)
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({ isLoading: false });
            this.loadingAni(()=>{
                this.loadSecond();
            })

        },2000)
    }
    render(){
        const { isLoading } = this.state;
        return(
            <React.Fragment>
                {isLoading ? (
                    <Loader />
                ) : (
                   <div>
                       <Header color="black" />
                        <Layout>
                        <section id="contact">
                            <div className="contact">
                            <div className="contact-left">
                                <img src="https://yeong-ji.github.io/port_animation/images/contact1-1.jpg" alt="연락" />
                            </div>
                            <div className="contact-right">
                            {/* 연락form 한달200건 무료 */}
                                <h2>contact me</h2>
                                <form id="contact-form">
                                        <fieldset>
                                            <legend className="sr-only">연락 폼요소입니다.</legend>
                                            <input type="hidden" name="contact_number" />
                                            {/* <label for="name">name</label> */}
                                            <input type="text" name="to_name" id="name" required />
                                            {/* <label for="mail">email</label> */}
                                            <input type="text" name="from_name" id="mail" required />
                                            {/* <label for="message">Message</label> */}
                                            <textarea name="message" id="message" required></textarea>
                                            <div className="contact-btn">
                                            <button type="submit" id="send"><span>SEND</span></button>
                                            </div>
                                        </fieldset>
                                    </form>
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
        window.removeEventListener('scroll', this.scrollEve);
    }
}

export default Contact;