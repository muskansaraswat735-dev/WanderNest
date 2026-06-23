import { ArrowLeft } from "lucide-react";
import { useState,useEffect } from "react";

function Booking({
 selectedPlace,
 setShowBooking,
 setShowPaymentPreview,
 setBookingData
}) {


  const [transportMode, setTransportMode] =
  useState("");
  const [selectedFlight, setSelectedFlight] =
useState("");

const [selectedTrain, setSelectedTrain] =
useState("");
const flightPrices = {
  indigo: 5499,
  airindia: 11999,
  vistara: 8299,
  akasa: 4999,
  spicejet: 5699,
};
const flightNumbers = {
  indigo: "6E-2451",
  airindia: "AI-302",
  vistara: "UK-879",
  akasa: "QP-112",
  spicejet: "SG-554"
};

const trainPrices = {
  rajdhani: 2100,
  shatabdi: 1450,
  duronto: 1950,
  garibrath: 1250,
  vandebharat: 2800,
};
const trainNumbers = {
  rajdhani: "12301",
  shatabdi: "12019",
  duronto: "12273",
  garibrath: "12909",
  vandebharat: "22301"
};
const [travelers, setTravelers] =
useState(1);


  const [step, setStep] = useState(1);

const [travellerDetails, setTravellerDetails] =
useState([
{
name:"",
age:"",
gender:"",
phone:""
}
]);

useEffect(() => {

setTravellerDetails(prev =>

Array.from(
{ length: travelers },

(_, i) => prev[i] || {

name:"",
age:"",
gender:"",
phone:""

}

)

);

}, [travelers]);
const totalPrice =

transportMode === "flight"
? (flightPrices[selectedFlight] || 0) * travelers

: (trainPrices[selectedTrain] || 0) * travelers;

const [checkIn, setCheckIn] =
useState("");

const [checkOut, setCheckOut] =
useState("");

const [fromCity, setFromCity] = useState("");
const nights =

checkIn && checkOut

? Math.ceil(
    (new Date(checkOut) - new Date(checkIn))
    / (1000 * 60 * 60 * 24)
  )

: 0;

const days =
nights > 0
? nights + 1
: 0;

const [selectedHotel, setSelectedHotel] =
useState(null);
const hotelPrice =
selectedHotel
? Number(
selectedHotel.price
.replace("₹","")
.replace(",","")
.replace(" / Night","")
)
: 0;
const grandTotal =
totalPrice +
(hotelPrice * nights);

const flightTime = {
departure: "08:30 AM",
arrival: "11:00 AM"
};

const trainTime = {
departure: "06:00 AM",
arrival: "08:30 PM"
};



  return (
<div className="relative min-h-screen overflow-hidden">

  <div
    className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
    style={{
      backgroundImage: "url('/booking/bookingbg.jpg')",
    }}
  ></div>

  <div className="relative z-10 min-h-screen px-8 py-10">

      <button
        onClick={() => setShowBooking(false)}
        className="bg-black/70 px-6 py-3 rounded-2xl hover:bg-cyan-500 duration-300 mb-10"
      >
        <ArrowLeft size={28} />
      </button>

      <div className="
max-w-5xl
mx-auto
bg-black/40
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-10
shadow-2xl
"
>
<h1
  className="
  text-6xl
  font-bold
  text-center
  mb-4
  bg-gradient-to-r
  from-sky-300
  via-cyan-400
  to-blue-500
  bg-clip-text
  text-transparent
"
>
          Book Your Trip ✈️
        </h1>
        <p className="text-center text-white/80 text-lg mt-2">
  Plan your perfect journey with comfort and style
</p>

        <p className="text-center text-white/70 mb-10">
          Destination: {selectedPlace?.name}
        </p>

        {step === 1 && (

<div className="bg-white/10 rounded-3xl p-8 mb-8">

<h2 className="text-3xl font-bold mb-5">
👥 Number Of Travellers
</h2>

<input
type="number"
min="1"
max="10"
value={travelers}
onChange={(e)=>
setTravelers(Number(e.target.value))
}
className="w-full bg-black/40 p-4 rounded-xl"
/>

<button
onClick={() => setStep(2)}
className="
mt-5
bg-cyan-500
px-8
py-3
rounded-xl
font-bold
"
>
Continue →
</button>

</div>

)}
      {step === 2 && (
<>
<div className="grid md:grid-cols-2 gap-6">

        {Array.from({ length: travelers }).map((_, index) => (

<div
  key={index}
  className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-6"
>

<h3 className="text-2xl font-bold mb-5">
  Traveller {index + 1}
</h3>

<div className="grid md:grid-cols-2 gap-4">

<input
type="text"
placeholder="Full Name"
value={travellerDetails[index]?.name || ""}
onChange={(e)=>{

const updated=[...travellerDetails];

updated[index].name=e.target.value;

setTravellerDetails(updated);

}}
className="bg-black/40 p-4 rounded-xl"
/>

<input
type="number"
placeholder="Age"
value={travellerDetails[index]?.age || ""}
onChange={(e)=>{

const updated=[...travellerDetails];

updated[index].age=e.target.value;

setTravellerDetails(updated);

}}
className="bg-black/40 p-4 rounded-xl"
/>

<select
value={travellerDetails[index]?.gender || ""}
onChange={(e)=>{

const updated=[...travellerDetails];

updated[index].gender=e.target.value;

setTravellerDetails(updated);

}}
className="bg-black/40 p-4 rounded-xl"
>

<option value="">
Gender
</option>

<option>
Male
</option>

<option>
Female
</option>

<option>
Other
</option>

</select>

<input
type="tel"
placeholder="Phone Number"
value={travellerDetails[index]?.phone || ""}
onChange={(e)=>{

const updated=[...travellerDetails];

updated[index].phone=e.target.value;

setTravellerDetails(updated);

}}
className="bg-black/40 p-4 rounded-xl"
/>

</div>

</div>

))}

          <input
            type="email"
            placeholder="Email Address"
            className="bg-black/40 p-4 rounded-xl"
          />

           <select
value={fromCity}
onChange={(e) => setFromCity(e.target.value)}
className="bg-black/40 p-4 rounded-xl"
>
            <option>Select Departure City</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
            <option>Pune</option>
            <option>Ahmedabad</option>
            <option>Jaipur</option>
            <option>Lucknow</option>
            <option>Chandigarh</option>
            <option>Bhopal</option>
            <option>Indore</option>
            <option>Nagpur</option>
            <option>Patna</option>
            <option>Ranchi</option>
            <option>Bhubaneswar</option>
            <option>Guwahati</option>
            <option>Srinagar</option>
            <option>Amritsar</option>
            <option>Kochi</option>
            <option>Thiruvananthapuram</option>
            <option>Coimbatore</option>
            <option>Visakhapatnam</option>
            <option>Durgapur</option>
            </select>

          <input
            type="date"
            className="bg-black/40 p-4 rounded-xl"
          />

         <select
         value={transportMode}
         onChange={(e) => setTransportMode(e.target.value)}
          className="bg-black/40 p-4 rounded-xl"
>
          <option value="">Transport Mode</option>
           <option value="flight">Flight ✈️</option>
           <option value="train">Train 🚆</option>
           </select>

        </div>
  {transportMode === "flight" && (

  selectedPlace?.noFlight ? (

    <div className="mt-8 bg-red-500/20 border border-red-500 p-5 rounded-2xl">
      <h3 className="text-xl font-bold">
        ❌ No Flights Available
      </h3>
    </div>

  ) : (

    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        ✈ Available Flights
      </h2>

      <select
        value={selectedFlight}
        onChange={(e) => setSelectedFlight(e.target.value)}
        className="w-full bg-black text-white p-4 rounded-xl border border-white/20"
      >
        <option value="indigo">
  IndiGo • Economy • ₹5,499
</option>

<option value="airindia">
  Air India • Business • ₹11,999
</option>

<option value="vistara">
  Vistara • Premium Economy • ₹8,299
</option>

<option value="akasa">
  Akasa Air • Economy • ₹4,999
</option>

<option value="spicejet">
  SpiceJet • Economy • ₹5,699
</option>
      </select>

    </div>

  )
)}

{transportMode === "train" && (

  <div className="mt-8">

    <h2 className="text-2xl font-bold mb-4">
      🚆 Available Trains
    </h2>

    <select
      value={selectedTrain}
      onChange={(e) => setSelectedTrain(e.target.value)}
      className="w-full bg-black text-white p-4 rounded-xl border border-white/20"
    >
      <option value="">
        Select Train
      </option>

      <option value="rajdhani">
  Rajdhani Express • AC Sleeper • ₹2,100
</option>

<option value="shatabdi">
  Shatabdi Express • AC Chair Car • ₹1,450
</option>

<option value="duronto">
  Duronto Express • AC 3 Tier • ₹1,950
</option>

<option value="garibrath">
  Garib Rath • AC 3 Tier • ₹1,250
</option>

<option value="vandebharat">
  Vande Bharat • Executive Chair Car • ₹2,800
</option>

    </select>

  </div>

)}
        {totalPrice > 0 && (

  <div className="mt-8 bg-green-500/20 border border-green-500 rounded-2xl p-5">

    <h2 className="text-2xl font-bold">
      Total Price
    </h2>

    <p className="text-3xl mt-2 text-green-400">
      ₹{totalPrice.toLocaleString()}
    </p>

  </div>
)}
<h2 className="text-3xl font-bold mt-12 mb-6">
  🏨 Hotel Booking
</h2>

<div className="grid md:grid-cols-2 gap-6">

  <div>

  <label className="block mb-2 text-white/70">
    Check-In Date
  </label>

  <input
    type="date"
    value={checkIn}
    onChange={(e) =>
      setCheckIn(e.target.value)
    }
    className="w-full bg-black/40 p-4 rounded-xl"
  />

</div>

<div>

  <label className="block mb-2 text-white/70">
    Check-Out Date
  </label>

  <input
    type="date"
    value={checkOut}
    onChange={(e) =>
      setCheckOut(e.target.value)
    }
    className="w-full bg-black/40 p-4 rounded-xl"
  />

</div>



  <select className="bg-black/40 p-4 rounded-xl">
    <option>Guests</option>
    <option>1 Guest</option>
    <option>2 Guests</option>
    <option>3 Guests</option>
    <option>4 Guests</option>
    <option>5+ Guests</option>
  </select>

</div>

  {nights > 0 && (

  <div className="mt-6 bg-white/10 p-5 rounded-2xl">

    <h3 className="text-xl font-bold">
      🗓 Stay Duration
    </h3>

    <p className="text-cyan-300 text-lg mt-2">
      {days} Days • {nights} Nights
    </p>

  </div>

)}
<h2 className="text-3xl font-bold mt-12 mb-6">
  ⭐ Recommended Hotels
</h2>
<div className="grid md:grid-cols-3 gap-6">

{selectedPlace?.hotels?.map((hotel,index)=>(

<div
  key={index}
  className="bg-white/10 rounded-3xl overflow-hidden"
>

<img
  src={hotel.image}
  alt={hotel.name}
  className="h-48 w-full object-cover"
/>

<div className="p-5">

<h3 className="text-xl font-bold">
  {hotel.name}
</h3>

<p>{hotel.rating}</p>

<p className="text-white/70">
  📍 {hotel.address}
</p>

<p className="text-white/70 mt-2">
  📍 {hotel.distance}
</p>

<p className="text-green-400 font-bold mt-3">
  {hotel.price}
</p>

<button
  onClick={() => setSelectedHotel(hotel)}
  className={`mt-4 w-full py-2 rounded-xl
  ${
    selectedHotel?.name === hotel.name
    ? "bg-green-500"
    : "bg-purple-500"
  }`}
>
  {
    selectedHotel?.name === hotel.name
    ? "Selected ✅"
    : "Select Hotel"
  }
</button>

</div>

</div>

))}

</div>
<div className="mt-12 bg-white/10 rounded-3xl p-6">

<h2 className="text-3xl font-bold mb-5">
📋 Booking Summary
</h2>

<p>
🌍 Destination :
{" "}
<span className="text-cyan-300">
{selectedPlace?.name}
</span>
</p>

<p>
👥 Travellers :
{" "}
<span className="text-cyan-300">
{travelers}
</span>
</p>

<p>
🚗 Transport :
{" "}
<span className="text-cyan-300">
{transportMode || "Not Selected"}
</span>
</p>

{selectedHotel && (

<p>
🏨 Hotel :
{" "}
<span className="text-cyan-300">
{selectedHotel.name}
</span>
</p>

)}

{days > 0 && (

<p>
🗓 Stay :
{" "}
<span className="text-cyan-300">
{days} Days • {nights} Nights
</span>
</p>

)}

{totalPrice > 0 && (

<p className="mt-3 text-2xl font-bold text-green-400">
₹{grandTotal.toLocaleString()}
</p>

)}

</div>

       

      <button
onClick={() => {
setBookingData({

destination:selectedPlace,
fromCity,

travelers,
travellerDetails,

transportMode,

selectedFlight,
selectedTrain,

flightName:
selectedFlight === "indigo"
? "IndiGo Airlines"
: selectedFlight === "airindia"
? "Air India"
: selectedFlight === "vistara"
? "Vistara"
: selectedFlight === "akasa"
? "Akasa Air"
: "SpiceJet",

flightNumber:
flightNumbers[selectedFlight] || "",

trainNumber:
trainNumbers[selectedTrain] || "",

departureTime:
transportMode === "flight"
? flightTime.departure
: trainTime.departure,

arrivalTime:
transportMode === "flight"
? flightTime.arrival
: trainTime.arrival,

seatNumbers:
Array.from(
{ length: travelers },
(_, i) => `${12 + i}${String.fromCharCode(65 + i)}`
),

roomNumber:
"RM-" + Math.floor(Math.random() * 900 + 100),

selectedHotel,

checkIn,
checkOut,

days,
nights,

grandTotal,

bookingId:
"BK" + Math.floor(Math.random()*100000),

pnr:
"PNR" + Math.floor(Math.random()*1000000),

transactionId:
"TXN" + Math.floor(Math.random()*10000000),

paymentDate:
new Date().toLocaleDateString()

});

setShowPaymentPreview(true);

}}


className="w-full mt-10 bg-cyan-500 py-4 rounded-2xl text-xl font-semibold"
>

Confirm Booking



</button>
</>
)}
      </div>

    </div>
  
</div>
  );
}

export default Booking;