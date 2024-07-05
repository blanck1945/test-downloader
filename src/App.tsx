import { Button } from "@ritmo/ui";
import logo from "./assets/logo-and-slogan.svg";
import headerLogo from "./assets/logo.svg";


const getPlataform = () => {
  const platform = navigator.userAgent.toLowerCase();

  if (platform.includes("windows")) return ".exe";

  if (platform.includes("ubuntu")) return ".deb";

  return "";
};

function App() {
  const plataform = getPlataform();

  const downloadFile = async () => {
    const baseGithubUrl =
      "https://api.github.com/repos/ritmostudio/ritmo-player-desktop-releases/releases/latest";

    const response = await fetch(baseGithubUrl);
    const data = await response.json();
    const downloadPath = data.assets.find((asset: any) =>
      asset.name.includes(plataform)
    );

    window.open(downloadPath.browser_download_url, "_blank");
  };

  return (
    <div className="flex">
      <div className="min-h-screen w-full md:w-1/2 flex items-center justify-center">
        <img
          src={headerLogo}
          className="filter md:hidden absolute left-6 top-6 h-8"
        />
        <div className="w-full px-5 max-w-sm flex flex-col items-center gap-4">
          <h2 className="text-center mb-4">Ritmo Player Desktop</h2>
          {plataform && (
            <Button
              disabled={Boolean(!plataform)}
              className="w-full font-bold p-2"
              onClick={downloadFile}
            >
              Descargar Ritmo Desktop
            </Button>
          )}
          {!plataform && (
            <p className="text-red-400 text-center">
              Descarga no disponible para tu sistema operativo
            </p>
          )}
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

