"use client";

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
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className="mb-3 xs:mb-4 text-2xl xs:text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
        >
          {title}
        </h2>
        <p className="text-sm xs:text-base !leading-relaxed text-body-color md:text-lg px-1 xs:px-0">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
