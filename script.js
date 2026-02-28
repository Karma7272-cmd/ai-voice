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

let assistantData = null;

async function loadData() {
    try {
        const response = await fetch('data.json');
        assistantData = await response.json();
    } catch (err) {
        console.error("Failed to load assistant data:", err);
    }
}

signupBtn.addEventListener("click", async () => {
    welcomeOverlay.classList.add("hidden");
    await loadData(); // Load the JSON data
    speak("Welcome onboard Sir, Lucas at your service.");
    wishMe();
});

window.addEventListener("load", () => {
    // Already handled in signup logic
});

function takeCommand(message) {
    if (!assistantData) return;

    // Check custom responses from JSON
    const foundResponse = assistantData.responses.find(r =>
        r.trigger.some(t => message.includes(t.toLowerCase()))
    );

    if (foundResponse) {
        speak(foundResponse.response);
        return;
    }

    // Check specific links from JSON
    const foundLink = assistantData.links.find(l =>
        message.includes(`open ${l.name}`)
    );

    if (foundLink) {
        speak(`Opening ${foundLink.name}, Sir.`);
        window.open(foundLink.url, "_blank");
        return;
    }

    // Handle Time & Date
    if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "long" });
        speak(date);
    }
    else {
        // Fallback search
        let query = message.replace("lucas", "").replace("hey", "").trim();
        speak("I found this regarding " + query);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
}
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
        btn.style.display = "none";    // Hide button while listening
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
