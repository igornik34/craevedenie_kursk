import React, { useEffect, useState } from "react";
import BgNature from "../images/bg-nature.jpg";
import MySection from "../components/MySection/MySection";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import axios from "axios";
import BlockSection from "../components/BlockSection/BlockSection";

function Nature() {
  const [nature, setNature] = useState([]);

  async function getBlocksNature() {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/blocks_nature/"
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
        image={BgNature}
        title={'<span class="text-lime-400">Природа</span>'}
      />
      <Wrapper>
        <h2 className="text-3xl mb-5">
          <i>Природа</i> - водоёмы, леса, растения, животные, особенности почв,
          рельеф, климатические особенности.
        </h2>
        <div className="flex flex-col gap-8">
          {nature.map((block) => (
            <BlockSection key={block.id} block={block} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default Nature;
