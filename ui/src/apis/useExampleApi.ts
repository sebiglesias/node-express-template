import {useMemo} from "react";
import {ExampleApis} from "./exampleApis";

export const useExampleApi = () => {
    return useMemo(() => {
        return new ExampleApis()
    }, [])
}