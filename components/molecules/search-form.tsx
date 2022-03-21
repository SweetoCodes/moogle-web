import React from "react";
import Image from "next/image";
import { useTranslate, Search } from "../../utils/helpers/functions";

interface Props {
  style: string;
}
const SearchInput: React.FC<Props> = (style) => {
  const [translation, getTranslation] = useTranslate("");

  return (
    <div className={" mx-auto " + style}>
      <div className="flex flex-col">
        <div className=" w-[272px]  ">
          <img src={"/assets/moogle-logo.png"} />
        </div>

        <form
          className="flex flex-col p-[20px]"
          onSubmit={(e) => {
            e.preventDefault();
            Search(translation);
          }}
        >
          <div className="flex flex-row h-[44px] max-w-[484px] border-[1px] rounded-[24px] border-[#dfe1e5]">
            <div className="flex align-middle pr-[13px]">glass</div>
            <input
              className="grow"
              type="text"
              value={translation}
              onChange={getTranslation}
            />
            <div>mic</div>
          </div>

          <div className="flex flex-row">
            <div>button1 </div>
            <div>button1 </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
