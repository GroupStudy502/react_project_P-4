import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Options = styled.div``;

const OptionsBox = ({ search, onChange }) => {
  const { t } = useTranslation();

  return (
    <Options autoComplete="off">
      <div>
        <div name="naverGrad" value={search?.naverGrad} onChange={onChange}>          
        </div>
        <div name="awardInfoDscrn" value={search?.naverGrad} onChange={onChange}>
        </div>
        <div name="petEntrnPosblYn" value={search?.naverGrad} onChange={onChange}>
        </div>
      </div>
    </Options>
  );
};

export default React.memo(OptionsBox);
