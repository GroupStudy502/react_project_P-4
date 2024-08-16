import React, { useState, useCallback } from 'react';
import  {ChatButton} from './ChatButton';
import ChatRoom from './ChatRoom';
import Modal from 'react-modal';
import { color } from '../../styles/color';

const customStyles = {
  content: {
    top: 'calc(50% - 350px)',
    left: 'calc(50% - 280px)',
    width: '500px',
    height: '600px',
    radius: '10px'
  },
};


const ModalChat = ({ children, gid, color }) => {
  Modal.setAppElement('#root');

  color = color ?? 'primary';
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((open) => !open);
  }, []);


  return (
    <>
      <ChatButton type="button" color="jmt" onClick={onClick}>
        {children}
      </ChatButton>
      {open && (
        <Modal isOpen={open} style={customStyles} >
          <ChatRoom />
          <button type="button" onClick={() => setOpen(false)}>
            닫기
          </button>
        </Modal>
      )}
    </>
  );
};

export default React.memo(ModalChat);