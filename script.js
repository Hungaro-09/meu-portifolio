
console.log('Portfólio carregado!');


const projects = document.getElementsByClassName('project');
for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener('click', function() {
    console.log('Projeto clicado:', i + 1);
  });
}


const ul = document.querySelector("ul");
const lis = ul.querySelectorAll("li");


lis.forEach((li) => {
  li.classList.add("button");
});


lis.forEach((li) => {
  li.addEventListener("click", (event) => {
  });
});

