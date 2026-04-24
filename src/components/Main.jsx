

import Banner from "./Banner";
import ShowSPKM, { ShowSPBC, ShowSPH } from "./ShowProduct";


export default function index() {

    return (
        <>

            <Banner />

            <ShowSPKM />
            <ShowSPBC />
            <ShowSPH />

        </>
    );
}

