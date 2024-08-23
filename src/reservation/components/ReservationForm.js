import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosTime, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GoPersonFill } from 'react-icons/go';
import { FaAddressBook } from "react-icons/fa";
import { PiAddressBookFill } from "react-icons/pi";
import { BsPersonLinesFill } from "react-icons/bs";
import { BigButton } from '../../commons/components/Buttons';
import CalendarForm from './CalendarForm';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const TimeTableAndPerson = styled.div`
  margin-left: 20px;
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
  }
`;

const Subtitle = styled.h3`
  margin: 5px 0 15px 5px;
  font-size: 0.9em;
  color: #666;
`;

const Checktitle = styled.h3`
  margin: 10px 0 20px 7px;
  font-size: 1.2em;
`;

const LastCheckTitle = styled(Checktitle)`
  margin: 40px 0 30px 7px;
`;

const TimeButton = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#ff3d00' : '#ffffff')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#ff3d00')};
  border: 1px solid #ff3d00;
  border-radius: 5px;
  padding: 10px 35px; /* 시간 버튼 가로, 세로 크기 */
  margin: 3px; // 버튼 상하좌우 마진
  margin-right: 20px; // 버튼 오른쪽 마진
  font-size: 1.2em; // 시간 버튼 글자 크기
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
  width: 55px; // 인원 버튼 가로 크기
  height: 55px; // 인원 버튼 세로 크기
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;
  font-size: 1.2em;
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

const ReservationForm = ({
  data,
  form,
  times,
  onCalendarClick,
  onTimeClick,
  onChange,
  onSubmit,
}) => {
  const { availableDates } = data;
  const startDate = availableDates[0];
  const endDate = availableDates[availableDates.length - 1];
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
              <h2>{t('시간을 선택해 주세요')}</h2>
            </TitleWithIcon>
            <div className="time-buttons">
              {times.map((time) => (
                <TimeButton
                  key={time}
                  isSelected={form.rTime === time}
                  onClick={() => onTimeClick(time)}
                >
                  {time}
                </TimeButton>
              ))}
            </div>
            <dl className="persons">
              <TitleWithIcon>
                <GoPersonFill />
                <h2>{t('인원을 선택해 주세요')}</h2>
              </TitleWithIcon>
              <Subtitle>{t('1~10명까지 선택 가능합니다.')}</Subtitle>
              <PersonButtonsContainer>
                {personOptions.map((person) => (
                  <PersonButton
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
            </dl>
            <div>
            <TitleWithIcon>
                <FaAddressBook />
                <h2>{t('예약자 정보')}</h2>
              </TitleWithIcon>
              <TitleWithIcon>
                <PiAddressBookFill />
                <h2>{t('예약자 정보')}</h2>
              </TitleWithIcon>
              <TitleWithIcon>
                <BsPersonLinesFill />
                <h2>{t('예약자 정보')}</h2>
              </TitleWithIcon>
            </div>
            <div>
              <TitleWithIcon>
                <IoMdCheckmarkCircleOutline />
                <h2>{t('예약 시 확인해 주세요')}</h2>
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
              <LastCheckTitle>
                {t(
                  '당일 취소 및 노쇼는 레스토랑뿐만 아니라 다른 고객님께도 피해가 될 수 있으므로 신중히 예약 부탁드립니다.',
                )}
              </LastCheckTitle>
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
