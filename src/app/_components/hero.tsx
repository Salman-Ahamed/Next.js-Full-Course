"use client";

import { useState } from "react";

export const Hero = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500 text-cyan-500">
      <h1 className="text-4xl font-bold pb-10">Hero Component</h1>
      <button
        className="bg-cyan-500 text-white px-4 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
};
