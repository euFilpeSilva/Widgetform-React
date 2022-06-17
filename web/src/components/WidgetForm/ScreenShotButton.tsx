import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";

export default function ScreenshotButton() {
    const [isTakingScreenshotButton, setIsTakingScreenshotButton] = useState(false);

   async function handleTakeScreenShot() {
        setIsTakingScreenshotButton(true);

    const canvas = await html2canvas(document.querySelector('html')!); //tira um print
    const base64image = canvas.toDataURL('image/png');  // converte print pra png no formato base64 que é em formato de texto e representa uma imagem

    setIsTakingScreenshotButton(false);
    }
    return (
        <button
        type="button"
        onClick={handleTakeScreenShot}
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offfset-zinc-900 focus:ring-brand-500"
        >
            <Camera className="w-6 h-6"/>
        </button>
    )
}