import React from 'react'
import { useNavigate } from 'react-router-dom';
import image  from '../../assets/image.jpeg'

const Home = () => {


    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate("/user/register"); 
    };

    return (
        <>
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt="food background"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />

      {/* overlay to darken for contrast */}
      <div className="absolute inset-0 bg-black/20" />


      {/* Content container */}
      <div className="relative z-10 max-w-10xl w-full px-6 py-16 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center">
          Discover Delicious Ideas
        </h1>
        <p className="mt-4 text-2xl text-white/90 text-center max-w-2xl">
          Watch snackable cooking videos, browse top restaurants, and save recipes — all in one place.
        </p>

    
        {/* Call to action */}
        <div className="mt-10 flex items-center gap-8">
          <button onClick={handleClick}  className="h-12 w-29 px-6 py-3 bg-yellow-500 text-lg text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
            Sign up
          </button>
        </div>
      </div>
    </section>
        </>
    )
}

export default Home