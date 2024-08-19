import React from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LuParkingSquare, LuWifi, LuLanguages, LuSmartphoneNfc  } from "react-icons/lu";
import { GiKidSlide } from "react-icons/gi";
import { MdPets, MdMobileFriendly } from "react-icons/md";
import styled from 'styled-components';


const TabIconInfo = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Tab.Pane eventKey="icons">
      <div>
        {item.prkgPosYn && (
          <div>
            <LuParkingSquare title='Parking Available'/>{t('주차 가능')}
          </div>
          )}
        {item.wifiOfrYn && (
           <div>
            <LuWifi title='WiFi Available' />{t('와이파이 제공')}
            </div>
            )}
        {item.dcrnYn && (
          <div>
            <GiKidSlide title='Kids Area Available' />{t('놀이방 제공')}
            </div>
            )}
        {item.petEntrnPosblYn && ( 
          <div>
          <MdPets title='Pets Allowed'/>{t('반려동물 입장가능')}
          </div>
      )}
        {item.fgggMenuOfrYn  && (
          <div>
          <LuLanguages title='Foreign Language Menu'/>{t('다국어메뉴 제공')}
          </div>
          )}
        {item.mbPmamtYn && (
          <div>
          <MdMobileFriendly title='Mobile Payment Available' />{t('모바일결제 가능')}
          </div>
          )}
        {item.smorderYn && (
          <div>
          <LuSmartphoneNfc title='Smart Order Available'/>{t('스마트오더 가능')}
          </div>
          )}
      </div>
    </Tab.Pane>
  );
};

export default React.memo(TabIconInfo);
