import CloseButton from "../CloseButton"

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { useState } from "react"
import FeedbackTypeStep from "./Steps/FeedbackTypeStep"
import FeedbackContentStep from './Steps/FedbackContentStep';
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep"



export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
    const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    
    function handlleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }
    
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handlleRestartFeedback} />
            ): (
               <>
                {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
               
             ): (
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handlleRestartFeedback}
                onFeedbackSent={() =>setFeedbackSent(true)}
                />
                )}
               </> 
            ) }
           <footer className="text-xs text-natural-400">
                Feito para <a  className="underline underline-offset-1" href="">mim</a> 
           </footer>
        </div>
    )
     
}