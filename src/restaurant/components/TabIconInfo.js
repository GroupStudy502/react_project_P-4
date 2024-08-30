import React from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  LuParkingSquare,
  LuWifi,
  LuLanguages,
  LuSmartphoneNfc,
} from 'react-icons/lu';
import { GiKidSlide } from 'react-icons/gi';
import { MdPets, MdMobileFriendly } from 'react-icons/md';
import styled from 'styled-components';
import { color } from '../../styles/color';
import { NoDataText } from './NoDataText';

const { primary, dark, light, jmt } = color;

const IconWrapper = styled.div`
  font-size: 1.2em;
  display: flex;
  align-items: center;

  dl {
    padding: 10px 15px;
    display: inline-flex;

    dd {
      margin-left: 10px;
    }
  }

  dl + dl {
    margin-right: 12px;
  }
`;

const TabIconInfo = ({ item }) => {
  const { t } = useTranslation();

  const hasIconData =
    item.prkgPosYn ||
    item.wifiOfrYn ||
    item.dcrnYn ||
    item.petEntrnPosblYn ||
    item.fgggMenuOfrYn ||
    item.mbPmamtYn ||
    item.smorderYn;

  return (
    <Tab.Pane eventKey="icons">
      {hasIconData ? (
        <IconWrapper>
          {item.prkgPosYn && (
            <dl>
              <dd>
                <LuParkingSquare title="ParkingAvailable" />
              </dd>
              <dd>{t('주차 가능')}</dd>
            </dl>
          )}
          {item.wifiOfrYn && (
            <dl>
              <dd>
                <LuWifi title="WiFi Available" />
              </dd>
              <dd>{t('와이파이 제공')}</dd>
            </dl>
          )}
          {item.dcrnYn && (
            <dl>
              <dd>
                <GiKidSlide title="Kids Area Available" />
              </dd>
              <dd>{t('놀이방 제공')}</dd>
            </dl>
          )}
          {item.petEntrnPosblYn && (
            <dl>
              <dd>
                <MdPets title="Pets Allowed" />
              </dd>
              <dd>{t('반려동물 입장가능')}</dd>
            </dl>
          )}
          {item.fgggMenuOfrYn && (
            <dl>
              <dd>
                <LuLanguages title="Foreign Language Menu" />
              </dd>
              <dd>{t('다국어메뉴 제공')}</dd>
            </dl>
          )}
          {item.mbPmamtYn && (
            <dl>
              <dd>
                <MdMobileFriendly title="Mobile Payment Available" />
              </dd>
              <dd>{t('모바일결제 가능')}</dd>
            </dl>
          )}
          {item.smorderYn && (
            <dl>
              <dd>
                <LuSmartphoneNfc title="Smart Order Available" />
              </dd>
              <dd>{t('스마트오더 가능')}</dd>
            </dl>
          )}
        </IconWrapper>
      ) : (
        <NoDataText>{t('편의 정보가 없습니다')}</NoDataText>
      )}
    </Tab.Pane>
  );
};

export default React.memo(TabIconInfo);
