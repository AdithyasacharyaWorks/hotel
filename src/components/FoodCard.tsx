interface FoodCardProps {
  name: string;
  image: string;
  description: string;
  link:string
}

'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import masaladosa from "@/assets/masaladosa.jpeg"

interface FoodCardProps {
    name: string;
    image: string;
    description: string;
    link:string
  }


  
function FoodCard({ name, image, description,link }: FoodCardProps) {
    const router =  useRouter()
    const handleViewClick = ()=>{
        router.push(`/${link}`)
    }
  
    return (
      <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg hover:scale-105  transition-shadow duration-300 hover:bg-red-50">
        <div className="relative h-40 mb-4 cursor-pointer">
          <Image src={masaladosa} alt={name} layout="fill" objectFit="cover" className="rounded-md" onClick={handleViewClick}/>
        </div>
        <h3 className="text-xl font-bold mb-2 text-red-600">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }

export default FoodCard