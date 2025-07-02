# 📰 NewsIS

**NewsIS** is a modern and responsive React app that delivers real-time news headlines powered by [NewsAPI.org](https://newsapi.org/). Users can browse news articles by category using infinite scroll and a smooth user interface.

---

## 📁 Project Structure

newsIS/
├── public/
│ ├── Breaking-News.jpeg # Fallback image for articles
│ └── news.jpg # Logo used in navbar
│
├── src/
│ ├── components/
│ │ ├── Navbar/
│ │ │ └── Navbar.js # Navigation bar
│ │ │ └── Navbar.css # Navbar styling
│ │ ├── News.js # Core logic to fetch and render news
│ │ ├── NewsItem.js # Card for displaying each news article
│ │ └── spinner.js # Loading spinner component
│ ├── App.js # Routing and layout
│ └── index.js # React root
│
├── package.json
└── README.md

---

## 🚀 Features

- 🗂️ Browse top headlines by category: General, Business, Entertainment, Health, Science, Sports, Technology
- ♾️ Infinite scroll using `react-infinite-scroll-component`
- 🎯 Dynamic progress bar with `react-top-loading-bar`
- 🧭 Navigation via `react-router-dom` v6
- 📱 Responsive layout using Bootstrap
- 📰 Fallback image for missing thumbnails
- 🕒 Formatted date & author metadata

---

## ⚙️ Tech Stack

- **React.js**
- **Bootstrap 5**
- **React Router DOM**
- **NewsAPI.org**
- **React Infinite Scroll**
- **React Top Loading Bar**

---

💻 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/newsIS.git
cd newsIS
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm start
Visit: http://localhost:3000

🛠 Available Routes
These are handled via React Router:

/ → General

/business

/entertainment

/health

/science

/sports

/technology

📦 Deployment
You can deploy on:

Netlify

Vercel

GitHub Pages

To build for production:

bash
Copy
Edit
npm run build

📄 License
This project is licensed under the MIT License.