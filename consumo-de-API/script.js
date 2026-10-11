let listElement = document.querySelector("#app")

let posts = []

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
        posts = json
        
        posts.map((item) => {
            let liElement = document.createElement("li")
            let titleEment = document.createElement("strong")
            let imgElement = document.createElement("img")
            let descriptionElement = document.createElement("a")

            let titleText = document.createTextNode(item.titulo)
            titleEment.appendChild(titleText)
            liElement.append(titleEment)

            imgElement.src = item.capa
            liElement.appendChild(imgElement)

            let descriptionText = document.createTextNode(item.subtitulo)
            descriptionElement.appendChild(descriptionText)
            liElement.appendChild(descriptionElement)

            listElement.appendChild (liElement)
        })
    })
.catch(() => {
    console.log("Deu algo errado!")
})
    
}
nutriApp()