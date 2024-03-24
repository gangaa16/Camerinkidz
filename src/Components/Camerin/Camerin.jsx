import React, { useRef } from 'react'
import "./Camerin.css"
import next_icon from '../../images/next-icon.png'
import back_icon from '../../images/back-icon.png'
import learn from '../../images/online.jpg'
import teach from '../../images/teaching.jpg'



function Camerin() {

    const slider = useRef();
    let tx =0;

    const slideForward = ()=>{
        if(tx >-50){
            tx -= 50;
            slider.current.style.transform =`translateX(${tx}%)`
        }

    }

    const slideBackward=()=>{
        if(tx < 0){
            tx += 50;
            slider.current.style.transform =`translateX(${tx}%)`
        }

    }





  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={learn} alt="" />
                            <p>We believe in making coding fun and accessible for young learners. Through interactive activities, engaging games, and step-by-step tutorials, kids can embark on a journey to discover the exciting world of programming. Our approach focuses on breaking down complex concepts into bite-sized chunks, allowing children to grasp fundamental principles easily.With hands-on projects and creative challenges, kids can apply what they learn in real-world scenarios, fostering problem-solving skills and creativity. Whether they're creating their own games, building websites, or exploring robotics, our platform empowers kids to learn at their own pace and unlock their full potential in the world of technology. Join us on this adventure where every line of code is a step closer to achieving their dreams </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={teach} alt="" />
                            <p>At Camerinkidz ,we're proud to offer highly skilled professionals as teachers who provide personalized one-to-one instruction. These instructors are not just experts in coding but also passionate about nurturing young minds. With individualized attention, they guide each child through their coding journey, tailoring lessons to suit their unique learning styles and pace. Our dedicated teachers are committed to helping kids achieve their full potential, ensuring that every child receives the support they need to succeed in their coding endeavors. </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    
      
    </div>
  )
}

export default Camerin
