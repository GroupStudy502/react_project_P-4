import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../../member/modules/UserInfoContext';
import FloatingBar from '../components/FloatingBar';

const FloatingBarContainer = ({ item }) => {
  const navigate = useNavigate();
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  const handleReservationClick = () => {
    if (isLogin) {
      navigate(`/reservation/${item.rstrId}`);
    } else {
      navigate('/member/login');
    }
  };

  return (
    <FloatingBar onReservationClick={handleReservationClick} item={item} />
  );
};

export default React.memo(FloatingBarContainer);
