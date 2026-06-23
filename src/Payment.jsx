import {
ArrowLeft,
Home
} from "lucide-react";
import { useState } from "react";
import jsPDF from "jspdf";
import QRCode from "qrcode";


function Payment({
 bookingData,
 setShowPayment,
 setShowExplore,
 setShowDestination,
 setShowBooking,
 setShowPaymentPreview
}) {

  const [showFeedback,setShowFeedback] =
useState(false);

const [cardNumber, setCardNumber] =
useState("");

const [cardHolder, setCardHolder] =
useState("");

const [expiry, setExpiry] =
useState("");

const [cvv, setCvv] =
useState("");

const [paymentSuccess, setPaymentSuccess] =
useState(false);

const [processing, setProcessing] =
useState(false);

const transactionId =
"TXN" + Math.floor(Math.random()*10000000);

const bookingId =
"BK" + Math.floor(Math.random()*100000);
const downloadTicket = async () => {
  const doc = new jsPDF();

  // fixed values (stable)
  const bookingId = "WN" + Math.floor(Math.random() * 100000);
  const pnr = "TRV" + Math.floor(Math.random() * 100000);

  const transport =
    bookingData.transportMode === "flight"
      ? bookingData.selectedFlight
      : bookingData.selectedTrain;

  const seatNo = "A" + Math.floor(Math.random() * 30);

  const hotelPrice =
    Number(
      bookingData.selectedHotel?.price
        ?.replace("₹", "")
        ?.replace(",", "")
        ?.replace(" / Night", "")
    ) || 0;

  const travelFare = bookingData.grandTotal - hotelPrice * bookingData.nights;

  // HEADER
  doc.setFillColor(14, 165, 233);
  doc.rect(0, 0, 210, 25, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFontSize(20);

doc.setFontSize(22);
doc.setFont(undefined, "bold");

doc.text(
"WANDERNEST",
15,
15
);

doc.setFontSize(14);

doc.text(
"BOARDING PASS",
15,
22
);

doc.setFontSize(10);
doc.roundedRect(
138,
11,
50,
12,
2,
2
);

doc.text(
"CONFIRMED",
148,
19
);

  doc.setTextColor(0, 0, 0);

  // BOOKING INFO
  doc.setFontSize(11);
  doc.text(`Booking ID: ${bookingId}`, 15, 40);
  doc.text(`PNR: ${pnr}`, 120, 40);

  doc.text(`Destination: ${bookingData.destination?.name}`, 15, 50);

  // IMPORTANT FIX HERE 👇
doc.text(`From: ${bookingData.fromCity}`, 15, 60);
  doc.text(`To: ${bookingData.destination?.name}`, 120, 60);

const flightNumber = "6E-2451";
const trainNumber = "12951";

const departureTime =
bookingData.transportMode === "flight"
? "08:30 AM"
: "06:15 AM";

const arrivalTime =
bookingData.transportMode === "flight"
? "11:15 AM"
: "09:45 PM";

doc.text(
`Transport: ${
bookingData.transportMode === "flight"
? "Flight"
: "Train"
}`,
15,
70
);

doc.text(
bookingData.transportMode === "flight"
? `Flight No: ${flightNumber}`
: `Train No: ${trainNumber}`,
15,
80
);

doc.text(`Departure: ${departureTime}`, 15, 90);

doc.text(`Arrival: ${arrivalTime}`, 120, 90);
  // LINE
  doc.line(15, 100, 195, 100);

  // TRAVELLERS
  doc.setFontSize(13);
  doc.text("Traveller Details", 15, 110);

let y = 120;

bookingData.travellerDetails?.forEach((p, i) => {

const seat =
bookingData.transportMode === "flight"
? `${12+i}A`
: `B${2+i}-${15+i}`;

doc.roundedRect(
15,
y-5,
180,
22,
3,
3
);

doc.text(`Passenger ${i+1}`,20,y+2);
doc.text(`Name: ${p.name}`,20,y+10);
doc.text(`Age: ${p.age}`,80,y+10);
doc.text(`Gender: ${p.gender}`,120,y+10);
doc.text(`Seat: ${seat}`,160,y+10);

y += 30;

});


  doc.setFontSize(10);

doc.text(
"Please arrive 2 hours before departure.",
15,
270
);

doc.text(
"Have a pleasant journey.",
15,
278
);

  // PAGE 2 - HOTEL
  const qrData = await QRCode.toDataURL(
`
Booking ID: ${bookingId}
PNR: ${pnr}
Hotel: ${bookingData.selectedHotel?.name}
`
);
  doc.addPage();

  doc.setFillColor(249, 115, 22);
  doc.rect(0, 0, 210, 25, "F");

  doc.setTextColor(255, 255, 255);
doc.setFont(undefined, "bold");
doc.setFontSize(20);

doc.text(
"WANDERNEST HOTEL VOUCHER",
15,
17
);

const hotelImg = new Image();

hotelImg.src =
bookingData.selectedHotel?.image;

await new Promise((resolve)=>{
hotelImg.onload = resolve;
});

doc.addImage(
hotelImg,
"JPEG",
15,
30,
80,
50
);

doc.setFontSize(10);

doc.roundedRect(
138,
11,
50,
12,
2,
2
);

doc.text(
"ACTIVE",
155,
19
);
doc.text(
`Hotel Rating: ${bookingData.selectedHotel?.rating || "4.5 Star"}`,
15,
90
);


doc.text(
`Distance From Attraction: ${bookingData.selectedHotel?.distance || "N/A"}`,
15,
110
);

doc.text(
`Free Breakfast: Included`,
15,
120
);

doc.text(
`Free WiFi: Available`,
15,
130
);

  doc.setTextColor(0, 0, 0);

  doc.setFontSize(11);

doc.text(
`Hotel: ${bookingData.selectedHotel?.name}`,
105,
40
);

doc.text(
`Location: ${bookingData.selectedHotel?.address}`,
105,
50
);



doc.text(
`Room Type: Deluxe Room`,
120,
70
);

doc.text(
`Room No: DLX-${300 + bookingData.travelers}`,
120,
80
);

doc.text(
`Bed Type: King Size Bed`,
120,
90
);
doc.text(
`Guests: ${bookingData.travelers}`,
15,
80
);
doc.text(`Check In: ${bookingData.checkIn}`, 15, 100);
doc.text(`Check Out: ${bookingData.checkOut}`, 15, 110);
doc.text(`Stay: ${bookingData.days} Days`, 15, 120);
doc.text(`Nights: ${bookingData.nights}`, 15, 130);



doc.text(
"Amenities:",
120,
120
);

doc.text(
"WiFi, Pool, Spa, Gym",
120,
130
);

doc.text(
"Restaurant & Parking",
120,
140
);

doc.line(15, 150, 195, 150);

doc.text("Guest Details", 15, 160);

let hy = 170;

doc.text(
`Reception: +91 9876543210`,
120,
100
);

doc.text(
`Support: support@wandernest.com`,
120,
110
);

  // HOTEL GUESTS
  doc.setDrawColor(200);
// doc.roundedRect(
// 10,
// 30,
// 190,
// 120,
// 4,
// 4
// );



  bookingData.travellerDetails?.forEach((p, i) => {
    doc.text(`${i + 1}. ${p.name} | ${p.age}`, 15, hy);
    hy += 8;
  });

  // QR CODE PLACEHOLDER

doc.setDrawColor(0);

doc.addImage(
qrData,
"PNG",
150,
190,
35,
35
);


doc.setFontSize(10);

doc.text(
"Hotel Policies",
15,
190
);

doc.text(
"- Check-in after 2 PM",
15,
200
);

doc.text(
"- Check-out before 11 AM",
15,
208
);

doc.text(
"- Free cancellation within 24 hrs",
15,
216
);

doc.text(
"- Government ID required",
15,
224
);

  // TOTAL
  doc.setFontSize(14);
 doc.text(
`Grand Total: Rs ${bookingData.grandTotal}`,
15,
250
);

  doc.save("WanderNest-Ticket.pdf");
};
return (

<div className="min-h-screen bg-black text-white p-10">

<button
onClick={() => setShowPayment(false)}
className="mb-8"
>
<ArrowLeft />
</button>

<div className="
max-w-3xl
mx-auto
bg-white/10
backdrop-blur-xl
rounded-3xl
p-10
">

<h1 className="text-5xl font-bold text-center mb-3">
💳 Secure Payment
</h1>

<p className="text-center text-white/70 mb-8">
Complete your booking securely
</p>

<div className="space-y-5">

<input
type="text"
placeholder="Card Holder Name"
value={cardHolder}
onChange={(e)=>
setCardHolder(e.target.value)
}
className="w-full p-4 rounded-xl bg-black/40"
/>

<input
type="text"
placeholder="Card Number"
value={cardNumber}
onChange={(e)=>
setCardNumber(e.target.value)
}
className="w-full p-4 rounded-xl bg-black/40"
/>

<div className="grid grid-cols-2 gap-4">

<input
type="text"
placeholder="MM/YY"
value={expiry}
onChange={(e)=>
setExpiry(e.target.value)
}
className="p-4 rounded-xl bg-black/40"
/>

<input
type="password"
placeholder="CVV"
value={cvv}
onChange={(e)=>
setCvv(e.target.value)
}
className="p-4 rounded-xl bg-black/40"
/>

</div>

<div className="
bg-green-500/20
border
border-green-500
rounded-2xl
p-5
">

<h2 className="text-2xl font-bold">
Amount To Pay
</h2>

<p className="text-4xl text-green-400 mt-2">
₹{bookingData.grandTotal.toLocaleString()}
</p>

</div>

<button
onClick={() => {

if(
!cardHolder ||
!cardNumber ||
!expiry ||
!cvv
){
alert("Fill all details");
return;
}

setProcessing(true);

setTimeout(() => {

setProcessing(false);

setPaymentSuccess(true);

},2000);

}}
className="
w-full
bg-gradient-to-r
from-cyan-500
to-blue-500
py-4
rounded-2xl
text-xl
font-bold
"
>
Pay Now
</button>

</div>

</div>

{
processing && (

<div
className="
fixed
inset-0
bg-black/80
flex
items-center
justify-center
"
>

<div
className="
bg-white
text-black
p-10
rounded-3xl
text-center
"
>

<h2 className="text-4xl font-bold">
Processing Payment...
</h2>

<p className="mt-4">
Connecting to Bank Server
</p>

</div>

</div>

)
}

{
paymentSuccess && (

<div className="
fixed
inset-0
bg-black/80
flex
items-center
justify-center
">

<div className="
relative
bg-white
text-black
p-10
rounded-3xl
text-center
max-w-md
">
  <button
onClick={() => {
setPaymentSuccess(false);
}}
className="absolute top-4 right-4 text-2xl"
>
✖
</button>

<h2 className="text-4xl font-bold text-green-600">
✅ Payment Successful
</h2>

<p className="mt-4 text-lg">
Your booking has been confirmed.
</p>

<div className="mt-5 text-left">

<p>
Transaction ID :
<b> {transactionId}</b>
</p>

<p>
Booking ID :
<b> {bookingId}</b>
</p>

<p>
Amount :
<b>
₹{bookingData.grandTotal}
</b>
</p>

</div>

<button
onClick={() => {
  downloadTicket();
setShowFeedback(true);
}}
className="
mt-6
bg-green-500
text-white
px-8
py-3
rounded-xl
"
>
Download Ticket
</button>
{
showFeedback && (

<div className="
fixed
inset-0
bg-black/80
flex
items-center
justify-center
">

<div className="
bg-white
text-black
p-8
rounded-3xl
w-[500px]
">

<h2 className="text-3xl font-bold mb-5">
⭐ Rate Your Experience
</h2>

<textarea
placeholder="Write your feedback..."
className="
w-full
border
p-4
rounded-xl
h-32
"
/>

<button
className="
mt-5
w-full
bg-green-500
text-white
py-3
rounded-xl
"
onClick={() => {

  alert("Thank You For Feedback ❤️");

  setShowFeedback(false);

  setShowPayment(false);
  setShowPaymentPreview(false);
  setShowBooking(false);
  setShowDestination(false);
  setShowExplore(false);

}}
>
Submit Feedback
</button>

</div>

</div>

)
}

</div>

</div>

)

}

</div>

);

}

export default Payment;