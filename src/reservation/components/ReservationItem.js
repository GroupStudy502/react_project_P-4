import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fontSize from '../../styles/fontSize';
import { ImageBgBox } from '../../commons/components/ImageBox';

const { medium } = fontSize;

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 1.7em;
  color: #ff5722;
  font-weight: bold;
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 5px;
`;

const DetailRow = styled.dl`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  dt {
    font-weight: bold;
    color: #555;
    width: 40%;
    text-align: left;
    font-size: 1.2em;
  }

  dd {
    width: 60%;
    text-align: right;
    font-weight: bold;
    color: #777;
    font-size: ${medium};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #e64a19;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLinkButton = styled(Link)`
  flex: 1;
  padding: 12px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19 !important;
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

const ReservationItem = ({ item, onCancel }) => {
  const { t } = useTranslation();
  const {
    restaurant: { images, rstrNm },
  } = item;
  const {
    orderNo,
    rname,
    raddress,
    rtel,
    rDateTime,
    persons,
    name,
    email,
    mobile,
    status,
    statusStr,
    totalPayPrice,
    restaurant,
  } = item;

  return (
    <Wrapper>
      {images && images.length > 0 && (
        <ImageBgBox
          className="photo"
          url={images[0].rstrImgUrl}
          alt={rstrNm}
          width="100%"
          height="200px"
          style={{ borderRadius: '10px', marginBottom: '20px' }}
        />
      )}

      {/* Section 1: Reservation Number */}
      <Section>
        <SectionTitle>{t('예약 정보')}</SectionTitle>
        {orderNo && (
          <DetailRow>
            <dt>{t('예약_번호')}</dt>
            <dd>{orderNo}번</dd>
          </DetailRow>
        )}
        {rDateTime && (
          <DetailRow>
            <dt>{t('예약_일시')}</dt>
            <dd>{rDateTime}</dd>
          </DetailRow>
        )}
        {persons && (
          <DetailRow>
            <dt>{t('예약_인원')}</dt>
            <dd>{persons}명</dd>
          </DetailRow>
        )}
      </Section>

      {/* Section 2: Restaurant Details */}
      <Section>
        <SectionTitle>{t('식당 정보')}</SectionTitle>
        {rname && (
          <DetailRow>
            <dt>{t('식당명')}</dt>
            <dd>{rname}</dd>
          </DetailRow>
        )}
        {raddress && (
          <DetailRow>
            <dt>{t('식당_주소')}</dt>
            <dd>{raddress}</dd>
          </DetailRow>
        )}
        {rtel && (
          <DetailRow>
            <dt>{t('식당_연락처')}</dt>
            <dd>{rtel}</dd>
          </DetailRow>
        )}
      </Section>

      {/* Section 3: Payment Details */}
      <Section>
        <SectionTitle>{t('결제 정보')}</SectionTitle>
        {totalPayPrice && (
          <DetailRow>
            <dt>{t('결제_금액')}</dt>
            <dd>{totalPayPrice}원</dd>
          </DetailRow>
        )}
      </Section>

      {/* Section 4: Reservation Holder Details */}
      <Section>
        <SectionTitle>{t('예약자 정보')}</SectionTitle>
        <DetailRow>
          <dt>{t('예약자_성함')}</dt>
          <dd>{name}</dd>
        </DetailRow>
        {email && (
          <DetailRow>
            <dt>{t('이메일')}</dt>
            <dd>{email}</dd>
          </DetailRow>
        )}
        {mobile && (
          <DetailRow>
            <dt>{t('전화번호')}</dt>
            <dd>{mobile}</dd>
          </DetailRow>
        )}
      </Section>

      {/* Status and Buttons */}
      <Section>
        <DetailRow>
          <dt>{t('예약상태')}</dt>
          <dd>
            {statusStr}
            {['START', 'APPLY', 'CONFIRM'].includes(status) && (
              <StyledButton type="button" onClick={() => onCancel(orderNo)}>
                {t('예약취소')}
              </StyledButton>
            )}
          </dd>
        </DetailRow>
          <ReservationButton>
            to={`/board/write/review?rstrId=${restaurant.rstrId}`}
            {t('후기_작성하기')}
          </ReservationButton>
      </Section>
    </Wrapper>
  );
};

export default React.memo(ReservationItem);
