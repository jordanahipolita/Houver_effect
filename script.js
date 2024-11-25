const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval =null; document.querySelector("h1").onmouseover = ev => {
  let iteration = 0;
  clearInterval(interval);
  
  interval = setInterval(() => {
    ev.target.innerText = ev.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return ev.target.dataset.value[index];
        }
      return letters[Math.floor(Math.random() * 26)];   
      })
      .join("");
    
    if(iteration >= ev.target.dataset.value.length){
       clearInterval(interval);
  }
  
    iteration += 1 / 3;
  }, 50);
};
