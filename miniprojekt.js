const result = document.getElementById("result");
const filter = document.getElementById("filter");

const listitems = [];
getData()

filter.addEventListener('input', (e)=> filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const {results} = await res.json()

//fshi resultatin e gjetun
result.innerHTML=''

results.forEach(user=>{
    const li = document.createElement('li')
    listitems.push(li)


   li.innerHTML = `
   <img src="${user.picture.large}" alt="${user.name.first}">
   <div class = "user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>
   `

result.appendChild(li)
})
}


//funksion per filterdata

function filterData(searchTerm) {
    // Convert search term to lowercase to make the search case-insensitive
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Loop through all the list items
    listitems.forEach(item => {
      // Get the user name from the item's inner HTML
      const userName = item.querySelector('h4').innerText.toLowerCase();

      // Check if the user's name starts with the search term
      if (userName.startsWith(lowerCaseSearchTerm)) {
        item.style.display = ''; // Show the item
      } else {
        item.style.display = 'none'; // Hide the item
      }
    });
  } 