import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twitter-X Clone",
  description: "This app is clone of twitter-x.com or x.com which is built on next.js and tailwindcss.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div className='hidden sm:inline border-r-2 h-screen'>
            <Sidebar />
          </div>
          <div>{children}</div>
          <div className='lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]'>
          <div className='sticky top-0 py-2'>
                <input
                  type='text'
                  placeholder='Search'
                  className='bg-gray-300 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2'
                ></input>
              </div>
            <News />
          </div>
        </div>
        
        </body>
    </html>
  );
}
