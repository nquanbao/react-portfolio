import React from "react";
import avatar from '../../assets/images/avatar.png'
const styles = {
    div: {
        marginLeft: '100px',
    },
    h2: {
        marginTop: '30px',
        fontSize: '30px'
    },
    ol: {
        width: '600px',
        backgroundColor: 'green',
        marginTop: '5px'
    },
    li: {
        borderStyle: 'none',
        backgroundColor: 'green'
    },
    ul: {
        borderStyle: 'none'
    }
}
function Resume () {
    return (
        <div style={styles.div}>
            <h2 style={styles.h2}>Resume</h2>
            <a href={avatar} download>Download!!!</a>
            <ol class="list-group list-group-numbered" style={styles.ol}>
                <li class="list-group-item d-flex justify-content-between align-items-start" style={styles.li}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                        <ul class="list-group">
                            <li >An item</li>
                            <li >A second item</li>
                            <li >A third item</li>
                            <li >A fourth item</li>
                            <li >And a fifth one</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start" style={styles.li}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                        <ul class="list-group">
                                <li >An item</li>
                                <li >A second item</li>
                                <li >A third item</li>
                                <li >A fourth item</li>
                                <li >And a fifth one</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start" style={styles.li}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                        <ul class="list-group">
                            <li >An item</li>
                            <li >A second item</li>
                            <li >A third item</li>
                            <li >A fourth item</li>
                            <li >And a fifth one</li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Resume;