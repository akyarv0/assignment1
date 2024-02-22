// Kodlar buraya yazılacak.

//---------HEADER----------//
const headerTitle = document.getElementById("title");
console.log(headerTitle);
headerTitle.innerText = "JS DOM Assigment 1";
headerTitle.style.color = "white";
headerTitle.style.textAlign = "center";

const headerAfter = document.getElementsByClassName("header");
console.log(headerAfter);
headerAfter[0].style.backgroundColor = "red";

const ulAfter = document.getElementsByClassName("nav-item");
console.log(ulAfter);
Array.from(document.getElementsByClassName("nav-item")).forEach((item) => {
  item.style.cssText =
    "display: flex; justify-content: center; align-items: center; margin: 10px 0px; list-style: none";
});

ulAfter[0].style.backgroundColor = "green";
ulAfter[0].style.color = "white";

const homeLi = document.getElementById("home");
console.log(homeLi);
homeLi.style.marginRight = "10px";
homeLi.style.padding = "10px";

//----------MAIN----------//

const mainAfter = document.getElementsByTagName("main");
console.log(mainAfter);

const sectionAfter = document.getElementsByTagName("section");
console.log(sectionAfter);
sectionAfter[0].style.cssText =
  "paddding-right: 10px; margin: 10px; border-radius: 10px; display: flex; flex-direction: row; gap: 10px; ";

const inputUsername = document.getElementById("username");
console.log(inputUsername);
inputUsername.placeholder = "Username";
const inputPassword = document.getElementById("password");
console.log(inputPassword);
inputPassword.placeholder = "Password";

const btnAfter = document.getElementsByClassName("btn");
console.log(btnAfter);
btnAfter[0].style.cssText =
  "background-color: green; color: white; padding: 10px; border: 1px solid black; border-radius: 5px; cursor: pointer; opacity: 0.8;width: 5rem; height: 3rem; white-space: nowrap ; margin: auto; box-shadow: 0 0 10px fuchsia; ";
btnAfter[0].innerText = "Giris Yap";

const inputTag = document.getElementsByTagName("input");
console.log(inputTag);
inputTag[0].style.cssText = "width: 10rem; height: 1.5rem; margin:auto;";
inputTag[1].style.cssText = "width: 10rem; height: 1.5rem; margin:auto;";



//----------PROJECT----------//





const projectsAfter = document.getElementById("projects");
projectsAfter.style.cssText = "text-align: left; margin: 0 auto; width: fit-content; line-height: 2rem; cursor: pointer; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
projectsAfter.textContent = "JS Dom Projects";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];

for (let i = 0; i < myProjects.length; i++) {
  const eklenen = document.createElement("li");
  eklenen.innerText = myProjects[i];
  projectsAfter.appendChild(eklenen);
}