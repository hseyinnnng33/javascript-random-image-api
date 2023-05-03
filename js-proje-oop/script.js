const genel = document.querySelector(".genel");

const bir = function(){
    fetch("https://picsum.photos/200/300")
    .then((item)=> item.blob())
    .then((data)=> {
        const imgData = URL.createObjectURL(data);
        genel.insertAdjacentHTML("afterbegin", `<img src="${imgData}" class="img iki">`)
    }
)
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", bir);
