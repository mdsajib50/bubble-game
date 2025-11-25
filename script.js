let clutter="";
for(let i=1;i<=100;i++){
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
}
document.getElementById("bubble-bottom").innerHTML = clutter;