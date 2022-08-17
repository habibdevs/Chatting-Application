import { TextField } from '@mui/material'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {HiOutlineDotsVertical} from 'react-icons/hi'

const Search = () => {
  return (
    <div className='search'>
        <input placeholder='Search'/>
        <div className='searchicon'><BsSearch/></div>
        <div className='menu'><HiOutlineDotsVertical/></div>
    </div>
  )
}

export default Search