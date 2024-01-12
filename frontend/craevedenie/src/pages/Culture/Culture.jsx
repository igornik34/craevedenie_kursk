import React, { useEffect, useState } from "react";
import BgCulture from "../../images/bg-culture.jpg";
import MySection from "../../components/MySection/MySection";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import axios from "axios";
import BlockSection from "../../components/BlockSection/BlockSection";
import classes from "./Culture.module.css"

function Culture() {
  const [culture, setCulture] = useState([]);
  const [monument, setMonument] = useState([]);

  async function getBlocksCulture(url) {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Ошибка получения данных:", error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      const cultureData = await getBlocksCulture(
        "http://127.0.0.1:8000/api/blocks_culture/"
      );
      setCulture(cultureData);
      const monumentData = await getBlocksCulture(
        "http://127.0.0.1:8000/api/blocks_monument/"
      );
      setMonument(monumentData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <MySection
        image={BgCulture}
        title={'<span class="text-lime-400">Культура</span>'}
      />

      <Wrapper>
        <h2 className={classes.quote}>
          «Культура в первую очередь - выдающиеся личности, которые изменяют наш
          мир к лучшему. Привозносят духовно-нравственные ценности, создают
          памятники наследия, а также радуют наши глаза, уши и в целом чувства»
        </h2>
        <div className={classes["blocks-section"]}>
          {culture.map((block) => (
            <BlockSection key={block.id} block={block} />
          ))}
        </div>
        <h2 className={classes.quote}>
          «Культура - различные достопримечательности и национальные памятники
          культуры, музеи, галереи и архитектурное достояние. Памятники - наша
          история, её нужно знать и ценить.»
        </h2>
        <div className={classes["blocks-section"]}>
          {monument.map((block) => (
            <BlockSection key={block.id} block={block} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default Culture;
