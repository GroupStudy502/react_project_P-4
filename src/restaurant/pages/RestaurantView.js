import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { OuterBox } from "../../commons/components/LayoutBox";
import { MainTitle } from "../../commons/components/TitleBox";
import ViewContainer from "../containers/ViewContainer";
import styled from "styled-components";
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
            </OuterBoxStyle>
        </>

    );

};

export default React.memo(RestaurantView);
