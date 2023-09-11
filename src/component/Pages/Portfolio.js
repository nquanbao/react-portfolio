import React from "react";
import avatar from "../../assets/images/avatar.png";

const styles = {
    div: {
        marginLeft: '100px',
        marginRight: '300px'
    },
    h2: {
        fontSize: '30px',
        paddingTop: '20px'
    },
    img: {
        margin: '20px',
        width: '400px',
        hight: '400px'
    }
}

function Portfolio () {
    return (
        <div style={styles.div}>
            <h2 style={styles.h2}>Portfolio</h2>
            <div class="d-flex align-content-start flex-wrap">
                <img src={avatar} class="rounded mx-auto d-block" alt="..." style={styles.img}/>
                <img src={avatar} class="rounded mx-auto d-block" alt="..." style={styles.img}/>
                <img src={avatar} class="rounded mx-auto d-block" alt="..." style={styles.img}/>
                <img src={avatar} class="rounded mx-auto d-block" alt="..." style={styles.img}/>
                <img src={avatar} class="rounded mx-auto d-block" alt="..." style={styles.img}/>
                <img src={avatar} class="rounded mx-auto d-block" alt="..." style={styles.img}/>
            </div>
        </div>
    )
}

export default Portfolio;