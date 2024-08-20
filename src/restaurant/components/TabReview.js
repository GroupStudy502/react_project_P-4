import React from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const TabReview = () => {
  const { t } = useTranslation();

  return (
    <Tab.Pane eventKey="review">
      <div>
        
      </div>
    </Tab.Pane>
  );
};

export default React.memo(TabReview);