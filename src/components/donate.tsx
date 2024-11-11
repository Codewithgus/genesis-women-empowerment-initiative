import DonateForm from "./donate-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./footer";
import Navs from "./nav-bar";

const stripe_promise = loadStripe("");

const Donate = () => {
  return (
    <>
      <Navs />
      <Elements stripe={stripe_promise}>
        <DonateForm />
      </Elements>
      <Footer />
    </>
  );
};

export default Donate;
