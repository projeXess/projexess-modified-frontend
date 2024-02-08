import React from 'react'
import { Poppins } from "next/font/google"
import type { Metadata } from 'next'
import Header from '@/components/dashboard/Header'
import Aside from '@/components/dashboard/Aside'
import "../globals.css"

const poppins = Poppins({ subsets: ['devanagari'], weight: "400" })

export const metadata: Metadata = {
    title: "ProjeXess - Dashboard",
    description: "Dashboard"
}



function DashboardLayout({ children }:
    Readonly<{
        children: React.ReactNode
    }>) {
    return (
        <section className={poppins.className}>
            <Header />
            <div className='w-full flex items-start justify-normal h-full'>
                <Aside />
                <div className='w-[80%] bg-[#d8ecff] h-full'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DashboardLayout