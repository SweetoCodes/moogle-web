import React from "react";
import Image from "next/image";
import { useTranslate, Search } from "../../utils/helpers/functions";
import MagnifyingGlass from "../atoms/icons/magnifying-glass";
import Microphone from "../atoms/icons/microphone";

interface Props {
  style: string;
  
}
const SearchInput: React.FC<Props> = (style) => {
  const [translation, getTranslation] = useTranslate("");

  return (
    <div className={" mx-auto w-full " + style}>
      <div className="flex flex-col w-full ">
        <div className=" w-[272px] mx-auto ">
          <img src={"/assets/moogle-logo.png"} />
        </div>

        <form
          className="flex flex-col p-[20px]"
          onSubmit={(e) => {
            e.preventDefault();
            Search(translation);
          }}
        >
          <div className="flex pt-[5px] pr-[8px] pl-[14px] flex-row h-[44px] max-w-[592px] border-[1px] rounded-[24px] border-[#dfe1e5] w-full mx-auto items-center ">
            <div className="pr-[13px] align-middle ">
              <MagnifyingGlass style="flex  " />
            </div>
            {/* <div>m</div> */}
            <input
              className="grow focus:outline-none"
              type="text"
              value={translation}
              onChange={getTranslation}
            />
            <div className=" px-[8px] align-middle ">
            <Microphone />
            </div>
          </div>

          <div className="flex flex-row mx-auto space-x-4">
            <div
              onClick={(e) => {
                e.preventDefault();
                Search(translation);
              }}
              className="bg-gray-100"
            >
              Moogle Search
            </div>
            <div className="bg-gray-100"> I'm Feeling Lucky</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
