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
          Discover the fascinating world of Artificial Intelligence through
          insightful articles, in-depth research, and real-world applications.
          Our goal is to make AI accessible to everyone while exploring its
          transformative impact on society and industries.
        </p>
        <br />
        <p>
          This blog is the result of a collaborative effort by AI enthusiasts
          and experts dedicated to sharing the latest trends and innovations in
          the field. Whether your an industry veteran or just starting your
          journey, our content will inspire and empower you to delve deeper into
          the potential of AI.
        </p>
      </div>
    </div>
  );
}

export default page;
