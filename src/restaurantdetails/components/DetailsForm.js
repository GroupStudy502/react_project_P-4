import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MidButton } from "../../commons/components/Buttons";
import fontSize from "../../styles/fontSize";

const {medium} = fontSize;

const LinkBox = styled.div``;

const DetailsFrom = () => {
    const { t } = useTranslation();

    return (
        <>
            <LinkBox>
                <MidButton type="button" color="primary">
                    {t('예약하기')}
                </MidButton>
            </LinkBox>
        </>
    );
};

export default React.memo(DetailsFrom);