import Image from "next/image";
import { Inter } from "next/font/google";
import Register from "../components/Register";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`w-full min-h-screen ${inter.className}`}>
      <Register />
    </main>
  );
}
