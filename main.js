let btn = document.querySelector("button")
let sect = document.querySelector("section")


fetch("products")
.then(res => res.json())
.then(products => myFunction(products))
.catch(err => console.error("Fetch error: ", err))

let myFunction = (products) =>{
    for (let i = 0; i < 10; i++) {
        let cardContainer = document.createElement("div")
        let textsContainer = document.createElement("div")
        let toPageLink = document.createElement("a")
        
        let img = document.createElement("img")
        let title = document.createElement("h2")
        let description = document.createElement("p")
        let price = document.createElement("h2")
        let count = document.createElement("h2")
        
        img.src = products[i].image
        title.innerText = products[i].title
        description.innerText = products[i].description.split(" ").slice(0, 7).join(" ") + "..."
        price.innerText = products[i].price + "$"
        count.innerText = products[i].rating.count + " pcs"
        toPageLink.innerHTML = "To page >"
        toPageLink.href = "#"

        textsContainer.className = "texts"
        cardContainer.classList.add("container")
        
        sect.append(cardContainer)
        cardContainer.append(img, textsContainer, toPageLink)
        textsContainer.append(title, description, price, count)


        let showOrClose = () => {
            if (i == 8 || i == 9) {
                if (cardContainer.style.display === "flex") {
                    cardContainer.style.display = "none"
                    btn.innerHTML = "Close"
                    console.log(cardContainer);
                } else {
                    cardContainer.style.display = "flex"
                    console.log(i);
                    btn.innerHTML = "Show more"
                }
            }
        }
        
        btn.addEventListener("click", showOrClose)
    }
}