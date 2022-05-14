import './App.css';
import styled from 'styled-components';
import ChatButton from './components/ChatButton';

function App() {
  return (
    <Container>
      <ChatButton />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(50,59,66);
  background: linear-gradient(235deg, rgba(50,59,66,1) 0%, rgba(18,19,23,1) 100%);
  position: relative;
`;