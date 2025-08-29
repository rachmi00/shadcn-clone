import Dashboard from "@/components/sections/Dashboard";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
       <div className="bg-background relative z-10 flex min-h-svh flex-col m-4">
        <Header />
        <main className="flex flex-1 flex-col">
          <Hero></Hero>
          <Dashboard/>
        </main>
        <Footer />
      </div>
  );
}