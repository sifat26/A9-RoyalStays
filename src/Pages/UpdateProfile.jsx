import { useContext } from "react";
import { AuthContext } from "./Estate/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Button, Input, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";


const UpdateProfile = () => {
    const { updatedUser,user,setUser } = useContext(AuthContext);
    const handleUpdate=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photoURL.value;
        if(name && photo){
            updatedUser(name, photo)
            .then(()=>{
              setUser({...user,displayName:name,photoURL: photo})
                toast.success("Name and PhotoURL Updated successfully")
                
            })
            .catch(error=>console.error(error))
            
        }
        else{
            toast.error("Please Enter Name and PhotoURL");
        }
    }
  return (
    <div>
      <Helmet>
        <title>RoyalStays | Update Profile</title>
      </Helmet>
      <div>
      <section className="grid text-center  items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Update Profile
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your Name and PhotoURL
        </Typography>
        <form onSubmit={handleUpdate}  className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Name
              </Typography>
            </label>
            <Input
              
              color="gray"
              size="lg"
              type="text"
              name="name"
              placeholder="Tanvir Ahmmed"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your PhotoURL
              </Typography>
            </label>
            <Input
             
              color="gray"
              size="lg"
              type="text"
              name="photoURL"
              placeholder="photo.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          
          <Button color="gray" size="lg" className="mt-6" type="submit" fullWidth>
            Update Profile
          </Button>
          <div className="mt-4 flex justify-end">
          </div>
        </form>
      </div>
    </section>
      </div>
      
    </div>
  );
};

export default UpdateProfile;
