import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col items-center justify-center'>
                {children}
            </div>
            <div className="bg-[url('https://picsum.photos/900/1000')] bg-no-repeat bg-cover h-full w-full hidden md:block"></div>
        </div>
    )
}
