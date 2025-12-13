import axios from 'axios';
import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Products = ({category}) => {
    const[data,setData] = useState([]);
    const[filteredProducts,setFilteredProducts]= useState([])
    const fetchData = async()=>{
        const resp =await axios.get('https://fakestoreapi.com/products')
        setData(resp.data);
    }
    console.log(data);
    
    useEffect(() => {
        if (data.length > 0 && category && category !== 'All') {
            const updatedList = data.filter(item => item.category === category);
            setFilteredProducts(updatedList);
        } else {
            // If category is 'All' or not specified, show all data
            setFilteredProducts(data);
        }
    }, [category, data]);
    useEffect(()=>{fetchData()},[])
    
  return (
    <div className='mt-15'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
        {filteredProducts.map((item,idx)=>(
          <div key={idx} className="p-4 shadow-lg rounded-lg border border-gray-200 flex flex-col items-center gap-3 hover:shadow-emerald-200 hover:scale-110 transition-all duration-150">
            <img src={item.image} alt="" className='w-73 h-60 bg-cover p-3 shadow hover:scale-125'/>
            <h1 className='mt-2 font-medium dark:text-white'>{item.title}</h1>
            <div className='flex gap-6 w-full text-gray-700 dark:text-white'>
              <span className=''>{item.price}</span>
              <div className='flex items-center '>
                <span>{item.rating.rate}</span>
                <Star color='yellow' size={20} className=''/>
              </div>
            </div>
            <p className='text-gray-600 dark:text-white line-clamp-3'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products