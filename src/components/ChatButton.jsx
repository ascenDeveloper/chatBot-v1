import React, { useState } from 'react'
import styled from 'styled-components';

function ChatButton() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeChat = () => setClick(false);

    return (
        <Container>
            <button>Chatbot</button>
            <i className={click ? 'fas fa-bars' : 'chat'} />
        </Container>
    )
}

export default ChatButton

const Container = styled.div`
    
`