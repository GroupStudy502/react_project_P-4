import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%; /* 부모 컨테이너의 크기에 맞게 확장 */
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;  /* 캘린더의 가로 크기를 부모 컨테이너에 맞춤 */
  max-width: 100%;  /* 캘린더의 최대 가로 크기를 부모 컨테이너에 맞춤 */
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  /* 요일 이름 스타일 */
  .react-calendar__month-view__weekdays {
    font-size: 1.2em; /* 요일 이름 글자 크기 */
    margin-bottom: 10px; /* 요일 이름과 날짜 사이 간격 */
    text-align: center;
    font-weight: bold;
    color: #ff3d00;
  }

  /* 날짜 스타일 */
  .react-calendar__tile {
    font-size: 1.2em; /* 날짜 글자 크기 */
    padding: 15px 0; /* 날짜 상하 간격을 넓힘 */

    &:hover,
    &:focus,
    &.react-calendar__tile--active {
      background: #ff3d00; /* 클릭하거나 포커스된 날짜의 배경색을 #ff3d00으로 변경 */
      color: #ffffff; /* 클릭된 날짜의 텍스트 색상을 흰색으로 설정 */
      border-radius: 10px; /* 모서리가 둥근 사각형으로 유지 */
  }

  .react-calendar__tile--now {
    background: #ffe4e1;
  }

  .react-calendar__tile--active {
    background: #ff3d00;
    color: #ffffff;
    border-radius: 7%;
  }

  .react-calendar__tile:hover {
    background: #ffcccb;
    border-radius: 7%;
  }

  .react-calendar__navigation button {
    color: #ff3d00;
    min-width: 44px;
    background: none;
    font-size: 1.2em;
    margin-top: 8px;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    color: #ff3d00;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d32f2f;
  }
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
`;

const CalendarForm = ({ startDate, endDate, availableDates, onCalendarClick }) => {
  return (
    <CalendarWrapper>
      <TitleWithIcon>
        <FaCalendarAlt />
        <h2>날짜를 선택해 주세요</h2>
      </TitleWithIcon>
      <StyledCalendar
        onChange={onCalendarClick}
        minDate={startDate}
        maxDate={endDate}
        tileDisabled={({ date }) =>
          availableDates.findIndex(
            (d) =>
              date.getFullYear() === d.getFullYear() &&
              date.getMonth() === d.getMonth() &&
              date.getDate() === d.getDate()
          ) === -1
        }
      />
    </CalendarWrapper>
  );
};

export default CalendarForm;