import { TranslateWord } from "../../lib/firebase";
import { useState } from "react";

async function Translate(str: string) {
  if (str.endsWith("  ")) {
    return str;
  } else if (str.length == 1) {
    return str;
  } else if (str.endsWith(" ")) {
    let words = str.split(" ");
    let lastWord = words[words.length - 2];
    let translation = await TranslateWord(lastWord);
    words[words.length - 2] = translation;
    let newSentence = words.join(" ");
    return newSentence;
  } else {
    return str;
  }
}

// Custom hook to translate provided text
export function useTranslate(initValue: any) {
  const [translation, setTranslation] = useState(initValue);

  const getTranslation = async (e: any) => {
    let str = e.target.value;
    let translation = await Translate(str);
    setTranslation(translation);
  };

  return [translation, getTranslation];
}

export async function Search(text: any) {
  let translation = await Translate(text + " ");
  window.open("https://google.com/search?q=" + translation);
}
