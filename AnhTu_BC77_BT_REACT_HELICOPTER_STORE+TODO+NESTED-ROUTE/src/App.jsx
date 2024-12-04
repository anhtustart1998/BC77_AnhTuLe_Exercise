import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Admin } from "./pages/Admin.jsx";
import { AddProduct } from "./pages/AddProduct.jsx";
import { AdminTable } from "./components/Table/AdminTable.jsx";
import { EditProduct } from "./pages/EditProduct.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <Navbar />

          <main className="flex-grow w-full mt-20">
            <Routes>
              {/* Home Page Route Config */}
              <Route path="" element={<Banner />} />
              {/* Admin Page Route Config */}
              <Route path="admin" element={<Admin />}>
                <Route index element={<AdminTable />} />
                <Route path="Admin-Table" element={<AdminTable />} />
                <Route path="Add-Helicopter" element={<AddProduct />} />
                <Route path="Edit-Helicopter" element={<EditProduct />} />
              </Route>
            </Routes>
          </main>

          <Footer />
        </div>{" "}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
