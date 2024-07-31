import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestroMenuCard from './RestroMenuCard';
import { useGlobalState } from '../../Globalstate';

function RestaurantMenu() {
  const { restaurantId } = useParams();
  const [menu, setMenu] = useState([]);


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:8000/restaurants/menus', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ restaurantId }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }

        const menuData = await response.json();
        setMenu(menuData.data.menuItems);
        console.log(menuData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  return (
    <div className='mt-20 h-full px-32 w-1/2'>
      <div>
        {menu.map((item) => (
          <RestroMenuCard 
            key={item._id}
            name={item.name}
            price={item.price}
            url={item.imageURL}
            id={item._id}
            restroId={restaurantId}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
