import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useSelector} from "react-redux"
import {AppState} from "../store"
import {useWordsApi} from "../apis/useWordsApis"
import classes from "./autocompleteBox.module.scss"
import {Word} from "../word/words";
export type AutocompleteBoxProps = {
    lookWordFn: (word: string) => void
}

export const AutocompleteBox = (props: AutocompleteBoxProps) => {
    const [text, setText] = useState<string>('')
    const api = useWordsApi()
    const {words} = useSelector((state: AppState) => state.words)

    const changeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setText(value)
        props.lookWordFn(value)
    }, [api])

    const onWordClick = useCallback((s: string) => {
        setText(s)
    }, [setText])

    const wordList = useMemo(() => {
        return words.map(word => <Word word={word} onClick={onWordClick} />)
    }, [words, onWordClick])

    return (
        <>
            <input onChange={changeText} value={text}/>
            <div className={classes.wordList}>
                {wordList}
            </div>
        </>
    )
}