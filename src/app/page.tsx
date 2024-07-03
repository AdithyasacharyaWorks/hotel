import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Hotels in Kundapur",
  description: "Best hotels in Kundapur udupi, kundapur ,best in kundapur , samyudutha , cheap hotel , best value for money ",
};
export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-4">
      <Link href={"/hotelList"} className="underline cursor-pointer">Hotel list</Link>
      <p>Click to view list of hotels in kundapur</p>
      <div className="font-thin text-sm text-green-500">
        here you can find all the hotels/resturants  in kundapur and best deals in there
        Best hotels in Kundapur udupi, kundapur ,best in kundapur , samyudutha , cheap hotel , best value for money
      </div>
      </div>
      
    </main>
  );
}
