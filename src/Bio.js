import React from 'react';
import './Bio.css';

function Bio () {
  return (
    <div className="flex ma1 justify-around pa3">
      <img className ="shadow-5 ma3" alt='profileimage' src="./assets/images/Bene.jpeg" width="350" height="350"/>
       {/* eslint-disable-next-line */}
      <p className="bio f5 lh-copy" style={{display:"flex", margin:"auto", fontSize:"larger", width:"930px"}}>

      I am an ordinary woman with an extraordinary passion for people. Always eager to learn and intrigued by finding the best solution to problems.
Since I moved to London, 4 years ago, I have been working as a recruiter. I built my career from scratch, starting from zero experience and a basic level of English. I am so proud of it that I wanted to do it again 💪
Why tech? In any other job, sooner or later, you'll stop learning. In tech, you are always able to keep on growing as much as you wish.
From what I have experienced so far, when I am coding I always feel outside my comfort zone. The more I learn, the more I feel like I need to learn more. Finding a solution to a problem pushes me to look for new and more challenging ones to solve. This a really exciting feeling.
I was able to get into Makers, one of the best software development bootcamps in Europe, accepting only 10% of applicants. I learnt so much during the last 4-5 months. I am now ready (and excited) to start my career as a software developer. The idea of working with a super team providing tech solution to real-life challenges thrills me 💗 
Along with my recently built tech skills, I bring with me a solid set of soft skills that I built during my past working experience and studies that are really valuable when it comes to work with other people and I am looking forward to making use of all of them. Stronger together is my motto! 🙌

      </p>
    </div>
  )
}

export default Bio