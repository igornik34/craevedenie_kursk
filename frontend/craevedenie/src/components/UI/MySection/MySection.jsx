import React from "react";
import Wrapper from "../Wrapper/Wrapper";

function MySection({ image, title, description }) {
  return (
    <section
      className="min-h-screen h-full text-white flex items-center justify-center mb-16"
      style={{backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: 'fixed', ...image}}
    >
      <Wrapper>
        <div className="max-w-[1300px] mx-auto text-center">
          <h1 className="font-light text-center text-5xl md:text-8xl mb-10" dangerouslySetInnerHTML={{__html: title}}/>
          <p className="md:text-3xl text-xl" dangerouslySetInnerHTML={{__html: description}}/>
        </div>
      </Wrapper>
    </section>
  );
}

export default MySection;
