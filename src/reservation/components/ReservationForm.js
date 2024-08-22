import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosTime, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GoPersonFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { BigButton } from '../../commons/components/Buttons';

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
    font-size: 1.5em; /* 아이콘 크기 */
  }

  h2 {
    margin: 0; /* Remove default margin from h2 */
    font-size: 0.8em; /* h2 글씨 크기(...선택해 주세요) */
  }

  h3 {
    margin: 0; /* Remove default margin from h2 */
    font-size: 0.5em; /* h3 글씨 크기(...선택해 주세요) */
  }
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
  width: 50px; // 인원 버튼 가로 크기
  height: 50px; // 인원 버튼 세로 크기
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

  const personOptions = [...new Array(10).keys()].map(i => i + 1);

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <TitleWithIcon>
          <FaCalendarAlt />
          <h2>{t('날짜를 선택해 주세요')}</h2>
        </TitleWithIcon>
        <Calendar
          onChange={onCalendarClick}
          minDate={startDate}
          maxDate={endDate}
          tileDisabled={({ date }) => {
            return (
              availableDates.findIndex(
                (d) =>
                  date.getFullYear() === d.getFullYear() &&
                  d.getMonth() === date.getMonth() &&
                  date.getDate() === d.getDate(),
              ) === -1
            );
          }}
        />
      </div>
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
                <h3>{t('1~10명까지 선택 가능합니다.')}</h3>
              </TitleWithIcon>
              <PersonButtonsContainer>
                {personOptions.map((person) => (
                  <PersonButton
                    key={person}
                    isSelected={form.persons === person}
                    onClick={() => onChange({ target: { name: 'persons', value: person } })}
                  >
                    {person}
                  </PersonButton>
                ))}
              </PersonButtonsContainer>
            </dl>
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