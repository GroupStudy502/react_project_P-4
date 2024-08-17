import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';



const ItemTapmenu = () => {

    const { t } = useTranslation();

  return (
    <Nav variant="underline" defaultActiveKey="menu">
      <Nav.Item>
        <Nav.Link eventKey="menu">{t('메뉴')}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="사진">{t('사진')}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="리뷰">
        {t('리뷰')}
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
};

export default React.memo(ItemTapmenu);
