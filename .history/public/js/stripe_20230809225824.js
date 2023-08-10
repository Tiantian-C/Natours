import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  ''
);

export const bookTour = async (tourId) => {
  try {
    //1)Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:300/api/v1/bookings/checkout-session/${tourId}`
    );

    //2)Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
