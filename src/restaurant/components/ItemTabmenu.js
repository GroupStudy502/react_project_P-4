import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TabMenu from './TabMenu';
import TabMenuPhoto from './TabMenuPhoto';
import TabReview from './TabReview';
import TabIconInfo from './TabIconInfo';

const TabMenuBox = styled.div`
  margin: 20px 0;
`;

const Menu = styled.div`
  width: 100%;
  word-break: keep-All;

  dl {
    padding: 10px 10px;

    dt {
      width: 100px;
    }

    dd {
      width: calc(100% - 120px) l;
    }
  }

  dl + dl {
    border-top: 1px dashed #818181;
  }
`;

const ItemTapmenu = ({ item }) => {
  const { t } = useTranslation();

  return (
    <>
      <TabMenuBox>
        <Tab.Container defaultActiveKey="menu">
          <Nav variant="underline">
            <Nav.Item>
              <Nav.Link eventKey="menu">{t('메뉴')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="photo">{t('사진')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="review">{t('리뷰')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="icons">{t('편의정보')}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <TabMenu item={item} />
            <TabMenuPhoto item={item} />
            <TabReview />
            <TabIconInfo item= {item} />
          </Tab.Content>
        </Tab.Container>
      </TabMenuBox>
    </>
  );
};

export default React.memo(ItemTapmenu);
