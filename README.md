# PhotoQuest

**PhotoQuest** is a simple and elegant image search web app built with **React**, **Vite**, and the **Unsplash API**.  
It allows users to search for high-quality photos from Unsplash, toggle between **light** and **dark mode**, and view images in a responsive gallery layout.

---

## Features

- **Search Images** by keyword using the Unsplash API  
  -**Dark/Light Mode Toggle** — remembers your preference across sessions
- **Fast Performance** powered by Vite and React Query caching
- **Persistent Theme** stored in `localStorage`
- **Responsive Design** for all screen sizes

---

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Custom CSS (light/dark theme support)
- **API:** Unsplash API
- **Data Fetching:** @tanstack/react-query
- **HTTP Client:** Axios
- **Icons:** react-icons

---

## Installation & Setup

### 1. Clone the repository

```bash
git https://github.com/Ejoh-Hosea/PhotoQuest.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Unsplash API Key

Create a `.env` file in the project root and add:

```bash
VITE_API_KEY=your_unsplash_access_key
```

You can get your key from [Unsplash Developers](https://unsplash.com/developers).

### 4. Start the development server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

---

## 💡 Future Improvements

- Add infinite scroll / pagination
- Add favorites functionality
- Support image download and detail view

---
