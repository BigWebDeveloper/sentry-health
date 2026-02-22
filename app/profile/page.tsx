import FadeIn from "../component/FadeIn";
import { BiEdit } from "react-icons/bi";

const page = () => {
  return (
    <div className="mt-15 mb-25">
      <h1 className="text-mds font-bold text-gray-500">Profile</h1>
      <h2 className="text-2xl font-bold"> Alexander Osei</h2>

      <FadeIn className="card bg-white mt-6">
        <div className="p-4 flex items-center justify-between leading-6">
          <p className="w-18 h-18 flex justify-center font-bold text-white items-center bg-blue-400 rounded-full">
            AO
          </p>
          <div className="ml-2 m-auto">
            <p className="text-md font-bold">Alexander Osei</p>
            <p className="text-sm">Platinum Member</p>
            <div className="flex items-center p-1 gap-1 border border-green-400 rounded-full float-left">
              <p className="w-2 h-2 bg-green-400 rounded-full"></p>
              <p className="text-sm">Policy Active</p>
            </div>
          </div>
          <div className="p-3 text-blue-400 bg-gray-400/30 rounded-xl ml-0">
            <BiEdit />
          </div>
        </div>
        <div className="border-b border-t flex justify-between items-center py-6 border-gray-300 w-full">
          <p>Date of Birth</p>
          <p>March 14, 1990</p>
        </div>
        <div className="border-b border-t flex justify-between items-center py-6 border-gray-300 w-full">
          <p>Gender</p>
          <p>Male</p>
        </div>
        <div className="border-b border-t flex justify-between items-center py-6 border-gray-300 w-full">
          <p>Blood Types</p>
          <p>0+</p>
        </div>
        <div className="border-b border-t flex justify-between items-center py-6 border-gray-300 w-full">
          <p>Phone</p>
          <p>+233 245 678 901</p>
        </div>
        <div className="border-b border-t flex justify-between items-center py-6 border-gray-300 w-full">
          <p>Email</p>
          <p>alexander@example.com</p>
        </div>
        <div className="border-b border-t flex justify-between items-center py-6 border-gray-300 w-full">
          <p>Policy no.</p>
          <p>VTL-2890-xk</p>
        </div>
        <div className="border-t flex justify-between items-center py-6 pb-2 border-gray-300 w-full">
          <p>Date of Birth</p>
          <p>March 14, 1990</p>
        </div>
      </FadeIn>
    </div>
  );
};

export default page;
