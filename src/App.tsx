import { useState } from "react"
import WebsiteUrl from "./components/WebsiteUrl";
import RealTimeScreen from "./components/RealTimeScreen";

const App = () => {
  const [url, setUrl] = useState("");
  return (
    <div>
      <WebsiteUrl url={url} setUrl={setUrl}/>
      <RealTimeScreen url={url}/>
    </div>
  )
}

export default App
