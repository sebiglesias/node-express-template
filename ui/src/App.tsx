import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ExampleType} from "./example/model";
import {AutocompleteBox} from "./autocompleteBox/autocompleteBox";
import {setWords} from "./autocompleteBox/boxSlice";
import {useWordsApi} from "./apis/useWordsApis";
import {useDispatch} from "react-redux";

export const App = () => {
    const api = useWordsApi()
    const dispatch = useDispatch()
    const [examples, setExamples] = useState<ExampleType[]>([])

    const lookWordFn = useCallback((word: string) => {
        api.getWords(word).then(res => {
            dispatch(setWords(res))
        }).catch(e =>e)
    }, [api])

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <header className="App-header">
                        <AutocompleteBox lookWordFn={lookWordFn} />
                    </header>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
