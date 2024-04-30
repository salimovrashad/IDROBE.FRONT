import Aos from 'aos';
import React, { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='head-section'>
      <div className="w-75" data-aos="fade-right">
        <h1 className='text-light'>Bizimlə əməkdaşlıq edin</h1>
        <p className='text-light w-75'>Yüksək moda brendlərini onlayn olaraq kəşf edin. Ən son trendləri asanlıqla alın və ya icarəyə götürün.</p>
        <button className='btn btn-outline-light'>Bizə qoşul</button>
      </div>
    </div>
  )
}

export default Header