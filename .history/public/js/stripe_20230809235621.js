// import axios from 'axios';
// import { showAlert } from './alerts';
// import { loadStripe } from '@stripe/stripe-js';

// export const bookTour = async (tourId) => {
//   const stripe = await loadStripe(
//     'pk_test_51NdM1sKoRq1pwEdwtGFDeLmIQuuXAHQgT2WRCpDtUT4H0BRq5aDIR5qQubkJ3lFfnvPqLTIgsU5wwppN13qbedWc00pbZ6AsoF'
//   );

//   try {
//     //1)Get checkout session from API
//     const session = await axios(
//       `http://127.0.0.1:300/api/v1/bookings/checkout-session/${tourId}`
//     );
//     console.log(session);

//     //2)Create checkout form + charge credit card
//     await stripe.redirectToCheckout({
//       sessionId: session.data.session.id,
//     });
//   } catch (err) {
//     showAlert('error', err);
//   }
// };
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_BUkd0ZXAj6m0q0jMyRgBxNns00PPtgvjjr');

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};


