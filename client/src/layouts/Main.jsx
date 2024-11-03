import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
// import { useState } from "react";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Main = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <div>
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <l-hatch size="28" stroke="4" speed="3.5" color="black"></l-hatch>
        <Outlet />
      </div>
      <Footer />
    </div>
    // <div>
    //   {loading ? (
    //     <div className="flex justify-center items-center h-[100vh] w-[100%]">
    //       {/* <ClimbingBoxLoader
    //         color={"#F37A24"}
    //         loading={loading}
    //         size={15}
    //         aria-label="Loading Spinner"
    //         data-testid="loader"
    //       /> */}
    //     </div>
    //   ) : (

    //   )}
    // </div>
  );
};

export default Main;
