import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Hospitalitys from "./Hospitalitys";

const Home = () => {
    return (
        <div className="max-w-6xl lg:mx-auto mx-4">
            <Helmet>
                <title>RoyalStays | Home</title>
            </Helmet>
            <Banner></Banner>
            <Hospitalitys></Hospitalitys>
        </div>
    );
};

export default Home;