import React, { useState } from 'react'
import MyNavLink from './UI/MyNavLink/MyNavLink';
import { routes } from '../router';
import HamburgerMenu from './UI/HamburgerMenu/HamburgerMenu';

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    // Функция для открытия/закрытия меню
    const toggleMenu = () => {
      console.log(isOpen);
      setIsOpen(!isOpen);
    };
  
    return (
      <div className='flex flex-row-reverse items-start fixed bg-slate-500 w-full py-4 z-50 mb-20'>
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen}/>
  
        {/* Условный рендеринг для отображения/скрытия меню */}
        {isOpen && (
          <nav className="text-center absolute w-full top-16">
            <ul className="flex flex-col shadow-2xl rounded mx-auto text-2xl py-3 px-8 items-center justify-center gap-x-20 flex-wrap bg-indigo-700">
                {routes.map((route) => (
                <li key={route.path} className="max-md:mb-5">
                    <MyNavLink route={route} onSetOpen={toggleMenu}/>
                </li>
                ))}
            </ul>
        </nav>
        )}
      </div>
    );
}

export default MobileMenu