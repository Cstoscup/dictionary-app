import React, {useState} from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
    if (props.phonetic.text && props.phonetic.audio) {
        return (
            <div className="Phonetic">
                <h4 className="text-center">{props.phonetic.text}</h4>
                <div className="audio text-center">
                    <ReactAudioPlayer
                    src={props.phonetic.audio}
                    controls
                    />
                </div>
            </div>
        )
    } else {
        return null;
    }
    
}