import { Suspense } from 'react'
import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar";
import LoginIn from "./components/LoginIn";
import { AuthStatus } from "../components/AuthStatus";
import { Flex, Loader  } from '@mantine/core';

import './index.scss';

const MainLayout = () => {
  return (
    <>
      <div className="rm-heroes_header">
        <NavBar />
        <Flex
          mih={50}
          gap="xs"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <LoginIn/>
          <AuthStatus />
        </Flex>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MainLayout;
