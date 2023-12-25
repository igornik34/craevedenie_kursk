import React from "react";
import SectionTitle from "./UI/SectionTitle/SectionTitle";

function BlockCategory({ block }) {
  return (
    <div
      className="max-w-[1200px] w-full p-4 rounded-lg shadow-xl mx-auto bg-gray-400 bg-opacity-50"
      key={block.id}
    >
      <SectionTitle className="mb-6">
        {block.hasOwnProperty("link_image") ? (
          <a href={block.link_image}>{block.title}</a>
        ) : (
          block.title
        )}
      </SectionTitle>
      <div className="after:clear-both after:h-1 after:block relative">
        {block.image ? (
          <div className="md:w-1/3">
            <img
              src={block.image.replace("localhost", "80.249.145.28")}
              className="w-full h-auto rounded float-left inline mr-10 aspect-[2/1] md:aspect-[2/1.5]"
              alt=""
            />
          </div>
        ) : (
          ""
        )}
        <p
          className="text-2xl mb-5"
          dangerouslySetInnerHTML={{ __html: block.description }}
        />
        {block.hasOwnProperty("dates_life") ? (
          <p className="text-xl text-gray-700 italic">{block.dates_life}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BlockCategory;
