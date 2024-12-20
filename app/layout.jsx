import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import CreateEventDrawer from "@/components/create-event";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Scheduler",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic = {true}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          <footer className="bg-blue-100 py-6">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with ❤️ by Rishabh</p>
            </div>
          </footer>
          <Toaster
            position="bottom-center"
            containerStyle={{ bottom: 40 }}
            toastOptions={{
              style: { padding: "16px" },
              duration: 2500,
            }}
          />
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
