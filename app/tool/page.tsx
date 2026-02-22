import ProgressBar from "../component/ProgressBar";
import FadeIn from "../component/FadeIn";
const page = () => {
  return (
    <div className="mt-15 mb-25 ">
      <h1 className="text-3xl font-bold">Tools</h1>
      <FadeIn className="card bg-white flex justify-between  items-center mt-6">
        <div className="">
          <h1 className="text-sm font-bold text-gray-500">
            HEALTH CREDIT SCORE
          </h1>
          <h2 className="text-3xl font-bold text-red-500">842</h2>
          <p className="text">EXCELLENT . Top 5%</p>
        </div>
        <div className=" ">
          <ProgressBar />
        </div>
      </FadeIn>
      <div className="mt-5 ">
        <h1 className="text-xl font-bold ">Panic Grid</h1>
        <FadeIn className=" mt-3 grid grid-cols-3 gap-4 ">
          <div className="flex card bg-white flex-col items-center">
            <p className="">🤕</p>
            <p>Headache</p>
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">🔥</p>
            <p>Heatpain</p>
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">🤒</p>
            <p>Fever</p>
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">🤢</p>
            <p>Nausea</p>
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">🤕</p>
            <p>Breathing</p>
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">🫁</p>
            <p>Chest Pain</p>
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">😵‍💫</p>
            Dizziness
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">🩸</p>
            <p>Bleeding</p>
          </div>
          <div className="flex card bg-white flex-col items-center">
            <p className="">⚡️</p>
            <p>Seizure</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default page;
