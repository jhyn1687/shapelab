import Link from "next/link"
import React from "react"
import * as Mui from '@material-ui/core';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Mui.AppBar>
        <Mui.Toolbar>
          <Link href="/">
            <Mui.Button variant='text'>Home</Mui.Button>
          </Link>
          <Link href="/publications">
            <Mui.Button variant='text'>Publications</Mui.Button>
          </Link>
          <Link href="/members">
            <Mui.Button variant='text'>Members</Mui.Button>
          </Link>
          <Link href="/resources">
            <Mui.Button variant='text'>Resources</Mui.Button>
          </Link>
          <Link href="/positions">
            <Mui.Button variant='text'>Positions</Mui.Button>
          </Link>
          <Link href="/contact">
            <Mui.Button variant='text'>Contact</Mui.Button>
          </Link>
        </Mui.Toolbar>
      </Mui.AppBar>
    </div>
  )
}

export default Navbar