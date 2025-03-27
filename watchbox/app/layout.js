import Navbar from "./Components/NavBar";
import "./globals.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
