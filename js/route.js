let arr = document.querySelectorAll(".menu-container ul");
let sectBtn = arr[0].children;
let prev = sectBtn[0];
let prev1 = sectBtn[1];
let prev3=sectBtn[3];
for(let i = 0 ; i < sectBtn.length ; i++)
{
    console.log(i);
    sectBtn[i].addEventListener("click",function(e){
        prev.classList.remove("active");
        prev1.classList.remove("active");
        prev3.classList.remove("active");
        this.classList.add("active");
        prev = this;
        prev1 = this;
        prev3 = this;
    })
}

