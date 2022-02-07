import React from 'react'
import classes from './example.module.scss'

export type ExampleProps = {
    name: string
}
export const Example = (props: ExampleProps) => {
    return <div className={classes.container}>Hello {props.name}</div>
}