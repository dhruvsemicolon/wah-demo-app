import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'

export default function HomePage() {
  const [currentSelected, setCurrentSelected] = useState({ index: 0 })
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-12 py-14" >
      <div className='flex max-lg:flex-col-reverse max-lg:items-center gap-5 w-full'>
        <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-6 mb-6 lg:mb-0">
          {[...Array(4)].map((v, index) => {
            return <div className={`w-32 h-24 border ${currentSelected?.index === index ? "border-primary" : "border-gray-200"} bg-gray-200 rounded-md flex items-center justify-center`} key={index} onClick={() => setCurrentSelected({ ...v, index })}>
              <img
                alt="Black and white jacket product image thumbnail"
                className="max-w-full max-h-full object-cover"
                src="https://storage.googleapis.com/a1aa/image/132e5e35-2789-40c7-6d8e-39d560577f20.jpg"
              />
            </div>
          })}
        </div>
        <div className="relative flex justify-center items-center bg-gray-100 rounded-md flex-1 mb-8 lg:mb-0">
          <img alt="White and black game controller product main image" className="max-w-full max-h-[320px] object-contain"
            height="320" src="https://storage.googleapis.com/a1aa/image/fcd27183-0855-47f9-0fca-1689ffde9b70.jpg"
            width="320" />
          <div
            className="absolute top-2 left-2 bg-primary text-3xl font-semibold px-3 py-1 select-none">
            -40%
          </div>
        </div>
      </div>
      <section className="flex-1 flex-shrink-0 min-w-sm space-y-4">
        <div className="flex justify-between items-start relative">
          <h2 className=" font-bold uppercase text-gray-900 max-w-[220px] leading-tight">
            40% OFF on Havic HV G-92 Gamepad
          </h2>
          <button aria-label="Add to favorites" className="absolute top-1 right-2 text-gray-400 hover:text-orange-500">
            <FiHeart />
          </button>
        </div>
        <div className="flex items-center space-x-3 text-xs text-gray-500">
          <div>
            start rating
          </div>
          <span className="text-primary font-semibold">
            (150 reviews)
          </span>
          <span>
            |
          </span>
          <span>
            25 coupons left
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-primary font-semibold text-lg line-through">
            $120
          </div>
          <div className="text-gray-900 font-bold text-xl">
            $80
          </div>
        </div>
        <div className="flex space-x-6 text-gray-500 text-xs">
          <div className="flex items-center space-x-1">
            <i className="far fa-clock">
            </i>
            <span>
              10-10-2021
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-shipping-fast">
            </i>
            <span>
              Free Shipping
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-sync-alt">
            </i>
            <span>
              30 Days Return
            </span>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-4 text-xs text-gray-600 space-y-3">
          <div className="flex justify-between">
            <span>
              Can the item be used for gaming?
            </span>
            <span className="text-primary font-semibold">
              Yes
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              Can the item affect your skin color?
            </span>
            <span className="text-primary font-semibold">
              No
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              Is the item waterproof?
            </span>
            <span className="text-primary font-semibold">
              No
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              Does the item come with a warranty period?
            </span>
            <span className="text-primary font-semibold">
              Yes
            </span>
          </div>
        </div>
        <button className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition"
          type="button">
          Generate Coupon
        </button>
        <div className="space-y-4 text-xs text-gray-600">
          <div>
            <h3 className="font-semibold mb-1">
              Deal Description
            </h3>
            <p>
              PlayStation 5 is provider with high quality and you can choose
              wireless to make controllers more to make new visual mouse
              controls.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">
              Deal Terms &amp; Condition
            </h3>
            <p>
              PlayStation 5 Generate Deal high quality and you can choose
              wireless for more wireless mouse to make new visual mouse
              controls.
            </p>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
            <span>
              4.8/5
            </span>
            <span className="text-primary font-semibold">
              150 Reviews
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-20 text-xs text-gray-600">
                5 stars
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded overflow-hidden">
                <div className="h-1 bg-primary w-[80%]">
                </div>
              </div>
              <div className="w-6 text-xs text-gray-600 text-right">
                120
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 text-xs text-gray-600">
                4 stars
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded overflow-hidden">
                <div className="h-1 bg-primary w-[10%]">
                </div>
              </div>
              <div className="w-6 text-xs text-gray-600 text-right">
                15
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 text-xs text-gray-600">
                3 stars
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded overflow-hidden">
                <div className="h-1 bg-primary w-[5%]">
                </div>
              </div>
              <div className="w-6 text-xs text-gray-600 text-right">
                7
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 text-xs text-gray-600">
                2 stars
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded overflow-hidden">
                <div className="h-1 bg-primary w-[3%]">
                </div>
              </div>
              <div className="w-6 text-xs text-gray-600 text-right">
                5
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 text-xs text-gray-600">
                1 star
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded overflow-hidden">
                <div className="h-1 bg-primary w-[2%]">
                </div>
              </div>
              <div className="w-6 text-xs text-gray-600 text-right">
                3
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
