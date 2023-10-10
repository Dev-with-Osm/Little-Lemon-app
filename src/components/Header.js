import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../images/restauranfood.jpg'

const Header = () => {
  return (
    <header className='header'>
        <section>
            {/* text */}
            <div className='banner'>
                <h2>Little Limon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served
                     with a modern twist.</p>
                <Link  to='/booking'><button aria-label='On Click'>Book Your Table</button></Link>
            </div>
            {/* image */}
            <div className='banner-img'>
                <img src={banner1} alt="banner img" />
            </div>
        </section>
    </header>
  )
}

export default Header