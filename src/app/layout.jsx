import "./globals.css";

import NavBar from "./components/NavBar";

export const metadata = {
  title: "Fushion AI | Transform real estate with the power of data",
  description:
    "At Fushion AI, we harness the power of data to transform the real estate market. Our advanced AI models provide essential insights, enabling clients to make informed investment decisions with accurate, up-to-date information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
