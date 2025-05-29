import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAUeTQIepB0g7eTE2P6j5bBcmrReYvpy6Q",
  authDomain: "gabriel-54695.firebaseapp.com",
  projectId: "gabriel-54695",
  storageBucket: "gabriel-54695.firebasestorage.app",
  messagingSenderId: "226444745077",
  appId: "1:226444745077:web:96d3ded13a94266712db3c",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lendo uma coleção pública
const querySnapshot = await getDocs(collection(db, "minhaColecao"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

console.log("scripts.js carregado");  // você deve ver isso no console (F12)

function entrarBatePapo(event) {
    event.preventDefault(); // Impede que o link funcione sem verificação

    const senha = prompt("Digite a senha para acessar o Bate Papo:");
    if (senha === "Oscria4") {
        window.location.href = "botoes/batepapo.html";
    } else {
        alert("Senha incorreta!");
    }
}

function entrarEntre() {
    const nome = prompt("Digite seu nome:");
    if (nome && nome.trim().length >= 3) {
        let nomes = JSON.parse(localStorage.getItem("acessos") || "[]");
        nomes.push(nome.trim());
        localStorage.setItem("acessos", JSON.stringify(nomes));
        window.location.href = "botoes/entre.html";
    } else {
        alert("Digite um nome com pelo menos 3 letras.");
    }
}
