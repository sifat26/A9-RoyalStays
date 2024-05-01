import { Helmet } from "react-helmet-async";
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { IoPricetag } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const userData = useLoaderData();
  // console.log('me',id);
  const fixedData = userData.filter((item) => {
    return item.id === Number(id);
  });
  console.log(fixedData);
  const [
    {
      image,
      estate_title,
      segment_name,
      description,
      price,
      status,
      area,
      location,
      facilities,
      amenities,
    },
  ] = fixedData;

  return (
    <div>
      <Helmet>
        <title>RoyalStays | Details</title>
      </Helmet>
      <div className="lg:w-3/4 md:w-4/5 w-5/6 mx-auto ">
        <h2
        data-aos="fade-down"
        data-aos-duration="500" className="text-center text-2xl md:text-3xl lg:text-5xl font-medium  lg:font-semibold my-4 py-10  bg-[#009cd0] text-white rounded-lg ">
          {estate_title}
        </h2>
        <div className="">
          <img
            className="rounded-lg h-[400px] lg:h-[500px] w-full "
            src={image}
            alt=""
          />
        </div>
        <div className=" space-y-4 mt-6 grid lg:grid-cols-12 ">
          <div className="lg:col-span-7">
            <p
            data-aos="fade-down"
            data-aos-duration="800" className="font-bold text-3xl underline my-4">
              Category : {segment_name}
            </p>
            <p
            data-aos="fade-down"
            data-aos-duration="900" className="my-4">
              <u className="font-bold text-2xl ">Overview</u>: <br />
              {description}
            </p>
            <p
            data-aos="fade-down"
            data-aos-duration="900">
              <u
               className="font-bold text-2xl my-4">Facilities</u> :{" "}
              {facilities.map((item, i) => (
                <li className="text-lg font-medium " key={i}>
                  {item}
                </li>
              ))}
            </p>
          </div>
          <div
          data-aos="fade-down"
          data-aos-duration="1000" className="lg:col-span-5   flex flex-col  items-center">
            <div className="border border-cyan-500 rounded-lg shadow-lg p-6">
            <div className="font-bold my-2">
              <u className="text-2xl">Property Details: </u>
              <br />
              <div className="flex items-center gap-1">
                <IoPricetag />
                <p className="text-lg font-medium">Price : {price}$</p>
              </div>
              <div className="flex items-center gap-1">
                <GrStatusCriticalSmall />
                <p className="text-lg font-medium">Status : {status}</p>
              </div>
              <div className="flex items-center gap-1">
                <BiArea />
                <p className="text-lg font-medium">Area : {area} </p>
              </div>
              <div className="flex items-center gap-1">
              <FaLocationDot />
                <p className="text-lg font-medium">Location : {location}</p>
              </div>
            </div>
            <hr className="shadow-xl" />
            <div >
              <p>
                <u className="font-bold text-2xl">Amenities</u> :{" "}
                {amenities.map((item, i) => (
                  <li className="text-lg font-medium " key={i}>
                    {item}
                  </li>
                ))}
              </p>
            </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
