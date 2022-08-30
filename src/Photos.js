import React from "react";
import "./Photo.css"

export default function Photos(props) {
    if (props.data) {
        if (props.data.length > 0) {
            return (
                <section>
                    <h3>Photos</h3>
                    <div className="Photo row">
                    {props.data.map(function(photo, index) {
                        return (
                            <div className="col-sm-4" key={index}>
                                <a href={photo.src.original} target="_blank" rel="noreferrer">
                                    <img src={photo.src.landscape} alt='search term' className="img-fluid" />
                                </a>
                            </div>
                        )
                    })}
                    </div>
                </section>
            )
        } else {
            return null;
        }
    } else {
        return null;
    }

}