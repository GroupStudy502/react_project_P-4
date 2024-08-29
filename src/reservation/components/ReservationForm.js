import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import UserInfoContext from '../../member/modules/UserInfoContext';
import InfoInputBox from './InfoInputBox';
import {
  IoIosTime,
  IoMdCheckmarkCircleOutline,
  IoMdNotificationsOff,
} from 'react-icons/io';
import { GoPersonFill } from 'react-icons/go';
import { FaAddressBook } from 'react-icons/fa';
import { BigButton } from '../../commons/components/Buttons';
import CalendarForm from './CalendarForm';
import MessageBox from '../../commons/components/MessageBox';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const TimeTableAndPerson = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

const TitleWithIcon = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* 아이콘+글씨 줄 아래 마진 */
  margin-top: 30px; /* 아이콘+글씨 줄 위 마진 */

  svg {
    margin-right: 7px; /* 아이콘과 글씨 사이 간격 */
    font-size: 1.1em; /* 아이콘 크기 */
  }

  h2 {
    margin: 0; /* Remove default margin from h2 */
    font-size: 0.8em; /* h2 글씨 크기(...선택해 주세요) */
    font-weight: bold;
  }
`;

const Subtitle = styled.h3`
  margin: 5px 0 15px 5px;
  font-size: 0.9em;
  color: #666;
  font-weight: bold;
`;

const Checktitle = styled.h3`
  margin: 10px 0 20px 7px;
  font-size: 1.2em;
`;

const LastCheckTitle = styled(Checktitle)`
  margin: 40px 0 30px 7px;
  font-weight: bold;
`;

const TimeButton = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#ff3d00' : '#ffffff')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#ff3d00')};
  border: 1px solid #ff3d00;
  border-radius: 5px;
  width: 130px;
  padding: 10px 35px; /* 시간 버튼 가로, 세로 크기 */
  margin: 5px 5px 20px 20px; //상/우/하/좌
  font-size: 1.2em; // 시간 버튼 글자 크기
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #ff3d00;
    color: #ffffff;
  }
`;

const PersonButton = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#ff3d00' : '#ffffff')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#ff3d00')};
  border: 1px solid #ff3d00;
  border-radius: 50%;
  width: 57px; // 인원 버튼 가로 크기
  height: 57px; // 인원 버튼 세로 크기
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  margin-bottom: 30px;

  &:hover {
    background: #ff3d00;
    color: #ffffff;
  }
`;

const PersonButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping if needed */
  gap: 10px; /* Space between buttons */
`;

const ReservationInfoBox = styled.dt`
  font-size: 1.2em;
`;

const ReservationForm = ({
  data,
  form,
  times,
  onCalendarClick,
  onTimeClick,
  onChange,
  onSubmit,
  errors,
}) => {
  const { availableDates } = data;
  const startDate = availableDates[0];
  const endDate = availableDates[availableDates.length - 1];
  const {
    states: { userInfo },
  } = useContext(UserInfoContext);
  const { t } = useTranslation();

  const personOptions = [...new Array(10).keys()].map((i) => i + 1);

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <CalendarForm
        startDate={startDate}
        endDate={endDate}
        availableDates={availableDates}
        onCalendarClick={onCalendarClick}
      />
      <TimeTableAndPerson>
        {times?.length > 0 && (
          <>
            <TitleWithIcon>
              <IoIosTime />
              <h2>{t('시간선택')}</h2>
            </TitleWithIcon>
            <div className="time-buttons">
              {times.map((time) => (
                <TimeButton
                  type="button"
                  key={time}
                  isSelected={form.rTime === time}
                  onClick={() => onTimeClick(time)}
                >
                  {time}
                </TimeButton>
              ))}
            </div>
            {errors?.rTime && (
              <MessageBox color="danger" messages={errors.rTime} />
            )}
            <dl className="persons">
              <TitleWithIcon>
                <GoPersonFill />
                <h2>{t('인원선택')}</h2>
              </TitleWithIcon>
              <Subtitle>{t('최대최소인원명수')}</Subtitle>
              <PersonButtonsContainer>
                {personOptions.map((person) => (
                  <PersonButton
                    type="button"
                    key={person}
                    isSelected={form.persons === person}
                    onClick={() =>
                      onChange({ target: { name: 'persons', value: person } })
                    }
                  >
                    {person}명
                  </PersonButton>
                ))}
              </PersonButtonsContainer>
              {errors?.persons && (
                <MessageBox color="danger" messages={errors.persons} />
              )}
            </dl>
            <div>
              <TitleWithIcon>
                <FaAddressBook />
                <h2>{t('예약자_정보')}</h2>
              </TitleWithIcon>
              <ReservationInfoBox>
                <dl>
                  <dt>{t('예약자')}</dt>
                  <dd>
                    <InfoInputBox
                      type="text"
                      name="name"
                      value={form?.name}
                      onChange={onChange}
                    />
                    {errors?.name && (
                      <MessageBox color="danger" messages={errors.name} />
                    )}
                  </dd>
                </dl>
                <dl>
                  <dt>{t('이메일')}</dt>
                  <dd>
                    <InfoInputBox
                      type="text"
                      name="email"
                      value={form?.email}
                      onChange={onChange}
                    />
                    {errors?.email && (
                      <MessageBox color="danger" messages={errors.email} />
                    )}
                  </dd>
                </dl>
                <dl>
                  <dt>{t('전화번호')}</dt>
                  <dd>
                    <InfoInputBox
                      type="text"
                      name="mobile"
                      value={form?.mobile}
                      onChange={onChange}
                    />
                    {errors?.mobile && (
                      <MessageBox color="danger" messages={errors.mobile} />
                    )}
                  </dd>
                </dl>
              </ReservationInfoBox>
              <TitleWithIcon>
                <IoMdCheckmarkCircleOutline />
                <h2>{t('예약확인문구')}</h2>
              </TitleWithIcon>
              {[
                '* 노쇼 방지를 위해 예약금과 함께 예약 신청을 받고 있습니다.',
                '* 예약금은 식사 금액에서 차감합니다.',
                '* 예약시간 15분 이상 늦을 시 자동 취소됩니다.(예약금 환불 X)',
                '* 1인 1메뉴 주문 부탁드립니다.',
                '* 외부 음식, 음료 반입 및 취식이 불가합니다.',
                '* 인원 변경 시 방문 3시간 전까지 예약 수정 가능합니다.',
              ].map((item, index) => (
                <Checktitle key={index}>{t(item)}</Checktitle>
              ))}
              <LastCheckTitle>{t('예약자당부문구')}</LastCheckTitle>
            </div>
            <BigButton type="submit" color="jmt">
              {t('예약하기')}
            </BigButton>
          </>
        )}
      </TimeTableAndPerson>
    </FormBox>
  );
};

export default React.memo(ReservationForm);
