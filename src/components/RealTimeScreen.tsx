import { useState } from "react";
import { Screens } from "../constants";

const RealTimeScreen = ({ url }: { url: string }) => {
  const [selectedScreen, setSelectedScreen] = useState({
    screen: "Mobile",
    width: 375,
    height: 667,
  });
  const [screenWidth, setScreenWidth] = useState<number>(434);
  const [screenHeight, setScreenHeight] = useState<number>(667);

  return (
    <div className="px-4 md:px-8">
      {/* Screen Selector */}
      <div className="inline-flex flex-wrap gap-3 md:gap-6 bg-gray-800 py-2 px-3 md:px-8 rounded-md justify-center md:justify-start">
        {Screens.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedScreen({
                screen: item.type,
                width: item.width,
                height: item.height,
              });
              setScreenWidth(item.width);
              setScreenHeight(item.height);
            }}
            className={`flex items-center gap-2 md:gap-x-2 hover:bg-gray-900 px-3 py-2 rounded-md ease-in-out duration-150 cursor-pointer ${
              selectedScreen.screen === item.type ? "bg-gray-900" : ""
            }`}
          >
            <span>{<item.icon />}</span>
            <span className="text-sm md:text-base">{item.type}</span>
          </div>
        ))}
      </div>

      {/* Custom screen inputs */}
      {selectedScreen.screen === "Custom" && (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 mb-6 w-full max-w-md mx-auto">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="width" className="mb-1 text-sm font-medium">
              Width (px)
            </label>
            <input
              type="number"
              className="border px-3 py-2 font-medium rounded-md border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 h-12 outline-none"
              min={320}
              max={2560}
              value={screenWidth}
              onChange={(e) => setScreenWidth(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="height" className="mb-1 text-sm font-medium">
              Height (px)
            </label>
            <input
              type="number"
              className="border px-3 py-2 font-medium rounded-md border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 h-12 outline-none"
              min={320}
              max={1440}
              value={screenHeight}
              onChange={(e) => setScreenHeight(Number(e.target.value))}
            />
          </div>
        </div>
      )}

      <div className={`w-full flex justify-center mb-12 ${selectedScreen.screen != "Custom" && "mt-14"}`}>
        <iframe
          src={url}
          width={screenWidth}
          height={`${
            selectedScreen.screen !== "Custom" ? "600px" : screenHeight
          }`}
          className="border-none rounded-md max-w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default RealTimeScreen;
