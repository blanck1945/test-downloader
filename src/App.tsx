import { Button } from "@ritmo/ui";
import "./App.css";
import logo from "./assets/logo-and-slogan.svg";
import headerLogo from "./assets/logo.svg";

const downloadPaths = {
  windows: "Ritmo Player-1.0.0 Setup.exe",
  ubuntu: "ritmo-player-desktop_1.0.0_amd64.deb",
};

const getFilePath = () => {
  const platform = navigator.userAgent.toLowerCase();

  if (platform.includes("windows")) return "/files/" + downloadPaths.windows;

  if (platform.includes("ubuntu")) return "/files/" + downloadPaths.ubuntu;

  return "";
};

function App() {
  const filePath = getFilePath();

  return (
    <div className="flex">
      <div className="min-h-screen w-full md:w-1/2 flex items-center justify-center">
        <img
          src={headerLogo}
          className="filter md:hidden absolute left-6 top-6 h-8"
        />
        <div className="w-full px-5 max-w-sm flex flex-col items-center gap-4">
          <h2 className="text-center mb-4">Ritmo Player Downloader</h2>
          <ul className="flex flex-col items-center">
            <li>Descarga la aplicación</li>
            <li>Instala la aplicación</li>
            <li>Disfruta de la música</li>
          </ul>
          <Button
            disabled={Boolean(!filePath)}
            className="w-full font-bold p-2"
          >
            <a className="w-full" download href={filePath}>
              Descargar Ritmo
            </a>
          </Button>
        </div>
      </div>
      <div
        className={`
         bg-[#3D2DB7] items-center justify-center
            hidden md:flex flex-1
            
            `}
      >
        <img className="max-w-md" src={logo} />
      </div>
    </div>
  );
}

export default App;
