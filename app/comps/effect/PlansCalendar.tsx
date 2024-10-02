"use client";
import { useState } from "react";

const plansData = [
  {
    title: "Basic Plan",
    price: "$100",
    description: "Tailoring Startup Level 1 with materials included",
    sessions: "Monday to Wednesday, 8 AM - 12 PM",
    requirements: ["Basic tailoring tools", "Notebook"],
    bonus: "Free access to sewing machines for practice",
  },
  {
    title: "Intermediate Plan",
    price: "$200",
    description: "Level 1-2 with extended practice hours",
    sessions: "Monday to Friday, 9 AM - 1 PM",
    requirements: ["Tailoring tools", "Notebook", "Fabric materials"],
    bonus: "Access to design software and advanced techniques workshop",
  },
  {
    title: "Advanced Plan",
    price: "$300",
    description: "Level 1-3, product finishing and design creation",
    sessions: "Monday to Saturday, 10 AM - 2 PM",
    requirements: ["Full tailoring kit", "Laptop for design work"],
    bonus: "One-on-one mentorship and free materials for final projects",
  },
];

const calendarData = [
  {
    month: "October",
    events: [
      { date: "3rd", event: "Start of new session" },
      { date: "10th", event: "Intermediate level workshop" },
      { date: "25th", event: "Product Showcase" },
    ],
  },
  {
    month: "November",
    events: [
      { date: "1st", event: "Holiday break" },
      { date: "15th", event: "Level 2 assessments" },
      { date: "30th", event: "Final project submissions" },
    ],
  },
];

const PlansPage = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Plans & Calendar</h1>

      <div className="max-w-7xl mx-auto">
        {/* Payment Plans Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">Payment Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plansData.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105 duration-300">
                <h3 className="text-xl font-bold text-orange-600 mb-2">{plan.title}</h3>
                <p className="text-lg text-gray-600 mb-2">{plan.price}</p>
                <p className="text-gray-700 mb-4">{plan.description}</p>

                <h4 className="text-md font-semibold text-sky-600 mb-2">Sessions</h4>
                <p className="text-gray-600">{plan.sessions}</p>

                <h4 className="text-md font-semibold text-sky-600 mt-4 mb-2">Requirements</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {plan.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>

                <h4 className="text-md font-semibold text-sky-600 mt-4 mb-2">Bonus</h4>
                <p className="text-gray-600">{plan.bonus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar of Events Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">Calendar of Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calendarData.map((monthData, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{monthData.month}</h3>
                <ul className="list-none text-gray-700">
                  {monthData.events.map((event, idx) => (
                    <li key={idx} className="mb-2">
                      <span className="font-semibold">{event.date}:</span> {event.event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
