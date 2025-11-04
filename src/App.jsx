import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./searchForm";
import Gallery from "./Gallery";

function App() {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
}

export default App;
