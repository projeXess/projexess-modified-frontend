/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { navLinks } from '@/utils/constants'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { BellIcon, ChevronDown, InboxIcon, MenuIcon, Search, CopyXIcon } from 'lucide-react'
import { Avatar } from '../ui/avatar'
import { AsideContext } from '@/providers/Dashboard/AsideProvider'

function Header() {
    const { setState, state } = useContext(AsideContext)
    return (
        <>
            <div className='w-full p-2 flex items-center justify-between border-b-2 sticky bg-white top-0 left-0  z-50'>
                <div className='flex items-center gap-2'>
                    <Button className='bg-white hover:bg-white'
                        onClick={() => {
                            setState(!state)
                        }}
                    >
                      
                        {
                            state ? <CopyXIcon className='bg-white text-black' /> : (<MenuIcon className='bg-white text-black' />)
                        }
                    </Button>
                    <div className='flex items-center gap-3'>
                        <img src="/logo.svg" width={30} />
                        <h1 className='md:text-[1.5rem] text-[0.8rem] font-bold' >ProjeXess</h1>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Button className='bg-white hover:bg-white size-6 lg:size-10' size={'icon'}>
                        <BellIcon fill='black' className='bg-white text-black rotate-[45deg]' />
                    </Button>

                    <Button className='bg-white hover:bg-white size-6 lg:size-10' size={'icon'}>
                        <InboxIcon className='bg-white text-black' />
                    </Button>

                    <Link to={"/dashboard/profile"}>

                        <Avatar className='bg-[#FF9898] size-10 lg:size-10 cursor-pointer'

                        >
                            <img src={"/default_profile.svg"} />
                        </Avatar>
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Header