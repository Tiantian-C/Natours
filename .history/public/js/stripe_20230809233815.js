import axios from 'axios';
import { showAlert } from './alerts';
import { loadStripe } from '@stripe/stripe-js';
//const Stripe = require('stripe');
// const stripe = Stripe(
//   'pk_test_51NdM1sKoRq1pwEdwtGFDeLmIQuuXAHQgT2WRCpDtUT4H0BRq5aDIR5qQubkJ3lFfnvPqLTIgsU5wwppN13qbedWc00pbZ6AsoF'
// );

export const bookTour = async (tourId) => {
  const stripe = await loadStripe(
    'sk_test_51NdM1sKoRq1pwEdwQG6nZGd4SdaaREIWH1e7g5aNS71vSZWeJ8UJhVPwE6nUVXJ0UKiRy4DwH09JRek9rJwaZOFI001qWM74lF'
  );

  try {
    //1)Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:300/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    //2)Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};


