import React from 'react'
import { popularCategories } from '../../utils/data';
import Card from '../../components/card/Card';


export default function CustomerFavorites() {
  return (
    <section className='flexCenter h-full w-full pt-32'>
      <div>
        <div className="text-center mb-9">
          <h4 className='textStyle'>Customer Favorites</h4>
          <h1 className='font-extrabold regular-30 mt-2'>Popular Categories</h1>
        </div>
        <div className='grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {popularCategories.map((data) => (
            <Card data={data} key={data.id} />
          ))
          }
        </div>
      </div>
    </section>
  )
}
