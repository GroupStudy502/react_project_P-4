import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TabMenu from './TabMenu';
import TabMenuPhoto from './TabMenuPhoto';
import TabReview from './TabReview';
import TabIconInfo from './TabIconInfo';
import { color } from '../../styles/color';

const { jmt } = color;

const TabMenuBox = styled.div`
    margin: 20px 0;

    .nav-link {
      color: #000;
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
     
    }

    .nav {
    display: flex;
    justify-content: space-between; // Distribute items evenly
    max-width: 80%; // Adjust this value to control the overall width of the nav
    margin: 0 auto; // Center the nav
    
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
