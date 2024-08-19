import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const TabMenuBox = styled.div`
  margin: 20px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  word-break: break-all;

  dl {
    display: flex;

    padding: 10px 15px;

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
        <Nav variant="underline" defaultActiveKey="menu">
          <Nav.Item>
            <Nav.Link eventKey="menu">{t('메뉴')}</Nav.Link>
            <Wrapper>
              <div className="menu">
                {item.foods &&
                  item.foods.map((food) => (
                    <dl key={food.menuId}>
                      <dt>{food.menuNm}</dt>
                      <dd>{food.menuPrice}</dd>
                      <dd>{food.menuDscrn}</dd>
                    </dl>
                  ))}
              </div>
            </Wrapper>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="사진">{t('사진')}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="리뷰">{t('리뷰')}</Nav.Link>
          </Nav.Item>
        </Nav>
      </TabMenuBox>
    </>
  );
};

export default React.memo(ItemTapmenu);
