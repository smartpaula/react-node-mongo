const mongoose = require('mongoose');
const User = require('./model/User');

// 連接 MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// 要匯入的 JSON 資料
const users = [
  {
    id: 1,
    name: "Nella Hahn",
    company: "Medhurst, Tillman and Greenfelder",
    username: "Marlin98",
    email: "Mario_Gorczany8@gmail.com",
    address: "51744 Greenwood Road",
    zip: "60927-3154",
    state: "Maryland",
    country: "Turks and Caicos Islands",
    phone: "446-630-5438 x5824",
    photo: "https://json-server.dev/ai-profiles/51.png"
  },
  {
    id: 2,
    name: "Joanie Faker Attribute Error: person.astName is not supported",
    company: "Langworth, Christiansen and Larson",
    username: "Kaia.Spinka65",
    email: "Barbara19@hotmail.com",
    address: "55661 Cambridge Street",
    zip: "64093-3948",
    state: "Washington",
    country: "Senegal",
    phone: "(912) 241-1203 x54185",
    photo: "https://json-server.dev/ai-profiles/39.png"
  },
  {
    id: 3,
    name: "Sonya Rolfson-Ruecker",
    company: "Ratke Inc",
    username: "Dianna.Windler",
    email: "Elmer.Cole86@hotmail.com",
    address: "9411 Katrine Falls",
    zip: "89383-9056",
    state: "Arkansas",
    country: "Central African Republic",
    phone: "1-891-333-6326 x8999",
    photo: "https://json-server.dev/ai-profiles/59.png"
  },
  {
    id: 4,
    name: "Junior Metz",
    company: "Koss - Douglas",
    username: "Curtis_Bahringer98",
    email: "Waylon61@yahoo.com",
    address: "68835 Estefania Drives",
    zip: "75620-4509",
    state: "North Carolina",
    country: "Fiji",
    phone: "546.315.5524 x6360",
    photo: "https://json-server.dev/ai-profiles/0.png"
  },
  {
    id: 5,
    name: "Caesar Terry",
    company: "Langosh - Purdy",
    username: "Aidan_Dooley34",
    email: "Suzanne82@gmail.com",
    address: "8276 Elisabeth Shore",
    zip: "56603-6804",
    state: "Illinois",
    country: "Trinidad and Tobago",
    phone: "235.960.0696 x15499",
    photo: "https://json-server.dev/ai-profiles/0.png"
  },
  {
    id: 6,
    name: "Dakota Kulas",
    company: "Wunsch, Schumm and Sanford",
    username: "Ova.Stehr",
    email: "Agustin.Ziemann@yahoo.com",
    address: "481 Jan Cape",
    zip: "15351-6797",
    state: "Kentucky",
    country: "Kazakhstan",
    phone: "1-900-452-7146 x24621",
    photo: "https://json-server.dev/ai-profiles/12.png"
  },
  {
    id: 7,
    name: "Berta Lakin",
    company: "Schroeder, Harris and Cassin",
    username: "Ferne74",
    email: "Darrick57@yahoo.com",
    address: "942 Armstrong Roads",
    zip: "23521",
    state: "Texas",
    country: "Indonesia",
    phone: "1-740-803-8307",
    photo: "https://json-server.dev/ai-profiles/13.png"
  },
  {
    id: 8,
    name: "Gerald Kautzer",
    company: "Yost - Blanda",
    username: "Zaria33",
    email: "Gayle.Pollich-Larkin14@yahoo.com",
    address: "75762 Daniel Flats",
    zip: "46680-8037",
    state: "Kansas",
    country: "Taiwan",
    phone: "890.711.9731",
    photo: "https://json-server.dev/ai-profiles/73.png"
  },
  {
    id: 9,
    name: "Abbigail Corwin",
    company: "Langworth, Moen and Murphy",
    username: "Theodore.Simonis",
    email: "Carey22@hotmail.com",
    address: "71447 Kristy Gateway",
    zip: "82848-6912",
    state: "New Jersey",
    country: "Portugal",
    phone: "(489) 857-9362 x6866",
    photo: "https://json-server.dev/ai-profiles/47.png"
  },
  {
    id: 10,
    name: "Cristal Jenkins",
    company: "Aufderhar LLC",
    username: "Mattie.Ruecker19",
    email: "Aletha_Moore@gmail.com",
    address: "46441 Broadway Street",
    zip: "86043-7463",
    state: "Indiana",
    country: "Fiji",
    phone: "315.353.9465",
    photo: "https://json-server.dev/ai-profiles/76.png"
  },
];

// 匯入資料到 MongoDB
const importData = async () => {
  try {
    await User.insertMany(users);
    console.log('Data Imported Successfully');
    process.exit();
  } catch (error) {
    console.error('Error with Data Import', error);
    process.exit(1);
  }
};

importData();
