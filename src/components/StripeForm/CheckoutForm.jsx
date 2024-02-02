import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { Button } from 'jcot-jstwblocklib';

const getOptions = (color='rgb(79 70 229)') => ({
    iconStyle: "solid",
    style: {
        base: {
            iconColor: color,
            color: color,
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: color
            },
            "::placeholder": {
                color: color
            },
        },
        invalid: {
            iconColor: color,
            color: color
        }
    }
});

const CheckoutForm = ({ label, primaryColor, onChange, onError }) => {
    // Hooks
    const [btnEnable, setBtnEnable] = useState(true);
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    // Event handlers
    const handleClick = async e => {
        e.preventDefault();
        
        // Validation
        if (!stripe || !elements) {
            return;
        }

        // Get a reference to a mounted CardElement
        const cardElement = elements.getElement(CardElement);

        // Generate token
        setProcessing(true);
        const result = await stripe.createToken(cardElement);
        setProcessing(false);
        
        // Process result
        if(result.token && onChange) {
            const res = await onChange(result.token);
            if(res) {
                setBtnEnable(false);
            }
        } else if(result.error) {
            // console.log('--- Stripe processing error:', result.error);
            onError && onError(result.error);
        }
    };

    return (
    <div className="flex flex-col w-full space-y-4">
        <CardElement 
          className="bg-white rounded-md border border-gray-300 py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          options={getOptions(primaryColor)} 
        />
        <Button            
            disabled={!btnEnable}
            processing={processing}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>}
            onClick={handleClick}
        >
            {label}
        </Button>
    </div>
    );
};

CheckoutForm.propTypes = {
    primaryColor: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onError: PropTypes.func,
};

CheckoutForm.defaultProps = {   
    primaryColor: 'rgb(79 70 229)',
};

export default CheckoutForm;
