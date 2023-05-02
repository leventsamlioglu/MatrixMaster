

const form = document.querySelector("#my-form");
const fname = document.getElementById("first_name");
const lname = document.getElementById("last_name");
const email = document.getElementById("email");
const table = document.getElementById("table");
const msg = document.querySelector(".msg");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (fname.value !== "" && lname.value !== "" && email.value !== '') {
    const newRow = table.insertRow(table.rows.length);
    const cel1 = newRow.insertCell(0);
    const cel2 = newRow.insertCell(1);
    const cel3 = newRow.insertCell(2);
    const cel4 = newRow.insertCell(3);
    cel1.innerHTML = table.rows.length - 1;
    cel2.innerHTML = fname.value;
    cel3.innerHTML = lname.value;
    cel4.innerHTML = email.value;
    fname.value = "";
    lname.value = "";
    email.value = "";
  } else {
    msg.classList.add("text-white");
    msg.classList.add("bg-danger");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.innerHTML='', 3000);
  }


}
