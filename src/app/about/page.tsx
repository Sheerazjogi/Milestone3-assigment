import React from "react";

function page() {
  return (
    <div className="container max-w-3xl mx-auto py-36 px-4 ">
      <div className="md:text-4xl text-2xl text-center font-bold py-9">
        <h1 className="text-slate-800 py-3 font-bold tracking-wider">About Us</h1>
        <h2 className="text-slate-700 text-[24px]">Exploring the Future of Artificial Intelligence</h2>
      </div>
      <div className="text-[16px] sm:text-2xl text-slate-500 md:leading-10 leading-[25px]">
        <p>
        Uncover the intriguing realm of Artificial Intelligence with informative articles,
         thorough research, and practical applications. 
         Our mission is to make AI available to all while examining its transformative influence on society and various industries.
        </p>
        <br />
        <p>
        This blog is the outcome of a joint effort by AI enthusiasts and specialists committed to sharing the newest trends and advancements in the field.
         Whether you are an industry expert or new to the journey, 
         our content will motivate and equip you to explore AI`s potential further.
        </p>
      </div>
    </div>
  );
}

export default page;
