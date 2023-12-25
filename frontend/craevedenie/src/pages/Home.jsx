import React from "react";
import BgHeader from "../images/bg-main.jpg";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import MySection from "../components/UI/MySection/MySection";
import ListCards from "../components/ListCards";

import NatureImg from "../images/nature.png";
import CultureImg from "../images/culture.png";
import HistoryImg from "../images/history.png";

function Home() {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgHeader})`,
  };
  const infoCards = [
    {
      image: HistoryImg,
      title: "История",
      description: `На этой странице содержится большая часть истории города Курска. Основные моменты, которые расположены в хронологическом порядке. Здесь вы можете найти практически любую интересующую Вас информацию о истории города Курска. От его основания, до современной истории.`,
      url: "/history",
    },
    {
      image: CultureImg,
      title: "Культура",
      description: `Эта страница расскажет Вам о известных личностях Курской области и достопримечательностях. Познакомит Вас с величайшими поэтами, актёрами,спортсменами и политическими деятелями.`,
      url: "/culture",
    },
    {
      image: NatureImg,
      title: "Природа",
      description: `Данная страница поможет раскрыть основные принципы природы Курского края. Расскажет о почвах, о местоположении, об особенностях климата и о растениях с животными, которые живут на Курской земле.`,
      url: "/nature",
    },
  ];
  return (
    <div>
      <MySection
        image={sectionStyle}
        title={'<span class="text-lime-400">Курск</span> - город возможностей'}
        description={`<span class="text-[#f00067]">Сайт-гид</span> по краеведению <span class="text-[#5a8eff]">Курска</span> и <span class="text-[#5a8eff]">Курской области</span>. На этом сайте Вы найдёте информацию про <span class="text-lime-400"> историю, культуру и природу</span> <span class="text-[#5a8eff]">Курского края</span>. Для того, чтобы проверить свои знания Вы можете пройти <span class="text-[#f00067]">тест</span>. Пообщаться с посетителями сайта или сообщить администрации о недостоверной информации можно во вкладке <span class="text-[#f00067]">«Чатик»</span>. `}
      />
      <ListCards cards={infoCards} />
    </div>
  );
}

export default Home;
