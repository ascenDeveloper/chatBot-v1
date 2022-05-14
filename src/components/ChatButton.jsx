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
                <div className='chatMostrar' onClick={handleClick} >
                    {
                        click ? <Chat /> : undefined
                    }
                </div>
                <div className='chat'>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>

        </Container >
    )
}

export default ChatButton

const Container = styled.div`
    position: absolute;
    bottom:0;
    right:0;
    width: 10%;
    height: 10%;
    .chatbot {
        color: white;
        width: 1vw;
        height: 1vh;
        padding: 1em;
        display:flex;
        flex-direction: column;
        .chatMostrar {
        display: block;
        width: 20vw;
        height: 30vh;
        }
        .chatOculto {
            width: 0px;
            height: 0px;
        }
    }



`