import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { Hero } from "./components/Hero/Hero.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navbar />

        <main className="flex-grow w-full">
          <Hero />
          <Banner />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
