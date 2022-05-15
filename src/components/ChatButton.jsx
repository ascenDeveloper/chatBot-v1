import React, { useState } from 'react'
import styled from 'styled-components';
import Chat from './Chat';

function ChatButton() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    // const closeChat = () => setClick(false);

    return (
        <Container>
            <div className="chatbot"  >
                <div className='chatMostrar' >
                    {
                        click ? <Chat /> : undefined
                    }
                </div>
                <div className='chat'>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick} />
                </div>
            </div>

        </Container >
    )
}

export default ChatButton

const Container = styled.div`
    position: absolute;
    bottom:0;
    right: 0;
    margin: 30px;
    display:flex;
    align-items: flex-end;
    flex-direction: column;
    .chatbot {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin: 15px;
        .chatMostrar {
        display: block;
        width: 20vw;
        height: 30vh;
        }
        .chat {
            color: white;
            width: 1vw;
            height: 1vh;
            padding: 1em;
        }
    }



`