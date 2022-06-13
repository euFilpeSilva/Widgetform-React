import CloseButton from "./CloseButton"

const FeedbackTypes = {
    BUG: {
        title: "Problema",
    },
    IDEA: {
        title: "Ideia",
    },
    OTHER: {
        title: "Outro",
    }
}
    

export default function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex  flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
           <CloseButton/>
           </header>

              <div className="text-xs text-neutral-400 w-full">
                
              </div>
              
           <footer className="text-xs text-natural-400">
                Feito para <a  className="underline underline-offset-1" href="">mim</a> 
           </footer>
        </div>
    )
     
}