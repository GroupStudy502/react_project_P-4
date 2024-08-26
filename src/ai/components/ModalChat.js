import React, { useState, useCallback } from 'react';
import  {ChatButton} from './ChatButton';
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import ChatWrapper from './ChatWrapper';

const customStyles = {
  content: {
    top: 'calc(50% - 350px)',
    left: 'calc(50% - 280px)',
    width: '500px',
    height: '610px',
    radius: '10px',
}};

const divStyles = {
  display: 'flex',
  float: 'left',
  color: 'red',
  fontSize: '1.5rem',
  
}

const buttonStyles = {
  display: 'flex',
  float: 'right',
} 

const ModalChat = ({ children, color }) => {
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
          <div >
            <div style={divStyles} className="aiTitle"><b>JeomMeChu AI</b></div>
            <button style={buttonStyles} type="button" onClick={() => setOpen(false)} >
              <IoCloseSharp />
            </button>
          </div>
          <ChatWrapper height="530px" marginTop="0"/>
        </Modal>
      )}
    </>
  );
};

export default React.memo(ModalChat);