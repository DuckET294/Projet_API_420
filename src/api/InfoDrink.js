import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';

export default function InfoDrink() {
    const [info, setInfo] = useState([]);
    const { idDrink } = useParams();
  
  
    useEffect(() => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then((res) => res.json())
        .then((data) => setInfo(data.drinks[0]));
  
    }, [idDrink]);


    console.log([info]);
  
    if (!info) return null;
  
    if (window !== undefined && window !== null) {
      window.scrollTo({
         top: 0,
         behavior: 'instant'
      });
   }

    return (
  
      
      <div className='info_drink'>

      {<DetailCard {...info} />}

      </div>
      

    );
  }
  
  