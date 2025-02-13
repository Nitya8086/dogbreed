"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../store/dogBreedsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { breeds, loading } = useSelector((state) => state.dogBreeds);
  const [userCount, setUserCount] = useState(259075551); // Initial user count

  // Calculate the total number of dog breeds (including sub-breeds)
  const totalBreeds = Object.keys(breeds).reduce((acc, breed) => {
    return acc + 1 + (breeds[breed].length || 0); // Add 1 for the main breed and the length of sub-breeds
  }, 0);

  useEffect(() => {
    dispatch(fetchBreeds());

    // Set up an interval to increment the user count every second
    const interval = setInterval(() => {
      setUserCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="flex justify-between items-center p-6">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold text-yellow-500">Dog Breed</h1>
          <div className="flex items-center gap-2">
            <p>Buy dog</p>
            <p>Markets</p>
            <p>Trade</p>
            <p>Features</p>
            <p>Earn</p>
            <p>Square</p>
            <p>More</p>
          </div>
        </div>

        <div>
          <button className="px-4 py-2 bg-gray-800 rounded-md">Log In</button>
          <button className="px-4 py-2 bg-yellow-500 ml-4 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
      <div className="flex justify-center gap-56">
        <section className="text-center py-20 ">
          <h2 className="text-6xl font-bold text-yellow-500">
            {userCount.toLocaleString()} {/* Format the number with commas */}
          </h2>
          <h3 className="text-4xl">USERS TRUST US</h3>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Email/Phone number"
              className="px-4 py-2 bg-gray-800 rounded-md"
            />
            <button className="px-6 py-2 bg-yellow-500 ml-4 rounded-md">
              Sign Up
            </button>
          </div>
        </section>

        <section className="max-w-2xl  mt-10 w-full max-h-[400px]  ">
          <h2 className="text-lg font-semibold mb-2">
            Dog Breeds ({totalBreeds} breeds)
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg w-full h-[400px] overflow-y-scroll scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 h-32 overflow-y-scroll">
            {loading ? (
              <p>Loading...</p>
            ) : (
              Object.keys(breeds).map((breed) => (
                <div key={breed} className="py-2 border-b border-gray-700">
                  <span className="capitalize">{breed}</span>
                  {breeds[breed].length > 0 && (
                    <div className="ml-4">
                      {breeds[breed].map((subBreed) => (
                        <div key={subBreed} className="capitalize">
                          - {subBreed}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
