import type { NextPage } from 'next'
import React from 'react';
import Box from "@mui/joy/Box"
import LoginForm from '../components/LoginForm';

const Home: NextPage = () => {
  return (
    <>
      <style global jsx>{`body { 
        background: #FFE2BA;
      }`}</style>
      <Box sx={{ position: "relative", width: "100vw", height: "100vh", background: "transparent" }} >
        <LoginForm />
      </Box>
    </>
  )
}

export default Home
