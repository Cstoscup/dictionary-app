import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
    if (props.phonetic.text && props.phonetic.audio) {
        return (
            <div className="Phonetic">
                <div>{props.phonetic.text}</div>
                <ReactAudioPlayer
                    src={props.phonetic.audio}
                    controls
                />
            </div>
        )
    } else {
        return null;
    }
    
}