import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

function AIChat({ setShowAIChat }) {
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    
    {
      sender: "ai",
      text: "hello Traveller ✨ how are you doing?",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");

   const msg = userMessage.toLowerCase().trim();
   setIsTyping(true);

    let aiReply = "";

  

    if 

    // mountains
 (msg.includes("kashmir")) {
  aiReply =
    "🏔 Kashmir\n\nKnown as 'Paradise on Earth' with snow mountains, lakes & valleys.\n\nMust Visit:\n• Srinagar (Dal Lake, Houseboats)\n• Gulmarg (Gondola Ride)\n• Pahalgam (Betaab Valley)\n• Sonmarg (Glaciers)\n\n💰 Budget: ₹18,000 – ₹50,000 (5–6 days)";
}

else if (msg.includes("shimla")) {
  aiReply =
    "🏔 Shimla\n\nA beautiful hill station famous for colonial charm, snow winters & mountain views.\n\nMust Visit:\n• Mall Road\n• Kufri\n• Jakhoo Temple\n• Ridge\n\n💰 Budget: ₹10,000 – ₹25,000 (3–5 days)";
}

else if (msg.includes("manali")) {
  aiReply =
    "🏔 Manali\n\nAdventure hub of Himachal with snow sports, rivers & scenic valleys.\n\nMust Visit:\n• Solang Valley\n• Rohtang Pass\n• Old Manali\n• Hidimba Temple\n\n💰 Budget: ₹12,000 – ₹30,000 (4–6 days)";
}

else if (msg.includes("auli")) {
  aiReply =
    "🏔 Auli\n\nIndia’s best skiing destination with snowy slopes & Himalayan views.\n\nMust Visit:\n• Auli Ropeway\n• Skiing Slopes\n• Joshimath\n• Himalayan Views\n\n💰 Budget: ₹8,000 – ₹20,000 (2–4 days)";
}

else if (msg.includes("darjeeling")) {
  aiReply =
    "🏔 Darjeeling\n\nFamous tea gardens, toy train & breathtaking sunrise views.\n\nMust Visit:\n• Tiger Hill Sunrise\n• Batasia Loop\n• Toy Train (UNESCO)\n• Tea Gardens\n\n💰 Budget: ₹10,000 – ₹25,000 (3–5 days)";
}

else if (msg.includes("meghalaya")) {
  aiReply =
    "🌧 Meghalaya\n\nLand of clouds, waterfalls & living root bridges.\n\nMust Visit:\n• Shillong\n• Cherrapunji\n• Living Root Bridges\n• Dawki River\n\n💰 Budget: ₹15,000 – ₹35,000 (5–6 days)";
}

else if (msg.includes("ziro")) {
  aiReply =
    "🌿 Ziro Valley\n\nPeaceful valley in Arunachal known for tribes, pine forests & music festival.\n\nMust Visit:\n• Ziro Music Festival\n• Pine Hills\n• Apatani Tribal Villages\n\n💰 Budget: ₹12,000 – ₹25,000 (4–5 days)";
}

else if (msg.includes("leh ladakh")) {
  aiReply =
    "🏔 Leh Ladakh\n\nHigh altitude desert with lakes, monasteries & adventure roads.\n\nMust Visit:\n• Pangong Lake\n• Nubra Valley\n• Khardung La Pass\n• Magnetic Hill\n\n💰 Budget: ₹25,000 – ₹60,000 (6–8 days)";
}

else if (msg.includes("spiti")) {
  aiReply =
    "🏔 Spiti Valley\n\nCold desert valley with monasteries, rugged mountains & raw nature.\n\nMust Visit:\n• Kaza\n• Key Monastery\n• Chandratal Lake\n• Hikkim Village\n\n💰 Budget: ₹20,000 – ₹45,000 (6–8 days)";
}

else if (msg.includes("coorg")) {
  aiReply =
    "🌿 Coorg\n\nCoffee paradise of South India with hills, waterfalls & plantations.\n\nMust Visit:\n• Abbey Falls\n• Raja’s Seat\n• Coffee Plantations\n• Dubare Elephant Camp\n\n💰 Budget: ₹10,000 – ₹25,000 (3–5 days)";
}

else if (msg.includes("mussoorie")) {
  aiReply =
    "🏔 Mussoorie\n\nQueen of Hills known for scenic views, waterfalls & colonial charm.\n\nMust Visit:\n• Kempty Falls\n• Mall Road\n• Gun Hill\n• Lal Tibba\n\n💰 Budget: ₹8,000 – ₹20,000 (2–4 days)";
}



//beaches

else if (msg.includes("goa")) {
  aiReply =
    "🏖 Goa\n\nFamous for beaches, nightlife, water sports & Portuguese vibes.\n\nMust Visit:\n• Baga Beach\n• Calangute Beach\n• Anjuna Beach\n• Fort Aguada\n\n💰 Budget: ₹12,000 – ₹35,000 (3–5 days)";
}

else if (msg.includes("mandarmani")) {
  aiReply =
    "🌊 Mandarmani\n\nQuiet beach destination in West Bengal, known for long driveable beach & sunsets.\n\nMust Visit:\n• Mandarmani Beach\n• Marine Drive (Beach Drive)\n• Nearby Tajpur Beach\n\n💰 Budget: ₹5,000 – ₹15,000 (2–3 days)";
}

else if (msg.includes("bhandardara")) {
  aiReply =
    "🌿 Bhandardara\n\nPeaceful hill + lake destination in Maharashtra, perfect for camping & nature.\n\nMust Visit:\n• Arthur Lake\n• Randha Falls\n• Wilson Dam\n• Kalsubai Peak\n\n💰 Budget: ₹6,000 – ₹18,000 (2–4 days)";
}

else if (msg.includes("diu")) {
  aiReply =
    "🏝 Diu\n\nSmall coastal island with forts, beaches & Portuguese heritage.\n\nMust Visit:\n• Diu Fort\n• Nagoa Beach\n• Naida Caves\n• St. Paul’s Church\n\n💰 Budget: ₹8,000 – ₹20,000 (3–4 days)";
}

else if (msg.includes("havelock")) {
  aiReply =
    "🏝 Havelock Island (Swaraj Dweep)\n\nFamous Andaman island with crystal clear water & scuba diving.\n\nMust Visit:\n• Radhanagar Beach\n• Elephant Beach\n• Scuba Diving Spots\n\n💰 Budget: ₹25,000 – ₹60,000 (4–6 days)";
}

else if (msg.includes("neil island")) {
  aiReply =
    "🏝 Neil Island (Shaheed Dweep)\n\nPeaceful island near Havelock, known for coral reefs & beaches.\n\nMust Visit:\n• Bharatpur Beach\n• Laxmanpur Beach\n• Natural Bridge\n\n💰 Budget: ₹20,000 – ₹50,000 (3–5 days)";
}

else if (msg.includes("lakshadweep")) {
  aiReply =
    "🏝 Lakshadweep\n\nIndia’s most beautiful island group with turquoise water & coral reefs.\n\nMust Visit:\n• Agatti Island\n• Bangaram Island\n• Kadmat Island\n• Water Sports Activities\n\n💰 Budget: ₹35,000 – ₹80,000 (4–7 days)";
}

else if (msg.includes("pondicherry")) {
  aiReply =
    "🌊 Pondicherry\n\nFrench-style coastal town with beaches, cafés & spiritual vibes.\n\nMust Visit:\n• Promenade Beach\n• Auroville\n• White Town\n• Paradise Beach\n\n💰 Budget: ₹8,000 – ₹25,000 (2–4 days)";
}

else if (msg.includes("varkala")) {
  aiReply =
    "🌊 Varkala\n\nCliff beach destination in Kerala with stunning sunsets & yoga vibes.\n\nMust Visit:\n• Varkala Cliff\n• Papanasam Beach\n• Janardanaswamy Temple\n\n💰 Budget: ₹10,000 – ₹25,000 (3–5 days)";
}

else if (msg.includes("gokarna")) {
  aiReply =
    "🌊 Gokarna\n\nPeaceful beach town in Karnataka, less crowded alternative to Goa.\n\nMust Visit:\n• Om Beach\n• Kudle Beach\n• Paradise Beach\n• Half Moon Beach\n\n💰 Budget: ₹7,000 – ₹20,000 (3–4 days)";
}

else if (msg.includes("kovalam")) {
  aiReply =
    "🌊 Kovalam\n\nFamous Kerala beach destination with lighthouse views & Ayurveda spas.\n\nMust Visit:\n• Lighthouse Beach\n• Hawa Beach\n• Samudra Beach\n\n💰 Budget: ₹10,000 – ₹25,000 (3–5 days)";
}
    //spiritual

else if (msg.includes("varanasi")) {
  aiReply =
    "🛕 Varanasi\n\nOne of the oldest spiritual cities of India, famous for Ganga Aarti & temples.\n\nMust Visit:\n• Kashi Vishwanath Temple\n• Dashashwamedh Ghat\n• Ganga Aarti\n• Sarnath\n\n💰 Budget: ₹6,000 – ₹20,000 (2–4 days)";
}

else if (msg.includes("amritsar")) {
  aiReply =
    "🛕 Amritsar\n\nSpiritual & patriotic city known for Golden Temple & Punjabi culture.\n\nMust Visit:\n• Golden Temple\n• Jallianwala Bagh\n• Wagah Border\n• Partition Museum\n\n💰 Budget: ₹7,000 – ₹22,000 (2–4 days)";
}

else if (msg.includes("ajmer")) {
  aiReply =
    "🕌 Ajmer\n\nFamous pilgrimage city known for Ajmer Sharif Dargah.\n\nMust Visit:\n• Ajmer Sharif Dargah\n• Ana Sagar Lake\n• Adhai Din Ka Jhonpra\n\n💰 Budget: ₹5,000 – ₹15,000 (1–3 days)";
}

else if (msg.includes("velankanni")) {
  aiReply =
    "⛪ Velankanni\n\nImportant Christian pilgrimage town known as 'Lourdes of the East'.\n\nMust Visit:\n• Basilica of Our Lady of Good Health\n• Velankanni Beach\n• Stations of the Cross\n\n💰 Budget: ₹6,000 – ₹18,000 (2–3 days)";
}

else if (msg.includes("anandpur")) {
  aiReply =
    "🛕 Anandpur Sahib\n\nHoly Sikh city known for Khalsa heritage and Anandpur Sahib Gurudwara.\n\nMust Visit:\n• Takht Sri Keshgarh Sahib\n• Virasat-e-Khalsa Museum\n• Gurudwaras complex\n\n💰 Budget: ₹5,000 – ₹15,000 (1–3 days)";
}

else if (msg.includes("srinagar")) {
  aiReply =
    "🏔 Srinagar\n\nBeautiful valley city famous for lakes, gardens & houseboats.\n\nMust Visit:\n• Dal Lake\n• Shikara Ride\n• Mughal Gardens\n• Shankaracharya Temple\n\n💰 Budget: ₹12,000 – ₹35,000 (3–5 days)";
}

else if (msg.includes("tawang")) {
  aiReply =
    "🏔 Tawang\n\nHimalayan town in Arunachal Pradesh known for monasteries & snowy mountains.\n\nMust Visit:\n• Tawang Monastery\n• Sela Pass\n• Madhuri Lake\n• Bum La Pass\n\n💰 Budget: ₹15,000 – ₹40,000 (4–6 days)";
}

else if (msg.includes("old goa")) {
  aiReply =
    "⛪ Old Goa\n\nHistoric Portuguese-era city with beautiful churches and heritage sites.\n\nMust Visit:\n• Basilica of Bom Jesus\n• Se Cathedral\n• Church of St. Francis of Assisi\n\n💰 Budget: ₹6,000 – ₹18,000 (2–3 days)";
}

else if (msg.includes("ayodhya")) {
  aiReply =
    "🛕 Ayodhya\n\nSacred city and birthplace of Lord Ram.\n\nMust Visit:\n• Ram Mandir\n• Saryu River Ghats\n• Hanuman Garhi\n• Kanak Bhawan\n\n💰 Budget: ₹5,000 – ₹15,000 (1–3 days)";
}

else if (msg.includes("somnath")) {
  aiReply =
    "🛕 Somnath\n\nOne of the 12 Jyotirlingas located near the Arabian Sea.\n\nMust Visit:\n• Somnath Temple\n• Somnath Beach\n• Light & Sound Show\n• Triveni Sangam\n\n💰 Budget: ₹7,000 – ₹20,000 (2–3 days)";
}

else if (msg.includes("tirupati")) {
  aiReply =
    "🛕 Tirupati\n\nOne of the richest and most visited temples in India (Lord Venkateswara).\n\nMust Visit:\n• Tirumala Temple\n• Akasa Ganga\n• Papavinasam\n• Sri Venkateswara Museum\n\n💰 Budget: ₹6,000 – ₹18,000 (2–4 days)";
}

//history

else if (msg.includes("hampi")) {
  aiReply =
    "🏛 Hampi\n\nUNESCO heritage site famous for ancient temples, ruins & boulder landscapes.\n\nMust Visit:\n• Virupaksha Temple\n• Vittala Temple (Stone Chariot)\n• Matanga Hill\n• Hampi Bazaar\n\n💰 Budget: ₹8,000 – ₹25,000 (2–4 days)";
}

else if (msg.includes("jaisalmer")) {
  aiReply =
    "🏜 Jaisalmer\n\nGolden City of Rajasthan known for desert forts & camel safari.\n\nMust Visit:\n• Jaisalmer Fort\n• Sam Sand Dunes\n• Patwon Ki Haveli\n• Desert Safari\n\n💰 Budget: ₹10,000 – ₹30,000 (3–5 days)";
}

else if (msg.includes("hyderabad")) {
  aiReply =
    "🏙 Hyderabad\n\nCity of pearls, biryani & rich Nizam heritage.\n\nMust Visit:\n• Charminar\n• Golconda Fort\n• Hussain Sagar Lake\n• Ramoji Film City\n\n💰 Budget: ₹8,000 – ₹25,000 (3–5 days)";
}

else if (msg.includes("khajuraho")) {
  aiReply =
    "🏛 Khajuraho\n\nUNESCO heritage site famous for ancient temples & intricate sculptures.\n\nMust Visit:\n• Western Group of Temples\n• Kandariya Mahadev Temple\n• Light & Sound Show\n\n💰 Budget: ₹7,000 – ₹20,000 (2–3 days)";
}

else if (msg.includes("konark")) {
  aiReply =
    "🏛 Konark\n\nFamous for Sun Temple, a UNESCO World Heritage site in Odisha.\n\nMust Visit:\n• Sun Temple\n• Chandrabhaga Beach\n• Archaeological Museum\n\n💰 Budget: ₹6,000 – ₹18,000 (2–3 days)";
}

else if (msg.includes("mahabalipuram")) {
  aiReply =
    "🏖 Mahabalipuram\n\nCoastal town known for rock-cut temples & beach views.\n\nMust Visit:\n• Shore Temple\n• Pancha Rathas\n• Arjuna’s Penance\n• Mahabalipuram Beach\n\n💰 Budget: ₹6,000 – ₹18,000 (2–3 days)";
}

else if (msg.includes("chittorgarh")) {
  aiReply =
    "🏰 Chittorgarh\n\nHistoric fort city symbolizing Rajput bravery & heritage.\n\nMust Visit:\n• Chittorgarh Fort\n• Vijay Stambh\n• Rani Padmini Palace\n• Gaumukh Reservoir\n\n💰 Budget: ₹7,000 – ₹20,000 (2–3 days)";
}

else if (msg.includes("fatehpur sikri")) {
  aiReply =
    "🏛 Fatehpur Sikri\n\nAbandoned Mughal capital near Agra with stunning architecture.\n\nMust Visit:\n• Buland Darwaza\n• Jama Masjid\n• Panch Mahal\n• Tomb of Salim Chishti\n\n💰 Budget: ₹5,000 – ₹15,000 (1–2 days)";
}

else if (msg.includes("orchha")) {
  aiReply =
    "🏰 Orchha\n\nHidden gem of Madhya Pradesh with forts, palaces & river views.\n\nMust Visit:\n• Orchha Fort Complex\n• Jahangir Mahal\n• Ram Raja Temple\n• Betwa River\n\n💰 Budget: ₹6,000 – ₹18,000 (2–3 days)";
}

else if (msg.includes("udaipur")) {
  aiReply =
    "🏰 Udaipur\n\nCity of Lakes known for palaces & romantic vibes.\n\nMust Visit:\n• City Palace\n• Lake Pichola\n• Jag Mandir\n• Fateh Sagar Lake\n\n💰 Budget: ₹10,000 – ₹30,000 (3–5 days)";
}

else if (msg.includes("mysore")) {
  aiReply =
    "🏰 Mysore\n\nRoyal city famous for palaces, silk & heritage culture.\n\nMust Visit:\n• Mysore Palace\n• Chamundi Hills\n• Brindavan Gardens\n• St. Philomena’s Church\n\n💰 Budget: ₹8,000 – ₹25,000 (3–5 days)";
}

else if (
  msg.includes("hello") ||
  msg.includes("hi") ||
  msg.includes("hey")
) {
  aiReply =
    "How can I help you?\n\nI can help you with destination plans.";
}
   else if (msg.includes("thank you") || msg.includes("thanks")) {
  aiReply =
    "😊 You're most welcome!\n\nWanderNest AI is always here for your travel plans ✈️🌍\nHave an amazing journey!";
}

   setTimeout(() => {
  setMessages((prev) => [
    ...prev,
    {
      sender: "ai",
      text: aiReply,
    },
  ]);

  setIsTyping(false); // 👈 STOP typing
}, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col">

      <div className="flex items-center gap-4 p-5 border-b border-white/20">
        <button onClick={() => setShowAIChat(false)}>
          <ArrowLeft size={30} />
        </button>

        <h1 className="text-3xl font-bold">
          WanderNest AI ✨
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] p-4 rounded-2xl whitespace-pre-line ${
              msg.sender === "user"
                ? "bg-cyan-500 ml-auto"
                : "bg-white/10"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
  <div className="bg-white/10 p-3 rounded-xl w-fit text-sm opacity-70">
    WanderNest AI is typing...
  </div>
)}
         </div>
       
      <div className="p-4 border-t border-white/20 flex gap-3">

        <input
          type="text"
          placeholder="Ask about destinations..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/50 outline-none border border-white/20"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-cyan-500 px-6 rounded-full"
        >
          <Send />
        </button>

      </div>

    </div>
  );
}

export default AIChat;