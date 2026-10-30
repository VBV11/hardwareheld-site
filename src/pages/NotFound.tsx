import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center bg-muted pb-16 pt-32">
        <div className="container">
          <h1 className="kop-pagina">Deze pagina bestaat niet</h1>
          <p className="inleiding mt-4 max-w-2xl text-foreground/80">
            De link klopt niet meer of de pagina is verplaatst.
          </p>
          <Link to="/" className="knop knop-oranje mt-7">
            Terug naar home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
