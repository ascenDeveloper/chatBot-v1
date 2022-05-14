import React from 'react'
import styled from 'styled-components';

function Chat() {
    return (
        <Container>
            <div className='chat-expandido'></div>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    width: 20vw;
    height: 30vh;
    background-color: white;
`