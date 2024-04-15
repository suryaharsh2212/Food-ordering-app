import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestroMenuCard from './RestroMenuCard';
import { useGlobalState } from '../../Globalstate';

function RestaurantMenu() {
  const { restaurantId } = useParams();
  const [menu, setMenu] = useState([]);
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }
  
  const accessToken = getCookie('access_token');
  if (accessToken) {
    console.log('Access token:', accessToken);
  } else {
    console.log('Access token not found');
  }
  const {dispatch}=useGlobalState()
  window.addEventListener('beforeunload', function(event) {
    // Set a flag in local storage indicating that the page is being reloaded
    localStorage.setItem('isReloading', 'true');
  });
  
  window.addEventListener('load', function() {
    // Check if the page is being reloaded
    const isReloading = localStorage.getItem('isReloading');
    
    // If the page is being reloaded, perform the desired action
    if (isReloading === 'true') {
      // Perform your action here, such as dispatching a Redux action
      if (accessToken) {
        dispatch({ type: 'LOGIN' });
      } else {
        console.log("No access token found after page reload");
      }
  
      // Clear the flag in local storage
      localStorage.removeItem('isReloading');
    }
  });
  
  

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
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
