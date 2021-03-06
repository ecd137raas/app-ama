import React from 'react'
import {Button, Container} from '@material-ui/core'

export default function Login(){
    return (
        <Container>
            <h1>Login</h1>
            <Button variant="contained" color="primary" href="/home">
                Entrar
            </Button>
        </Container>
        )
}