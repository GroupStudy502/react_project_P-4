import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typing from "react-typing-animation";
import styled from 'styled-components';
import { color } from "../../styles/color";
import requestData from '../../commons/libs/requestData';


const OuterChatBox = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 530px;
  width: 100%;
  background: ${color.light};


.chat-box {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.messages-list {
  padding: 15px;
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
}

.user-message,
.ai-message {
  margin-bottom: 20px;
  max-width: 90%;
}

.user-message {
  align-self: flex-end;
  background: ${color.jmt};
  color: ${color.light};
  padding: 10px 15px;
  border-radius: 16px 16px 0 16px;
}

.ai-message {
  align-self: flex-start;
  background: #f0f0f0;
  color: ${color.dark};
  padding: 10px 15px;
  border-radius: 16px 16px 16px 0;
}

.message-form {
  border-top: 1px solid ${color.light};
  padding: 20px;
  display: flex;
  align-items: center;
}

.message-input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid ${color.dark};
  margin-right: 10px;
}

.send-button {
  padding: 10px 20px;
  border-radius: 16px;
  border: none;
  background-color: ${color.jmt};
  color: ${color.light};
  cursor: pointer;
}

h1 {
  text-align: center;
  background-color: ${color.light};
  padding: 20px;
  margin: 0;
}

`;

const ChatWrapper = () => {
  const [messages, setMessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  const aiApiGet = (userMessage) => requestData(`/ai?message=${userMessage}`);
  const { message } = useParams();
  

  const handleSendMessage = (message) => {
    alert("2. handleSendMessage-" + message);
    aiApiGet(message).then((item) => {
      alert(item);
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      {
        text: `Your message is: "${message + '***'}"`,
        isUser: false,
        isTyping: false, //true
        id: Date.now()
      }
    ]);
  };

  const handleEndTyping = (id) => {
    alert("3. handleEndTyping- " + id);
    setMessages((prevMessages) =>
      prevMessages.map((msg) => 
        msg.id === id ? { ...msg, isTyping: false } : msg
      
      )
    );
    setCurrentTypingId(null);
  };

  useEffect(() => {

    if (currentTypingId === null) {
      const nextTypingMessage = messages.find(
        (msg) => !msg.isUser && msg.isTyping
      );
      if (nextTypingMessage) {
        setCurrentTypingId(nextTypingMessage.id);
      }
    }
  }, [messages, currentTypingId]);

  return (
    <OuterChatBox>
      <div className="chat-box">
        <h3>메뉴추천AI</h3>
        <MessageList
          messages={messages}
          currentTypingId={currentTypingId}
          onEndTyping={handleEndTyping}
        />
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </OuterChatBox>
  );
};

const MessageList = ({ messages, currentTypingId, onEndTyping }) => (
  
  <div className="messages-list">
    {messages.map((message, index) => (
      <Message
        key={index}
        {...message}
        onEndTyping={onEndTyping}
        currentTypingId={currentTypingId}
      />
    ))}
  </div>
);

const Message = ({
  text,
  isUser,
  isTyping,
  id,
  onEndTyping,
  currentTypingId
}) => {
  return (
    <div className={isUser ? "user-message" : "ai-message"}>
      {isTyping && currentTypingId === id ? (
        <Typing speed={50} onFinishedTyping={() => onEndTyping(id)}>
          <p>
            <b>AI</b>: {text}
          </p>
        </Typing>
      ) : (
        <p>
          <b>{isUser ? "User" : "AI"}</b>: {text}
        </p>
      )}
    </div>
  );
};

const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("1 handleSubmit : " + message);
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="message-input"
      />
      <button type="submit" className="send-button">
      물어보기
      </button>
    </form>
  );
};

export default React.memo(ChatWrapper);
