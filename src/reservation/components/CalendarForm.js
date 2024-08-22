import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Calendar from 'react-calendar';

const StyledCalendar = styled.div`
  width: 350px;
  max-width: 100%;
  background: white;
  border: 1px solid #a0a096;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
`;

const CalendarForm = () => {
    const { t } = useTranslation();
    return (
        <StyledCalendar/>
    );
};

export default React.memo(CalendarForm);