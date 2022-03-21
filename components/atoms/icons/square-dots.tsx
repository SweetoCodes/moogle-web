import React from "react";

interface Props {
  style: string;
}
const SquareDots: React.FC<Props> = (style) => {
  return (
    <a href="https://charliesweeting.com/">
      <div
        className={
          "flex p-[11px] rounded-full hover:bg-gray-100 cursor-pointer " + style
        }
      >
        <div className="flex flex-wrap w-[18px] h-[21px] mx-auto">
          {[...Array(9)].map((e, i) => (
            <div
              className="h-[4px] w-[4px] m-[1px] rounded-full bg-[#5f6368] "
              key={i}
            />
          ))}
        </div>
      </div>
    </a>
  );
};

export default SquareDots;
