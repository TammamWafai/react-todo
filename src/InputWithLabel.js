import React, { useEffect, useRef } from 'react'

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    })


    return (
        <>
            <label htmlFor='todoTitle'>{children}</label>
            <input
                id="todoTitle"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                ref={inputRef}>
            </input>
        </>
    )
}

export default InputWithLabel