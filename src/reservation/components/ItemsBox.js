import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { ImageBgBox } from '../../commons/components/ImageBox';
import { BigButton } from '../../commons/components/Buttons';

const ResaddressWithIcon = styled.h2`
  display: flex;
  align-items: center;

  svg {
    margin-right: 7px;
    font-size: 1.2rem;
  }

  h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const Resname = styled.div`
  font-weight: bold;
  font-size: 1.7em;
`;

const Resaddress = styled.div`
  font-weight: bold;
  font-size: 1em;
  color: #666;
`;

const Resinfo = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: #ff3d00;
  margin-top: 10px;

  .rDateTime,
  .persons {
    display: inline-block;
    margin-right: 6px;
  }
`;

const ResorderNo = styled.div`
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 20px;
`;

const StatusAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-weight: bold;

  .status {
    font-size: 1.1em;
    color: #555;
    margin-right: 10px;
  }

  button {
    padding: 6px 12px;
    color: #ff3d00;
    border-color: #ff3d00;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #ff3d00;
      color: white;
    }
  }
`;

const ReservationButton = styled.button`
  margin-top: 15px;
  padding: 8px 12px;
  background-color: #ff3d00;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  height: 37px;

  &:hover {
    background-color: #d03e12;
  }
`;

const formatDateTime = (rDateTime) => {
  const date = new Date(rDateTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${year}년 ${month}월 ${day}일`;
  const formattedTime = `${hours}시 ${minutes.toString().padStart(2, '0')}분`;

  return { formattedDate, formattedTime };
};

const ItemBox = ({ item, className, onCancel }) => {
  const url = `/reservation/info/${item?.orderNo}`;
  const { t } = useTranslation();
  const {
    restaurant: { images, rstrNm },
  } = item;

  const { formattedDate, formattedTime } = formatDateTime(item?.rDateTime);

  return (
    <li className={className}>
      <div className="item-inner">
        {images && images.length > 0 && (
          <ImageBgBox
            className="photo"
            url={images[0].rstrImgUrl}
            alt={rstrNm}
            width="150px"
            height="150px"
          />
        )}
        <div className="item-content">
          <ResorderNo>
            <div className="orderNo">
              <ResaddressWithIcon>
                <FaRegCalendarCheck />
                <h2>{item?.orderNo}번</h2>
              </ResaddressWithIcon>
            </div>
          </ResorderNo>
          <Resname>
            <div className="rname">{item?.rname}</div>
          </Resname>
          <Resaddress>
            <div className="raddress">{item?.raddress}</div>
          </Resaddress>
          <Resinfo>
            <div className="rDateTime">
              {formattedDate} {formattedTime}
            </div>
            <div className="persons">{item?.persons}명</div>
          </Resinfo>
          <StatusAndButtonWrapper>
            <div className="status">{item?.statusStr}</div>
            {item && ['START', 'APPLY', 'CONFIRM'].includes(item.status) && (
              <button type="button" onClick={() => onCancel(item.orderNo)}>
                {t('예약_취소')}
              </button>
            )}
          </StatusAndButtonWrapper>
        </div>
      </div>
      <Link to={url}>
        <ReservationButton>{t('예약_정보_확인')}</ReservationButton>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px #818181;
  border-radius: 5px;

  .item-inner {
    display: flex;
    align-items: center;
  }

  .photo {
    margin-right: 20px;
    flex-shrink: 0;
  }

  .item-content {
    width: 100%;
    word-break: break-all;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ItemsBox = ({ items, onCancel }) => {
  return (
    <ul>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <ItemStyledBox key={index} item={item} onCancel={onCancel} />
        ))
      ) : (
        <li>항목이없습니다.</li>
      )}
    </ul>
  );
};

export default React.memo(ItemsBox);
