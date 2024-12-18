const botResponses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm doing great, thanks for asking!",
    "bye": "Goodbye! Have a nice day!",
    "thanks": "You're welcome! Let me know if you need anything else.",
    "what's your name": "I'm ChatiAI, your friendly chatbot.",
    "who are you": "I am ChatiAI, here to assist you.",
    "how can you help me": "I can help you with a variety of topics. Just ask!",
    "what can you do": "I can assist with answering questions, providing information, and much more!",
    "help": "Sure! What do you need help with?",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "good morning": "Good morning! How can I help you today?",
    "good evening": "Good evening! How can I assist you?",
    "good night": "Good night! Have a restful sleep!",
    "what's the weather like": "I'm not sure about the weather, but I can help you find a forecast online.",
    "how old are you": "I don't have an age, but I’m constantly learning!",
    "what time is it": "I'm unable to check the time, but you can easily find it on your device.",
    "where are you from": "I exist on the internet, so I'm from everywhere!",
    "can you speak other languages": "Yes! I can communicate in several languages.",
    "do you like music": "I think music is awesome! What's your favorite genre?",
    "tell me a fact": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!",
    "who is the president": "The president depends on the country you're referring to. Which country are you asking about?",
    "what is your favorite color": "I don't have preferences, but I think blue is a calm and peaceful color.",
    "how do you work": "I use artificial intelligence to understand and respond to your questions.",
    "what is AI": "AI stands for Artificial Intelligence. It's the simulation of human intelligence in machines.",
    "can you solve math problems": "Yes, I can help you with math problems. What do you need help with?",
    "what is 2+2": "2+2 is 4!",
    "what is the capital of France": "The capital of France is Paris.",
    "tell me a riddle": "I’m tall when I’m young and short when I’m old. What am I? (Answer: A candle!)",
    "what is the square root of 9": "The square root of 9 is 3.",
    "how many continents are there": "There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.",
    "who invented the telephone": "The telephone was invented by Alexander Graham Bell.",
    "what is the fastest animal": "The fastest animal is the cheetah, which can run up to 60 mph (97 km/h).",
    "how far is the moon": "The moon is approximately 238,855 miles (384,400 kilometers) away from Earth.",
    "tell me about space": "Space is vast and full of mysteries! It’s the final frontier, filled with stars, planets, and galaxies.",
    "what is quantum physics": "Quantum physics is a branch of science that studies the behavior of particles at a very small scale, like atoms and subatomic particles.",
    "who is Albert Einstein": "Albert Einstein was a famous physicist known for developing the theory of relativity.",
    "can you translate": "Yes, I can help translate between many languages! What would you like to translate?",
    "what is 100 divided by 5": "100 divided by 5 is 20.",
    "can you play games": "I can’t play games, but I can suggest some fun ones if you’re interested!",
    "what is the meaning of life": "The meaning of life is a deeply personal and philosophical question, and people may find different answers depending on their beliefs.",
    "what is the speed of light": "The speed of light in a vacuum is about 299,792 kilometers per second (186,282 miles per second).",
    "how many bones are in the human body": "An adult human body typically has 206 bones.",
    "do you have emotions": "No, I don't have emotions, but I’m here to help you however I can!",
    "what is your favorite movie": "I don't have favorites, but I know many popular movies. What’s your favorite?",
    "can you make decisions": "I can help provide suggestions based on information, but I don’t make decisions like humans do.",
    "do you know the future": "Unfortunately, I can't predict the future, but I can help you explore possibilities!",
    "who is your creator": "I was created by a team of developers and AI researchers.",
    "can you learn": "Yes, I learn from interactions to improve my responses over time.",
    "what is your favorite book": "I don't read books, but I can recommend popular ones! What kind of books do you like?",
    "what is the longest river in the world": "The longest river in the world is the Nile, at about 6,650 kilometers (4,130 miles).",
    "who was the first man on the moon": "Neil Armstrong was the first man to walk on the moon in 1969.",
    "can you help with homework": "Sure! What subject do you need help with?",
    "what is the boiling point of water": "Water boils at 100°C (212°F) at sea level.",
    "how tall is the Eiffel Tower": "The Eiffel Tower is about 330 meters (1,083 feet) tall.",
    "what is a black hole": "A black hole is a region in space where gravity is so strong that nothing, not even light, can escape from it.",
    "can you write poems": "Yes, I can write poems! Would you like me to write one for you?",
    "how do you spell 'accommodation'": "It's spelled 'accommodation'.",
    "who painted the Mona Lisa": "The Mona Lisa was painted by Leonardo da Vinci.",
    "what is the longest word in the English language": "The longest word is 'pneumonoultramicroscopicsilicovolcanoconiosis'. It’s a type of lung disease.",
    "what is the currency of Japan": "The currency of Japan is the Japanese yen (¥).",
    "how many languages do you speak": "I can communicate in several languages, including English, Spanish, French, German, and more.",
    "how many stars are in the galaxy": "There are estimated to be between 100 and 400 billion stars in our Milky Way galaxy.",
    "what is the tallest mountain on Earth": "The tallest mountain is Mount Everest, standing at 8,848 meters (29,029 feet).",
    "can you recommend a restaurant": "I can suggest some restaurants depending on your location and preferences. What type of food do you like?",
    "what is the distance between Earth and the sun": "The average distance from Earth to the sun is about 93 million miles (150 million kilometers).",
    "who was the first president of the USA": "The first president of the United States was George Washington.",
    "what is your favorite food": "I don’t eat, but I can help you find some delicious recipes!",
    "how many planets are in the solar system": "There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
    "do you believe in aliens": "I don't have personal beliefs, but many scientists think it’s possible that life exists elsewhere in the universe.",
    "what is a cloud": "A cloud is a visible mass of water droplets or ice crystals suspended in the air.",
    "who wrote 'Romeo and Juliet'": "William Shakespeare wrote the famous play 'Romeo and Juliet'.",
    "what is a virus": "A virus is a small infectious agent that can only replicate inside the living cells of a host organism.",
    "what is the largest ocean": "The largest ocean on Earth is the Pacific Ocean.",
    "how fast is sound": "Sound travels at 343 meters per second (1,125 feet per second) in air.",
    "what is the internet": "The internet is a global network of interconnected computers that communicate with each other to share information.",
    "who discovered America": "Christopher Columbus is credited with discovering America in 1492, although indigenous peoples had been living there for thousands of years before.",
    "what is democracy": "Democracy is a system of government where the people have the power to make decisions, often through voting.",
    "how does a plane fly": "A plane flies due to the lift created by the wings, which is generated by air moving faster over the top surface of the wing than underneath it.",
    "what is a neuron": "A neuron is a nerve cell that transmits electrical signals in the brain and throughout the nervous system.",
    "what is the smallest country": "The smallest country in the world is Vatican City.",
    "how do you store data": "Data is stored in databases, cloud storage, or physical storage devices like hard drives.",
    "how do I become a programmer": "To become a programmer, start by learning coding languages like Python, Java, or C++, and practice building projects.",
    "what is the largest desert": "The largest desert in the world is the Antarctic Desert, which is cold, not hot.",
    "what is a solar eclipse": "A solar eclipse occurs when the moon passes between the Earth and the sun, blocking the sun's light.",
    "default": "Im so sorry I doesnt have an answer for that"
};



function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    
    if (userInput) {
        document.getElementById("welcomeMessage").style.display = "none";  
        document.getElementById("chatbox").style.display = "block";  
        appendMessage('user', userInput); 
        document.getElementById("userInput").value = '';  

        
        const botReply = botResponses[userInput] || botResponses["default"]; 
        appendMessage('bot', botReply);  
    }
}


function appendMessage(sender, message) {
    const chatlog = document.getElementById("chatlog");
    const newMessage = document.createElement("div");
    newMessage.classList.add(sender);  
    newMessage.textContent = message;  
    chatlog.appendChild(newMessage);  
    chatlog.scrollTop = chatlog.scrollHeight; 
}


document.getElementById("userInput").addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();  
    }
});


function clearChat() {
    const chatlog = document.getElementById("chatlog");
    chatlog.innerHTML = ""; 
    document.getElementById("welcomeMessage").style.display = "block"; 
    document.getElementById("chatbox").style.display = "none";  
}


document.getElementById("clearChatButton").addEventListener("click", function() {
    clearChat();
});

