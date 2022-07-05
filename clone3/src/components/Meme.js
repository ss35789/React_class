import React from 'react'

export default function Meme(){
    return(
        <main>
            <form className='form'>
                <input 
                    type ='text' 
                    className='form--input'
                    placeholder='Top text'
                    ></input>
                <input 
                    type ='text' 
                    className='form--input'
                    placeholder='Bottom text'
                    ></input>
                <button className='form--btn'>Get a new meme image</button>
            </form>
            
        </main>
    )
}