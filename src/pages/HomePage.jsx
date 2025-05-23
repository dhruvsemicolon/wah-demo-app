import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PRODUCTS, REVIEW_STARS, SWIPER_CONFIG } from '../helpers/constants';

// Components
const ProductThumbnails = ({ images, currentImage, onImageSelect }) => (
  <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-6 mb-6 lg:mb-0">
    {images.map((item, index) => (
      <div 
        key={index}
        className={`w-32 h-24 border-2 ${item === currentImage ? "border-primary" : "border-gray-200 cursor-pointer"} bg-gray-200 rounded-md flex items-center justify-center`}
        onClick={() => onImageSelect(item)}
      >
        <img
          alt="Product thumbnail"
          className="max-w-full max-h-full object-cover"
          src={item}
        />
      </div>
    ))}
  </div>
);

const ProductMainImage = ({ image, discount }) => (
  <div className="relative flex justify-center items-center bg-gray-100 rounded-md flex-1 max-w-5xl mb-8 lg:mb-0">
    <img 
      alt="Product main image" 
      className="max-w-full max-h-[320px] object-contain"
      height="320" 
      src={image}
      width="320" 
    />
    <div className="absolute top-2 left-2 bg-primary text-3xl font-semibold px-3 py-1 select-none">
      {discount}
    </div>
  </div>
);

const ProductInfo = ({ product }) => (
  <div className="flex justify-between items-start relative">
    <h2 className="font-bold uppercase text-gray-900 max-w-[220px] leading-tight">
      {product.product}
    </h2>
    <button aria-label="Add to favorites" className="absolute top-1 right-2 text-gray-400 hover:text-orange-500">
      <FiHeart />
    </button>
  </div>
);

const ProductRating = ({ rating, reviews, couponsLeft }) => (
  <div className="flex items-center space-x-3 text-xs text-gray-500">
    <div>{rating}</div>
    <span className="text-primary font-semibold">({reviews} reviews)</span>
    <span>|</span>
    <span>{couponsLeft} coupons left</span>
  </div>
);

const ProductPrice = ({ originalPrice, discountedPrice }) => (
  <div className="flex items-center space-x-3">
    <div className="text-primary font-semibold text-lg line-through">
      ${originalPrice}
    </div>
    <div className="text-gray-900 font-bold text-xl">
      ${discountedPrice}
    </div>
  </div>
);

const ProductDetails = ({ validUntil, shipping, returnPeriod }) => (
  <div className="flex space-x-6 text-gray-500 text-xs">
    <div className="flex items-center space-x-1">
      <i className="far fa-clock"></i>
      <span>{validUntil}</span>
    </div>
    <div className="flex items-center space-x-1">
      <i className="fas fa-shipping-fast"></i>
      <span>{shipping}</span>
    </div>
    <div className="flex items-center space-x-1">
      <i className="fas fa-sync-alt"></i>
      <span>{returnPeriod}</span>
    </div>
  </div>
);

const ProductQA = ({ qa }) => (
  <div className="border border-gray-200 rounded-md p-4 text-xs text-gray-600 space-y-3">
    {qa.map((item, index) => (
      <div className="flex justify-between" key={index}>
        <span>{item.question}</span>
        <span className="text-primary font-semibold">{item.answer}</span>
      </div>
    ))}
  </div>
);

const ProductDescription = ({ description, dealTerms }) => (
  <div className="space-y-4 text-gray-600">
    <div>
      <h3 className="font-semibold mb-1">Deal Description</h3>
      <p>{description}</p>
    </div>
    <div>
      <h3 className="font-semibold mb-1">Deal Terms & Conditions</h3>
      <p>{dealTerms}</p>
    </div>
  </div>
);

const ReviewBreakdown = ({ rating, reviews }) => (
  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 mt-6">
    <div className="text-3xl font-bold text-gray-900">
      {rating}<span className="text-gray-500 text-xl">/5</span>
      <p className="text-sm text-gray-600 mt-2">{reviews} Reviews</p>
      <a href="#" className="text-sm text-primary font-semibold underline">
        View Reviews
      </a>
    </div>
    <div className="flex flex-col space-y-1 mt-4 sm:mt-0">
      {REVIEW_STARS.map(({ stars, count }) => (
        <div key={stars} className="flex items-center space-x-3">
          <div className="flex text-primary text-sm">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </div>
          <div className="w-32 bg-gray-200 h-2 rounded overflow-hidden">
            <div
              className="bg-primary h-full"
              style={{ width: `${(count / 70) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">{count}</span>
        </div>
      ))}
    </div>
  </div>
);

const SimilarProducts = ({ products, currentProduct, onProductSelect }) => (
  <div className="mt-16">
    <h2 className="text-xl font-bold mb-4 text-left text-yellow-500 border-l-8 border-primary ps-3">
      Similar Deals
    </h2>
    <div>
      <Swiper {...SWIPER_CONFIG}>
        {products
          .filter((v) => v.product !== currentProduct?.product)
          .map((item, idx) => (
            <SwiperSlide key={idx} onClick={() => onProductSelect(item)}>
              <div className="relative cursor-pointer">
                <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {item.discount}
                </span>
                <img
                  src={item.images[0]}
                  alt={item.product}
                  className="w-full h-[200px] bg-gray-100 object-cover"
                />
                <button aria-label="Add to favorites" className="absolute top-3 right-3 text-gray-400 text-lg hover:text-primary">
                  <FiHeart />
                </button>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-gray-800">
                {item.product}
              </h3>
              <div className="flex items-center mt-1 space-x-2">
                <span className="text-primary font-semibold">
                  {item.discountedPrice}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  {item.originalPrice}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-primary text-sm">★★★★★</span>
                <span className="text-gray-500 text-xs">({item.reviews})</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  </div>
);

export default function HomePage() {
  const [currentSelected, setCurrentSelected] = useState({ ...PRODUCTS[0] });
  const [currentImage, setCurrentImage] = useState(currentSelected?.images[0]);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-12 py-14">
        <div className="flex max-lg:flex-col-reverse max-lg:items-center gap-5 w-full">
          <ProductThumbnails 
            images={currentSelected?.images} 
            currentImage={currentImage} 
            onImageSelect={setCurrentImage} 
          />
          <ProductMainImage 
            image={currentImage} 
            discount={currentSelected?.discount} 
          />
        </div>
        <section className="flex-1 flex-shrink-0 min-w-sm space-y-4">
          <ProductInfo product={currentSelected} />
          <ProductRating 
            rating={currentSelected?.rating}
            reviews={currentSelected?.reviews}
            couponsLeft={currentSelected?.couponsLeft}
          />
          <ProductPrice 
            originalPrice={currentSelected?.originalPrice}
            discountedPrice={currentSelected?.discountedPrice}
          />
          <ProductDetails 
            validUntil={currentSelected?.validUntil}
            shipping={currentSelected?.shipping}
            returnPeriod={currentSelected?.returnPeriod}
          />
          <ProductQA qa={currentSelected?.qa} />
          <button 
            className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition"
            type="button"
          >
            Generate Coupon
          </button>
          <ProductDescription 
            description={currentSelected?.description}
            dealTerms={currentSelected?.dealTerms}
          />
          <ReviewBreakdown 
            rating={currentSelected?.rating}
            reviews={currentSelected?.reviews}
          />
        </section>
      </div>
      <SimilarProducts 
        products={PRODUCTS}
        currentProduct={currentSelected}
        onProductSelect={setCurrentSelected}
      />
    </>
  );
}
