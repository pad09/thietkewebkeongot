import Banner from "../components/Banner";
import Gioithieu from "../components/Gioithieu";
import ShowSPKM, { ShowSPBC, ShowSPH } from "../components/ShowProduct";
import Test from "../components/Test";
import Test from "../components/Detail";



export default function index() {

    return (
        <>
            <Detail></Detail>
            <Banner />
            <Gioithieu></Gioithieu>
            <ShowSPKM></ShowSPKM>
            <ShowSPBC></ShowSPBC>
            <ShowSPH></ShowSPH>
            <Test></Test>
        </>
    )
}