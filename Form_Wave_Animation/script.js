const labels=document.querySelectorAll('.form-control label');

// we have to set time for each letter

labels.forEach((label) =>{
    //after spliting each letter,mapping over it
    label.innerHTML=label.innerText
    .split("")
    .map(
        (letter, idx)=>
    `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join("");
});

