import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
  const navigate = useNavigate(); // 특정 이벤트가 실행됐을 때 페이지 이동

  const [board, setBoard] = useState({
    title: '',
    poster: '',
    contents: '',
  });

  const { title, poster, contents } = board;

  const onChange = (event) => {
    const { value, name } = event.target;

    setBoard({
      ...board,
      [name]: value,
    });
  };
  const saveBoard = async () => {
    await axios.post(`//localhost:3000/board`, board).then((res) => {
      alert('등록되었습니다.');
      navigate('/board');
    });
  };
};
