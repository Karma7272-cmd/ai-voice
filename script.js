let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");
let glassContainer = document.querySelector(".glass-container");
let welcomeOverlay = document.querySelector("#welcome-overlay");
let signupBtn = document.querySelector("#signup-btn");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB"; // Improved from hi-GB for English assistant
    window.speechSynthesis.speak(text_speak);
}

signupBtn.addEventListener("click", () => {
    // Check if transition is needed, but for now we just show the app
    welcomeOverlay.classList.add("hidden");
    speak("Welcome onboard Sir, Lucas at your service.");
    wishMe();
});

window.addEventListener("load", () => {
    // wishMe(); // Moved to after signup
});

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

// Check for browser support
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (speechRecognition) {
    recognition = new speechRecognition();

    recognition.onstart = () => {
        console.log("Recognition started");
        content.innerText = "Listening...";
        voice.style.display = "block"; // Show visualizer
        btn.style.display = "none";    // Hide button while listening (optional, or just change state)
        glassContainer.classList.add("listening");
    };

    recognition.onend = () => {
        console.log("Recognition ended");
        content.innerText = "Tap to Speak"; // Reset text
        voice.style.display = "none";
        btn.style.display = "flex";
        glassContainer.classList.remove("listening");
    };

    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;
        takeCommand(transcript.toLowerCase());
    };

    btn.addEventListener("click", () => {
        recognition.start();
    });

} else {
    // Fallback for browsers without support
    content.innerText = "Speech Recognition Not Supported";
    btn.disabled = true;
}

function takeCommand(message) {
    // Removed display toggles here since onend/onstart handles them better typically, 
    // but preserving logic to ensure flow.

    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir, what can i help you?");
    }
    else if (message.includes("who are you")) {
        speak("i am virtual assistant, created by nandha");
    }
    else if (message.includes("what is your name")) {
        speak("i am lucas");
    }
    else if (message.includes("you are doveloped by")) {
        speak("nandha");
    }
    else if (message.includes("who created you")) {
        speak("I was developed by Nandha Kumar, a visionary developer, to assist you with various tasks");
    }
    else if (message.includes("tell me a joke")) {
        speak("Why did the AI go to school? Because it wanted to improve its neural networks!");
    }
    else if (message.includes("what can you do")) {
        speak("I can help with information, scheduling, reminders, calculations, and much more");
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube...");
        window.open("https://youtube.com/", "_blank");
    }
    else if (message.includes("open google")) {
        speak("opening google...");
        window.open("https://google.com/", "_blank");
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook...");
        window.open("https://facebook.com/", "_blank");
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram...");
        window.open("https://instagram.com/", "_blank");
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp..");
        window.open("https://web.whatsapp.com/", "_blank");
    }
    else if (message.includes("open github")) {
        speak("opening github..");
        window.open("https://github.com/", "_blank");
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator..");
        window.open("https://mathsolver.microsoft.com/en/solver?r=bi&ref=bi/");
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    }
    else {
        // Fallback search
        let query = message.replace("lucas", "").replace("shifra", "").trim();
        let finalText = "this is what i found on internet regarding " + query;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
}
