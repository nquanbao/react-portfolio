import React from 'react';
import avatar from '../../assets/images/avatar.png';

const styles = {
  d1:{
    marginLeft: '100px',
    marginRight: '100px'
  },
  h1: {
    marginTop: '30px',
    fontSize: '30px'
  },
  img: {
    borderRadius: '50%',
    width: '100px',
    hight: '100px'
  },
  p: {
    marginTop: '20px'
  }
}

export default function About() {
  return (
    <div style={styles.d1}>
      <h1 style={styles.h1}>About Me</h1>
      <img src={avatar} alt='Avatar' style={styles.img}/>
      <p style={styles.p}>
        &nbsp; &nbsp; &nbsp;&nbsp;Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}