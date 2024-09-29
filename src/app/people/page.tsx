import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "People",
  description: "people",
  // other metadata
};

const People = () => {
  return (
    <>
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            people
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
