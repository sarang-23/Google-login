import React from 'react';
import logo from '../assets/logo.png';
import { Paper, makeStyles, TextField, Button } from '@material-ui/core';
import styled from "styled-components";

const useStyles = makeStyles({
    loginFormContainer : {
        width : 400,
        height : 500,
        margin : '0 auto',
        padding : 20,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    form : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
        width : '100%'
    },
    loginTxt : {
        fontSize : 26,
        margin : 30
    },
    iptBox : {
        width : '70%',
        backgroundColor : '#fff',
        marginBottom : 30
    }
})

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#1A73E8',
      },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#1A73E8',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1A73E8',
      },
    },
  });

const StyledBtn = styled(Button)({
    backgroundColor : '#1A73E8',
    color : '#fff',
    width : '70%',
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      marginBottom : 30
})

export default function Login(){
    const responseGoogle = (response) => {
        console.log(response);
      }
    const classes = useStyles();
    return(
        <>
            <img src={logo} alt="bidgely"/>
            <Paper className={classes.loginFormContainer}>
                <div className={classes.loginTxt}>Log In</div>
                <div className={classes.form}>
                    <CssTextField type="text" className={classes.iptBox} label="Email" variant="outlined"/>
                    <CssTextField type="password" className={classes.iptBox} label="Password" variant="outlined"/>
                </div>

                <StyledBtn>LOG IN</StyledBtn>
                <hr/>
                <div id="signInDiv"></div>
            </Paper>
        </>
    )
}