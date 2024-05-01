import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "./Estate/AuthProvider";
import { Helmet } from "react-helmet-async";

export function UserProfile() {
  const { user } = useContext(AuthContext);
  console.log("ok", user);
  return (
    <div className="flex justify-center">
      <Helmet>
                <title>RoyalStays | User Profile</title>
            </Helmet>
      <div className="lg:m-10 m-5 p-5 rounded-lg w-3/4 shadow-lg  bg-[#EEEEEE]">
        <div className="flex justify-center ">
          <img
            className="w-40 rounded-lg shadow-xl"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div className="text-center">
          <Typography
            variant="h4"
            color="blue-gray"
            className="my-2 font-['Raleway'] font-bold"
          >
            Name: {user.displayName}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 font-medium font-['Raleway']"
            textGradient
          >
            <span className="font-bold">Email: </span>
            {user.email}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium font-['Raleway'] flex-wrap  break-all text-center"
          >
            <span className="font-bold">PhotoURL: </span> {user.photoURL}
          </Typography>
        </div>
      </div>
    </div>
  );
}
