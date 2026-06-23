import { useState } from "react";

import {
  Search,
  Settings,
  Phone,
  Mail,
  MapPin,
  Star,
  Info,
 MessageCircle,
  Moon,
  Sun,
  X,
  LogOut,
} from "lucide-react";

import bgImage from "./assets/travellers.jpg";
function Home({
  setShowExplore,
  setShowAIChat,
}) {
  // STATES
  const [showAbout, setShowAbout] =
    useState(false);
  const [showSettings, setShowSettings] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  const [language, setLanguage] =
    useState("english");

  // LANGUAGE TEXTS
  const text = {
    english: {
      title: "Explore India's Finest Destinations",
      sub: "-from majestic mountains to serene beaches,discover India like never before.",
      trending: "Trending Destinations",
      about: "About",
      contact: "Chat with us",
      settings: "Settings",
      aboutText:
        "Welcome to WanderNest- your trusted travel companion for exploring the incredible beauty of India. From snow-capped mountains and golden deserts to serene beaches and ancient temples,discover destinations that create memories for a lifetime🔅 ",
      chat: "Chat With WanderNest AI",
      footer: "Travel Beyond Limits ✨",
      ask: "Ask anything...",
      send: "Send",
      close: "Close",
    },

    hindi: {
      title: "भारत के सबसे खूबसूरत पर्यटन स्थलों की खोज करें",
      sub: "-शानदार पर्वतों से शांत तटों तक, भारत की अद्भुत यात्रा का अनुभव करें |",
      trending: "ट्रेंडिंग डेस्टिनेशन",
      about: "जानकारी",
      contact: "हमसे जुड़ें",
      settings: "सेटिंग्स",
      search: "जगह खोजें...",
      aboutText:
        "WanderNest में आपका स्वागत है — भारत की अद्भुत सुंदरता को खोजने के लिए आपका विश्वसनीय यात्रा साथी। बर्फ से ढके पहाड़ों, सुनहरे रेगिस्तानों, शांत समुद्र तटों और प्राचीन मंदिरों से लेकर ऐसी जगहों तक, जहाँ हर पल एक याद बन जाए, उन सभी गंतव्यों की खोज करें जो जीवनभर की यादें बना दें।",
      chat: "हमसे बात करें",
      footer: "सीमाओं से परे यात्रा करें ✨",
      ask: "कुछ पूछें...",
      send: "भेजें",
      close: "बंद करें",
    },

    bengali: {
      title: "ভারতের সেরা জায়গাগুলো নতুনভাবে আবিষ্কার করুন",
      sub: "-দুর্দান্ত পর্বত থেকে শান্ত সমুদ্রতট পর্যন্ত, ভারতের এক অসাধারণ ভ্রমণের অভিজ্ঞতা নিন।",
      trending: "ট্রেন্ডিং ডেস্টিনেশন",
      about: "সম্পর্কে",
      contact: "আমাদের সাথে যুক্ত হন",
      settings: "সেটিংস",
      search: "জায়গা খুঁজুন...",
      aboutText:
        "WanderNest-এ আপনাকে স্বাগতম — ভারতের অপূর্ব সৌন্দর্যকে আবিষ্কার করার জন্য আপনার নির্ভরযোগ্য ভ্রমণ সঙ্গী। বরফে ঢাকা পাহাড়, সোনালী মরুভূমি, শান্ত সমুদ্রসৈকত এবং প্রাচীন মন্দির থেকে শুরু করে এমন সব জায়গা, যেখানে কাটানো প্রতিটি মুহূর্ত এক একটি সুন্দর স্মৃতি হয়ে থাকবে, সেই সমস্ত গন্তব্যগুলি অন্বেষণ করুন যা আপনার জীবনে আজীবন মনে রাখার মতো অভিজ্ঞতা তৈরি করবে।",
      chat: "আমাদের সাথে চ্যাট করুন",
      footer: "সীমার বাইরে ভ্রমণ করুন ✨",
      ask: "কিছু জিজ্ঞাসা করুন...",
      send: "পাঠান",
      close: "বন্ধ করুন",
    },
  };

  const current = text[language];


  return (
    <div
      className={`min-h-screen bg-cover bg-center ${
        darkMode
          ? "text-white"
          : "text-black"
      }`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* OVERLAY */}
      <div
        className={`min-h-screen ${
          darkMode
            ? "bg-black/60"
            : "bg-white/40"
        } backdrop-blur-sm`}
      >
        {/* NAVBAR */}
        <div className="flex justify-between items-center px-10 py-5">
          <h1 className="text-4xl font-bold">
            WanderNest ⁀જ➣
          </h1>

          <div className="flex gap-6 items-center text-lg">
            {/* ABOUT */}
            <button
              onClick={() =>
                setShowAbout(true)
              }
              className="hover:text-cyan-300 duration-300"
            >
              <Info className="inline mr-2" />
              {current.about}
            </button>

            {/* CONTACT */}
            <button
             onClick={() =>
  setShowAIChat(true)
}
              className="hover:text-cyan-300 duration-300"
            >
              <MessageCircle className="inline mr-2" />
              {current.contact}
            </button>

            {/* SETTINGS */}
            <div className="relative">
              <button
                onClick={() =>
                  setShowSettings(
                    !showSettings
                  )
                }
              >
                <Settings />
              </button>

              {showSettings && (
                <div
                  className={`absolute right-0 top-14 w-56 rounded-3xl p-5 z-50 ${
                    darkMode
                      ? "bg-black/80"
                      : "bg-white/90"
                  } backdrop-blur-2xl`}
                >
                  <h2 className="font-bold mb-4">
                    {current.settings}
                  </h2>

                  {/* DARK MODE */}
                  <button
                    onClick={() =>
                      setDarkMode(
                        !darkMode
                      )
                    }
                    className="flex items-center gap-3 mb-4"
                  >
                    {darkMode ? (
                      <Sun />
                    ) : (
                      <Moon />
                    )}

                    {darkMode
                      ? "Light Mode"
                      : "Dark Mode"}
                  </button>

                  {/* LANGUAGE */}
                  <select
                    value={language}
                    onChange={(e) =>
                      setLanguage(
                        e.target.value
                      )
                    }
                    className="w-full p-3 rounded-xl text-white"
                  >
                    <option value="english">
                      English
                    </option>

                    <option value="hindi">
                      Hindi
                    </option>

                    <option value="bengali">
                      Bengali
                    </option>
                    </select>
                     {/* LOGOUT */}
<button
  onClick={() => {
    alert("Logged Out Successfully ✨");
    window.location.href = "/";
  }}
  className="flex items-center gap-3 mt-5 text-red-400 hover:text-red-300 duration-300"
>
  <LogOut size={20} />
     Logout
</button>       
                </div>
              )}
            </div>
          </div>
        </div>
       

        {/* HERO */}
        <div className="relative h-screen overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  >
    <source
      src="/travelvideo.mp4"
      type="video/mp4"
    />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-5">

    <h1 className="text-7xl font-bold drop-shadow-2xl">
      {current.title}
    </h1>

    <p className="mt-6 text-2xl">
      {current.sub}
    </p>

    {/* SEARCH BAR */}
    
<button
  onClick={() => setShowExplore(true)}
  className="mt-8 bg-cyan-500 px-8 py-4 rounded-full text-xl hover:bg-cyan-400 duration-300 bg-center "
>
  📍View Destinations 
</button>
  

  </div>
</div>

        {/* TRENDING */}
<div className="px-10 mt-24">
  <h2 className="text-3xl font-bold mb-10">
    📍 {current.trending}
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        place: "Udaipur",
        country: "India",
        video: "/videos/udaipur.mp4",
      },

      {
        place: "Banaras",
        country: "India",
        video: "/videos/banaras.mp4",
      },

      {
        place: "Kashmir",
        country: "India",
        video:"/videos/kashmir.mp4",
      },
    ].map((item, index) => (

      <div
        key={index}
        className="bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden hover:scale-105 duration-300"
      >

        {/* IMAGE OR VIDEO */}
        {
  item.video ? (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="h-60 w-full object-cover"
    >
      <source
        src={item.video}
        type="video/mp4"
      />
    </video>
  ) : (
    <img
      src={item.image}
      alt={item.place}
      className="h-60 w-full object-cover"
    />
  )
}

        <div className="p-5">

          <h3 className="text-2xl font-bold">
            {item.place}
          </h3>

          <p className="flex items-center gap-2 mt-2">
            <MapPin size={18} />
            {item.country}
          </p>

          <div className="flex gap-1 mt-4 text-yellow-300">
            <Star fill="yellow" />
            <Star fill="yellow" />
            <Star fill="yellow" />
            <Star fill="yellow" />
            <Star fill="yellow" />
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

        {/* ABOUT */}
        {showAbout && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 w-[500px] text-center relative">
              <button
                onClick={() =>
                  setShowAbout(false)
                }
                className="absolute right-5 top-5"
              >
                <X />
              </button>

              <h2 className="text-3xl font-bold mb-6">
                WanderNest 🌍
              </h2>

              <p className="text-lg leading-8">
                {current.aboutText}
              </p>

              <button
                onClick={() =>
                  setShowAbout(false)
                }
                className="mt-8 bg-cyan-500 px-6 py-3 rounded-full"
              >
                {current.close}
              </button>
            </div>
          </div>
        )}
        
        {/* FOOTER */}
        <div className="mt-24 px-10 py-10 border-t border-white/20 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-3xl font-bold">
              WanderNest
            </h2>

            <p className="mt-3 text-white/80">
              {current.footer}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Info
            </h3>

            <p className="flex items-center gap-2">
              <Phone size={18} />
              +91 9876543210
            </p>

            <p className="flex items-center gap-2 mt-3">
              <Mail size={18} />
              wandernest23@gmail.com
            </p>
          </div>
        </div>
      </div>
        </div>
  );
}

export default Home;