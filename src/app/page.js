"use client";
import { Assets } from "@/assets/assets";
import Image from "next/image";
import { useBearStore } from "@/stores/bear";
import { useEffect, useState } from "react";
import api from "@/configs/axios";

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} bears around here...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return (
    <button
      onClick={increasePopulation}
      className="bg-black rounded-md text-white p-3"
    >
      one up
    </button>
  );
}

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/posts/1");
        setData(response.data);
      } catch (err) {
        setError(err.message || "An error occurred");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

    fetchData();

    // Optional: Clean up function
    return () => {
      // Cancel requests if needed
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-grid">
      <div className="w-5xl h-32 bg-[#ff897a68] rounded-full blur-3xl absolute top-1.5"></div>
      <div className="w-5xl h-32 bg-[#7e7aff58] rounded-full blur-3xl absolute right-3.5 top-1.5"></div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <BearCounter />
        <Controls />
        <h1>Hello</h1>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            <p className="bg-gray-100 p-4 rounded-md overflow-auto max-w-xl">
              {JSON.stringify(data, null, 2)}
            </p>
          )}
        </div>
        <Image
          src={Assets.next_svg}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={Assets.file_svg}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={Assets.window_svg}
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={Assets.globe_svg}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
