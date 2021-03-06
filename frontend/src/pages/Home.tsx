import { Container } from '@material-ui/core'
import React from 'react'
import Menu from '../components/Menu'

export default function Home(){
    return (
        <Container>
            <Menu />
            <h1>Welcome!!</h1>
        </Container>
        )
}