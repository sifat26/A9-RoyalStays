import useDetailData from "../Hooks/useDetailData";
import Estate from "./Estate/Estate";

const Hospitalitys = () => {
  const { data } = useDetailData();
  // console.log(data);
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold bg-[#009cd0] text-white text-center my-3 p-4 rounded-lg">
        <h2>Hospitality</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
        {data.map((estate,index) => 
          <Estate key={index} estate={estate}></Estate>
        )}
      </div>
    </div>
  );
};

export default Hospitalitys;
