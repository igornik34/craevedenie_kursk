import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import DesktopMenu from "../../DesktopMenu";
import MobileMenu from "../../MobileMenu";

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true); // Добавляем состояние loading
  
    // Функция для проверки размера экрана и установки состояния isMobile
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Устанавливаем пороговое значение для мобильных устройств
      setLoading(false); // Устанавливаем loading в false после определения размера экрана
    };
  
    // Используем useEffect для проверки размера экрана при загрузке и изменении размера окна
    useEffect(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
  
      // Очищаем слушатель событий при размонтировании компонента
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }, []);
  
    // Пока происходит загрузка (loading), не показываем ничего
    if (loading) {
      return null; // Можно также отобразить спиннер загрузки или текст "Загрузка..."
    }
  
    // После определения состояния, отображаем соответствующее меню
    return (
        <header className="md:fixed w-full z-20">
                {isMobile ? <MobileMenu /> : <Wrapper><DesktopMenu /></Wrapper>}
        </header>
    );
}

export default Navbar;
