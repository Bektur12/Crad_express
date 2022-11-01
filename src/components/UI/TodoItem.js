import React from 'react'
import styled from 'styled-components'

function TodoItem({ children }) {
    return (
        <Item>
            {children}
        </Item>
    )
}

export default TodoItem

const Item = styled('div')`
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
width: 100%;
background-color: white;
padding: 10px, 10px;
border-radius:10px
`