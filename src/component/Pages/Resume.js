import React from "react";
import avatar from '../../assets/images/avatar.png'
const styles = {
    div: {
        marginLeft: '100px',
    },
    h2: {
        fontSize: '30px',
        paddingTop: '20px'
    },
    ol: {
        width: '600px',
        marginTop: '20px',
        marginLeft: '100px'
    },
    li: {
        borderStyle: 'none',
        backgroundColor: '#cdd4c4'
    }
}
function Resume () {
    return (
        <div style={styles.div}>
            <h2 style={styles.h2}>Resume</h2>
            <a href={avatar} download>Download my resume here!!!</a>
            <ol class="list-group list-group-numbered" style={styles.ol}>
                <li class="list-group-item d-flex justify-content-between align-items-start" style={styles.li}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Front-end Proficiencies</div>
                        <ul class="list-group">
                            <li >HTML</li>
                            <li >CSS</li>
                            <li >JavaScript</li>
                            <li >JQuery</li>
                            <li >Responsive design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start" style={styles.li}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Back-end Proficiencies</div>
                        <ul class="list-group">
                                <li >APIs</li>
                                <li >Node</li>
                                <li >Express</li>
                                <li >MySQL, Sequelize</li>
                                <li >MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Resume;