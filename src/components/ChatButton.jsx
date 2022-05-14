import React, { useState } from 'react'
import styled from 'styled-components';

function ChatButton() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    // const closeChat = () => setClick(false);

    return (
        <Container>
            <div className="chatbot" onClick={handleClick}>
                <i className={click ? 'chat' : 'fas fa-bars'} />
            </div>
            <div className="" onClick={handleClick}>

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
`