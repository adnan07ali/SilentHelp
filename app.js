const cardsContainer = document.getElementById("cards");
const heardText = document.getElementById("heardText");

let mode = "general";
let language = "en"; // en | hi
let customMessages = JSON.parse(localStorage.getItem("customMessages")) || [];

const messages = {
  general: [
    { e: "🗣️", en: "I cannot speak. Please understand.", hi: "मैं बोल नहीं सकता। कृपया समझें।" },
    { e: "⏳", en: "Please give me a moment.", hi: "कृपया मुझे थोड़ा समय दें।" },
    { e: "🙏", en: "Thank you very much.", hi: "बहुत धन्यवाद।" },
    { e: "🐢", en: "Please speak slowly.", hi: "कृपया धीरे बोलिए।" },
    { e: "🔁", en: "Please repeat that.", hi: "कृपया दोहराएँ।" },
    { e: "👍", en: "Yes", hi: "हाँ" },
    { e: "👎", en: "No", hi: "नहीं" },
    { e: "🤔", en: "Maybe", hi: "शायद" },
    { e: "❓", en: "I don’t understand.", hi: "मुझे समझ नहीं आया।" },
    { e: "⏸️", en: "Please wait.", hi: "कृपया रुकिए।" },
    { e: "👌", en: "It’s okay.", hi: "ठीक है।" },
    { e: "🆘", en: "I need help.", hi: "मुझे मदद चाहिए।" },
    { e: "😊", en: "I am fine.", hi: "मैं ठीक हूँ।" },
    { e: "🙇", en: "Sorry.", hi: "माफ़ कीजिए।" },
    { e: "👋", en: "Excuse me.", hi: "माफ़ कीजिए।" },
    { e: "🤝", en: "Can you help me?", hi: "क्या आप मेरी मदद कर सकते हैं?" },
    { e: "📱", en: "Please look at my phone.", hi: "कृपया मेरे फ़ोन को देखें।" }
  ],

  hospital: [
    { e: "🩺", en: "I cannot speak.", hi: "मैं बोल नहीं सकता।" },
    { e: "💥", en: "I am in pain here.", hi: "यहाँ दर्द हो रहा है।" },
    { e: "😖", en: "The pain is severe.", hi: "दर्द बहुत ज़्यादा है।" },
    { e: "😐", en: "The pain is mild.", hi: "दर्द कम है।" },
    { e: "😵", en: "I feel dizzy.", hi: "मुझे चक्कर आ रहा है।" },
    { e: "🤢", en: "I feel nauseous.", hi: "मुझे उल्टी जैसा लग रहा है।" },
    { e: "⚠️", en: "I am allergic to this medicine.", hi: "मुझे इस दवा से एलर्जी है।" },
    { e: "😮‍💨", en: "I have breathing difficulty.", hi: "मुझे साँस लेने में दिक्कत है।" },
    { e: "💧", en: "I need water.", hi: "मुझे पानी चाहिए।" },
    { e: "👨‍⚕️", en: "Please call a doctor.", hi: "कृपया डॉक्टर को बुलाइए।" },
    { e: "📞", en: "Please call my family.", hi: "कृपया मेरे परिवार को कॉल करें।" },
    { e: "🛏️", en: "I need to lie down.", hi: "मुझे लेटना है।" },
    { e: "🩸", en: "I am diabetic.", hi: "मुझे डायबिटीज़ है।" },
    { e: "❤️", en: "I have high blood pressure.", hi: "मुझे हाई ब्लड प्रेशर है।" },
    { e: "🫁", en: "I have asthma.", hi: "मुझे अस्थमा है।" },
    { e: "💊", en: "Please give medicine.", hi: "कृपया दवा दीजिए।" },
    { e: "😞", en: "I am not feeling well.", hi: "मैं ठीक महसूस नहीं कर रहा हूँ।" },
    { e: "📍", en: "This hurts.", hi: "यहाँ दर्द है।" }
  ],

  shop: [
    { e: "💰", en: "How much is this?", hi: "यह कितने का है?" },
    { e: "🏷️", en: "Is there a discount?", hi: "क्या छूट मिलेगी?" },
    { e: "🛍️", en: "I want this.", hi: "मुझे यह चाहिए।" },
    { e: "❌", en: "I don’t want this.", hi: "मुझे यह नहीं चाहिए।" },
    { e: "🔄", en: "Please show another one.", hi: "कृपया दूसरा दिखाइए।" },
    { e: "📏", en: "Do you have another size?", hi: "क्या दूसरा साइज़ है?" },
    { e: "🎨", en: "Do you have another color?", hi: "क्या दूसरा रंग है?" },
    { e: "💸", en: "This is expensive.", hi: "यह महँगा है।" },
    { e: "💵", en: "This is cheap.", hi: "यह सस्ता है।" },
    { e: "✅", en: "I will take it.", hi: "मैं इसे लूँगा।" },
    { e: "🚫", en: "I will not take it.", hi: "मैं इसे नहीं लूँगा।" },
    { e: "🛒", en: "Please give me a bag.", hi: "कृपया एक थैला दीजिए।" },
    { e: "📲", en: "Can I pay online?", hi: "क्या मैं ऑनलाइन भुगतान कर सकता हूँ?" },
    { e: "💵", en: "Cash only?", hi: "सिर्फ़ नकद?" },
    { e: "🙏", en: "Thank you.", hi: "धन्यवाद।" }
  ],

  travel: [
    { e: "🚌", en: "Where does this bus go?", hi: "यह बस कहाँ जाती है?" },
    { e: "🚆", en: "Does this train stop here?", hi: "क्या यह ट्रेन यहाँ रुकती है?" },
    { e: "🛑", en: "Please stop here.", hi: "कृपया यहाँ रोकिए।" },
    { e: "⏰", en: "When will it arrive?", hi: "यह कब आएगी?" },
    { e: "🎫", en: "How much is the ticket?", hi: "टिकट कितने का है?" },
    { e: "🎟️", en: "I want one ticket.", hi: "मुझे एक टिकट चाहिए।" },
    { e: "🎟️", en: "I want two tickets.", hi: "मुझे दो टिकट चाहिए।" },
    { e: "💺", en: "Is this seat free?", hi: "क्या यह सीट खाली है?" },
    { e: "🆘", en: "Please help me.", hi: "कृपया मेरी मदद करें।" },
    { e: "📍", en: "Which platform?", hi: "कौन सा प्लेटफ़ॉर्म?" },
    { e: "❓", en: "Is this the correct bus?", hi: "क्या यह सही बस है?" },
    { e: "🧭", en: "I am lost.", hi: "मैं रास्ता भटक गया हूँ।" },
    { e: "➡️", en: "Please show me the way.", hi: "कृपया रास्ता बताइए।" },
    { e: "🙏", en: "Thank you.", hi: "धन्यवाद।" }
  ],
  home: [
  { e: "🚪", en: "Please open the door.", hi: "कृपया दरवाज़ा खोलिए।" },
  { e: "🔒", en: "Please close the door.", hi: "कृपया दरवाज़ा बंद करें।" },
  { e: "💡", en: "Please turn off the light.", hi: "कृपया लाइट बंद करें।" },
  { e: "🌀", en: "Please turn on the fan.", hi: "कृपया पंखा चालू करें।" },
  { e: "🍽️", en: "I am hungry.", hi: "मुझे भूख लगी है।" },
  { e: "💧", en: "I am thirsty.", hi: "मुझे प्यास लगी है।" },
  { e: "🍲", en: "I want food.", hi: "मुझे खाना चाहिए।" },
  { e: "❌🍲", en: "I don’t want food.", hi: "मुझे खाना नहीं चाहिए।" },
  { e: "🥤", en: "Please give me water.", hi: "कृपया पानी दीजिए।" },
  { e: "😴", en: "I want to sleep.", hi: "मुझे सोना है।" },
  { e: "🆘", en: "Please help me.", hi: "कृपया मेरी मदद करें।" },
  { e: "🙏", en: "Thank you.", hi: "धन्यवाद।" }
],

authority: [
  { e: "🗣️", en: "I cannot speak.", hi: "मैं बोल नहीं सकता।" },
  { e: "📖", en: "Please read this.", hi: "कृपया इसे पढ़िए।" },
  { e: "🆘", en: "I need help.", hi: "मुझे मदद चाहिए।" },
  { e: "🧭", en: "I am lost.", hi: "मैं रास्ता भटक गया हूँ।" },
  { e: "📞", en: "I need to contact my family.", hi: "मुझे अपने परिवार से संपर्क करना है।" },
  { e: "☎️", en: "Please call this number.", hi: "कृपया इस नंबर पर कॉल करें।" },
  { e: "🤒", en: "I am not well.", hi: "मैं ठीक नहीं हूँ।" },
  { e: "🏠", en: "Please help me reach home.", hi: "कृपया मुझे घर पहुँचने में मदद करें।" },
  { e: "📄", en: "I have documents.", hi: "मेरे पास दस्तावेज़ हैं।" },
  { e: "🙏", en: "Thank you.", hi: "धन्यवाद।" }
],


  emergency: [
    { e: "🚨", en: "I need urgent help.", hi: "मुझे तुरंत मदद चाहिए।" },
    { e: "🚑", en: "Please call an ambulance.", hi: "कृपया एम्बुलेंस बुलाइए।" },
    { e: "👮", en: "Please call the police.", hi: "कृपया पुलिस बुलाइए।" },
    { e: "⚠️", en: "I am in danger.", hi: "मैं खतरे में हूँ।" },
    { e: "🤕", en: "I am hurt.", hi: "मुझे चोट लगी है।" },
    { e: "🆘", en: "Someone please help me.", hi: "कोई मेरी मदद करें।" },
    { e: "😮‍💨", en: "I cannot breathe properly.", hi: "मुझे साँस लेने में परेशानी हो रही है।" },
    { e: "😰", en: "I am feeling very weak.", hi: "मुझे बहुत कमजोरी लग रही है।" },
    { e: "🤝", en: "Please stay with me.", hi: "कृपया मेरे साथ रहें।" }
  ]
};

