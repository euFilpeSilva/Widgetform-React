import CloseButton from "./CloseButton"

import bugImageUrl from "../assets/bug.svg"
import ideaImageUrl from "../assets/idea.svg"
import thoughtImageUrl from "../assets/thought.svg"
import { useState } from "react"


const FeedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balão"
        }
    },
}

type FeedbackType = keyof typeof FeedbackTypes;

export default function WidgetForm() {
    const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)
    

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
           <CloseButton/>
           </header>

             {!feedbackType ? (
                 <div className="flex py-8 gap-2 w-full">
                 { Object.entries(FeedbackTypes).map(([key, value]) => {
                     return (
                         <button
                          key={key}
                          onClick={() => setFeedbackType(key as FeedbackType)} 
                         className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                         >
                             <img src={value.image.source} alt={value.image.source} />
                             <span>{value.title}</span>
                         </button>
                     );
                 })}
               </div>
             ): <p>Hello World</p>}
              
           <footer className="text-xs text-natural-400">
                Feito para <a  className="underline underline-offset-1" href="">mim</a> 
           </footer>
        </div>
    )
     
}