"use client";

import { useScramble } from "use-scramble";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {

  const { ref, replay } = useScramble({
    text: title,
    speed: 0.66,
    tick: 1,
    step: 5,
    scramble: 5,
    seed: 2
  });

  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          ref={ref}
          className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] relative"
          style={{ minHeight: '1.2em' }}
        >
          <span className="invisible absolute">{title}</span>
          <span aria-hidden="true">{/* Text will be handled by useScramble */}</span>
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
