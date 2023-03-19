let input = document.querySelector(".vJwDU")
let text = document.querySelector(".er8xn")


json_data = {
    "chapter1": {
      "1": "number1",
      "2": "number2",
      "3": "number3",
      "4": "number4"
    },
    "chapter2": {
      "1": "number1",
      "2": "number2",
      "3": "number3",
      "4": "number4"
    }

  }

data = JSON.parse(JSON.stringify(json_data))

text.addEventListener("input", (e) => {
  if (Object.keys(data["chapter1"]).includes(e.target.value) == true) {
    let output = document.querySelector(".ryNqvb")

    output.textContent = data["chapter1"][e.target.value]
  }
})