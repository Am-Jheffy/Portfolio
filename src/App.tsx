import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { InitialLoader } from "@/components/ui/InitialLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <InitialLoader key="loader" />}
      </AnimatePresence>

      <Header />
      <main>
        <Hero />
        {/* About, Skills, Projects, Experience, Contact sections come next */}
      </main>
    </>
  );
}

export default App;
