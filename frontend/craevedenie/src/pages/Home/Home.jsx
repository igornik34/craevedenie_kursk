import React from "react";
import BgHeader from "../../images/bg-main.jpg";
import MySection from "../../components/MySection/MySection";
import ListCardSection from "../../components/ListCardSection/ListCardSection";

import NatureImg from "../../images/nature.png";
import CultureImg from "../../images/culture.png";
import HistoryImg from "../../images/history.png";

function Home() {
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
        image={BgHeader}
        title={'<span class="text-lime-400">Курск</span> - город возможностей'}
        description={`<span class="text-red">Сайт-гид</span> по краеведению <span class="text-blue">Курска</span> и <span class="text-blue">Курской области</span>. На этом сайте Вы найдёте информацию про <span class="text-lime-400"> историю, культуру и природу</span> <span class="text-blue">Курского края</span>. Для того, чтобы проверить свои знания Вы можете пройти <span class="text-red">тест</span>. Пообщаться с посетителями сайта или сообщить администрации о недостоверной информации можно во вкладке <span class="text-red">«Чатик»</span>. `}
      />
      <ListCardSection cards={infoCards} />
    </div>
  );
}

export default Home;
