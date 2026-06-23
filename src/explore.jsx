import {
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

function Explore({
  setShowExplore,
  setShowDestination,
  setSelectedPlace,
}) {
  const places = [

    {
      name: "Kashmir",
      location: "Jammu & Kashmir",
      image: "/mountains/kashmir.jpg",
      placesToVisit: [
  "Gulmarg",
  "Sonmarg",
  "Pahalgam",
  "Dal Lake",
  "Betaab Valley"
],

     hotels: [

{
name:"The Khyber Himalayan Resort",
image: "/booking/mhotel1.jpg",
price:"₹15,000 / Night",
address:"Gulmarg Road, Kashmir",
distance:"3 km from Gulmarg",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Heevan Retreat",
image: "/booking/mhotel2.jpg",
price:"₹8,500 / Night",
address:"Nishat, Srinagar, Jammu & Kashmir",
distance:"2 km from Dal Lake",
rating:"⭐⭐⭐⭐"
},

{
name:"Vivanta Dal View",
image: "/booking/mhotel3.jpg",
price:"₹12,000 / Night",
address:"Kralsangri, Srinagar, Jammu & Kashmir",
distance:"1 km from Dal Lake",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Radisson Srinagar",
image: "/booking/mhotel4.jpg",
price:"₹9,500 / Night",
address:"Rajbagh, Srinagar, Jammu & Kashmir",
distance:"4 km from Airport",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Pine Spring",
image: "/booking/mhotel5.jpg",
price:"₹7,200 / Night",
address:"Boulevard Road, Srinagar, Jammu & Kashmir",
distance:"3 km from City Center",
rating:"⭐⭐⭐⭐"
},

{
name:"Lemon Tree Srinagar",
image: "/booking/mhotel6.jpg",
price:"₹6,900 / Night",
address:"Nowgam Bypass, Srinagar, Jammu & Kashmir",
distance:"5 km from Airport",
rating:"⭐⭐⭐⭐"
}

]
    },

    {
      name: "Shimla",
      location:"Himachal Pradesh",
      image: "/mountains/shimla.jpg",
      placesToVisit: [
  "Mall Road",
  "Jakhoo Temple",
  "Kufri",
  "Christ Church",
  "The Ridge"
],
hotels: [

{
name:"The Oberoi Cecil",
image:"/booking/mhotel1.jpg",
price:"₹18,500 / Night",
distance:"2 km from Mall Road",
address:"Chaura Maidan, Shimla, Himachal Pradesh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Radisson Hotel Shimla",
image:"/booking/mhotel2.jpg",
price:"₹11,500 / Night",
distance:"1 km from City Center",
address:"Lower Bharari Road, Shimla, Himachal Pradesh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Clarkes Hotel",
image:"/booking/mhotel3.jpg",
price:"₹9,800 / Night",
distance:"500m from Mall Road",
address:"The Mall Road, Shimla, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Snow Valley Resort",
image:"/booking/mhotel4.jpg",
price:"₹7,200 / Night",
distance:"2 km from Kufri Road",
address:"Ghora Chowki, Shimla, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Marina Shimla",
image:"/booking/mhotel5.jpg",
price:"₹8,500 / Night",
distance:"1 km from Ridge",
address:"Mall Road, Shimla, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Willow Banks",
image:"/booking/mhotel6.jpg",
price:"₹6,900 / Night",
distance:"Near Mall Road",
address:"Near Tourism Lift, Shimla, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
}

]

    },

    {
      name: "Spiti valley",
      location:"Himachal Pradesh",
      image: "/mountains/spiti-valley.jpg",
      noFlight: true,
      placesToVisit: [
  "Key Monastery",
  "Chandratal Lake",
  "Kibber Village",
  "Langza",
  "Hikkim Post Office",
],
hotels: [

{
name:"Spiti Village Resort",
image:"/booking/mhotel1.jpg",
price:"₹8,500 / Night",
distance:"1 km from Kaza Market",
address:"Kaza, Spiti Valley, Himachal Pradesh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Deyzor",
image:"/booking/mhotel2.jpg",
price:"₹7,200 / Night",
distance:"500m from City Center",
address:"Kaza Main Road, Spiti Valley, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"The Alpinist Cafe & Stay",
image:"/booking/mhotel3.jpg",
price:"₹6,800 / Night",
distance:"2 km from Key Monastery Route",
address:"Kaza, Spiti Valley, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Moustache Hostel Spiti",
image:"/booking/mhotel4.jpg",
price:"₹4,500 / Night",
distance:"Near Kaza Bus Stand",
address:"Kaza, Lahaul & Spiti, Himachal Pradesh",
rating:"⭐⭐⭐"
},

{
name:"Nirvana Homestay",
image:"/booking/mhotel5.jpg",
price:"₹5,900 / Night",
distance:"3 km from Kaza Center",
address:"Rangrik Village, Spiti Valley, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Spiti Sarai",
image:"/booking/mhotel6.jpg",
price:"₹9,200 / Night",
distance:"1 km from Market Area",
address:"Kaza Town, Spiti Valley, Himachal Pradesh",
rating:"⭐⭐⭐⭐⭐"
}

]  
    },

    {
      name: "Meghalaya",
      location:"Meghalaya",
      image: "/mountains/meghalaya.jpg",
      placesToVisit: [
  "Shillong",
  "Cherrapunji",
  "Dawki River",
  "Nohkalikai Falls",
  "Living Root Bridge"
],
hotels:[

{
name:"Vivanta Meghalaya",
image:"/booking/mhotel1.jpg",
price:"₹11,500 / Night",
distance:"2 km from Shillong Center",
address:"Police Bazar, Shillong, Meghalaya",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Polo Towers",
image:"/booking/mhotel2.jpg",
price:"₹8,900 / Night",
distance:"1 km from Ward's Lake",
address:"Oakland Road, Shillong, Meghalaya",
rating:"⭐⭐⭐⭐"
},

{
name:"Ri Kynjai Resort",
image:"/booking/mhotel3.jpg",
price:"₹12,500 / Night",
distance:"5 km from Umiam Lake",
address:"Umiam Lake Road, Shillong, Meghalaya",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"The Habitat Shillong",
image:"/booking/mhotel4.jpg",
price:"₹6,500 / Night",
distance:"2 km from Police Bazar",
address:"Laitumkhrah, Shillong, Meghalaya",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Centre Point",
image:"/booking/mhotel5.jpg",
price:"₹7,800 / Night",
distance:"Near City Center",
address:"Khyndailad, Shillong, Meghalaya",
rating:"⭐⭐⭐⭐"
},

{
name:"Woodland Hill Stay",
image:"/booking/mhotel6.jpg",
price:"₹5,900 / Night",
distance:"3 km from City Center",
address:"Upper Shillong, Meghalaya",
rating:"⭐⭐⭐⭐"
}

]
    },

    {
      name: "Leh ladakh",
      location:"Ladakh",
      image:"/mountains/leh-ladakh.jpg",
      placesToVisit: [
  "Pangong Lake",
  "Nubra Valley",
  "Magnetic Hill",
  "Shanti Stupa",
  "Khardung La Pass"

],
hotels:[

{
name:"The Grand Dragon Ladakh",
image:"/booking/mhotel1.jpg",
price:"₹14,500 / Night",
distance:"3 km from Airport",
address:"Old Road Sheynam, Leh, Ladakh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Ladakh Residency",
image:"/booking/mhotel2.jpg",
price:"₹8,500 / Night",
distance:"1 km from Leh Market",
address:"Fort Road, Leh, Ladakh",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Singge Palace",
image:"/booking/mhotel3.jpg",
price:"₹9,200 / Night",
distance:"Near Main Bazaar",
address:"Zangsti Road, Leh, Ladakh",
rating:"⭐⭐⭐⭐"
},

{
name:"The Indus Valley",
image:"/booking/mhotel4.jpg",
price:"₹11,000 / Night",
distance:"2 km from Airport",
address:"Upper Chulung, Leh, Ladakh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Omasila",
image:"/booking/mhotel5.jpg",
price:"₹6,900 / Night",
distance:"1 km from Market",
address:"Changspa Road, Leh, Ladakh",
rating:"⭐⭐⭐⭐"
},

{
name:"Snow Lion Resort",
image:"/booking/mhotel6.jpg",
price:"₹7,800 / Night",
distance:"2 km from Shanti Stupa",
address:"Changspa, Leh, Ladakh",
rating:"⭐⭐⭐⭐"
}

]
    },

    {
      name: "Darjeeling",
      location:"West Bengal",
      image: "/mountains/darjeeling.jpg",
      placesToVisit: [
  "Tiger Hill",
  "Batasia Loop",
  "Peace Pagoda",
  "Rock Garden",
  "Darjeeling Himalayan Railway"
],
hotels:[

{
name:"Mayfair Darjeeling",
image:"/booking/mhotel1.jpg",
price:"₹13,500 / Night",
distance:"1 km from Mall Road",
address:"The Mall, Darjeeling, West Bengal",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Summit Swiss Heritage",
image:"/booking/mhotel2.jpg",
price:"₹7,900 / Night",
distance:"500m from City Center",
address:"Mall Road Area, Darjeeling, West Bengal",
rating:"⭐⭐⭐⭐"
},

{
name:"Cedar Inn",
image:"/booking/mhotel3.jpg",
price:"₹8,500 / Night",
distance:"1 km from Chowrasta",
address:"Jalapahar Road, Darjeeling, West Bengal",
rating:"⭐⭐⭐⭐"
},

{
name:"Ramada Darjeeling",
image:"/booking/mhotel4.jpg",
price:"₹10,200 / Night",
distance:"Near Mall Road",
address:"Gandhi Road, Darjeeling, West Bengal",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Seven Seventeen",
image:"/booking/mhotel5.jpg",
price:"₹6,500 / Night",
distance:"700m from Market",
address:"HD Lama Road, Darjeeling, West Bengal",
rating:"⭐⭐⭐⭐"
},

{
name:"Sinclairs Darjeeling",
image:"/booking/mhotel6.jpg",
price:"₹7,800 / Night",
distance:"1 km from Railway Station",
address:"Gandhi Road, Darjeeling, West Bengal",
rating:"⭐⭐⭐⭐"
}

]
     },

     {
      name: "Coorg",
      location:"Karnataka",
      image: "/mountains/coorg.jpg",
      placesToVisit: [
  "Abbey Falls",
  "Raja Seat",
  "Dubare Elephant Camp",
  "Talakaveri",
  "Madikeri Fort"
],
hotels:[

{
name:"The Tamara Coorg",
image:"/booking/mhotel1.jpg",
price:"₹16,500 / Night",
distance:"5 km from Madikeri",
address:"Kabbinakad Estate, Yevakapadi, Coorg, Karnataka",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Club Mahindra Madikeri",
image:"/booking/mhotel2.jpg",
price:"₹12,500 / Night",
distance:"3 km from City Center",
address:"Galibeedu Road, Madikeri, Coorg",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Coorg Cliffs Resort",
image:"/booking/mhotel3.jpg",
price:"₹9,200 / Night",
distance:"8 km from Abbey Falls",
address:"Hanchikad Estate, Coorg, Karnataka",
rating:"⭐⭐⭐⭐"
},

{
name:"Purple Palms Resort",
image:"/booking/mhotel4.jpg",
price:"₹8,400 / Night",
distance:"4 km from Dubare Camp",
address:"Kushalnagar, Coorg, Karnataka",
rating:"⭐⭐⭐⭐"
},

{
name:"Woodstock Villas",
image:"/booking/mhotel5.jpg",
price:"₹7,100 / Night",
distance:"2 km from Madikeri Fort",
address:"Madikeri, Coorg, Karnataka",
rating:"⭐⭐⭐⭐"
},

{
name:"Heritage Resort Coorg",
image:"/booking/mhotel6.jpg",
price:"₹10,500 / Night",
distance:"3 km from Raja Seat",
address:"Madikeri, Coorg, Karnataka",
rating:"⭐⭐⭐⭐⭐"
}

]

     },

     {
      name: "Mussoorie",
      location:"Uttarakhand",
      image: "/mountains/mussoorie.jpg",
      placesToVisit: [
  "Kempty Falls",
  "Gun Hill",
  "Camel's Back Road",
  "Lal Tibba",
  "Mall Road"
],

hotels:[

{
name:"JW Marriott Mussoorie",
image:"/booking/mhotel1.jpg",
price:"₹18,500 / Night",
distance:"4 km from Mall Road",
address:"Kempty Falls Road, Mussoorie, Uttarakhand",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Fortune Resort Grace",
image:"/booking/mhotel2.jpg",
price:"₹9,500 / Night",
distance:"1 km from Mall Road",
address:"Library Chowk, Mussoorie, Uttarakhand",
rating:"⭐⭐⭐⭐"
},

{
name:"Rokeby Manor",
image:"/booking/mhotel3.jpg",
price:"₹8,900 / Night",
distance:"2 km from Landour",
address:"Landour Cantt, Mussoorie",
rating:"⭐⭐⭐⭐"
},

{
name:"Sterling Mussoorie",
image:"/booking/mhotel4.jpg",
price:"₹7,800 / Night",
distance:"3 km from Gun Hill",
address:"Picture Palace Road, Mussoorie",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Sun N Snow",
image:"/booking/mhotel5.jpg",
price:"₹6,500 / Night",
distance:"Near Mall Road",
address:"Mall Road, Mussoorie",
rating:"⭐⭐⭐⭐"
},

{
name:"Royal Orchid Fort Resort",
image:"/booking/mhotel6.jpg",
price:"₹10,200 / Night",
distance:"2 km from City Center",
address:"Tara Hall Estate, Mussoorie",
rating:"⭐⭐⭐⭐⭐"
}

]
     },
     {
      name: "Manali",
      location:"Himachal Pradesh",
      image: "/mountains/manali.jpg",
      noFlight: true,
      placesToVisit: [
  "Solang Valley",
  "Rohtang Pass",
  "Hadimba Temple",
  "Old Manali",
  "Jogini Waterfall"
],
hotels: [

{
name:"The Himalayan",
image:"/booking/mhotel1.jpg",
price:"₹14,500 / Night",
distance:"2 km from Mall Road",
address:"Hadimba Road, Manali, Himachal Pradesh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Span Resort & Spa",
image:"/booking/mhotel2.jpg",
price:"₹11,000 / Night",
distance:"4 km from City Center",
address:"Kullu-Naggar Road, Manali, Himachal Pradesh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Snow Valley Resort",
image:"/booking/mhotel3.jpg",
price:"₹8,500 / Night",
distance:"1 km from Mall Road",
address:"Log Huts Area, Manali, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Apple Country Resort",
image:"/booking/mhotel4.jpg",
price:"₹9,200 / Night",
distance:"2 km from Hadimba Temple",
address:"Log Huts Area, Manali, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"The Orchard Greens",
image:"/booking/mhotel5.jpg",
price:"₹7,000 / Night",
distance:"1 km from Mall Road",
address:"Log Huts Area, Manali, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Mountain Face",
image:"/booking/mhotel6.jpg",
price:"₹6,500 / Night",
distance:"3 km from Bus Stand",
address:"Prini Road, Manali, Himachal Pradesh",
rating:"⭐⭐⭐⭐"
}

]     },

     {
      name: "Ziro",
      location:"Arunachal Pradesh",
      image: "/mountains/ziro-valley.jpg",
      placesToVisit: [
  "Talley Valley",
  "Pine Grove",
  "Dolo Mando Hill",
  "Ziro Puto",
  "Meghna Cave Temple"
],
hotels:[

{
name:"Blue Pine Resort",
image:"/booking/mhotel1.jpg",
price:"₹8,500 / Night",
distance:"2 km from Ziro Market",
address:"Old Ziro, Arunachal Pradesh",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Ziro Valley Resort",
image:"/booking/mhotel2.jpg",
price:"₹6,800 / Night",
distance:"1 km from City Center",
address:"Hari Village, Ziro, Arunachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Siiro Resort",
image:"/booking/mhotel3.jpg",
price:"₹7,900 / Night",
distance:"3 km from Talley Valley Route",
address:"Old Ziro, Arunachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Anne Ziro",
image:"/booking/mhotel4.jpg",
price:"₹5,900 / Night",
distance:"Near Main Market",
address:"Hapoli, Ziro, Arunachal Pradesh",
rating:"⭐⭐⭐⭐"
},

{
name:"Abasa Homestay",
image:"/booking/mhotel5.jpg",
price:"₹4,800 / Night",
distance:"2 km from Pine Grove",
address:"Hong Village, Ziro Valley",
rating:"⭐⭐⭐"
},

{
name:"Ziro Palace Inn",
image:"/booking/mhotel6.jpg",
price:"₹6,500 / Night",
distance:"1 km from Town",
address:"Hapoli, Ziro, Arunachal Pradesh",
rating:"⭐⭐⭐⭐"
}

]
     },

     {
      name: "Auli",
      location:"Uttarakhand",
      image: "/mountains/auli.jpg",
      noFlight: true,
      placesToVisit: [
  "Auli Ropeway",
  "Gurso Bugyal",
  "Kwani Bugyal",
  "Chattrakund Lake",
  "Joshimath"
],
hotels:[

{
name:"The Tattva Resort",
image:"/booking/mhotel1.jpg",
price:"₹11,500 / Night",
distance:"2 km from Auli Ropeway",
address:"Joshimath Road, Auli, Uttarakhand",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Clifftop Club Resort",
image:"/booking/mhotel2.jpg",
price:"₹12,800 / Night",
distance:"500m from Ski Point",
address:"Auli Hill Station, Uttarakhand",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Blue Poppy Resort",
image:"/booking/mhotel3.jpg",
price:"₹8,500 / Night",
distance:"1 km from Ropeway",
address:"Auli, Joshimath, Uttarakhand",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Himalayan Abode",
image:"/booking/mhotel4.jpg",
price:"₹6,900 / Night",
distance:"2 km from Center",
address:"Joshimath, Uttarakhand",
rating:"⭐⭐⭐⭐"
},

{
name:"GMVN Ski Resort",
image:"/booking/mhotel5.jpg",
price:"₹5,500 / Night",
distance:"Near Ski Slope",
address:"Auli, Uttarakhand",
rating:"⭐⭐⭐"
},

{
name:"Mountain Rover Resort",
image:"/booking/mhotel6.jpg",
price:"₹7,800 / Night",
distance:"1 km from Chair Lift",
address:"Auli Road, Joshimath",
rating:"⭐⭐⭐⭐"
}

]
     },
  ];

  const beaches = [
  {
    name: "Gokarna",
    location: "Karnataka",
    image: "/beaches/gokarna.jpg",
    placesToVisit: [
  "Om Beach",
  "Kudle Beach",
  "Half Moon Beach",
  "Paradise Beach",
  "Mahabaleshwar Temple"
],
hotels: [

{
name:"Kahani Paradise",
image:"/booking/bhotel1.jpg",
address:"Belekan Beach Road, Gokarna",
price:"₹12,500 / Night",
distance:"1 km from Om Beach",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"SwaSwara Resort",
image:"/booking/bhotel2.jpg",
address:"Donibhail, Om Beach Road",
price:"₹18,000 / Night",
distance:"500m from Om Beach",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Namaste Cafe Stay",
image:"/booking/bhotel3.jpg",
address:"Om Beach Cliff",
price:"₹5,500 / Night",
distance:"200m from Om Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Gokarna International",
image:"/booking/bhotel4.jpg",
address:"Beach Road, Gokarna",
price:"₹4,800 / Night",
distance:"2 km from Kudle Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Stone Wood Nature Resort",
image:"/booking/bhotel5.jpg",
address:"Kudle Beach Road",
price:"₹7,200 / Night",
distance:"500m from Kudle Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Viraz Valley Resort",
image:"/booking/bhotel6.jpg",
address:"Near Half Moon Beach Trail",
price:"₹6,900 / Night",
distance:"1 km from Paradise Beach",
rating:"⭐⭐⭐⭐"
}

]
  },

  {
    name: "Varkala",
    location: "Kerala",
    image: "/beaches/varkala.jpg",
    placesToVisit: [
  "Varkala Cliff",
  "Papanasam Beach",
  "Janardhana Swamy Temple",
  "Black Sand Beach",
  "Kappil Beach"
],
hotels: [

{
name:"Gateway Varkala",
image:"/booking/bhotel1.jpg",
address:"North Cliff, Varkala",
price:"₹13,500 / Night",
distance:"500m from Cliff",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hill View Beach Resort",
image:"/booking/bhotel2.jpg",
address:"North Cliff Road",
price:"₹7,500 / Night",
distance:"300m from Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Palm Tree Heritage",
image:"/booking/bhotel3.jpg",
address:"Papanasam Beach Road",
price:"₹5,900 / Night",
distance:"200m from Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"B'Canti Boutique Resort",
image:"/booking/bhotel4.jpg",
address:"Black Beach Area",
price:"₹8,800 / Night",
distance:"1 km from Cliff",
rating:"⭐⭐⭐⭐"
},

{
name:"Deshadan Cliff Resort",
image:"/booking/bhotel5.jpg",
address:"North Cliff",
price:"₹10,500 / Night",
distance:"100m from View Point",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Akhil Beach Resort",
image:"/booking/bhotel6.jpg",
address:"Papanasam Beach",
price:"₹6,500 / Night",
distance:"250m from Beach",
rating:"⭐⭐⭐⭐"
}

]
  },

  {
    name: "Kovalam",
    location: "Kerala",
    image: "/beaches/kovalam.jpg",
    placesToVisit: [
  "Lighthouse Beach",
  "Hawa Beach",
  "Samudra Beach",
  "Vizhinjam Harbor",
  "Halcyon Castle"
],
hotels: [

{
name:"The Leela Kovalam",
image:"/booking/bhotel1.jpg",
address:"Lighthouse Beach Road",
price:"₹19,500 / Night",
distance:"100m from Beach",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Taj Green Cove",
image:"/booking/bhotel2.jpg",
address:"Samudra Beach",
price:"₹17,500 / Night",
distance:"500m from Beach",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Uday Samudra Resort",
image:"/booking/bhotel3.jpg",
address:"Kovalam Beach Road",
price:"₹9,500 / Night",
distance:"300m from Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Abad Harmonia",
image:"/booking/bhotel4.jpg",
address:"Kovalam Junction",
price:"₹6,800 / Night",
distance:"1 km from Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Jasmine Palace",
image:"/booking/bhotel5.jpg",
address:"Lighthouse Beach",
price:"₹5,500 / Night",
distance:"200m from Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Soma Palmshore",
image:"/booking/bhotel6.jpg",
address:"Light House Road",
price:"₹8,000 / Night",
distance:"150m from Beach",
rating:"⭐⭐⭐⭐"
}

]
  },

  {
    name: "Pondicherry",
    location: "Puducherry",
    image: "/beaches/pondicherry.jpg",
    placesToVisit: [
  "Promenade Beach",
  "Auroville",
  "Paradise Beach",
  "French Colony",
  "Sri Aurobindo Ashram"
],
hotels: [

{
name:"The Promenade",
price:"₹12,500 / Night",
distance:"Promenade Beach Road",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"23 Goubert Avenue, White Town, Puducherry"
},

{
name:"Le Pondy",
price:"₹11,000 / Night",
distance:"5 km from Paradise Beach",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"No.3 Lake View Road, Nallvadu, Puducherry"
},

{
name:"Accord Puducherry",
price:"₹8,500 / Night",
distance:"2 km from City Center",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"No.1 Thilagar Nagar, Ellaipillaichavady, Puducherry"
},

{
name:"Palais De Mahe",
price:"₹13,000 / Night",
distance:"White Town Area",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"4 Rue de Bussy, White Town, Puducherry"
},

{
name:"Villa Shanti",
price:"₹7,500 / Night",
distance:"Near Promenade",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"14 Suffren Street, White Town, Puducherry"
},

{
name:"Hotel Atithi",
price:"₹5,800 / Night",
distance:"1 km from Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"126 Sardar Vallabhbhai Patel Salai, Puducherry"
}

]
  },

  {
    name: "Diu",
    location: "Daman & Diu",
    image: "/beaches/diu.jpg",
    placesToVisit: [
  "Diu Fort",
  "Nagoa Beach",
  "St. Paul's Church",
  "Ghoghla Beach",
  "Naida Caves"
],
hotels: [

{
name:"The Fern Seaside Luxurious Tent Resort",
price:"₹9,500 / Night",
distance:"Near Nagoa Beach",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"Nagoa Beach Road, Diu"
},

{
name:"Apaar Hotel",
price:"₹6,500 / Night",
distance:"500m from Diu Fort",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"Fort Road, Diu"
},

{
name:"Kostamar Beach Resort",
price:"₹8,200 / Night",
distance:"Nagoa Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"Nagoa Beach Road, Diu"
},

{
name:"Hotel Prince",
price:"₹4,900 / Night",
distance:"Near City Center",
rating:"⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"Main Market Road, Diu"
},

{
name:"Radhika Beach Resort",
price:"₹7,000 / Night",
distance:"1 km from Nagoa Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"Nagoa Beach Area, Diu"
},

{
name:"Hotel Palacio De Diu",
price:"₹5,500 / Night",
distance:"Near Fort",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"Fort Road, Diu"
}

]
  },

  {
    name: "Bhandarpule",
    location: "Maharashtra",
    image: "/beaches/bhandarpule.jpg",
    placesToVisit: [
  "Bhandarpule Beach",
  "Ganpatipule Temple",
  "Aare Ware Beach",
  "Jaigad Fort",
  "Prachin Konkan Museum"
],
hotels: [

{
name:"Blue Ocean Resort",
price:"₹8,500 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"Ganpatipule Beach Road, Ratnagiri"
},

{
name:"Abhishek Beach Resort",
price:"₹6,800 / Night",
distance:"300m from Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"Ganpatipule, Ratnagiri"
},

{
name:"Westbay Resort",
price:"₹7,500 / Night",
distance:"Near Temple",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"Ganpatipule Main Road"
},

{
name:"MTDC Beach Resort",
price:"₹5,900 / Night",
distance:"Beachside",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"Ganpatipule Beach Area"
},

{
name:"Atithi Lodge",
price:"₹4,800 / Night",
distance:"Near Market",
rating:"⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"Ganpatipule Main Market"
},

{
name:"Hotel Shanti Sea View",
price:"₹5,500 / Night",
distance:"500m from Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"Bhandarpule Coast Road"
}

]
  },

  {
    name: "Lakshadweep",
    location: "Lakshadweep",
    image: "/beaches/lakshadweep.jpg",
    placesToVisit: [
  "Agatti Island",
  "Bangaram Island",
  "Kavaratti",
  "Minicoy Island",
  "Kadmat Island"
],
hotels: [

{
name:"Bangaram Island Resort",
price:"₹18,500 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"Bangaram Island, Lakshadweep"
},

{
name:"Agatti Island Beach Resort",
price:"₹12,500 / Night",
distance:"500m from Airport",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"Agatti Island, Lakshadweep"
},

{
name:"Kavaratti Island Beach Resort",
price:"₹9,800 / Night",
distance:"Near Lagoon",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"Kavaratti Island, Lakshadweep"
},

{
name:"Coral Paradise Resort",
price:"₹8,500 / Night",
distance:"Beachside",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"Agatti Beach Road, Lakshadweep"
},

{
name:"Sea Shell Residency",
price:"₹6,900 / Night",
distance:"1 km from Jetty",
rating:"⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"Kavaratti Main Road, Lakshadweep"
},

{
name:"Blue Lagoon Resort",
price:"₹7,500 / Night",
distance:"Near Coral Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"Kadmat Island, Lakshadweep"
}

]
  },

  {
    name: "Havelock Island",
    location: "Andaman & Nicobar",
    image: "/beaches/havelock-island.jpg",
    placesToVisit: [
  "Radhanagar Beach",
  "Elephant Beach",
  "Kalapathar Beach",
  "Neil's Cove",
  "Scuba Diving Point"
],
hotels: [

{
name:"Taj Exotica Resort & Spa",
price:"₹24,000 / Night",
distance:"Radhanagar Beach",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"Radhanagar Beach No.7, Havelock Island"
},

{
name:"Barefoot At Havelock",
price:"₹15,500 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"Beach No.7, Havelock Island"
},

{
name:"Silver Sand Beach Resort",
price:"₹12,000 / Night",
distance:"Vijaynagar Beach",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"Vijaynagar Beach, Havelock Island"
},

{
name:"Sea Shell Resort",
price:"₹10,500 / Night",
distance:"Near Jetty",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"Govind Nagar Beach Road"
},

{
name:"Coral Reef Resort",
price:"₹8,500 / Night",
distance:"1 km from Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"Govind Nagar, Havelock Island"
},

{
name:"Blue Bird Resort",
price:"₹6,900 / Night",
distance:"Near Market",
rating:"⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"Govind Nagar Market Area"
}

]
  },

  {
    name: "Neil Island",
    location: "Andaman & Nicobar",
    image: "/beaches/neil-island.jpg",
    placesToVisit: [
  "Natural Bridge",
  "Laxmanpur Beach",
  "Bharatpur Beach",
  "Sitapur Beach",
  "Sunrise Point"
],
hotels: [

{
name:"Sea Shell Samssara",
price:"₹10,500 / Night",
distance:"Laxmanpur Beach",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"Laxmanpur Beach Road, Neil Island"
},

{
name:"Silver Sand Beach Resort",
price:"₹9,500 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"Bharatpur Beach, Neil Island"
},

{
name:"TSG Aura Resort",
price:"₹8,500 / Night",
distance:"Near Jetty",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"Neil Kendra, Neil Island"
},

{
name:"Summer Sands Resort",
price:"₹7,200 / Night",
distance:"1 km from Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"Sitapur Beach Road"
},

{
name:"Blue Lagoon Resort",
price:"₹6,500 / Night",
distance:"Near Natural Bridge",
rating:"⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"Laxmanpur Village, Neil Island"
},

{
name:"Coral Garden Resort",
price:"₹5,900 / Night",
distance:"Near Market",
rating:"⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"Neil Kendra Main Road"
}

]
  },

  {
    name: "Mandarmani",
    location: "West Bengal",
    image: "/beaches/mandarmani.jpg",
    placesToVisit: [
  "Mandarmani Beach",
  "Red Crab Beach",
  "Water Sports Area",
  "Mohana Point",
  "Sunset Point"
],
hotels: [

{
name:"Sana Beach Resort",
price:"₹8,500 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"Mandarmani Sea Beach Road, East Midnapore, West Bengal"
},

{
name:"Rose Valley Resort",
price:"₹7,200 / Night",
distance:"500m from Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"Main Beach Area, Mandarmani"
},

{
name:"Aqua Marina Drive Inn",
price:"₹6,900 / Night",
distance:"Near Red Crab Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"Mandarmani Beach Road"
},

{
name:"Kings Crown Resort",
price:"₹5,800 / Night",
distance:"1 km from Beach",
rating:"⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"Dadanpatrabar, Mandarmani"
},

{
name:"Golden Retreat",
price:"₹5,500 / Night",
distance:"Near Market Area",
rating:"⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"Mandarmani Main Road"
},

{
name:"Sea Horse Resort",
price:"₹4,900 / Night",
distance:"700m from Shore",
rating:"⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"Mandarmani Coastal Road"
}

]
  },

  {
    name: "Vasco Da Gama",
      location:"Goa",
      image: "/beaches/goa.jpg",
      placesToVisit: [
  "Baga Beach",
  "Calangute Beach",
  "Dudhsagar Falls",
  "Fort Aguada",
  "Basilica of Bom Jesus"
],
hotels: [

{
name:"Sana Beach Resort",
price:"₹8,500 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/bhotel1.jpg",
address:"Mandarmani Sea Beach Road, East Midnapore, West Bengal"
},

{
name:"Rose Valley Resort",
price:"₹7,200 / Night",
distance:"500m from Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel2.jpg",
address:"Main Beach Area, Mandarmani"
},

{
name:"Aqua Marina Drive Inn",
price:"₹6,900 / Night",
distance:"Near Red Crab Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/bhotel3.jpg",
address:"Mandarmani Beach Road"
},

{
name:"Kings Crown Resort",
price:"₹5,800 / Night",
distance:"1 km from Beach",
rating:"⭐⭐⭐",
image:"/booking/bhotel4.jpg",
address:"Dadanpatrabar, Mandarmani"
},

{
name:"Golden Retreat",
price:"₹5,500 / Night",
distance:"Near Market Area",
rating:"⭐⭐⭐",
image:"/booking/bhotel5.jpg",
address:"Mandarmani Main Road"
},

{
name:"Sea Horse Resort",
price:"₹4,900 / Night",
distance:"700m from Shore",
rating:"⭐⭐⭐",
image:"/booking/bhotel6.jpg",
address:"Mandarmani Coastal Road"
}

]
  }
];
const spiritualPlaces = [

  {
    name: "Varanasi",
    location: "Uttar Pradesh",
    image: "/spiritual/varanasi.jpg",
    placesToVisit: [
  "Kashi Vishwanath Temple",
  "Dashashwamedh Ghat",
  "Assi Ghat",
  "Sarnath",
  "Manikarnika Ghat"
],
hotels: [

{
name:"BrijRama Palace",
price:"₹18,500 / Night",
distance:"Dashashwamedh Ghat",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Munshi Ghat, Varanasi"
},

{
name:"Taj Ganges",
price:"₹14,500 / Night",
distance:"3 km from Kashi Vishwanath Temple",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Nadesar Palace Grounds, Varanasi"
},

{
name:"Ramada Plaza",
price:"₹10,500 / Night",
distance:"5 km from Ghats",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"The Mall Road, Cantonment, Varanasi"
},

{
name:"Hotel Surya",
price:"₹8,500 / Night",
distance:"2 km from City Center",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"S-20/51 A-5, The Mall Road, Varanasi"
},

{
name:"Hotel Alka",
price:"₹5,500 / Night",
distance:"Near Ganga Ghat",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Meer Ghat, Varanasi"
},

{
name:"Ganges Grand",
price:"₹4,900 / Night",
distance:"1 km from Temple",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Godowlia Road, Varanasi"
}

]
  },

  {
    name: "Amritsar",
    location: "Punjab",
    image: "/spiritual/golden-temple.jpg",
    placesToVisit: [
  "Golden Temple",
  "Jallianwala Bagh",
  "Wagah Border",
  "Durgiana Temple",
  "Partition Museum"
],
hotels: [

{
name:"Taj Swarna",
price:"₹16,500 / Night",
distance:"4 km from Golden Temple",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Outer Circular Road, Amritsar"
},

{
name:"Hyatt Regency",
price:"₹14,000 / Night",
distance:"5 km from Temple",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"MBM Farms, GT Road, Amritsar"
},

{
name:"Ramada Amritsar",
price:"₹10,500 / Night",
distance:"1 km from Golden Temple",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Hall Bazaar, Amritsar"
},

{
name:"Fairfield by Marriott",
price:"₹8,500 / Night",
distance:"3 km from Station",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Albert Road, Amritsar"
},

{
name:"Hotel HK Clarks",
price:"₹7,500 / Night",
distance:"Airport Road",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Ranjit Avenue, Amritsar"
},

{
name:"Golden Tulip",
price:"₹6,200 / Night",
distance:"Near City Center",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"GT Road, Amritsar"
}

]
  },

  {
    name: "Ajmer",
    location: "Rajasthan",
    image: "/spiritual/ajmer-sharif.jpg",
    placesToVisit: [
  "Ajmer Sharif Dargah",
  "Ana Sagar Lake",
  "Adhai Din Ka Jhonpra",
  "Taragarh Fort",
  "Akbari Fort"
],
hotels: [

{
name:"The Royal Melange",
price:"₹9,500 / Night",
distance:"500m from Dargah",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Station Road, Ajmer"
},

{
name:"Hotel Ajmer Inn",
price:"₹6,900 / Night",
distance:"1 km from Dargah",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Jaipur Road, Ajmer"
},

{
name:"Regenta Inn Embassy",
price:"₹7,500 / Night",
distance:"2 km from Ana Sagar",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Civil Lines, Ajmer"
},

{
name:"Hotel Plaza Inn",
price:"₹5,800 / Night",
distance:"Near Railway Station",
rating:"⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Station Road, Ajmer"
},

{
name:"LN Courtyard",
price:"₹5,500 / Night",
distance:"Near Market",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Kutchery Road, Ajmer"
},

{
name:"Hotel Data Inn",
price:"₹4,500 / Night",
distance:"Near Dargah",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Dargah Bazaar, Ajmer"
}

]
  },

  {
    name: "Velankanni",
    location: "Tamil Nadu",
    image: "/spiritual/velankanni.jpg",
    placesToVisit: [
  "Basilica of Our Lady",
  "Velankanni Beach",
  "Morning Star Church",
  "Shrine Museum",
  "Nagapattinam Beach"
],
hotels: [

{
name:"Clinton Park Inn",
price:"₹8,500 / Night",
distance:"300m from Basilica",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Church Main Road, Velankanni"
},

{
name:"MGM Vailankanni Residency",
price:"₹7,500 / Night",
distance:"Near Shrine",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"East Coast Road, Velankanni"
},

{
name:"Hotel Seagate",
price:"₹6,900 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Beach Road, Velankanni"
},

{
name:"Hotel Picnic",
price:"₹5,500 / Night",
distance:"Near Basilica",
rating:"⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Shrine Road, Velankanni"
},

{
name:"Queens Inn",
price:"₹4,900 / Night",
distance:"Near Market",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Main Town Area, Velankanni"
},

{
name:"Sri Gnana Vedha",
price:"₹4,200 / Night",
distance:"Near Church",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Pilgrim Center Road, Velankanni"
}

]
  },

  {
    name: "Anandpur Sahib",
    location: "Punjab",
    image: "/spiritual/anandpur-sahib.jpg",
    placesToVisit: [
  "Takht Sri Keshgarh Sahib",
  "Virasat-e-Khalsa",
  "Anandgarh Fort",
  "Charan Ganga",
  "Gurudwara Sis Ganj Sahib"
],
hotels: [

{
name:"Hotel Temple View",
price:"₹7,500 / Night",
distance:"200m from Takht Sri Keshgarh Sahib",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Main Gurudwara Road, Anandpur Sahib"
},

{
name:"Virasat Resort",
price:"₹6,800 / Night",
distance:"1 km from Virasat-e-Khalsa",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Khalsa Heritage Complex Road"
},

{
name:"Hotel White City",
price:"₹5,900 / Night",
distance:"Near Bus Stand",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Anandpur Sahib Market Road"
},

{
name:"Khalsa Residency",
price:"₹4,900 / Night",
distance:"500m from Gurudwara",
rating:"⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Keshgarh Sahib Road"
},

{
name:"Anand Palace",
price:"₹4,500 / Night",
distance:"Near Heritage Museum",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Main Town Area"
},

{
name:"Guru Kripa Inn",
price:"₹3,900 / Night",
distance:"Near Railway Station",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Railway Road, Anandpur Sahib"
}

]
  },

  {
    name: "Srinagar",
    location: "Jammu & Kashmir",
    image: "/spiritual/hazratbal.jpg",
    placesToVisit: [
  "Hazratbal Shrine",
  "Dal Lake",
  "Mughal Gardens",
  "Shankaracharya Temple",
  "Nishat Bagh"
],
hotels: [

{
name:"The Lalit Grand Palace",
price:"₹18,500 / Night",
distance:"3 km from Hazratbal Shrine",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Gupkar Road, Srinagar"
},

{
name:"Vivanta Dal View",
price:"₹15,000 / Night",
distance:"4 km from Dal Lake",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Kralsangri, Srinagar"
},

{
name:"Radisson Srinagar",
price:"₹10,500 / Night",
distance:"5 km from Airport",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Lasjan Bypass, Srinagar"
},

{
name:"Hotel Heevan Retreat",
price:"₹8,500 / Night",
distance:"2 km from Dal Lake",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Boulevard Road, Srinagar"
},

{
name:"Lemon Tree Srinagar",
price:"₹7,500 / Night",
distance:"Near City Center",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Rajbagh, Srinagar"
},

{
name:"Hotel Pine Spring",
price:"₹6,200 / Night",
distance:"Near Nishat Bagh",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Nishat Road, Srinagar"
}

]
  },

  {
    name: "Tawang",
    location: "Arunachal Pradesh",
    image: "/spiritual/tawang.jpg",
    placesToVisit: [
  "Tawang Monastery",
  "Sela Pass",
  "Madhuri Lake",
  "Nuranang Falls",
  "Tawang War Memorial"
],
hotels: [

{
name:"Tawang Heights",
price:"₹9,500 / Night",
distance:"1 km from Monastery",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Old Market Road, Tawang"
},

{
name:"Hotel Mon Paradise",
price:"₹8,500 / Night",
distance:"Near Town Center",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Main Market, Tawang"
},

{
name:"Dondrub Homestay",
price:"₹6,500 / Night",
distance:"2 km from Monastery",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Monastery Road, Tawang"
},

{
name:"Tawang Inn",
price:"₹5,900 / Night",
distance:"Near War Memorial",
rating:"⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Civil Area, Tawang"
},

{
name:"Hotel Gakyi Khang",
price:"₹5,200 / Night",
distance:"Near Market",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Main Road, Tawang"
},

{
name:"Snow Lion Hotel",
price:"₹4,800 / Night",
distance:"Near Bus Stand",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Tawang Town"
}

]
  },

  {
    name: "Old Goa",
    location: "Goa",
    image: "/spiritual/basilica.jpg",
    placesToVisit: [
  "Basilica of Bom Jesus",
  "Se Cathedral",
  "Church of St. Francis",
  "Archaeological Museum",
  "St. Cajetan Church"
],
hotels: [

{
name:"Taj Cidade De Goa",
price:"₹18,000 / Night",
distance:"4 km from Basilica",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Vainguinim Beach, Goa"
},

{
name:"Grand Hyatt Goa",
price:"₹16,500 / Night",
distance:"6 km from Old Goa",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Bambolim, Goa"
},

{
name:"Fortune Miramar",
price:"₹10,500 / Night",
distance:"8 km from Basilica",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Miramar Beach, Panaji"
},

{
name:"Country Inn Goa",
price:"₹8,500 / Night",
distance:"5 km from Church Area",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Panaji Road, Goa"
},

{
name:"Hotel La Capitol",
price:"₹6,900 / Night",
distance:"Near City Center",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Panaji, Goa"
},

{
name:"Casa De Goa",
price:"₹5,900 / Night",
distance:"Near Heritage Zone",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"North Goa"
}

]
  },

  {
    name: "Ayodhya",
    location: "Uttar Pradesh",
    image: "/spiritual/ayodhya.jpg",
    placesToVisit: [
  "Ram Mandir",
  "Hanuman Garhi",
  "Kanak Bhawan",
  "Saryu Ghat",
  "Nageshwarnath Temple"
],
hotels: [

{
name:"The Ramayana Hotel",
price:"₹12,500 / Night",
distance:"1 km from Ram Mandir",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Ram Path, Ayodhya"
},

{
name:"Ayodhya Palace",
price:"₹9,500 / Night",
distance:"Near Hanuman Garhi",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Hanuman Garhi Road"
},

{
name:"Taraji Resort",
price:"₹8,200 / Night",
distance:"3 km from Temple",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Faizabad Road, Ayodhya"
},

{
name:"Shri Ram Hotel",
price:"₹6,500 / Night",
distance:"Near Saryu Ghat",
rating:"⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Saryu Marg"
},

{
name:"Kanak Residency",
price:"₹5,500 / Night",
distance:"Near Kanak Bhawan",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Temple Area, Ayodhya"
},

{
name:"Hotel Awadh",
price:"₹4,800 / Night",
distance:"Near Railway Station",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Station Road, Ayodhya"
}

]
  },

  {
    name: "Somnath",
    location: "Gujarat",
    image: "/spiritual/somnath.jpg",
    placesToVisit: [
  "Somnath Temple",
  "Triveni Sangam",
  "Bhalka Tirth",
  "Somnath Beach",
  "Gita Mandir"
],
hotels: [

{
name:"Lords Inn Somnath",
price:"₹9,500 / Night",
distance:"500m from Temple",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Somnath Bypass Road"
},

{
name:"Regenta Central",
price:"₹8,500 / Night",
distance:"1 km from Temple",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Prabhas Patan, Somnath"
},

{
name:"The Fern Residency",
price:"₹7,500 / Night",
distance:"Near Beach",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Veraval Road, Somnath"
},

{
name:"Hotel Ambar",
price:"₹5,900 / Night",
distance:"Near Triveni Sangam",
rating:"⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Temple Road, Somnath"
},

{
name:"Shubh Suvidha",
price:"₹5,200 / Night",
distance:"Near Market",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Prabhas Patan"
},

{
name:"Hotel Somnath Sagar",
price:"₹4,500 / Night",
distance:"Near Beach",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Beach Road, Somnath"
}

]
  },

  {
    name: "Tirupati",
    location: "Andhra Pradesh",
    image: "/spiritual/tirupati.jpg",
    placesToVisit: [
  "Tirumala Temple",
  "Sri Padmavathi Temple",
  "Akasa Ganga",
  "Silathoranam",
  "Japali Teertham"
],
hotels: [

{
name:"Marasa Sarovar Premiere",
price:"₹14,500 / Night",
distance:"2 km from Temple Route",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel1.jpg",
address:"Upadhyaya Nagar, Tirupati"
},

{
name:"Fortune Select Grand Ridge",
price:"₹12,500 / Night",
distance:"Near City Center",
rating:"⭐⭐⭐⭐⭐",
image:"/booking/shotel2.jpg",
address:"Shilparamam Road, Tirupati"
},

{
name:"Pai Viceroy",
price:"₹9,500 / Night",
distance:"Near Alipiri Gate",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel3.jpg",
address:"Karakambadi Road"
},

{
name:"Hotel Bliss",
price:"₹7,500 / Night",
distance:"2 km from Station",
rating:"⭐⭐⭐⭐",
image:"/booking/shotel4.jpg",
address:"Renigunta Road, Tirupati"
},

{
name:"Kences Hotel",
price:"₹6,500 / Night",
distance:"Near Bus Stand",
rating:"⭐⭐⭐",
image:"/booking/shotel5.jpg",
address:"Opp Railway Station"
},

{
name:"Minerva Grand",
price:"₹5,900 / Night",
distance:"Near Temple Route",
rating:"⭐⭐⭐",
image:"/booking/shotel6.jpg",
address:"Renigunta Road, Tirupati"
}

]
  },

];
const heritagePlaces = [

  {
    name: "Hampi",
    location: "Karnataka",
    image: "/heritage/hampi.jpg",
    placesToVisit: [
  "Virupaksha Temple",
  "Vittala Temple",
  "Lotus Mahal",
  "Elephant Stables",
  "Matanga Hill"
],
hotels: [

{
name:"Evolve Back Hampi",
image:"/booking/hhotel1.jpg",
price:"₹18,500 / Night",
distance:"Kamalapura, Hampi",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Heritage Resort Hampi",
image:"/booking/hhotel2.jpg",
price:"₹11,000 / Night",
distance:"2 km from Virupaksha Temple",
rating:"⭐⭐⭐⭐"
},

{
name:"Hyatt Place Hampi",
image:"/booking/hhotel3.jpg",
price:"₹9,800 / Night",
distance:"Vidyanagar, Hampi",
rating:"⭐⭐⭐⭐"
},

{
name:"Royal Orchid Central",
image:"/booking/hhotel4.jpg",
price:"₹8,200 / Night",
distance:"Hospet City Center",
rating:"⭐⭐⭐⭐"
},

{
name:"Clarks Inn Hampi",
image:"/booking/hhotel5.jpg",
price:"₹6,900 / Night",
distance:"3 km from Vittala Temple",
rating:"⭐⭐⭐⭐"
},

{
name:"Malligi Hotel",
image:"/booking/hhotel6.jpg",
price:"₹5,800 / Night",
distance:"Hospet Railway Station",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Jaisalmer",
    location: "Rajasthan",
    image: "/heritage/jaisalmer.jpg",
    placesToVisit: [
  "Jaisalmer Fort",
  "Patwon Ki Haveli",
  "Gadisar Lake",
  "Sam Sand Dunes",
  "Nathmal Ki Haveli"
],
hotels: [

{
name:"Suryagarh Jaisalmer",
image:"/booking/hhotel1.jpg",
price:"₹22,000 / Night",
distance:"5 km from Jaisalmer Fort",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Fort Rajwada",
image:"/booking/hhotel2.jpg",
price:"₹13,500 / Night",
distance:"2 km from City Center",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Jaisalmer Marriott Resort",
image:"/booking/hhotel3.jpg",
price:"₹15,000 / Night",
distance:"Near Jaisalmer Fort",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Rang Mahal",
image:"/booking/hhotel4.jpg",
price:"₹9,500 / Night",
distance:"1 km from Railway Station",
rating:"⭐⭐⭐⭐"
},

{
name:"The Desert Palace",
image:"/booking/hhotel5.jpg",
price:"₹7,800 / Night",
distance:"Sam Road, Jaisalmer",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Pleasant Haveli",
image:"/booking/hhotel6.jpg",
price:"₹5,500 / Night",
distance:"500m from Fort",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Hyderabad",
    location: "Telangana",
    image: "/heritage/golconda-fort.jpg",
    placesToVisit: [
  "Golconda Fort",
  "Charminar",
  "Chowmahalla Palace",
  "Salar Jung Museum",
  "Hussain Sagar Lake"
],
hotels: [

{
name:"Taj Falaknuma Palace",
image:"/booking/hhotel1.jpg",
price:"₹28,000 / Night",
distance:"Falaknuma, Hyderabad",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"ITC Kohenur",
image:"/booking/hhotel2.jpg",
price:"₹15,000 / Night",
distance:"HITEC City",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hyderabad Marriott",
image:"/booking/hhotel3.jpg",
price:"₹12,500 / Night",
distance:"Hussain Sagar Lake",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Radisson Blu Plaza",
image:"/booking/hhotel4.jpg",
price:"₹10,000 / Night",
distance:"Banjara Hills",
rating:"⭐⭐⭐⭐"
},

{
name:"Lemon Tree Premier",
image:"/booking/hhotel5.jpg",
price:"₹7,500 / Night",
distance:"Gachibowli",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Avasa",
image:"/booking/hhotel6.jpg",
price:"₹6,500 / Night",
distance:"Madhapur",
rating:"⭐⭐⭐⭐"
}

]
  },

  {
    name: "Khajuraho",
    location: "Madhya Pradesh",
    image: "/heritage/khajuraho.jpg",
    placesToVisit: [
  "Western Group Temples",
  "Lakshmana Temple",
  "Kandariya Mahadev Temple",
  "Raneh Falls",
  "Archaeological Museum"
],
hotels: [

{
name:"Ramada Khajuraho",
image:"/booking/hhotel1.jpg",
price:"₹11,500 / Night",
distance:"1 km from Western Group Temples",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Radisson Jass Khajuraho",
image:"/booking/hhotel2.jpg",
price:"₹10,800 / Night",
distance:"2 km from City Center",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Clarks Khajuraho",
image:"/booking/hhotel3.jpg",
price:"₹8,500 / Night",
distance:"Near Airport",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Chandela",
image:"/booking/hhotel4.jpg",
price:"₹7,900 / Night",
distance:"1.5 km from Temples",
rating:"⭐⭐⭐⭐"
},

{
name:"The Lalit Temple View",
image:"/booking/hhotel5.jpg",
price:"₹13,500 / Night",
distance:"Temple Complex Road",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Isabel Palace",
image:"/booking/hhotel6.jpg",
price:"₹5,500 / Night",
distance:"Khajuraho Market",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Konark",
    location: "Odisha",
    image: "/heritage/konark.jpg",
    placesToVisit: [
  "Sun Temple",
  "Konark Beach",
  "ASI Museum",
  "Ramachandi Temple",
  "Chandrabhaga Beach"
],
hotels: [

{
name:"Lotus Eco Resort",
image:"/booking/hhotel1.jpg",
price:"₹12,000 / Night",
distance:"500m from Konark Beach",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Toshali Sands Resort",
image:"/booking/hhotel2.jpg",
price:"₹9,800 / Night",
distance:"5 km from Sun Temple",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Sun Temple",
image:"/booking/hhotel3.jpg",
price:"₹7,200 / Night",
distance:"1 km from Sun Temple",
rating:"⭐⭐⭐⭐"
},

{
name:"Konark Eco Retreat",
image:"/booking/hhotel4.jpg",
price:"₹11,500 / Night",
distance:"Beachfront",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Holiday Resort",
image:"/booking/hhotel5.jpg",
price:"₹6,800 / Night",
distance:"Near Chandrabhaga Beach",
rating:"⭐⭐⭐⭐"
},

{
name:"Nature Camp Konark",
image:"/booking/hhotel6.jpg",
price:"₹5,200 / Night",
distance:"2 km from ASI Museum",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Mahabalipuram",
    location: "Tamil Nadu",
    image: "/heritage/mahabalipuram.jpg",
    placesToVisit: [
  "Shore Temple",
  "Five Rathas",
  "Arjuna's Penance",
  "Krishna Butter Ball",
  "Mahabalipuram Beach"
],
hotels: [

{
name:"Radisson Blu Resort",
image:"/booking/hhotel1.jpg",
price:"₹15,500 / Night",
distance:"Beachfront Property",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"InterContinental Resort",
image:"/booking/hhotel2.jpg",
price:"₹18,000 / Night",
distance:"East Coast Road",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Ideal Beach Resort",
image:"/booking/hhotel3.jpg",
price:"₹9,500 / Night",
distance:"2 km from Shore Temple",
rating:"⭐⭐⭐⭐"
},

{
name:"Chariot Beach Resort",
image:"/booking/hhotel4.jpg",
price:"₹11,000 / Night",
distance:"Near Shore Temple",
rating:"⭐⭐⭐⭐"
},

{
name:"Mamalla Heritage",
image:"/booking/hhotel5.jpg",
price:"₹6,800 / Night",
distance:"Mahabalipuram Town",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Sea Breeze",
image:"/booking/hhotel6.jpg",
price:"₹4,900 / Night",
distance:"500m from Beach",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Chittorgarh",
    location: "Rajasthan",
    image: "/heritage/chittorgarh-fort.jpg",
    placesToVisit: [
  "Chittorgarh Fort",
  "Vijay Stambh",
  "Kirti Stambh",
  "Rani Padmini Palace",
  "Gaumukh Reservoir"
],
hotels: [

{
name:"Hotel Padmini Haveli",
image:"/booking/hhotel1.jpg",
price:"₹9,500 / Night",
distance:"1 km from Chittorgarh Fort",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Pratap Palace",
image:"/booking/hhotel2.jpg",
price:"₹8,800 / Night",
distance:"Near Vijay Stambh",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Royal Inn",
image:"/booking/hhotel3.jpg",
price:"₹7,200 / Night",
distance:"City Center",
rating:"⭐⭐⭐⭐"
},

{
name:"The Grand Chittor",
image:"/booking/hhotel4.jpg",
price:"₹10,500 / Night",
distance:"2 km from Fort",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Meera",
image:"/booking/hhotel5.jpg",
price:"₹5,800 / Night",
distance:"Railway Station Road",
rating:"⭐⭐⭐"
},

{
name:"Hotel Vinayak",
image:"/booking/hhotel6.jpg",
price:"₹4,900 / Night",
distance:"Near Bus Stand",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Fatehpur Sikri",
    location: "Uttar Pradesh",
    image: "/heritage/fatehpur-sikhri-fort.jpg",
    placesToVisit: [
  "Buland Darwaza",
  "Jama Masjid",
  "Diwan-i-Khas",
  "Panch Mahal",
  "Tomb of Salim Chishti"
],
hotels: [

{
name:"The Gateway Hotel",
image:"/booking/hhotel1.jpg",
price:"₹12,500 / Night",
distance:"3 km from Buland Darwaza",
address:"Fatehabad Road, Agra, Uttar Pradesh 282001",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Goverdhan",
image:"/booking/hhotel2.jpg",
price:"₹8,500 / Night",
distance:"500m from Jama Masjid",
address:"Near Fatehpur Sikri Gate, Agra, Uttar Pradesh 283110",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Sunset View",
image:"/booking/hhotel3.jpg",
price:"₹7,200 / Night",
distance:"1 km from Heritage Complex",
address:"Tourist Complex Road, Fatehpur Sikri, Uttar Pradesh 283110",
rating:"⭐⭐⭐⭐"
},

{
name:"Clarks Shiraz",
image:"/booking/hhotel4.jpg",
price:"₹11,800 / Night",
distance:"35 km from Fatehpur Sikri",
address:"54 Taj Road, Agra, Uttar Pradesh 282001",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Heritage Inn",
image:"/booking/hhotel5.jpg",
price:"₹6,500 / Night",
distance:"800m from Panch Mahal",
address:"Heritage Street, Fatehpur Sikri, Uttar Pradesh 283110",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Raj Palace",
image:"/booking/hhotel6.jpg",
price:"₹5,200 / Night",
distance:"1 km from Town Center",
address:"Main Market Road, Fatehpur Sikri, Uttar Pradesh 283110",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Mysore",
    location: "Karnataka",
    image: "/heritage/mysore.jpg",
    placesToVisit: [
  "Mysore Palace",
  "Chamundi Hills",
  "St. Philomena Church",
  "Brindavan Gardens",
  "Mysore Zoo"
],
hotels: [

{
name:"Radisson Blu Plaza Mysore",
image:"/booking/hhotel1.jpg",
price:"₹14,500 / Night",
distance:"1 km from Mysore Palace",
address:"1 MG Road, Nazarbad, Mysuru, Karnataka 570010",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Royal Orchid Metropole",
image:"/booking/hhotel2.jpg",
price:"₹12,000 / Night",
distance:"500m from Railway Station",
address:"Jhansi Lakshmi Bai Road, Mysuru, Karnataka 570005",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Fortune JP Palace",
image:"/booking/hhotel3.jpg",
price:"₹9,500 / Night",
distance:"2 km from Mysore Palace",
address:"3 Abba Road, Nazarbad, Mysuru, Karnataka 570007",
rating:"⭐⭐⭐⭐"
},

{
name:"Southern Star Mysore",
image:"/booking/hhotel4.jpg",
price:"₹8,800 / Night",
distance:"1 km from City Center",
address:"13-14 Vinobha Road, Mysuru, Karnataka 570005",
rating:"⭐⭐⭐⭐"
},

{
name:"Sandesh The Prince",
image:"/booking/hhotel5.jpg",
price:"₹7,500 / Night",
distance:"700m from Mysore Zoo",
address:"3 Nazarbad Main Road, Mysuru, Karnataka 570010",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Roopa",
image:"/booking/hhotel6.jpg",
price:"₹5,500 / Night",
distance:"500m from Mysore Palace",
address:"2724 Bangalore-Nilgiri Road, Mysuru, Karnataka 570001",
rating:"⭐⭐⭐"
}

]
  },

  {
    name: "Orchha",
    location: "Madhya Pradesh",
    image: "/heritage/orchha-fort.jpg",
    placesToVisit: [
  "Orchha Fort",
  "Jahangir Mahal",
  "Raja Mahal",
  "Chaturbhuj Temple",
  "Betwa River"
],
hotels: [

{
name:"Amar Mahal",
image:"/booking/hhotel1.jpg",
price:"₹10,500 / Night",
distance:"500m from Orchha Fort",
address:"Tikamgarh Road, Orchha, Madhya Pradesh 472246",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Orchha Palace Hotel",
image:"/booking/hhotel2.jpg",
price:"₹8,900 / Night",
distance:"1 km from Jahangir Mahal",
address:"Near Orchha Fort Complex, Orchha, Madhya Pradesh 472246",
rating:"⭐⭐⭐⭐"
},

{
name:"Bundelkhand Riverside",
image:"/booking/hhotel3.jpg",
price:"₹12,500 / Night",
distance:"700m from Raja Mahal",
address:"Kanchan Ghat Road, Orchha, Madhya Pradesh 472246",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Sunset",
image:"/booking/hhotel4.jpg",
price:"₹6,800 / Night",
distance:"1 km from Chaturbhuj Temple",
address:"Main Road Orchha, Madhya Pradesh 472246",
rating:"⭐⭐⭐⭐"
},

{
name:"The Orchha Resort",
image:"/booking/hhotel5.jpg",
price:"₹7,500 / Night",
distance:"2 km from Fort Area",
address:"Jhansi-Orchha Highway, Orchha, Madhya Pradesh 472246",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Shri Mahant",
image:"/booking/hhotel6.jpg",
price:"₹5,200 / Night",
distance:"500m from Betwa River",
address:"Ram Raja Temple Road, Orchha, Madhya Pradesh 472246",
rating:"⭐⭐⭐"
}

]
  },

  {
    name:"Udaipur",
    location:"Rajasthan",
    image:"/heritage/udaipur.jpg",
    placesToVisit: [
  "City Palace",
  "Lake Pichola",
  "Jag Mandir",
  "Sajjangarh Palace",
  "Fateh Sagar Lake"
],
hotels: [

{
name:"The Oberoi Udaivilas",
image:"/booking/hhotel1.jpg",
price:"₹42,000 / Night",
distance:"1 km from Lake Pichola",
address:"Haridasji Ki Magri, Udaipur, Rajasthan 313001",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Taj Lake Palace",
image:"/booking/hhotel2.jpg",
price:"₹38,000 / Night",
distance:"On Lake Pichola",
address:"Pichola Lake, Udaipur, Rajasthan 313001",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Trident Udaipur",
image:"/booking/hhotel3.jpg",
price:"₹14,500 / Night",
distance:"2 km from City Palace",
address:"Haridasji Ki Magri, Udaipur, Rajasthan 313001",
rating:"⭐⭐⭐⭐⭐"
},

{
name:"Hotel Lakend",
image:"/booking/hhotel4.jpg",
price:"₹9,800 / Night",
distance:"Near Fateh Sagar Lake",
address:"Fateh Sagar Lake Shore, Udaipur, Rajasthan 313001",
rating:"⭐⭐⭐⭐"
},

{
name:"The Fern Residency",
image:"/booking/hhotel5.jpg",
price:"₹7,500 / Night",
distance:"3 km from City Palace",
address:"Sukhadia Circle, Udaipur, Rajasthan 313001",
rating:"⭐⭐⭐⭐"
},

{
name:"Hotel Udai Kothi",
image:"/booking/hhotel6.jpg",
price:"₹8,200 / Night",
distance:"500m from Lake Pichola",
address:"Hanuman Ghat Marg, Udaipur, Rajasthan 313001",
rating:"⭐⭐⭐⭐"
}

]
  }

];
  const scrollRef = useRef(null);
  const beachRef = useRef(null);
  const spiritualRef = useRef(null);
  const heritageRef = useRef(null);

const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -500,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({
    left: 500,
    behavior: "smooth",
  });
};

const beachScrollLeft = () => {
  beachRef.current?.scrollBy({
    left: -500,
    behavior: "smooth",
  });
};

const beachScrollRight = () => {
  beachRef.current?.scrollBy({
    left: 500,
    behavior: "smooth",
  });
};
const spiritualScrollLeft = () => {
  spiritualRef.current?.scrollBy({
    left: -500,
    behavior: "smooth",
  });
};

const spiritualScrollRight = () => {
  spiritualRef.current?.scrollBy({
    left: 500,
    behavior: "smooth",
  });
};

const heritageScrollLeft = () => {
  heritageRef.current?.scrollBy({
    left: -500,
    behavior: "smooth",
  });
};

const heritageScrollRight = () => {
  heritageRef.current?.scrollBy({
    left: 500,
    behavior: "smooth",
  });
};
  return (

    <div className="min-h-screen bg-black text-white px-10 py-10">
 
     <button
      onClick={() => setShowExplore(false)}
      className="absolute top-6 left-6 z-50 bg-black/70 backdrop-blur-md px-6 py-3 rounded-2xl hover:bg-cyan-500 duration-300 text-xl font-semibold shadow-lg"
    >
      ⮜
    </button>

      {/* TITLE */}

      <h1 className="text-6xl font-bold text-center mb-5">
        ~Land Of Wonders~
      </h1>

      <p className="text-center text-white/70 mb-14 text-xl">
        -soul of India!
      </p>
      <h2 className="text-5xl font-bold mb-8 mt-10 border-l-4 border-cyan-400 pl-4">
  🏔 Mountains & Nature
</h2>

      {/* CARDS */}
      <div className="relative group">
     
     <button
  onClick={scrollLeft}
  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
>
  <ChevronLeft />
</button>

      <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
>

        {places.map((place, index) => (

        <div
  key={index}
  className="min-w-[180px] bg-white/10 rounded-2xl overflow-hidden hover:scale-105 duration-300 backdrop-blur-xl"
>

            <img
              src={place.image}
              alt={place.name}
              className="aspect-square w-full object-cover"
            />

            <div className="p-3">

              <h2 className="text-lg font-bold">
                {place.name}
              </h2>

              <p className="flex items-center gap-2 mt-2 text-white/70">
                <MapPin size={18} />
                {place.location}
              </p>
             <button
  onClick={() => {
    setSelectedPlace(place);
    setShowDestination(true);
  }}
  className="mt-3 w-full bg-cyan-500 py-2 rounded-xl hover:bg-cyan-400 duration-300 text-sm"
>
  Explore Now
</button>

            </div>

          </div>

        ))}

      </div>
      <button
  onClick={scrollRight}
  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
>
  <ChevronRight />
</button>
</div>
<h2 className="text-5xl font-bold mb-8 mt-20 border-l-4 border-cyan-400 pl-4">
  🏖 Beaches & Islands
</h2>

<div className="relative group">

  <button
    onClick={beachScrollLeft}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
  >
    <ChevronLeft />
  </button>

  <div
    ref={beachRef}
    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
  >

    {beaches.map((place, index) => (

      <div
        key={index}
        className="min-w-[180px] bg-white/10 rounded-2xl overflow-hidden hover:scale-105 duration-300 backdrop-blur-xl"
      >

        <img
          src={place.image}
          alt={place.name}
          className="aspect-square w-full object-cover"
        />

        <div className="p-3">

          <h2 className="text-lg font-bold">
            {place.name}
          </h2>

          <p className="flex items-center gap-2 mt-2 text-white/70">
            <MapPin size={18} />
            {place.location}
          </p>
         <button
  onClick={() => {
    setSelectedPlace(place);
    setShowDestination(true);
  }}
  className="mt-3 w-full bg-cyan-500 py-2 rounded-xl hover:bg-cyan-400 duration-300 text-sm"
>
  Explore Now
</button>

        </div>

      </div>

    ))}

  </div>

  <button
    onClick={beachScrollRight}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
  >
    <ChevronRight />
  </button>

</div>
<h2 className="text-5xl font-bold mb-8 mt-20 border-l-4 border-cyan-400 pl-4">
  🕊 Spiritual & Sacred Destinations
</h2>
<div className="relative group">

  <button
    onClick={spiritualScrollLeft}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
  >
    <ChevronLeft />
  </button>

  <div
    ref={spiritualRef}
    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
  >

    {spiritualPlaces.map((place, index) => (

      <div
        key={index}
        className="min-w-[180px] bg-white/10 rounded-2xl overflow-hidden hover:scale-105 duration-300 backdrop-blur-xl"
      >

        <img
          src={place.image}
          alt={place.name}
          className="aspect-square w-full object-cover"
        />

        <div className="p-3">

          <h2 className="text-lg font-bold">
            {place.name}
          </h2>

          <p className="flex items-center gap-2 mt-2 text-white/70">
            <MapPin size={18} />
            {place.location}
          </p>

         <button
  onClick={() => {
    setSelectedPlace(place);
    setShowDestination(true);
  }}
  className="mt-3 w-full bg-cyan-500 py-2 rounded-xl hover:bg-cyan-400 duration-300 text-sm"
>
  Explore Now
</button>
        </div>

      </div>

    ))}

  </div>

  <button
    onClick={spiritualScrollRight}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
  >
    <ChevronRight />
  </button>

</div>

<h2 className="text-5xl font-bold mb-8 mt-20 border-l-4 border-cyan-400 pl-4">
  🏰 History & Heritage
</h2>
<div className="relative group">

  <button
    onClick={heritageScrollLeft}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
  >
    <ChevronLeft />
  </button>

  <div
    ref={heritageRef}
    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
  >

    {heritagePlaces.map((place, index) => (

      <div
        key={index}
        className="min-w-[180px] bg-white/10 rounded-2xl overflow-hidden hover:scale-105 duration-300 backdrop-blur-xl"
      >

        <img
          src={place.image}
          alt={place.name}
          className="aspect-square w-full object-cover"
        />

        <div className="p-3">

          <h2 className="text-lg font-bold">
            {place.name}
          </h2>

          <p className="flex items-center gap-2 mt-2 text-white/70">
            <MapPin size={18} />
            {place.location}
          </p>

         <button
  onClick={() => {
    setSelectedPlace(place);
    setShowDestination(true);
  }}
  className="mt-3 w-full bg-cyan-500 py-2 rounded-xl hover:bg-cyan-400 duration-300 text-sm"
>
  Explore Now
</button>

        </div>

      </div>

    ))}

  </div>

  <button
    onClick={heritageScrollRight}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-3 rounded-full hover:bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300"
  >
    <ChevronRight />
  </button>

</div>

    </div>
  );
}

export default Explore;