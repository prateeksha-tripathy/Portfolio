import React from 'react'

const ShimmerButton = ({
    title, icon, position, handleClick,otherClasses
}: {
    title: string; icon: React.ReactNode, position: string; handleClick?:()=>void; otherClasses?:string
}) => {
  return (
        <button className={`inline-flex h-12 animate-shimmer w-full items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50 md:w-60 md:mt-10 gap-2 ${otherClasses} `}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>
  )
}

export default ShimmerButton