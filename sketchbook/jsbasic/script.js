list = document.getElementById("list");

async function printList() {
  if (list.innerHTML == "") {
    let res = await fetch("https://randomuser.me/api/?results=5");
    let { results } = await res.json();
    results.forEach((contact) => {
      let li = document.createElement("li");
      li.innerHTML = `  <h1>${contact.name.first}</h1> 
                        <img width="180" src="${contact.picture.large}">
                        <br/> 
                        <p>${contact.email}</p> 
                        <p>${contact.phone}</p>`;
      list.appendChild(li);
    });
  } else {
    list.innerHTML = "";
  }
}
