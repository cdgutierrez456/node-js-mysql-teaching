const btnGetData = document.querySelector("#getData")
const btnSaveData = document.querySelector("#saveData")
const firstInput = document.querySelector("#firstInput")
const secondInput = document.querySelector("#secondInput")

const sectionForInfo = document.querySelector("#showInformation")

const url = "http://localhost:3000/api/v1/products"

btnGetData.addEventListener("click", (e) => {
  e.preventDefault()
  getInfo()
});

const getInfo = async () => {
  const response = await fetch(url, {
    method: "GET"
  })
  const products = await response.json()
  setProductsHTML(products)
}

const setProductsHTML = (products) => {
  if (products.length) {
    console.log(products)
    sectionForInfo.innerHTML = "";
    products.forEach(product => {
      const div = document.createElement("div")
      const idDiv = document.createElement("div")
      const nameDiv = document.createElement("div")
      const priceDiv = document.createElement("div")
      idDiv.textContent = product.id
      nameDiv.textContent = product.name
      priceDiv.textContent = product.price

      div.classList.add("grid")
      div.appendChild(idDiv)
      div.appendChild(nameDiv)
      div.appendChild(priceDiv)
      sectionForInfo.appendChild(div)
    });
  }
}

btnSaveData.addEventListener("click", (e) => {
  e.preventDefault()
  let body = {
    product: firstInput.value,
    lastname: secondInput.value 
  }
  saveData(body)
})

const saveData = async (object) => {
  const saved = await fetch(url, {
    method: "POST",
    body: JSON.stringify(object)
  })
}
