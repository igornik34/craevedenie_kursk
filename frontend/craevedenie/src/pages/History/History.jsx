import React, { useEffect, useState } from "react";
import BgHistory from "../../images/bg-history.jpg";
import MySection from "../../components/MySection/MySection";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import axios from "axios";
import BlockSection from "../../components/BlockSection/BlockSection";
import classes from "./History.module.css"

function History() {
  const [history, setHistory] = useState([]);

  async function getBlocksHistory() {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/blocks_history/"
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
        image={BgHistory}
        title={'<span class="text-lime-400">История</span>'}
      />

      <Wrapper>
        <div className={classes["blocks-section"]}>
          {history.map((block) => (
            <BlockSection key={block.id} block={block} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default History;
