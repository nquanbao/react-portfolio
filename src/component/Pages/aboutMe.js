import React from 'react';
import avatar from '../../assets/images/avatar.png';

const styles = {
  d1:{
    marginLeft: '100px',
    marginRight: '100px'
  },
  h1: {
    paddingTop: '30px',
    fontSize: '30px'
  },
  img: {
    borderRadius: '50%',
    width: '100px',
    hight: '100px',
    marginLeft: '15px'
  },
  p: {
    marginTop: '25px',
    width: '70%',
    marginLeft: '70px'
  }
}

export default function About() {
  return (
    <div style={styles.d1}>
      <h1 style={styles.h1}>About Me</h1>
      <img src={avatar} alt='Avatar' style={styles.img}/>
      <p style={styles.p}>
        &nbsp; &nbsp; &nbsp;&nbsp;Hi, I am Bao Nguyen and I work as a web developer. 
        I am a software engineer who loves to create websites as well as apps for people. 
        I think that people should look at the bigger picture when they are building something.
         I love to work in groups where everyone can voice their opinions and ideas.
      </p>
    </div>
  );
}