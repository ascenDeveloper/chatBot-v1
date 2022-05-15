import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { IoMdSend,IoMdClose } from 'react-icons/io'
import {MdOutlineMinimize} from 'react-icons/md'

function ChatWindow() {
  const [input, setInput] = React.useState("");
  const [check, setCheck] = useState(true);

  const handleChange = (state) => {
    console.log(state);
    setCheck(state);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <Container switch={check}>
      <div className="up-bar">
        <Switch className="checked" onChange={handleChange} checked={check} onColor="#473452" offHandleColor="#f8c0c0" onHandleColor="#f8c0c0" handleDiameter={20} uncheckedIcon={false} checkedIcon={false} boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"  activeBoxShadow="0px 0px 1px  10px rgba(0, 0, 0, 0.2)" height={20}
        width={40}/>
        <label >Chat with us!</label>
        <div className="container-buttons">
          <button className="BtnMinimize"><MdOutlineMinimize/></button>
          <button className="BtnClose"><IoMdClose/></button>
        </div>
      </div>
      <div className="chats">
      </div>
      <div className="classForm">
      <form onSubmit={onSubmit} >
        <input
          onChange={onChange}
          type="text"
          value={input}
          placeholder="Write a massage"
        />
        <button className="" type="submit">
         <IoMdSend />
        </button>
      </form> 
      </div>
    </Container>
  );
}
export default ChatWindow;

const Container = styled.div`
  background-color:${props => props.switch ? "#f28ca5" :  "#473452"  }; // cambie esto para q haga swwitch
  width: 20.5rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  .up-bar {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    /* &>div{ ->>>> otra forma de hacerlo
     background-color:red;
    } */
    &>label{
      color:${props => props.switch ?  "#121111"  : "#fbfbfb" };  //Agregue el color 
      font-family: sans-serif;
      font-size: 1.2rem;
    }
    .container-buttons{
      &>button{
        margin-left: 4px;
        width:1.5rem;
        height:1.5rem;
        color:white;
        background-color: #a46281;
        border:white;
      }
    }
  }
  .chats{
    background:#4734524d;
    background:${props => props.switch ? "linear-gradient(45deg, #473452 , #473452d4 )" : "linear-gradient(45deg, #f28ca5 ,#d58397 )"};// cambie esto para q haga swwitch
    width: 98%;
    height: 85%;
    border-radius: 1rem;
    padding:0;
    position: relative;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  .classForm{
    &>form{
      display:flex;
      &>input{
        width: 90%;
        height: 2rem;
        margin-left: 0.2rem;
        border-top-left-radius:0.5rem;
        border-bottom-left-radius:0.5rem; 
        border:none;
        background-color: #f8c0c0;
      }
      &>button{
        width: 8%;
        height: 2rem;
        margin-right: 0.2rem;
        border-top-right-radius:0.5rem;
        border-bottom-right-radius:0.5rem; 
        border:none;
      }
    }
  }
`;



