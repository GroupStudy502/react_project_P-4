import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../../member/modules/UserInfoContext';
import FloatingBar from '../components/FloatingBar';

const FloatingBarContainer = ({ rstrId }) => {
    const navigate = useNavigate();
    const { states: { isLogin } } = useContext(UserInfoContext);
  
    const handleReservationClick = () => {
      if (isLogin) {
        navigate(`/reservation/${rstrId}`);
      } else {
        navigate('/member/login');
      }
    };
  
    return <FloatingBar onReservationClick={handleReservationClick} />;
  };
  
  export default React.memo(FloatingBarContainer);
