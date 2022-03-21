import { database } from "../utils/firebase/firebase_config";
import { ref, child, get } from "firebase/database";

export async function TranslateWord(word: string) {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, word));
  if (snapshot.val()) {
    return snapshot.val();
  } else {
    return word;
  }
}
