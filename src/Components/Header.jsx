import React from 'react'

export default function Header({cart}) {
  return (
    <>
    <nav class="bg-gray-900 p-4 mb-6">
            <div
                class="container max-w-6xl mx-auto flex flex-col sm:flex-row gap-8 items-center"
            >
            
            <div class="relative w-full">
            <input
                type="text"
                id="search"
                class="bg-gray-700 rounded-full p-2 pl-10 transition focus:w-full"
                placeholder="Search products..."
            />
            <svg
                class="absolute left-2 top-1/2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
            </div>

        
            <span class="relative text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
                />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            </svg>
            <small
                id="cart-count"
                class="bg-red-500 text-xs text-white w-4 h-4 absolute -top-2 -right-2 rounded-full"
                >{cart.length}</small>
            </span>
        </div>
        </nav>
      
    </>
  )
}
