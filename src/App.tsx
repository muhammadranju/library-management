import { Outlet } from "react-router";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Nav />
      <div className="w-11/12 mx-auto lg:w-11/12 md:w-11/12 xl:container">
        <div className="min-h-[calc(100vh-441px)]">
          <Outlet />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
