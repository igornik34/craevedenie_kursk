import React, { useEffect, useState } from "react";
import BgNature from "../images/bg-nature.jpg";
import MySection from "../components/UI/MySection/MySection";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import axios from "axios";
import BlockCategory from "../components/BlockCategory";

function Nature() {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgNature})`,
  };

  const [nature, setNature] = useState([]);

  async function getBlocksNature() {
    try {
      const { data } = await axios.get(
        "http://80.249.145.28/api/blocks_nature/"
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
      const natureData = await getBlocksNature();
      setNature(natureData);
    }

    fetchData();
  }, []);
  return (
    <div>
      <MySection
        image={sectionStyle}
        title={
          '<span class="text-lime-400">Природа</span>'
        }
      />
      <Wrapper>
      <h2 className="text-3xl mb-5"><i>Природа</i> - водоёмы, леса, растения, животные, особенности почв, рельеф, климатические особенности.</h2>
        <div className="flex flex-col gap-8">
          {nature.map((block) => (
            <BlockCategory key={block.id} block={block} />
          ))}
        </div>
      </Wrapper>
    </div>

    
  )
}

export default Nature