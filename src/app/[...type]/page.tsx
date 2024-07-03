import React from 'react'
import { Metadata } from 'next';
import masaladosa from "@/assets/masaladosa.jpeg"
import Image from 'next/image';

type Props = {
  params: { type: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const type = params.type
  return {
    title: type[0],
    description:type
  }
}

const page = ({ params }: any) => {
  const type = params.type;

  // Example data for hotels and timings (replace with actual data)
  const hotels = [
    { name: 'Hotel ABC', address: '123 Example Street, Kundapur', timings: '7:00 AM - 10:00 PM' },
    { name: 'Hotel XYZ', address: '456 Sample Avenue, Kundapur', timings: '6:00 AM - 11:00 PM' },
    { name: 'Hotel PQR', address: '789 Test Road, Kundapur', timings: '8:00 AM - 9:00 PM' },
    { name: 'Hotel PQR', address: '789 Test Road, Kundapur', timings: '8:00 AM - 9:00 PM' },
    { name: 'Hotel PQR', address: '789 Test Road, Kundapur', timings: '8:00 AM - 9:00 PM' },
    { name: 'Hotel PQR', address: '789 Test Road, Kundapur', timings: '8:00 AM - 9:00 PM' },
  ];

  return (
    <div className="bg-gray-200 min-h-screen">
    <div className="relative h-96 overflow-hidden">
      <Image src={masaladosa} alt="Masala Dosa" layout="fill" objectFit="cover" quality={100} />
    </div>
    <div className="w-full sm:max-w-7xl sm:mx-auto sm:px-4 ">
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md shadow-md rounded-lg p-6 sm:-mt-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{type}</h1>
        <p className="text-lg text-gray-600 mb-6">Here are some places in Kundapur where you can enjoy {type}</p>
        <div className="max-h-96 overflow-y-auto">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-md rounded-md p-4 shadow-md hover:shadow-lg transition duration-300 mb-4 sm:max-w-full"
            >
              <h2 className="text-xl font-bold text-gray-800">{hotel.name}</h2>
              <p className="text-gray-600 mb-2">{hotel.address}</p>
              <p className="text-gray-600">{hotel.timings}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default page;