import Link from 'next/link';
import React from 'react';

const Page = () => {

  type Hotel = {
    hotel_id: number;
    name: string;
    location: string;
    rating: number;
    price_per_night: number;
    amenities: string[];
    reviews: number;
  };

  const hotels: Hotel[] = [
    {
        hotel_id: 1,
        name: "SAMUDYATHA INN & SUITES",
        location: "Kundapur, India",
        rating: 4.8,
        price_per_night: 150,
        amenities: ["Restaurant", "Bar", "Spa", "Gym", "Restaurant"],
        reviews: 1345
      },
      {
        hotel_id: 2,
        name: "Parijatha",
        location: "Kundapur, India",
        rating: 4.5,
        price_per_night: 120,
        amenities: ["Free Wi-Fi", "Beach Access", "Gym", "Restaurant", "Bar"],
        reviews: 987
      },
      {
        hotel_id: 3,
        name: "Samudyutha inn",
        location: "Kundapur, India",
        rating: 4.7,
        price_per_night: 180,
        amenities: ["Free Wi-Fi", "Spa", "Gym", "Restaurant", "Free Parking"],
        reviews: 765
      },
      {
        hotel_id: 4,
        name: "City Comfort Inn",
        location: "Kundapur, India",
        rating: 4.3,
        price_per_night: 100,
        amenities: ["Free Wi-Fi", "Gym", "Restaurant", "Business Center"],
        reviews: 512
      },
      {
        hotel_id: 5,
        name: "Sunset Paradise Hotel",
        location: "Kundapur, India",
        rating: 4.6,
        price_per_night: 140,
        amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Gym", "Restaurant", "Bar"],
        reviews: 876
      },
      {
        hotel_id: 6,
        name: "Lakeside Retreat",
        location: "Kundapur, India",
        rating: 4.4,
        price_per_night: 110,
        amenities: ["Free Wi-Fi", "Swimming Pool", "Gym", "Restaurant", "Free Parking"],
        reviews: 654
      },
      {
        hotel_id: 7,
        name: "The Royal Palace",
        location: "Kundapur, India",
        rating: 4.9,
        price_per_night: 200,
        amenities: ["Free Wi-Fi", "Casino", "Swimming Pool", "Spa", "Gym", "Restaurant", "Bar"],
        reviews: 1923
      },
      {
        hotel_id: 8,
        name: "Downtown Deluxe Hotel",
        location: "Kundapur, India",
        rating: 4.2,
        price_per_night: 120,
        amenities: ["Free Wi-Fi", "Gym", "Restaurant", "Business Center", "Free Parking"],
        reviews: 781
      },
      {
        hotel_id: 9,
        name: "Country Comfort Inn",
        location: "Kundapur, India",
        rating: 4.1,
        price_per_night: 80,
        amenities: ["Free Wi-Fi", "Swimming Pool", "Gym", "Restaurant", "Free Parking"],
        reviews: 432
      },
      {
        hotel_id: 10,
        name: "Seaside Paradise Resort",
        location: "Kundapur, India",
        rating: 4.7,
        price_per_night: 170,
        amenities: ["Free Wi-Fi", "Beach Access", "Swimming Pool", "Spa", "Gym", "Restaurant", "Bar"],
        reviews: 1012
      }
    ];

  return (
    <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold text-center mb-8">Hotel Listings</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map(hotel => (
        <div key={hotel.hotel_id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-950">{hotel.name}</h2>
            <p className="text-gray-600 mb-2">{hotel.location}</p>
            <div className="flex items-center mb-2">
              <p className="text-yellow-500 font-bold text-lg">Rating: {hotel.rating}</p>
              <span className="text-yellow-500 ml-1">⭐</span>
            </div>
            <p className="text-green-500 font-bold text-lg mb-2">${hotel.price_per_night} / night</p>
            <Link href={`/hotelList/${hotel.hotel_id}`}>
              <span className="text-blue-500 hover:underline">
                View Details
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
};

export default Page;
