import React from 'react'
import type { Metadata } from 'next'



type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

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
        name: "Kundapur Beach Resort",
        location: "Kundapur, India",
        rating: 4.8,
        price_per_night: 150,
        amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Gym", "Restaurant"],
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

  //please use this approach

  export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {

    const id = params.id
   
    const hotel = hotels.find(h => h.hotel_id === parseInt(id as string));

   
    return {
      title: hotel?.name,
      description:hotel?.location
    }
  }
  


const page = ({params}:any) => {
    const hotel = hotels.find(h => h.hotel_id === parseInt(params.id as string));

    return (
        <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">{hotel?.name}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-2"><strong>Location:</strong> {hotel?.location}</p>
          <div className="flex items-center mb-2">
            <p className="text-yellow-500 font-bold text-lg">Rating: {hotel?.rating}</p>
            <span className="text-yellow-500 ml-1">⭐</span>
          </div>
          <p className="text-green-500 font-bold text-lg mb-2">${hotel?.price_per_night} / night</p>
          <p className="text-gray-600 mb-4"><strong>Reviews:</strong> {hotel?.reviews}</p>
          <div className="mb-2">
            <h3 className="font-semibold mb-1">Amenities:</h3>
            <div className="flex flex-wrap gap-2">
              {hotel?.amenities.map((amenity, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{amenity}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default page;