import { Suspense } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/technologies/Technologies";
import type { Itechonology } from "./technologyType";
import { ToastContainer } from "react-toastify";

const technologiesFetch = async ():Promise<Itechonology[]> => {
  const res = await fetch('/technologiesData.json');
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading.........</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
