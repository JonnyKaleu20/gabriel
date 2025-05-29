import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAUeTQIepB0g7eTE2P6j5bBcmrReYvpy6Q",
  authDomain: "gabriel-54695.firebaseapp.com",
  projectId: "gabriel-54695",
  storageBucket: "gabriel-54695.firebasestorage.app",
  messagingSenderId: "226444745077",
  appId: "1:226444745077:web:96d3ded13a94266712db3c",
  // ...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lendo uma coleção pública
const querySnapshot = await getDocs(collection(db, "minhaColecao"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

const chatBox = document.getElementById("chat-box");
const form = document.getElementById("chat-form");
const userInput = document.getElementById("user");
const messageInput = document.getElementById("message");

function renderMessages() {
    chatBox.innerHTML = "";
    const messages = JSON.parse(localStorage.getItem("mensagensChat") || "[]");
    messages.forEach(msg => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${msg.nome}:</strong> ${msg.texto}`;
        chatBox.appendChild(p);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = userInput.value.trim();
    const texto = messageInput.value.trim();

    // Validação: nome deve ter pelo menos 3 letras
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 letras.");
        return;
    }

    if (texto) {
        const mensagens = JSON.parse(localStorage.getItem("mensagensChat") || "[]");
        mensagens.push({ nome, texto });
        localStorage.setItem("mensagensChat", JSON.stringify(mensagens));
        messageInput.value = "";
        renderMessages();
    }
});

window.addEventListener("load", renderMessages);
