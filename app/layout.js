import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TranslationProvider from "./translation/TranslationProvider";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata = {
  title: "Enoves",
  description: "Enoves official website.",
  robots: {
    index: false,
    follow: false,
  },
};


import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TranslationPrompt from "./components/translation/TranslationPrompt";
import MouseFollower from "./components/effects/MouseFollower";
import { ThemeProvider } from "./components/dark-light-theme/toggle-switch";

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body
        className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <TranslationProvider>
          <MouseFollower />
          <TranslationPrompt />
          <Header />
          { children }
          <Footer />
          </TranslationProvider>
          
          </ThemeProvider>
      </body>
    </html>
  );
}
