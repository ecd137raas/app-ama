import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Box, Button, Container, TextField} from '@material-ui/core'

import api from "../services/api";


interface LoginParam {
  email: string;
}

export default function Login(){
  
  const params = useParams<LoginParam>();

  useEffect(() => {
    api.get('authenticate').then(data => {
      console.log(params)
    })
},);

  return(
   
    <Container maxWidth="sm">
         <Box component="span" m={1}>
          <form  noValidate autoComplete="off">
              <TextField id="outlined-basic" name="email" label="E-mail" variant="outlined" />
          </form>
          <br></br>
          <Button  type="submit" variant="contained" color="primary">Entrar</Button>
        </Box>
       
    </Container>
    
    )
}