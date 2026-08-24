import React from 'react';
import { useBundle } from '../context/BundleContext';
import {
  useBundleCalculations,
  FAST_SHIPPING_PRICE,
} from '../hooks/useBundleCalculations';
import { QuantityStepper } from './QuantityStepper';
import toast from 'react-hot-toast';
import { getImageUrl } from '../utils/imageUrl';
import satisfactionGaurantee from '../assets/satisfactionGaurantee.png';
import fastShipping from '../assets/fastShipping.png';

const reviewCategories = [
  'Cameras',
  'Sensors',
  'Accessories',
  'Plan',
] as const;

const MONTHLY_FINANCING_LABEL = 'as low as $19.19/mo';

export const ReviewPanel: React.FC = () => {
  const [showCheckoutConfirmation, setShowCheckoutConfirmation] =
    React.useState(false);

  const {
    cartItems,
    products,
    dispatch,
    saveCurrentBundle,
  } = useBundle();

  const {
    originalTotal,
    totalDiscount,
    finalTotal,
    totalItemsCount,
  } = useBundleCalculations();

  const selectedCartItems = Object.values(cartItems).filter(
    (item) => item.quantity > 0
  );

  return (
    <aside
      className="
        w-full
        rounded-lg
        bg-[#eaf2ff]
        pt-3.75
        box-border
        xl:sticky
        xl:top-5
        flex flex-col gap-1.25
      "
    >
      {/* Review heading */}
      <p
        className="
          block
          px-3.75
          text-[9px]
          font-medium
          leading-none
          tracking-[1.6px]
          text-[#484848]
          sm:text-[10px]
          xl:text-[10px]
        "
      >
        REVIEW
      </p>

      <div
        className="
          flex
          flex-col
          gap-2.5
          px-5
          pb-7.75
          pt-5
              md:max-lg:grid
    md:max-lg:grid-cols-2
    md:max-lg:gap-x-5
    md:max-lg:items-start
        "
      >
        {/* Header */}
        <div className='md:max-lg:col-span-2'>
          <h2
            className="
              mb-1.25
              text-[18px]
              font-normal
              leading-none
              tracking-[0.6px]
              text-[#1F1F1F]
              sm:text-[20px]
              xl:text-[18px]
            "
          >
            Your security system
          </h2>

          <p
            className="
              m-0
              max-w-[600px]
              sm:max-w-[600px]
              md:max-w-[300px]
              lg:max-w-[600px]

              text-[10px]
              leading-[130%]
              tracking-[0.6px]
              text-[#1F1F1F]/70
              sm:text-[11px]
              xl:text-[10px]
              
            "
          >
            Review your personalized protection system designed to
            keep what matters most safe.
          </p>
        </div>

        {/* Selected products */}
        <div className='flex flex-col gap-2.5 md:max-lg:col-start-1 md:max-lg:row-start-2'>
          {selectedCartItems.length === 0 ? (
            <p className="py-3 text-center text-[10px] text-[#8c96a5]">
              No products selected yet
            </p>
          ) : (
            reviewCategories.map((category) => {
              const categoryItems = selectedCartItems.filter((item) => {
                const product = products.find(
                  (candidate) => candidate.id === item.productId
                );

                return (
                  (product?.category ?? item.category) === category
                );
              });

              if (categoryItems.length === 0) {
                return null;
              }

              return (
                <section
                  key={category}
                  className="
                    flex
                    flex-col
                    gap-2
                    border-t
                    border-[#CED6DE]
                    pt-3.75
                  "
                >
                  <h3
                    className="
                      text-[9px]
                      leading-4
                      tracking-[0.3px]
                      text-[#A8B2BD]
                      sm:text-[10px]
                    "
                  >
                    {category.toUpperCase()}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {categoryItems.map((item) => {
                      const product = products.find(
                        (p) => p.id === item.productId
                      );

                      if (!product) {
                        return null;
                      }

                      const variant = product.variants?.find(
                        (v) => v.id === item.variantId
                      );

                      const title = product.title;

                      const price =
                        variant?.price ?? product.price;

                      const compareAtPrice =
                        variant?.compareAtPrice ??
                        product.compareAtPrice;

                      const hasDiscount =
                        !!compareAtPrice &&
                        compareAtPrice > price;

                      return (
                        <div
                          key={item.cartItemId}
                          className="
                            grid
                            grid-cols-[30px_minmax(0,1fr)_auto_auto]
                            items-center
                            gap-4
                          "
                        >
                          {/* Product image */}
                          <div
                            className="
                              flex
                              h-[41px]
                              w-[41px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-[5px]
                              bg-white
                            "
                          >
                            <img
                              src={getImageUrl(item.image)}
                              alt={title}
                              className="h-full w-full object-contain"
                              onError={(event) => {
                                event.currentTarget.src =
                                  getImageUrl(product.image);
                                event.currentTarget.onerror = null;
                              }}
                            />
                          </div>

                          {/* Product name */}
                          <h5
                            className="
                              m-0
                              min-w-0
                              overflow-hidden
                              text-ellipsis
                              whitespace-nowrap
                              font-[Gilroy-Medium]
                              text-[10px]
                              leading-4
                              tracking-[0.5%]
                              text-[#0B0D10]
                              sm:text-[11px]
                              xl:text-[10px]
                            "
                          >
                            {title}
                          </h5>

                          {/* Quantity */}
                          <QuantityStepper
                            size="sm"
                            variant="panel"
                            quantity={item.quantity}
                            onIncrement={() =>
                              dispatch({
                                type: 'INCREMENT_QUANTITY',
                                payload: {
                                  product,
                                  variant: variant || undefined,
                                },
                              })
                            }
                            onDecrement={() =>
                              dispatch({
                                type: 'DECREMENT_QUANTITY',
                                payload: {
                                  product,
                                  variant: variant || undefined,
                                },
                              })
                            }
                          />

                          {/* Price */}
                          <div className="flex min-w-[42px] flex-col items-end">
                            {hasDiscount && (
                              <span
                                className="
                                  text-[12px]
                                  leading-4
                                  tracking-[0.5%]
                                  text-[#6F7882]
                                  line-through
                                  sm:text-[16px]
                                  lg:text-[14px]

                                "
                              >
                                $
                                {(
                                  (compareAtPrice as number) *
                                  item.quantity
                                ).toFixed(2)}
                              </span>
                            )}

                            <span
                              className="
                                text-right
                                text-[12px]
                                font-[Gilroy-SemiBold]
                                leading-4
                                tracking-[0.5%]
                                text-[#4E2FD2]
                                sm:text-[16px]
                                lg:text-[14px]
                              "
                            >
                              $
                              {(price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })
          )}

          {/* Shipping */}
          <div className="border-t border-[#d5deeb] pt-3">
            <div
              className="
              grid
              grid-cols-[30px_minmax(0,1fr)_auto]
              items-center
              gap-2
            "
            >
              <div
                className="
                flex
                h-[30px]
                w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-[5px]
                bg-white
              "
              >
                <img
                  src={fastShipping}
                  alt="Fast Shipping"
                  className="h-full w-full object-contain"
                />
              </div>

              <h5
                className="
                m-0
                min-w-0
                overflow-hidden
                text-ellipsis
                whitespace-nowrap
                font-[Gilroy-Medium]
                text-[10px]
                font-normal
                leading-4
                tracking-[0.5%]
                text-[#0B0D10]
                sm:text-[11px]
              "
              >
                Fast Shipping
              </h5>

              <div className="flex flex-col items-end">
                <span
                  className="
                  text-[12px]
                  sm:text-[16px]
                  lg:text-[14px]
                  font-medium
                  leading-4
                  tracking-[0.5%]
                  text-[#6F7882]
                  line-through
                "
                >
                  ${FAST_SHIPPING_PRICE.toFixed(2)}
                </span>

                <span
                  className="
                  text-right
                  text-[12px]
                  font-[Gilroy-SemiBold]
                  leading-4
                  tracking-[0.5%]
                  text-[#4E2FD2]
                  sm:text-[16px]
                  lg:text-[14px]
                "
                >
                  FREE
                </span>
              </div>
            </div>
          </div>




        </div>
        {/* Guarantee + Total */}
        <div className="flex flex-col gap-2 md:max-lg:col-start-2 md:max-lg:row-start-2">
          <div className="flex items-end justify-between">
            <img
              src={satisfactionGaurantee}
              alt="100% Wyze satisfaction guarantee"
              className="
                  h-14
                  w-14
                  shrink-0
                  sm:h-16
                  sm:w-16
                "
            />

            <div className="flex min-w-0 flex-col items-end gap-1.5">
              <span
                className="
                    rounded-[3px]
                    bg-[#4E2FD2]
                    px-1.5
                    py-1
                    text-[8px]
                    font-[Gilroy-Medium]
                    leading-none
                    text-white
                    sm:px-2
                    sm:text-[9px]
                  "
              >
                {MONTHLY_FINANCING_LABEL}
              </span>

              <div className="flex items-center gap-1.5 leading-none sm:gap-2">
                {totalDiscount > 0 && (
                  <span
                    className="
                        text-[18px]
                        font-[Gilroy-Medium]
                        leading-5
                        tracking-[0.25%]
                        text-[#6F7882]
                        line-through
                        sm:text-[22px]
                        lg:text-[18px]

                      "
                  >
                    ${originalTotal.toFixed(2)}
                  </span>
                )}

                <span
                  className="
                      text-[24px]
                      font-[Gilroy-Bold]
                      leading-7
                      tracking-[-0.13%]
                      text-[#4E2FD2]
                      sm:text-[28px]
                      lg:text-[22px]
                    "
                >
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Saving message + checkout */}
          <div className="flex flex-col gap-1 pt-2.5">
            {totalDiscount > 0 && (
              <p
                className="
                    m-0
                    text-center
                    text-[12px]
                    font-[Gilroy-SemiBold]
                    leading-[100%]
                    tracking-[-0.06px]
                    text-[#0AA288]
                    sm:text-[14px]
                    lg:text-[12px]
                  "
              >
                Congrats! You're saving $
                {totalDiscount.toFixed(2)} on your security bundle!
              </p>
            )}

            <button
              type="button"
              disabled={totalItemsCount === 0}
              className="
                  w-full
                  rounded-sm
                  border-0
                  bg-[#4E2FD2]
                  px-4
                  py-3.25
                  text-[10px]
                  font-extrabold
                  text-white
                  transition-opacity
                  hover:opacity-90
                  disabled:bg-gray-200
                  disabled:text-gray-400
                "
              onClick={() =>
                setShowCheckoutConfirmation(true)
              }
            >
              Checkout
            </button>
          </div>

          {showCheckoutConfirmation && (
            <div
              className="
                  mt-1
                  flex
                  items-center
                  justify-between
                  gap-2
                  rounded
                  border
                  border-[#b9a9f4]
                  bg-violet-50
                  p-2
                  text-[8px]
                  text-[#4335a8]
                "
              role="status"
            >
              <span>
                Your checkout would continue here.
              </span>

              <button
                type="button"
                className="
                    shrink-0
                    rounded
                    border
                    border-[#b9a9f4]
                    bg-white
                    px-1.5
                    py-0.5
                    text-[8px]
                    text-violet-700
                  "
                onClick={() =>
                  setShowCheckoutConfirmation(false)
                }
              >
                Close
              </button>
            </div>
          )}

          <button
            type="button"
            className="
                block
                w-full
                border-0
                bg-transparent
                text-[14px]
                italic
                leading-[120%]
                tracking-[-0.02px]
                text-[#484848]
                underline
              "
            onClick={() => {
              saveCurrentBundle();
              toast.success('Your system has been saved.');
            }}
          >
            Save my system for later
          </button>
        </div>
      </div>
    </aside>
  );
};