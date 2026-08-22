import React from 'react';
import { useBundle } from '../context/BundleContext';
import { useBundleCalculations } from '../hooks/useBundleCalculations';
import { QuantityStepper } from './QuantityStepper';

export const ReviewPanel: React.FC = () => {
  const { cartItems, products, dispatch } = useBundle();
  const { subtotal, totalDiscount, finalTotal, totalItemsCount } = useBundleCalculations();

  // تجميع العناصر المحددة فعلياً (كميتها أكبر من 0)
  const selectedCartItems = Object.values(cartItems).filter((item) => item.quantity > 0);

  return (
    <aside className="review-panel">
      <div className="review-heading">
        <span className="review-kicker">REVIEW</span>
        <h2>Your security system</h2>
        <p>Review your personalized protection system designed to keep what matters most safe.</p>
      </div>

      {/* قائمة المنتجات المضافة للمراجعة */}
      <div className="review-items">
        {selectedCartItems.length === 0 ? (
          <p className="review-empty">No products selected yet</p>
        ) : (
          selectedCartItems.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) return null;

            const variant = product.variants?.find((v) => v.id === item.variantId);
            const title = variant ? `${product.title} (${variant.name})` : product.title;
            const price = variant?.price ?? product.price;

            return (
              <div key={item.cartItemId} className="review-item">
                <div className="review-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="review-item-copy">
                  <h5>{title}</h5>
                  <span>${price.toFixed(2)}</span>
                </div>

                <QuantityStepper
                  size="sm"
                  quantity={item.quantity}
                  onIncrement={() =>
                    dispatch({
                      type: 'INCREMENT_QUANTITY',
                      payload: { product, variant: variant || undefined },
                    })
                  }
                  onDecrement={() =>
                    dispatch({
                      type: 'DECREMENT_QUANTITY',
                      payload: { product, variant: variant || undefined },
                    })
                  }
                />
              </div>
            );
          })
        )}
      </div>

      {/* Totals Breakdown */}
      <div className="review-totals">
        <div className="review-total-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {totalDiscount > 0 && (
          <div className="review-total-row discount-row">
            <span>Discount</span>
            <span>-${totalDiscount.toFixed(2)}</span>
          </div>
        )}
        <div className="review-total-row final-row">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        disabled={totalItemsCount === 0}
        className="checkout-button"
      >
        Checkout
      </button>
    </div>
  );
};