import React from 'react'

export default function Meme(props){
    return(
        <main>
            <form className='form' onSubmit={event=>{
                event.preventDefault();
                const Toptext=event.target.Toptext.value
                const Bottomtext=event.target.Bottomtext.value
            
                props.makeIt(Toptext,Bottomtext);
            }}>
                <input 
                    type ='text' 
                    className='form--input'
                    placeholder='Top text'
                    name='Toptext'
                    
                    ></input>
                <input 
                    type ='text' 
                    className='form--input'
                    placeholder='Bottom text'
                    name='Bottomtext'
                    ></input>
                <input className='form--btn' type='submit' value='Update text'></input>
            </form>

            <div className="mainContent">
                <h2 className="memeTopText">{props.toptext}</h2>
                <h2 className="memeBottomText">{props.bottomtext}</h2>
                <img src='img/memeImg.jpg' className="memeImg"></img>
            </div>
            
        </main>
    )
}