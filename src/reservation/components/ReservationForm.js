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
  margin-bottom: 20px; /* Space between sections */
  
  svg {
    margin-right: 8px;
    font-size: 1.5em; /* Adjust icon size */
  }

  h2 {
    margin: 0; /* Remove default margin from h2 */
    font-size: 1.25em; /* Adjust heading size */
  }
`;

const TimeButton = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#007bff' : '#ffffff')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #0056b3;
    color: #ffffff;
  }
`;

const PersonButton = styled(TimeButton)`
  background: ${({ isSelected }) => (isSelected ? '#28a745' : '#ffffff')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#28a745')};
  border: 1px solid #28a745;
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
        <h3>{t('1~20명까지 선택 가능합니다.')}</h3>
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
            </TitleWithIcon>
            <div className="person-buttons">
                {personOptions.map((person) => (
                  <PersonButton
                    key={person}
                    isSelected={form.persons === person}
                    onClick={() => onChange({ target: { name: 'persons', value: person } })}
                  >
                    {person} {t('명')}
                  </PersonButton>
                ))}
              </div>
            </dl>
            <BigButton type="submit" color="primary">
              {t('예약하기')}
            </BigButton>
          </>
        )}
      </TimeTableAndPerson>
    </FormBox>
  );
};

export default React.memo(ReservationForm);