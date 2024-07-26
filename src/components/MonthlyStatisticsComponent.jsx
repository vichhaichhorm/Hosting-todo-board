import React from "react";

export default function MonthlyStatisticsComponent() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-5 mt-12 text-center">Statistics on July</h1>
      <div className="flex gap-3 items-center">
        <div className="bg-completed h-5 rounded-lg w-1"></div>
        <p>
          Completed : <span>10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, expedita!</span> tasks
        </p>
      </div>
    </div>
  );
}
