import React, { useEffect, useState } from 'react'
import BgCulture from "../images/bg-culture.jpg";
import MySection from "../components/UI/MySection/MySection";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import axios from "axios";
import BlockCategory from "../components/BlockCategory";

function Culture() {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgCulture})`,
  };

  const [culture, setCulture] = useState([]);
  const [monument, setMonument] = useState([]);

  async function getBlocksCulture(url) {
    try {
      const { data } = await axios.get(
        url
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error("Ошибка получения данных:", error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      const cultureData = await getBlocksCulture("http://80.249.145.28/api/blocks_culture/");
      setCulture(cultureData);
      const monumentData = await getBlocksCulture("http://80.249.145.28/api/blocks_monument/");
      setMonument(monumentData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <MySection
        image={sectionStyle}
        title={
          '<span class="text-lime-400">Культура</span>'
        }
      />

      <Wrapper>
        <h2 className='md:text-3xl text-center text-xl italic mb-5'>«Культура в первую очередь - выдающиеся личности, которые изменяют наш мир к лучшему. Привозносят духовно-нравственные ценности, создают памятники наследия, а также радуют наши глаза, уши и в целом чувства»</h2>
        <div className="flex flex-col gap-8 mb-10">
          {culture.map((block) => (
            <BlockCategory key={block.id} block={block} />
          ))}
        </div>
        <h2 className='md:text-3xl text-center text-xl italic mb-5'>«Культура - различные достопримечательности и национальные памятники культуры, музеи, галереи и архитектурное достояние. Памятники - наша история, её нужно знать и ценить.»</h2>
        <div className="flex flex-col gap-8 ">
          {monument.map((block) => (
            <BlockCategory key={block.id} block={block} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default Culture