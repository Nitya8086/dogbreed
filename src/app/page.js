"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../store/dogBreedsSlice";


export default function Home() {
  const dispatch = useDispatch();
  const { breeds, loading } = useSelector((state) => state.dogBreeds);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  return (
    <div className="bg-black text-white min-h-screen ">

      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-yellow-500">Dog Breed</h1>
        <div>
          <button className="px-4 py-2 bg-gray-800 rounded-md">Log In</button>
          <button className="px-4 py-2 bg-yellow-500 ml-4 rounded-md">Sign Up</button>
        </div>
      </header>
<div className="flex px-20 "> <section className="text-center py-20">
        <h2 className="text-6xl font-bold text-yellow-500">259,075,551</h2>
        <h3 className="text-4xl">USERS TRUST US</h3>
        <div className="mt-6">
          <input type="text" placeholder="Email/Phone number" className="px-4 py-2 bg-gray-800 rounded-md" />
          <button className="px-6 py-2 bg-yellow-500 ml-4 rounded-md">Sign Up</button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-10 w-full max-h-[400px]border ">
        <h2 className="text-lg font-semibold mb-2">Dog Breeds</h2>
        <div className="bg-gray-900 p-6 rounded-lg w-full h-[400px] overflow-y-scroll custom-scrollbar">
  {loading ? (
    <p>Loading...</p>
  ) : (
    Object.keys(breeds).map((breed) => (
      <div key={breed} className="py-2 border-b border-gray-700">
        <span className="capitalize">{breed}</span>
      </div>
    ))
  )}
</div>

      </section></div>

    </div>
  );
}
