import {useMemo} from "react";
import {WordsApis} from "./wordsApis";

export const useWordsApi = () => {
    return useMemo(() => {
        return new WordsApis()
    }, [])
}