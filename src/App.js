import "./App.css";
import Home from "./pages/home/Home";
// import TopBar from "./topbar/TopBar";
import TopBar from "./components/topbar/TopBar.jsx";
import Write from "./pages/write/Write";
import settings from "./pages/settings/settings";
// import settings from "./pages/settings/settings";
// import Single from "./pages/single/Single";
// import TopBar from "./components/";

function App() {
  return (
    <>
      {/* <TopBar></TopBar> */}
      <TopBar></TopBar>
      {/* <Home></Home> */}
      {/* <Single></Single> */}
      {/* <Write></Write> */}
      <settings></settings>
    </>
  );
}

export default App;
