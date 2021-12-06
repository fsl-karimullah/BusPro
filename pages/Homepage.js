import React from "react";
import Link from "next/link";
export default function Homepage() {
  return (
    <div>
      <div className=" flex justify-center mt-40 container">
        <h2 className="text-5xl md:text-6xl text-center font-sans ">
          <span className="font-bold">Make</span> HOMEPAGE DIKERJAKAN RAFI
          <span className="text-5xl md:text-6xl text-blue-600 font-bold">
            My-Kost
          </span>
        </h2>
      </div>

      <div className="flex justify-center">
        <Link href="/Auth/Register">
          <a className="bg-pink-600 p-3 text-white font-medium my-20 rounded shadow-md">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}
