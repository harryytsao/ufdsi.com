import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 sm:mb-8 lg:mb-10 flex aspect-square w-full max-w-[80px] xs:max-w-[100px] sm:max-w-none items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mx-auto sm:mx-0">
          <div className="w-full h-full flex items-center justify-center p-5 xs:p-6 sm:p-7">
            {icon}
          </div>
        </div>
        <h3 className="mb-3 sm:mb-5 text-lg xs:text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center sm:text-left">
          {title}
        </h3>
        <p className="text-sm xs:text-base font-medium leading-relaxed text-body-color text-center sm:text-left sm:pr-[10px]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
