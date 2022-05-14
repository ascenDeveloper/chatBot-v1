import React, { useState } from 'react'
import styled from 'styled-components';
import Chat from './Chat';

function ChatButton() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    // const closeChat = () => setClick(false);

    return (
        <Container>
            <div className="chatbot" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className={click ? 'chatMostrar' : 'chatOculto'} onClick={handleClick}>
                <Chat />
            </div>
        </Container>
    )
}

export default ChatButton

const Container = styled.div`
    .chatbot {
        color: white;
        width: 1vw;
        height: 1vh;
        padding: 1em;
        background-color: #150910;
        .chat{
            display: none;
        }
    }
    .chatMostrar {
        display: block;
    }
    .chatOculto {
        display: none;
    }

`