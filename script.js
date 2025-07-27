let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}

  
  
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by nandha")
    
    }
    else if(message.includes("what is your name")){
        speak("i am lucas")
    }
    else if(message.includes("you are doveloped by")){
        speak(" nandha") 
    }
    
else if(message.includes("who are you")){
    speak("I am a virtual assistant created by Nandha")
}

else if(message.includes("what is your name")){
    speak("My name is Nexa, your digital assistant")
}

else if(message.includes("who created you")){
    speak("I was developed by Nandha Kumar to assist you with various tasks")
}

else if(message.includes("what can you do")){
    speak("I can help with information, scheduling, reminders, calculations, and much more")
}

else if(message.toLowerCase().includes("hello")){
    speak("Hello! How can I assist you today?")
}

else if(message.toLowerCase().includes("hi") || message.toLowerCase().includes("hey")){
    speak("Hi there! Nice to meet you")
}
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open news")){
        speak("opening  google news...")
        window.open("https://news.google.com/home?hl=en-IN&ceid=IN:en&gl=IN","_blank")
    }
    else if(message.includes("open amazon")){
        speak("opening amazon...")
        window.open("https://www.amazon.in/","_blank")
    }
    else if(message.includes("open google news")){
        speak("opening google news...")
        window.open("https://news.google.com/home?hl=en-IN&ceid=IN:en&gl=IN","_blank")
    }
    else if(message.includes("write my home work")){
        speak("ok wait...")
        window.open("https://www.deepseek.com/","_blank")
    }
    else if(message.includes("today news")){
        speak("ok wait...")
        window.open("https://www.bbc.com/news","_blank")
    }
    else if(message.includes("bbc news")){
        speak("ok wait...")
        window.open("https://www.bbc.com/news","_blank")
    }
    else if(message.includes("open bbc news")){
        speak("ok wait...")
        window.open("https://www.bbc.com/news","_blank")
    }
    else if(message.includes("times of india news")){
        speak("ok wait...")
        window.open("https://timesofindia.indiatimes.com/","_blank") 
    }
    else if(message.includes("open time of india news")){
        speak("ok wait...")
        window.open("https://timesofindia.indiatimes.com/","_blank")            
    }
    else if(message.includes("open flipkart")){
        speak("opening flipkart...")
        window.open("https://www.flipkart.com/","_blank")
    }
    else if(message.includes("open walmart")){
        speak("opening walmart...")
        window.open("https://www.walmart.com/","_blank")          
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open swiggy")){
        speak("opening swiggy...")
        window.open("https://www.swiggy.com/","_blank")
    }
    else if(message.includes("open trading view")){
        speak("opening tradeview...")
        window.open("https://swingview.in/index.html","_blank")
    }
    else if(message.includes("open telegram")){
        speak("opening telegram...")
        window.open("https://web.telegram.org/k/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open math solver")){
        speak("opening math solver...")
        window.open("https://math-gpt.org/","_blank")
    }
    else if(message.includes("open deepseek ai")){
        speak("opening deepseek ai...")
        window.open("https://www.deepseek.com/","_blank")
    }
    else if(message.includes("solve the maths question")){
        speak("wait...")
        window.open("https://brainly.in/","_blank")
    }
    else if(message.includes("maths question solution")){
        speak("wait...")
        window.open("https://brainly.in/","_blank")
    }
    else if(message.includes("....history")){
        speak("open history page...")
        window.open("https://www.wikipedia.org/","_blank")
    }
    else if(message.includes("open bing ai")){
        speak("opening bing ai...")
        window.open("https://copilot.microsoft.com/","_blank")
    
    }
    else if(message.includes("chat gpt")){
        speak("opening chat gpt...")
        window.open("https://openai.com/chatgpt/overview/","_blank")
    }
    else if(message.includes("open gemini")){
        speak("opening gemini...")
        window.open("https://gemini.google.com/?hl=en-IN","_blank")    
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("https://mathsolver.microsoft.com/en/solver?r=bi&ref=bi/")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("https://web.whatsapp.com/")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("lucas","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("lucas","")}`,"_blank")
    }
}   
