import React from "react"

export default function Main(props){
    return(
        <div className="mainContent">
            <h2 className="memeTopText">{props.toptext}</h2>
            <h2 className="memeBottomText">{props.bottomtext}</h2>
        </div>
    )
}