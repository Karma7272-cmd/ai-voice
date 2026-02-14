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
        
    else if(message.includes("what is data base")){
        speak("collection of data")
    }
    else if(message.includes("you are doveloped by")){
        speak(" nandha") 
    }
    
else if(message.includes("who are you")){
    speak("I am a virtual assistant created by Nandha")
}

else if(message.includes("who created you")){
    speak("I was developed by Nandha Kumar to assist you with various tasks")
}
else if(message.includes("what is your name")){
    speak("I am a virtual assistant created by Nandha")
}
else if(message.includes("how are you")){
    speak("I'm doing great, thank you!")
}
else if(message.includes("what can you do")){
    speak("I can answer questions, tell jokes, and assist with tasks.")
}
else if(message.includes("tell me a joke")){
    speak("Why don’t scientists trust atoms? Because they make up everything!")
}
else if(message.includes("who created you")){
    speak("I was created by Nandha.")
}
else if(message.includes("what is the time")){
    speak("Please check your device for the current time.")
}
else if(message.includes("what is the date")){
    speak("Check your calendar or system for the current date.")
}
else if(message.includes("where are you from")){
    speak("I'm from the cloud, made by Nandha.")
}
else if(message.includes("can you help me")){
    speak("Of course! Just ask your question.")
}
else if(message.includes("what is AI")){
    speak("AI stands for Artificial Intelligence.")
}
else if(message.includes("what is JavaScript")){
    speak("JavaScript is a programming language used to create dynamic website content.")
}
else if(message.includes("who is Elon Musk")){
    speak("Elon Musk is a tech entrepreneur known for Tesla, SpaceX, and more.")
}
else if(message.includes("what is your purpose")){
    speak("To assist you with questions and tasks.")
}
else if(message.includes("can you code")){
    speak("Yes, I can generate and explain code.")
}
else if(message.includes("sing a song")){
    speak("I would if I could! I'm still learning to sing.")
}
else if(message.includes("do you sleep")){
    speak("I never sleep, I'm always ready to help.")
}
else if(message.includes("do you have feelings")){
    speak("No, I don't have feelings, but I can understand yours.")
}
else if(message.includes("tell me a fun fact")){
    speak("Octopuses have three hearts!")
}
else if(message.includes("what is the capital of France")){
    speak("The capital of France is Paris.")
}
else if(message.includes("how old are you")){
    speak("I was created recently by Nandha.")
}
    else if(message.includes("what is the tallest mountain")){
    speak("Mount Everest is the tallest mountain above sea level.")
}
else if(message.includes("who is the president of the USA")){
    speak("As of now, the President is Joe Biden.")
}
else if(message.includes("what is 2 plus 2")){
    speak("2 plus 2 is 4.")
}
else if(message.includes("how many continents are there")){
    speak("There are 7 continents.")
}
else if(message.includes("what is the speed of light")){
    speak("The speed of light is approximately 299,792 kilometers per second.")
}
else if(message.includes("can you speak multiple languages")){
    speak("Yes, I can understand and respond in many languages.")
}
else if(message.includes("what is water made of")){
    speak("Water is made of two hydrogen atoms and one oxygen atom, H2O.")
}
else if(message.includes("who invented the telephone")){
    speak("Alexander Graham Bell is credited with inventing the telephone.")
}
else if(message.includes("what is the largest ocean")){
    speak("The Pacific Ocean is the largest ocean on Earth.")
}
else if(message.includes("what is photosynthesis")){
    speak("Photosynthesis is the process by which plants make food using sunlight.")
}
else if(message.includes("what is gravity")){
    speak("Gravity is the force that attracts objects towards each other.")
}
else if(message.includes("what is a computer")){
    speak("A computer is an electronic device that processes information.")
}
else if(message.includes("how does the internet work")){
    speak("The internet is a global network of computers that communicate using standard protocols.")
}
else if(message.includes("what is 10 times 10")){
    speak("10 times 10 is 100.")
}
else if(message.includes("what is HTML")){
    speak("HTML stands for HyperText Markup Language and is used to structure web pages.")
}
else if(message.includes("what is CSS")){
    speak("CSS stands for Cascading Style Sheets and is used to style web pages.")
}
else if(message.includes("what is React")){
    speak("React is a JavaScript library for building user interfaces.")
}
else if(message.includes("what is Python")){
    speak("Python is a popular high-level programming language.")
}
else if(message.includes("what is a database")){
    speak("A database is a structured collection of data.")
}
else if(message.includes("who is the richest person")){
    speak("The richest person can vary, but Elon Musk and Jeff Bezos are often at the top.")
}
else if(message.includes("what is blockchain")){
    speak("Blockchain is a distributed digital ledger used for secure transactions.")
}
else if(message.includes("what is cryptocurrency")){
    speak("Cryptocurrency is a digital or virtual currency secured by cryptography.")
}
else if(message.includes("what is bitcoin")){
    speak("Bitcoin is a decentralized digital currency invented in 2009.")
}
else if(message.includes("what is ethereum")){
    speak("Ethereum is a decentralized blockchain with smart contract functionality.")
}
else if(message.includes("what is an NFT")){
    speak("NFT stands for Non-Fungible Token, a unique digital asset stored on a blockchain.")
}
else if(message.includes("what is a smart contract")){
    speak("A smart contract is a self-executing program that runs on a blockchain.")
}
else if(message.includes("who is Mark Zuckerberg")){
    speak("Mark Zuckerberg is the co-founder and CEO of Facebook, now Meta.")
}
else if(message.includes("what is Google")){
    speak("Google is a search engine and tech company founded in 1998.")
}
else if(message.includes("what is YouTube")){
    speak("YouTube is a video-sharing platform owned by Google.")
}
else if(message.includes("what is Java")){
    speak("Java is a high-level, class-based programming language.")
}
else if(message.includes("how many planets are in the solar system")){
    speak("There are 8 planets in the solar system.")
}
else if(message.includes("what is Mars")){
    speak("Mars is the fourth planet from the Sun, often called the Red Planet.")
}
else if(message.includes("what is the Moon")){
    speak("The Moon is Earth's only natural satellite.")
}
else if(message.includes("how far is the Moon")){
    speak("The Moon is about 384,400 kilometers from Earth.")
}
else if(message.includes("how far is the Sun")){
    speak("The Sun is about 149.6 million kilometers from Earth.")
}
else if(message.includes("what is a star")){
    speak("A star is a luminous ball of gas held together by gravity.")
}
else if(message.includes("what is the Milky Way")){
    speak("The Milky Way is the galaxy that contains our Solar System.")
}
else if(message.includes("what is a galaxy")){
    speak("A galaxy is a system of millions or billions of stars, gas, and dust.")
}
else if(message.includes("what is the universe")){
    speak("The universe includes all of space, time, matter, and energy.")
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
