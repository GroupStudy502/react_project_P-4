import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../../member/modules/UserInfoContext';
import FloatingBar from '../components/FloatingBar';

const FloatingBarContainer = ({ item, viewRef }) => {
  const navigate = useNavigate();
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  const [isFixed, setIsFixed] = useState(true);

  const handleReservationClick = () => {
    if (isLogin) {
      navigate(`/reservation/${item.rstrId}`);
    } else {
      navigate('/member/login');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewBottom = viewRef.current.getBoundingClientRect().bottom;
      const windowBottom = window.innerHeight;

      if (viewBottom <= windowBottom) {
        setIsFixed(false); 
      } else {
        setIsFixed(true);  
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewRef]);

  return (
    <FloatingBar onReservationClick={handleReservationClick} item={item} isFixed={isFixed}/>
  );
};

export default React.memo(FloatingBarContainer);