function setMode(m) {
  mode = m;

  // update active state for mode buttons
  document.querySelectorAll(".modes button").forEach(btn => {
    btn.classList.remove("active");
  });

  const activeBtn = [...document.querySelectorAll(".modes button")]
    .find(btn => btn.getAttribute("onclick")?.includes(`'${m}'`));

  if (activeBtn) activeBtn.classList.add("active");

  renderCards();
}



function addCustomMessage() {
  const input = document.getElementById("customText");
  const text = input.value.trim();

  if (!text) return;

  customMessages.unshift({
    e: "📝",
    en: text,
    hi: text
  });

  localStorage.setItem("customMessages", JSON.stringify(customMessages));
  input.value = "";
  renderCards();
}

function deleteCustom(index, e) {
  e.stopPropagation();
  customMessages.splice(index, 1);
  localStorage.setItem("customMessages", JSON.stringify(customMessages));
  renderCards();
}

function editCustom(index, e) {
  e.stopPropagation();
  const newText = prompt("Edit message:", customMessages[index].en);
  if (!newText) return;

  customMessages[index].en = newText;
  customMessages[index].hi = newText;

  localStorage.setItem("customMessages", JSON.stringify(customMessages));
  renderCards();
}

function setLang(l) {
  language = l;

  // update active state for language buttons
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.remove("active");
  });

  const activeBtn = [...document.querySelectorAll(".lang-toggle button")]
    .find(btn => btn.getAttribute("onclick")?.includes(`'${l}'`));

  if (activeBtn) activeBtn.classList.add("active");
}

