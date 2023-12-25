import React, { useEffect, useState } from "react";
import BgHistory from "../images/bg-history.jpg";
import MySection from "../components/UI/MySection/MySection";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import axios from "axios";
import BlockCategory from "../components/BlockCategory";

function History() {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgHistory})`,
  };

  const [history, setHistory] = useState([]);

  async function getBlocksHistory() {
    try {
      const { data } = await axios.get(
        "http://80.249.145.28/api/blocks_history/"
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
      const historyData = await getBlocksHistory();
      setHistory(historyData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <MySection
        image={sectionStyle}
        title={
          '<span class="text-lime-400">История</span>'
        }
      />

      <Wrapper>
        <div className="flex flex-col gap-8">
          {history.map((block) => (
            <BlockCategory key={block.id} block={block} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default History;
