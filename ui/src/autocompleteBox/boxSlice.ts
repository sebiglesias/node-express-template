import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {words: string[]} = {
    words: []
}

const slice = createSlice({
    initialState,
    name: 'words',
    reducers: {
        setWords(state: {words: string[]}, {payload}: PayloadAction<string[]>) {
            state.words = payload
        }
    }
})

export const {setWords} = slice.actions

export default slice.reducer
