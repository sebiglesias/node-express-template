import {useCallback} from "react";

export type WordProps = {
    word: string
    onClick: (s: string) => void
}

export const Word = (props: WordProps) => {
    const {word, onClick} = props

    const onClickFn = useCallback(() => {
        onClick(word)
    }, [word])

    return (
        <button onClick={onClickFn}>{word}</button>
    )
}