import React, { useState } from "react";

export default function kost() {
  const [data, setData] = useState([
    {
      id: 1,
      namaKos: "Buk Kos Jember",
      alamatKos: "Jalan. Mastrip Jember Jawa Timur",
      reviewKos: 56443,
      isBooked: false,
    },
  ]);
  return (
    <div className="flex flex-row  justify-center">
      <div className="text-center text-xl font-serif mx-10 md:text-2xl">
        This is my kost
      </div>
      <div>
        Ini tempat untuk mengambil data atau select data kost akses di
        localhost:3000/kost/kost ini dikerjakan Faisal
      </div>
    </div>
  );
}
