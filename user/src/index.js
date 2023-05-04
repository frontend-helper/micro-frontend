let element = document.querySelector("#user-app");
element.innerHTML = "User micro frontend application.";
const node = document.createElement("p");
const textnode = document.createTextNode("User mfe Sub title.");
node.appendChild(textnode);
element.appendChild(node);
