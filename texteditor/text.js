let inp = document.querySelector("input");

let p = document.querySelector("p");

inp.addEventListener("input" ,function()
{
    p.innerText = inp.value;
    console.log(inp.value);
})