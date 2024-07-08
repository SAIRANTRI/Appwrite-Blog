import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='button p-4 relative inline-flex border border-blue-500 rounded-xl items-center justify-center h-11 text-lg transition-colors hover:text-color-1'
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn