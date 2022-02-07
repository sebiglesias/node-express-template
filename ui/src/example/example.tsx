import React from 'react'
import classes from './example.module.scss'
import {ExampleType} from "./model";

export type ExampleProps = {
    example: ExampleType
}
export const Example = (props: ExampleProps) => {
    return <div className={classes.container}>Hello {props.example.name}</div>
}