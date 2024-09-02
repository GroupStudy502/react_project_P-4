import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { OuterBox } from "../../commons/components/LayoutBox";
import { MainTitle } from "../../commons/components/TitleBox";
import ViewContainer from "../containers/ViewContainer";
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";import styled from "styled-components";
import { color } from "../../styles/color";



const OuterBoxStyle = styled(OuterBox)`
    border-radius: 10px;
  box-shadow: 0 5px 5px -5px ${color.shadow},
              -5px 0 5px -5px ${color.shadow}, 
              5px 0 5px -5px ${color.shadow};
`;



const RestaurantView = () => {
    const [pageTitle, setPageTitle] = useState('');

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <OuterBoxStyle>
                <MainTitle>{pageTitle}</MainTitle>
                <ViewContainer setPageTitle={setPageTitle} />
                <ModalChat>
                    <RiRobot2Line style={{width: '50px', height: '50px'}}/>
                </ModalChat>
            </OuterBoxStyle>
        </>

    );

};

export default React.memo(RestaurantView);
