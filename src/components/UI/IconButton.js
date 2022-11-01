import React from 'react'
import { Button } from "@mui/material";


function IconButton({ onClick, image, children }) {
    return (
        <Button startIcon={image} onClick={onClick}>{children}</Button>
    )
}

export default IconButton