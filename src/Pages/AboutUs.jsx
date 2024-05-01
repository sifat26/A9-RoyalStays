import { Helmet } from "react-helmet-async";
import 'animate.css';

const AboutUs = () => {
  return (
    <div>
      <Helmet>
                <title>RoyalStays | About Us</title>
            </Helmet>
      <h2 className="text-center text-3xl font-bold animate__animated animate__heartBeat">About Us</h2>
      <div className="w-4/5 lg:w-2/3 mx-auto bg-[#EEEEEE] p-5 rounded-lg shadow-md my-5">
        <p>
          Welcome Home, Wherever You Roam **Experience seamless living with
          RoyalStays. We specialize in connecting discerning travelers and
          investors with exceptional properties.
          <br /> **For Guests:** Discover curated vacation rentals and boutique
          hotels, offering the perfect blend of comfort, style, and local charm.
          Escape the ordinary with unique spaces that cater to your every
          desire. Browse stunning listings, explore vibrant destinations, and
          book your dream getaway with ease. <br />
          **For Investors:** Unlock the potential of the hospitality market. We
          offer a diverse portfolio of investment opportunities, from luxury
          retreats to thriving urban spaces. Our team of experts provides
          comprehensive guidance, helping you navigate the market and secure
          properties poised for success.
          <br />
          RoyalStays - Where hospitality meets real estate excellence.
          <br />
          Explore properties, browse investment options, and embark on a journey
          unlike any other.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
