import { ArrowLeft } from "lucide-react";
function DestinationDetails({
  selectedPlace,
  setShowDestination,
  setShowBooking,
}) {
  let bestTime = "";
let weather = "";
let stay = "";

if (selectedPlace?.image?.includes("/mountains/")) {
  bestTime = "March - October";
  weather = "5°C - 20°C";
  stay = "4-6 Days";
}

else if (selectedPlace?.image?.includes("/beaches/")) {
  bestTime = "October - March";
  weather = "22°C - 35°C";
  stay = "3-5 Days";
}

else if (selectedPlace?.image?.includes("/Spiritual")) {
  bestTime = "Depends on Season";
  weather = "Varies by Location";
  stay = "2-4 Days";
}

else {
  bestTime = "Depends on Season";
  weather = "Varies by Location";
  stay = "2-5 Days";
}
  return (
    <div
  className="min-h-screen text-white bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: `url(${selectedPlace?.image})`,
  }}
>
  <div className="min-h-screen bg-black/70 backdrop-blur-sm">
      <button
  onClick={() => setShowDestination(false)}
  className="
  mb-8
  bg-black/70
  backdrop-blur-md
  px-6
  py-3
  rounded-2xl
  hover:bg-cyan-500
  duration-300
  shadow-lg
  "
>
  <ArrowLeft size={28} />
</button>


      <div className="max-w-5xl mx-auto px-8 py-10">

         <h1
  className="text-8xl text-white-300 mb-4 text-center font-bold"
  style={{
    fontFamily: "Cormorant Garamond",
    letterSpacing: "3px",
  }}
>
  {selectedPlace?.name}
</h1>

         <p className="text-stone-400 mb-8 text-center text-xl">
        📍 {selectedPlace?.location}
        </p>

        <h2 className="text-3xl font-bold mb-4">
          About Destination
        </h2>

        <p className="text-yellow/80 leading-8">
          Welcome to {selectedPlace?.name}, one of India's most beautiful travel destinations known for its unique attractions, culture, landscapes and unforgettable experiences.
        </p>
        <h2 className="text-3xl font-bold mt-12 mb-6">
  Places To Visit 📍
</h2>

<div className="grid md:grid-cols-3 gap-4">

  {selectedPlace?.placesToVisit?.map((place, index) => (

    <div
      key={index}
      className="bg-black/40 backdrop-blur-xl p-5 rounded-2xl border border-white/10"
    >
      📍 {place}
    </div>

  ))}

</div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
            <h3>🌤 Best Time</h3>
            <p>{bestTime}</p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
            <h3>🌡 Weather</h3>
            <p>{weather}</p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
            <h3>🗓 Recommended Stay</h3>
            <p>{stay}</p>
          </div>

        </div>

       <button
  onClick={() => {
    setShowDestination(false);
    setShowBooking(true);
  }}
  className="mt-12 bg-cyan-500 px-10 py-4 rounded-2xl"
>
  Book Now ✈️
</button>

      </div>

    </div>
    </div>
  );
}

export default DestinationDetails;