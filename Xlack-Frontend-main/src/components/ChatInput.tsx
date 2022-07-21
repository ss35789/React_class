import React, { useRef, useState } from "react";
import styled from "styled-components";
// import {Button} from "material-ui/core";
// import {auth,db} from "../firebase";
// import firebase from 'firebase';
//import {useAuthState} from "react-firebase-hooks/auth";
export interface ChatInfo{
    channelName:string;
    channelId:number;
    chatRef:any;
}

function ChatInput({channelName, channelId, chatRef}:ChatInfo ){
    const [input,setInput] = useState('');
    // const [user] = useAuthState(auth);


    // const sendMessage=(e)=>{
    //     e.preventDefault();
    //     //console.log(channelId);메세지 출력이 안돼서 찍어봄 2:23:10 원인: 13줄 channelId=>!channelId}
    //     if(!channelId){
    //         return false;
    //     }
        
    //     // db.collection('rooms').doc(channelId).collection('messages').add({
    //     //     message: input,
    //     //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     //     user: user.displayName, 
    //     //     userImage: user.photoURL
    //     // });
    //     //새로운 채팅입력시 맨 밑으로 이동
    //     chatRef.current.scrollIntoView({
    //         behavior:"smooth",
    //     });

    //     setInput('');
    // };

    return (
    <ChatInputContainer>
        <form>
            <input ref={input}
            onChange={e=>setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
            />
            {/* <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button> */}
        </form>
    </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form{
        position: relative;
        display:flex;
        justify-content: center;
    }
    > form > input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button{
        display: none !important;
    }
`;