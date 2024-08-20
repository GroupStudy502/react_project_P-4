import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { color } from '../../styles/color';
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
    float: right;
    align-self: flex-end;
    background: ${color.jmt};
    color: ${color.light};
    padding: 10px 15px;
    border-radius: 16px 16px 0 16px;
  }
  .ai-message {
    float: left;
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
  const aiApiGet = (msg) => requestData(`/ai?message=${msg}`);

  const handleSendMessage = (message) => {
    aiApiGet(' 한국말로 알려주세요' + message).then((aiMessage) => {
      aiMessage = aiMessage.replace(
        'url',
        process.env.REACT_APP_URL + '/restaurant/info',
      );
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUser: true },
        {
          text: `${aiMessage}`,
          isUser: false,
          isTyping: false, //true
          id: Date.now(),
        },
      ]);
    });
  };

  return (
    <OuterChatBox>
      <div className="chat-box">
        <MessageList messages={messages} />
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </OuterChatBox>
  );
};

const MessageList = ({ messages, currentTypingId, onEndTyping }) => {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="messages-list" ref={scrollRef}>
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
};

const Message = ({ text, isUser }) => {
  return (
    <div className={isUser ? 'user-message' : 'ai-message'}>
      <p>
        <b>{isUser ? 'User' : 'AI'}</b>:{' '}
        {text.replace(/&lt;/g, '<').replace(/&gt;/g, '>')}
      </p>
    </div>
  );
};

const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    //alert("1 onSubmit : " + message);
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={onSubmit} className="message-form">
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
