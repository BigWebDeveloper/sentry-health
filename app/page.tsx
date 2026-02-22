"use client";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./component/FadeIn";
type DataItem = {
  img: string;
  title: string;
  p: string;
  href: string;
};

const page = () => {
  const data: DataItem[] = [
    {
      img: "/health.png",
      title: "Health Care",
      p: "PRIORITY",
      href: "health-care",
    },
    {
      img: "/diagnostic.png",
      title: "Diagnostics",
      p: "CHECK-UP",
      href: "diagnostics",
    },
  ];

  return (
    <div className="mt-15">
      <h1 className=" leading-5 text-md font-bold text-gray-400">
        Good morning
      </h1>
      <h2 className="text-4xl font-black">Alexander</h2>
      <FadeIn className="flex relative overflow-hidden flex-col justify-between health-card font-bold mt-5 w-full bg-white h-50 card">
        <h3 className="text-gray-600">Health Score</h3>

        <p className="text-gray-600">PLATINUM TIER</p>
        <div className="flex h-40 w-40 rounded-full -bottom-10 -right-10 absolute [&>span]:w-10 [&>span]:border-2 [&>span]:h-10 [&>span]:relative [&>span]:rounded-full  bg-red-500">
          <span className="bg-white  top-15 left-15"></span>
          <span className="bg-gray-300  top-15 right-1"></span>
        </div>
      </FadeIn>

      <Link href="/recent-payment" className="mt-7">
        <h1 className="text-2xl font-black mt-5">Recent Activity</h1>
        <FadeIn className="card mt-4 flex items-center justify-between bg-white p-5">
          <div className="flex gap-3 items-center">
            <div className="flex p-1 items-center justify-center rounded-full bg-red-100">
              <Image
                src={`/health.png`}
                alt="Health Icon"
                width={100}
                height={100}
                priority
                className="rounded-full object-contain w-10 h-10 border-4 border-red"
              />
            </div>
            <div className="leading-4">
              <p className="font-bold">Health Center</p>
              <span className="text-sm">Co-pay Payment</span>
            </div>
          </div>

          <p className="font-bold">-$45.00</p>
        </FadeIn>
      </Link>

      <div className="mt-4 mb-25">
        <h1 className="text-2xl font-black">Care Plan</h1>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {data.map((item, index) => (
            <FadeIn key={index}>
              <Link
                href={item.href}
                className="flex card flex-col bg-white items-center"
              >
                <div className="p-2 bg-red-500/50 rounded-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={100}
                    height={100}
                    priority
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <h1 className="text-sm ">{item.title}</h1>
                <p className="text-md font-bold">{item.p}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
