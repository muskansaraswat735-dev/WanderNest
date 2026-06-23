import { ArrowLeft } from "lucide-react";

function PaymentPreview({
  bookingData,
  setShowPaymentPreview,
  setShowPayment
}) {

  console.log(bookingData);

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <button
        onClick={() => setShowPaymentPreview(false)}
        className="mb-8"
      >
        <ArrowLeft />
      </button>

      <div className="max-w-4xl mx-auto bg-white text-black rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-center mb-8">
          🎫 Travel Booking Summary
        </h1>

        <hr className="mb-8" />

        {/* Traveller Details */}

        <div className="bg-blue-50 p-6 rounded-2xl mb-6">

          <h2 className="text-2xl font-bold mb-4">
            👥 Traveller Details
          </h2>

          {bookingData.travellerDetails?.map(
            (person, index) => (

              <div
                key={index}
                className="border-b pb-3 mb-3"
              >
                <p><b>Name:</b> {person.name}</p>
                <p><b>Age:</b> {person.age}</p>
                <p><b>Gender:</b> {person.gender}</p>
              </div>

            )
          )}

          <p className="font-bold mt-3">
            Total Travellers : {bookingData.travelers}
          </p>

        </div>

        {/* Travel Ticket */}

        <div className="bg-cyan-50 p-6 rounded-2xl mb-6">

          <h2 className="text-2xl font-bold mb-4">
            ✈ Travel Ticket
          </h2>

          <p>
            <b>PNR :</b> {bookingData.pnr}
          </p>

          <p>
            <b>Transport :</b>
            {" "}
            {
              bookingData.transportMode === "flight"
                ? bookingData.flightName
                : bookingData.selectedTrain
            }
          </p>

          <p>
            <b>
              {
                bookingData.transportMode === "flight"
                  ? "Flight No :"
                  : "Train No :"
              }
            </b>
            {" "}
            {
              bookingData.transportMode === "flight"
                ? bookingData.flightNumber
                : bookingData.trainNumber
            }
          </p>

          <p>
            <b>From :</b>
            {" "}
            {bookingData.fromCity}
          </p>

          <p>
            <b>To :</b>
            {" "}
            {bookingData.destination?.name}
          </p>

          <p>
            <b>Departure :</b>
            {" "}
            {bookingData.departureTime}
          </p>

          <p>
            <b>Arrival :</b>
            {" "}
            {bookingData.arrivalTime}
          </p>

          <hr className="my-4" />

          <h3 className="text-xl font-bold mb-3">
            Passenger Details
          </h3>

          {
            bookingData.travellerDetails?.map(
              (person, index) => (

                <div
                  key={index}
                  className="border rounded-xl p-3 mb-3 bg-white"
                >

                  <p>
                    <b>Passenger {index + 1}</b>
                  </p>

                  <p>Name : {person.name}</p>

                  <p>Age : {person.age}</p>

                  <p>Gender : {person.gender}</p>

                  <p>
                    Seat No :
                    {" "}
                    {
                      bookingData.seatNumbers?.[index]
                    }
                  </p>

                </div>

              ))
          }

        </div>


        {/* Hotel Voucher */}

        <div className="bg-orange-50 p-6 rounded-2xl mb-6">

          <h2 className="text-2xl font-bold mb-4">
            🏨 Hotel Voucher
          </h2>

          <img
            src={bookingData.selectedHotel?.image}
            alt="Hotel"
            className="w-full h-64 object-cover rounded-2xl mb-4"
          />

          <p>
            <b>Hotel :</b>
            {" "}
            {bookingData.selectedHotel?.name}
          </p>
          <p>
            <b>Location :</b>
            {" "}
            {bookingData.selectedHotel?.address}
          </p>

          <p>
            <b>Room No :</b>
            {" "}
            {bookingData.roomNumber}
          </p>

          <p>
            <b>Room Type :</b>
            Deluxe Room
          </p>

          <p>
            <b>Guests :</b>
            {" "}
            {bookingData.travelers}
          </p>

          <p>
            <b>Check In :</b>
            {" "}
            {bookingData.checkIn}
          </p>

          <p>
            <b>Check Out :</b>
            {" "}
            {bookingData.checkOut}
          </p>

          <p>
            <b>Stay :</b>
            {" "}
            {bookingData.days} Days
          </p>

          <p>
            <b>Nights :</b>
            {" "}
            {bookingData.nights}
          </p>

        </div>

        {/* Fare Breakdown */}

        <div className="bg-green-50 p-6 rounded-2xl">

          <h2 className="text-2xl font-bold mb-4">
            💳 Fare Breakdown
          </h2>

          <p>
            Travel Fare :
            ₹{
              bookingData.grandTotal -
              (
                Number(
                  bookingData.selectedHotel?.price
                    ?.replace("₹", "")
                    ?.replace(",", "")
                    ?.replace(" / Night", "")
                ) * bookingData.nights
              )
            }
          </p>

          <p>
            Hotel Fare :
            ₹{
              Number(
                bookingData.selectedHotel?.price
                  ?.replace("₹", "")
                  ?.replace(",", "")
                  ?.replace(" / Night", "")
              ) * bookingData.nights
            }
          </p>

          <p>
            GST & Taxes :
            ₹499
          </p>

          <p>
            Convenience Fee :
            ₹199
          </p>

          <hr className="my-4" />

          <p className="text-3xl font-bold text-green-600">
            Grand Total :
            ₹{bookingData.grandTotal}
          </p>

        </div>

        <button
          onClick={() => setShowPayment(true)}
          className="
      mt-8
      w-full
      bg-gradient-to-r
      from-cyan-500
      to-blue-500
      text-white
      py-4
      rounded-2xl
      text-xl
      font-bold
      "
        >
          Proceed To Pay
        </button>

      </div>   {/* white card close */}

    </div>  

);

}

export default PaymentPreview;
