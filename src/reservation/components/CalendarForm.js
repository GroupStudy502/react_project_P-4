import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { BiSolidCalendar } from 'react-icons/bi';

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

  /* 연월 표시 부분 스타일 */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;  /* 공간을 균등하게 배분하여 양쪽 끝으로 화살표 버튼 배치 */
    align-items: center;
    margin-bottom: 10px;
    padding: 0 170px;  /* 내비게이션 버튼이 가로 크기에 맞게 공간 확보 */
  }

  .react-calendar__navigation button {
    color: #ff3d00;
    background: none;
    font-size: 1.5em;  /* 내비게이션 버튼 글자 크기 */
    font-weight: bold;
    flex: 1;  /* 버튼이 균등하게 공간을 차지하도록 설정 */
    max-width: 43%;  /* 각 버튼의 최대 너비를 33%로 설정하여 중앙의 월/년 텍스트와 조화를 이루도록 함 */
    text-align: center;  /* 텍스트를 중앙에 배치 */
    //max-width: 50%; /* 버튼의 최대 너비를 50%로 조정하여 월 이동 버튼만 보이도록 함 */
  }

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
    //background: #ffe4e1;
    background: #ffcccb;  /* 핑크색 배경 */
    color: #d32f2f;  /* 핑크색과 조화를 이루는 진한 빨간색 텍스트 */
    border-radius: 10px; /* 모서리가 둥근 사각형으로 표시 */
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
  margin: 30px 0px 15px 30px;

  svg {
    margin-right: 7px; //아이콘과 글씨 사이 간격 
    font-size: 1.1em; // 아이콘 크기 
    margin-bottom: 5px;
  }

  h2 {
    margin: 0;
    font-size: 0.8em; // h2 글씨 크기(...선택해 주세요)
  }
`;

const CalendarForm = ({
  startDate,
  endDate,
  availableDates,
  onCalendarClick,
}) => {
  return (
    <CalendarWrapper>
      <TitleWithIcon>
        <BiSolidCalendar />
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
              date.getDate() === d.getDate(),
          ) === -1
        }
        prevLabel="<"  /* 이전 월로 가는 버튼의 라벨 */
        nextLabel=">"  /* 다음 월로 가는 버튼의 라벨 */
        navigationLabel={null}  /* 연도 표시를 위한 내비게이션 라벨을 숨김 */
        next2Label={null}  /* 다음 연도로 가는 버튼을 숨김 */
        prev2Label={null}  /* 이전 연도로 가는 버튼을 숨김 */
      />
    </CalendarWrapper>
  );
};

export default CalendarForm;
