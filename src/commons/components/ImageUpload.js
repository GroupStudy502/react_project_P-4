import React, { useState, useCallback, Component } from 'react';
import { SmallButton } from './Buttons';
import ChatRoom from '../../ai/components/ChatRoom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: 'calc(50% - 200px)',

    left: 'calc(50% -150px)',
    width: '300px',
    height: '400px',
  },
};

const ImageUpload = ({ childeren, gid, color }) => {
  Modal.setAppElement('#root');
  color = color ?? 'primary'; //기본값 컬러 지정

  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <>
      <SmallButton typer="button" color={color} onClick={onClick}>
        {childeren}
      </SmallButton>
      {open && (
        <Modal isOpen={open} style={customStyles}>
          <h1>노출!</h1>
          <button type="button" onClick={() => setOpen(false)}>
            닫기
          </button>
        </Modal>
      )}
    </>
  );
};

export default React.memo(ImageUpload);
