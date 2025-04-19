import React from "react";
import Footer from "./Footer"; // Assuming Footer is your bottom footer component
import { Nav } from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <header>
        <Nav />
      </header>

      {/* Main content in between */}
      <main className="flex-grow">{children}</main>

      {/* Footer at the bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
