import React from 'react'
import FoodCard from './FoodCard';


function FoodListSection() {
    return (
      <section id="food-list" className="w-full py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-red-600">Best Food in Karavali Kundapur</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FoodCard name="Masala Dosa" image="/path/to/masala-dosa.jpg" description="Crispy dosa filled with spicy potato filling." link ='Masaladosa'/>
            <FoodCard name="Biryani" image="/path/to/biryani.jpg" description="Fragrant rice cooked with spices and meat or vegetables." link='Biriyani'/>
            <FoodCard name="Kundapur Chicken" image="/path/to/kundapur-chicken.jpg" description="Spicy chicken curry with coconut and spices." link='Kundapurchicken' />
            <FoodCard name="Ice Cream" image="/path/to/ice-cream.jpg" description="Creamy and delicious ice cream in various flavors." link='Icecream'/>
            <FoodCard name="Neer Dosa" image="/path/to/dosa.jpg" description="Thin and crispy dosa served with chutney and sambar." link='Neerdosa' />
            <FoodCard name="Fish Fry" image="/path/to/fish-fry.jpg" description="Crispy fried fish with spices." link='fishfry' />
          </div>
        </div>
      </section>
    );
  }

export default FoodListSection