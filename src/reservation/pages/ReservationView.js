import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { OuterBox } from "../../commons/components/LayoutBox";
import { MainTitle } from "../../commons/components/TitleBox";
import ReservationViewContainer from "../containers/ReservationViewContainer";

const ReservationView = () => {
    const [pageTitle, setPageTitle] = useState('');

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <OuterBox>
                <MainTitle>{pageTitle}</MainTitle>
                <ReservationViewContainer setPageTitle={setPageTitle} />
            </OuterBox>
        </>

    );

};

export default React.memo(ReservationView);