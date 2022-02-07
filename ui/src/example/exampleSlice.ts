import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {name: string} = {
    name: 'example'
}

const slice = createSlice({
    initialState,
    name: 'example',
    reducers: {
        setExampleName(state: {name: string}, {payload}: PayloadAction<string>) {
            state.name = payload
        }
    }
})

export const {setExampleName} = slice.actions

export default slice.reducer
