import {EnvUtil} from "./envUtils";
import {ExampleType} from "../example/model";

export class ExampleApis {
    private baseUrl = EnvUtil.getBaseUrl()

    getExamples(): Promise<ExampleType[]> {
        return fetch(this.baseUrl + 'examples')
            .then(response => response.json())
            .then(data => {
                return data
            })
    }

    setExample(name: string): Promise<ExampleType> {
        return fetch(this.baseUrl + 'example', {
            method: 'POST',
            body: JSON.stringify({
                example: {
                    name: name
                }
            })
        }).then(response => response.json())
            .then(data => {
                return data
            })
    }
}