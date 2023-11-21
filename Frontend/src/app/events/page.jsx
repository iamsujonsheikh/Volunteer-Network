import Image from "next/image";
import React from "react";
import eventImage from "../../assets/images/extraVolunteer.png";
import Head from "next/head";

const events = [
  { id: 1, title: "Humanity more", date: "29 sep, 2020" },
  { id: 2, title: "Humanity more", date: "29 sep, 2020" },
  { id: 3, title: "Humanity more", date: "29 sep, 2020" },
  { id: 4, title: "Humanity more", date: "29 sep, 2020" },
  { id: 5, title: "Humanity more", date: "29 sep, 2020" },
  { id: 6, title: "Humanity more", date: "29 sep, 2020" },
  { id: 7, title: "Humanity more", date: "29 sep, 2020" },
  { id: 8, title: "Humanity more", date: "29 sep, 2020" },
];

const Event = () => {
  return (
    <div className=" w-3/4 mx-auto h-screen">
      <Head>
        <title>Volunteer Network - Events</title>
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 h-56 mt-8">
        {" "}
        {events.map((event) => (
          <div key={event.id} className="flex bg-[#fff] space-x-6">
            <div className="">
              <Image
                src={eventImage}
                width={180}
                height={180}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-xl font-bold">{event.date}</p>
            </div>
            <div>
              <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
