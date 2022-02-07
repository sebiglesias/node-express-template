import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Example} from "./example/example";
import {useExampleApi} from "./apis/useExampleApi";
import {ExampleType} from "./example/model";

export const App = () => {
    const api = useExampleApi()
    const [examples, setExamples] = useState<ExampleType[]>([])
    useEffect(() => {
        api.getExamples().then(res => setExamples(res))
    }, [])

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        {examples.map(example => <Example example={example} />)}
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
