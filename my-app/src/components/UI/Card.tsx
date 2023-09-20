import React from 'react'
import './Card.css'

export default function Card(props: {className: string, children: JSX.Element[]}) {
    const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}
