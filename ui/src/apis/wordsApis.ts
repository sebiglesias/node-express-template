import {EnvUtil} from "./envUtils";
import {ExampleType} from "../example/model";

export class WordsApis {
    private baseUrl = EnvUtil.getBaseUrl()

    getWords(wordRoot: string): Promise<string[]> {
        const url = this.baseUrl + `words/${wordRoot}`
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data
            })
    }
}