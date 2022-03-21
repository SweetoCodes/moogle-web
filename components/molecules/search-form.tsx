import React from "react";
import { useTranslate, Search } from "../../utils/helpers/functions";

interface Props {
  style: string;
}
const SearchInput: React.FC<Props> = (style) => {
  const [translation, getTranslation] = useTranslate("");

  return (
    <div className={" " + style}>
      <div className="flex flex-col">
        <div>LOGO</div>
        
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            Search(translation);
          }}
        >

          <div className="flex flex-row">
            <div>glass</div>
            <input type="text" value={translation} onChange={getTranslation} />
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
