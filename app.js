const contactsarray = [
  {
    name: "Farheen",
    gmail: "farheenmalak@gmail.com"
  },
  {
    name: "Haya",
    gmail: "Haya89@gmail.com"
  },
  {
    name: "Ali",
    gmail: "ali23@gmail.com"
  },
  {
    name: "Shahmeer",
    gmail: "shahmeer78@gmail.com"
  }
];

let contactList = document.getElementById('contactlist');
contactList.innerHTML = '';

function renderContacts(contactsarray) {
  for (const elements of contactsarray) {
    let contactDiv = document.createElement('div');
    contactDiv.className = 'contacts';
    contactDiv.innerHTML = `<p>${elements.name}</p><p>${elements.gmail}</p>`;
    contactList.appendChild(contactDiv);
  }
}

function filterContacts() {
  let filterInput = document.getElementById('filterinput').value.toLowerCase();

  const filterContact = contactsarray.filter((elements) => 
    elements.name.toLowerCase().includes(filterInput)
  );
  
  contactList.innerHTML = '';
  renderContacts(filterContact);
}

renderContacts(contactsarray);
document.getElementById('filterbtn').addEventListener('click', filterContacts);

