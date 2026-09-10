localStorage.setItem("name", "Divyana");
localStorage.setItem("lastname", "Garg");

const name = localStorage.getItem("lastname");
console.log(name);
console.log(typeof(name));

const details = {
    name: "Divyana",
    lastname: "Garg",
}

// localStorage.setItem("d", details);
// //local storage only saves strings

localStorage.setItem("d", JSON.stringify(details));
const getob = localStorage.getItem("d");
console.log(getob);
const getob1 = JSON.parse(localStorage.getItem("d"));
console.log(getob1);