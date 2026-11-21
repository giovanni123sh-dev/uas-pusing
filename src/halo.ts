import * as readlineSync from "readline-sync";

console.log("Hello console! - Prioritization");

const namaPengguna: string = readlineSync.question("Masukkan nama Anda: ");
console.log(`Selamat datang, ${namaPengguna}!`);