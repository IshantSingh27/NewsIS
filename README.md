# 📰 NewsIS

**NewsIS** is a modern and responsive React app that delivers real-time news headlines powered by [NewsAPI.org](https://newsapi.org/). Users can browse news articles by category using infinite scroll and a smooth user interface.

---

## 📁 Project Structure

- `public/`
  - `Breaking-News.jpeg` – Default image for articles without one
  - `news.jpg` – Logo displayed in the navbar

- `src/`
  - `components/`
    - `Navbar/`
      - `Navbar.js` – Navigation bar component
      - `Navbar.css` – Styling for the navbar
    - `News.js` – Handles fetching and displaying news articles
    - `NewsItem.js` – Displays individual news cards
    - `spinner.js` – Shows a loading spinner when data is loading
  - `App.js` – Main app component with routing setup
  - `index.js` – React app entry point

- `.gitignore` – Lists files/folders to be ignored by Git
- `package.json` – Contains project metadata and dependencies
- `README.md` – This file with all project info


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
