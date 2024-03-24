import React from 'react'
import './program.css'
import program_1 from '../../images/c.jpg'
import program_2 from '../../images/pythonn.jpg'
import program_3 from '../../images/js.jpg'
import program_4 from '../../images/javaa.jpg'
import program_6 from '../../images/react.jpg'
import program_5 from '../../images/html.jpg'
import program_7 from '../../images/css.jpg'
import program_8 from '../../images/C++.jpg'

const programs = () => {
  return (


    <div className='programs'>

      <div className="program" id=''>
        <img src={program_2} alt="" />
        <p>Python is an exciting and beginner-friendly programming language that opens doors to endless possibilities in the world of coding</p>

        <p> In this course, kids will embark on a journey to learn the fundamentals of Python programming in a fun and interactive way. </p>
      </div>

      <div className="program">
        <img src={program_1} alt="" />
        <p>Get ready to explore the basics of coding, from understanding variables and loops to creating fun projects that showcase your newfound skills. With C, you'll unlock the ability to bring your ideas to life through the power of programming.</p>

      </div>

      <div className="program">
      <h3>Learn Python</h3>
        <img src={program_3} alt="" />
        
        <p>Welcome to the fascinating world of JavaScript, young programmers!</p>
        <p>JavaScript is like the magic wand of the internet, allowing us to bring websites and games to life with just a few lines of code. It's the language of interactivity, enabling us to create animations, quizzes, and so much more!</p>
      </div>

      <div className="program">
        <img src={program_4} alt="" />
        <p>No prior programming experience is needed – just bring your curiosity and eagerness to learn! Get ready to dive into the fascinating world of Java and unlock your potential as a young programmer. Let's start coding and have some fun!</p>
      </div>

      <div className="program">
        <img src={program_5} alt="" />
        <p>Hey there, future web wizard! Welcome to the wonderful world of HTML, the language that makes the web come alive!

          HTML, which stands for HyperText Markup Language, is like the building blocks of the internet. Just like how you use Lego blocks to create amazing structures, with HTML, you can build awesome web pages!</p>
      </div>

      <div className="program">
        <img src={program_6} alt="" />
        <p>Imagine you have a big box of colorful LEGO bricks. React is like a super cool guide that helps you build amazing things with those bricks on your computer! It's a special tool that makes creating websites feel like playing with LEGO. With React, you can make fun games, awesome animations, and even helpful apps. It's like having a magic wand that turns your ideas into real digital adventures! So, get ready to dive into the world of React and let your creativity soar!</p>
      </div>

      <div className="program">
        <img src={program_7} alt="" />
        <p>CSS is like magic paint for websites! Just like how you pick colors and decorations to make your room cozy and cool, CSS helps make websites look awesome. Imagine your website is a coloring book, and CSS is the crayons you use to make it colorful and fun!</p>

        <p>With CSS, you can change the colors of your text and backgrounds, make things bigger or smaller, add cool fonts, and even make things move around! It's like being a wizard who can make web pages look exactly how you want them to. So, get ready to unleash your creativity and make your website stand out with CSS magic!</p>
      </div>

      <div className="program">
        <img src={program_8} alt="" />
        <p>C++ is like a magic language that helps computers understand what we want them to do. Just like how we use words to talk to each other, we use C++ to talk to computers. It's a special language that lets us give instructions to computers to do cool things, like make games, draw pictures, or solve puzzles. C++ is like a toolbox full of different tools that we can use to build amazing things on our computers. So, when you learn C++, you're learning how to speak computer and make your ideas come to life on the screen!</p>
      </div>


    </div>
  )
}

export default programs;
