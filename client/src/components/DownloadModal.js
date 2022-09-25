import "./DownloadModal.css"
import React from 'react';
import { useState } from "react";

const DownloadModal = ({ item, visible, setVisible, timer }) => {
    const [ counter, setCounter ] = useState(40)
    let rootClass = ["downloadModal"]

    if (visible) {rootClass.push("active");}
    if (timer) {counter > 0 && setTimeout(() => {setCounter(counter - 1) }, 1000)}

    return (
    <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
        <button onClick={() => { setVisible(false) }} className="circleBtnClose"></button>
        <div className="downloadModalContetnt">
            <p>Your download will start shortly</p>
            <p>please wait about <span>{counter}</span> seconds</p>
            <p>or get your direct<a href={`https://theprojections.art/uploads/${item.download_link}`}> download link</a></p>
        </div>
    </div>
    );
};

export default DownloadModal;