function renderCards() {
  cardsContainer.innerHTML = "";

  /* ---------- CUSTOM MESSAGES MODE ---------- */
  if (mode === "custom") {
    if (customMessages.length === 0) {
      cardsContainer.innerHTML =
        "<p style='text-align:center;color:#666'>No custom messages yet</p>";
      return;
    }

    customMessages.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "card custom-card";

      card.animate(
        [
          { opacity: 0, transform: "translateY(18px) scale(0.98)" },
          { opacity: 1, transform: "translateY(0) scale(1)" }
        ],
        {
          duration: 1000,
          easing: "ease-out",
          delay: index * 120
        }
      );

      card.innerHTML = `
        <div class="card-emoji">📝</div>
        <div class="card-en">${item.en}</div>

        <div class="custom-actions">
          <button onclick="editCustom(${index}, event)">✏️</button>
          <button onclick="deleteCustom(${index}, event)">🗑️</button>
        </div>
      `;

      card.onclick = () => speak(item.en);
      cardsContainer.appendChild(card);
    });

    return;
  }

  /* ---------- NORMAL MODES ---------- */
  if (!messages[mode]) {
    cardsContainer.innerHTML =
      "<p style='text-align:center;color:#666'>No messages available</p>";
    return;
  }

  messages[mode].forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.animate(
      [
        { opacity: 0, transform: "translateY(18px) scale(0.96)" },
        { opacity: 1, transform: "translateY(0) scale(1)" }
      ],
      {
        duration: 650,
        easing: "ease-out",
        delay: index * 120
      }
    );

    card.innerHTML = `
      <div class="card-emoji">${item.e}</div>
      <div class="card-en">${item.en}</div>
      <div class="card-hi">${item.hi}</div>
    `;

    card.addEventListener("click", () => {
      speak(language === "hi" ? item.hi : item.en);
      showMessagePopup(item);

      card.animate(
        [
          { transform: "scale(1)", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" },
          { transform: "scale(1.06)", boxShadow: "0 14px 32px rgba(0,0,0,0.18)" },
          { transform: "scale(1)", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }
        ],
        {
          duration: 220,
          easing: "ease-out"
        }
      );
    });

    cardsContainer.appendChild(card);
  });
}

function showMessagePopup(item) {
  const overlay = document.getElementById("messageOverlay");
  const emoji = document.getElementById("popupEmoji");
  const en = document.getElementById("popupEn");
  const hi = document.getElementById("popupHi");

  emoji.textContent = item.e || "";
  en.textContent = item.en || "";
  hi.textContent = item.hi || "";

  overlay.classList.remove("hidden");

  // Auto hide after 2 seconds
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 2000);
}



function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.9;
  msg.lang = language === "hi" ? "hi-IN" : "en-IN";
  speechSynthesis.speak(msg);
}

function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = language === "hi" ? "hi-IN" : "en-IN";
  recognition.start();

  recognition.onresult = event => {
    heardText.innerText = event.results[0][0].transcript;
  };
}

renderCards();
setMode("general");
setLang("en");
