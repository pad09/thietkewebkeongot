

import Banner from "./Banner.jsx";
import ShowSPKM, { ShowSPBC, ShowSPH } from "./ShowProduct";
import ConnectAPI from "./ConnectAPI.jsx"; 

export default function index() {

    return (
        <>

            <Banner />

            <ShowSPKM />
            <ShowSPBC />
            <ShowSPH />
            <ConnectAPI /> 

        </>
    );
}

