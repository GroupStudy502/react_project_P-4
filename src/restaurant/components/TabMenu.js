import React from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Menu = styled.div`
  width: 100%;
  word-break: keep-all;

  dl {
    padding: 10px 10px;

    dt {
      width: 100px;
    }

    dd {
      width: calc(100% - 120px);
    }
  }

  dl + dl {
    border-top: 1px dashed #818181;
  }
`;

const NoDataText = styled.div`
  font-size: 16px;
  color: #818181;
`;

const TabMenu = ({ item }) => {
  const { t } = useTranslation();

  const hasMenu = item.foods && item.foods.length > 0;
  return (
    <Tab.Pane eventKey="menu">
      { hasMenu ? (
      <Menu>
        {item.foods &&
          item.foods.map((food) => ( 
            <dl key={food.menuId}>
              <dt>{food.menuNm}</dt>
              <dd>{food.menuPrice}{t('원')}</dd>
            </dl>
          ))}
      </Menu>
       ) : (
        <NoDataText>{t('메뉴 정보가 없습니다')}</NoDataText>
      )}
    </Tab.Pane>
  );
};

export default React.memo(TabMenu);
