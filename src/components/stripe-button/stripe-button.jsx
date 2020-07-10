import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const converter = price * 100;
    const key = 'pk_test_51H3NJCFbMDNyK3r8gQZeLQZ8GT7tC0azXtmODoCoRlrknzbm7lQiNlfxkGUKDtJ4uoQEHVfGMAzS2dCBVD1z0RMa00wQA9Wz1f';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='COVID STORE LTD.'
            billingAddress
            shippingAddress
            image='https://image.flaticon.com/icons/svg/2904/2904406.svg'
            description={`Your total is $${price}`}
            bitcoin
            amount={converter}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={key}
        />
    );
}

export default StripeCheckoutButton;