import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  return (
    <section className="w-full px-8 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-10">
      <div className="">
        <h3 className="text-4xl md:text-6xl font-semibold">
        Diverse Restaurant Selection:
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        From cozy local eateries to popular chains, Just Eat offers a diverse selection of restaurants to cater to every taste bud. Whether you're in the mood for classic comfort food, exotic cuisine, or healthy options, the app's extensive database ensures that you'll find something to satisfy your cravings.

3. Real-Time 
        </p>
      
      </div>
    <ShuffleGrid/>
    </section>
   
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_640.jpg",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/9316203/pexels-photo-9316203.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/18309498/pexels-photo-18309498/free-photo-of-exterior-of-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_640.jpg",
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_640.jpg",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    src: "https://cdn.pixabay.com/photo/2024/02/17/01/45/ai-generated-8578594_640.jpg",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/734562/pexels-photo-734562.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-4">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Carousel;