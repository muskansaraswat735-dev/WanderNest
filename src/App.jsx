import { useState } from "react";

import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import Explore from "./explore";
import AIChat from "./aichat";
import DestinationDetails from "./destinationdetails";
import Booking from "./booking";
import PaymentPreview from "./PaymentPreview";
import Payment from "./Payment";

function App() {

  const [showSignup, setShowSignup] =
    useState(false);

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [showExplore, setShowExplore] =
    useState(false);

  const [showAIChat, setShowAIChat] =
    useState(false);

  const [showDestination, setShowDestination] =
  useState(false);

  const [showBooking, setShowBooking] =
  useState(false);

  const [selectedPlace, setSelectedPlace] =
  useState(null);

  const [showPaymentPreview, setShowPaymentPreview] =
useState(false);

const [bookingData, setBookingData] =
useState(null);

const [showPayment, setShowPayment] =
useState(false);

  return (
    <>
      {isLoggedIn ? (

       showAIChat ? (

  <AIChat
    setShowAIChat={setShowAIChat}
  />

  ) : showPayment ? (

<Payment
  bookingData={bookingData}
  setShowPayment={setShowPayment}
  setShowExplore={setShowExplore}
  setShowDestination={setShowDestination}
  setShowBooking={setShowBooking}
  setShowPaymentPreview={setShowPaymentPreview}
/>


  ) : showPaymentPreview ? (

<PaymentPreview
 bookingData={bookingData}
 setShowPaymentPreview={setShowPaymentPreview}
 setShowPayment={setShowPayment}
/>

) : showBooking ? (


  <Booking
  selectedPlace={selectedPlace}
  setShowBooking={setShowBooking}
  setShowPaymentPreview={setShowPaymentPreview}
  setBookingData={setBookingData}
/>

) : showDestination ? (

  <DestinationDetails
    selectedPlace={selectedPlace}
    setShowDestination={setShowDestination}
    setShowBooking={setShowBooking}
  />

) : showExplore ? (

  <Explore
  setShowExplore={setShowExplore}
  setShowDestination={setShowDestination}
  setSelectedPlace={setSelectedPlace}
/>

) : (

          <Home
            setShowExplore={setShowExplore}
            setShowAIChat={setShowAIChat}
          />
  
        )

      ) : showSignup ? (

        <Signup
          setShowSignup={setShowSignup}
        />

      ) : (

        <Login
          setShowSignup={setShowSignup}
          setIsLoggedIn={setIsLoggedIn}
        />

      )}
    </>
  );
}

export default App;