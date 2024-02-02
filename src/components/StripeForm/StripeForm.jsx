import React from 'react';
import PropTypes from 'prop-types';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from './CheckoutForm';

const StripeForm = ({ primaryColor, label, publicKey, onChange, onError }) => {
    return (
    <Elements stripe={loadStripe(publicKey)}>
        <CheckoutForm 
            primaryColor={primaryColor}
            label={label}
            onChange={onChange}
            onError={onError}
        />
    </Elements>
    );
};

StripeForm.propTypes = {
    primaryColor: PropTypes.string,
    label: PropTypes.string,
    publicKey: PropTypes.string,
    onChange: PropTypes.func,
    onError: PropTypes.func,
};

export default StripeForm;
