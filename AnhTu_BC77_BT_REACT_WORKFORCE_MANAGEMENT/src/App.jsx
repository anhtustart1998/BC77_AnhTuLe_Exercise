import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Admin } from "./pages/Admin.jsx";
import { AdminTable } from "./components/AdminTable/AdminTable.jsx";
import { Provider } from "react-redux";
import { store } from "./ReduxStore/store.js";
import { AdminForm } from "./components/AdminForm/AdminForm.jsx";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-100">
            <Navbar />

            <main className="flex-grow w-full mt-20">
              <Routes>
                <Route path="/" element={<Admin />}>
                  <Route index element={<AdminTable />} />
                  <Route path="employee-list" element={<AdminTable />} />
                  <Route path="employee-form" element={<AdminForm />} />
                </Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
