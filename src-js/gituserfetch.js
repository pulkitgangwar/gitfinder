export default function gitFinder() {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const btn = document.querySelector(".search__btn");
  const input = document.querySelector(".search__input");
  const popupResult = document.querySelector(".popup__result");
  const popup = document.querySelector(".popup");
  const close = document.querySelector(".popup__close");

  async function fetchData(user) {
    const information = await fetch(
      `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
    );

    const data = await information.json();

    return { data };
  }

  function getData() {
    fetchData(input.value.split(" ").join("")).then(response => {
      let output = "";
      output += `
      <h3 class="heading-tertiary popup__result--name">
          Name: <span class="result">${response.data.name}</span>
      </h3>
  
      <h3 class="heading-tertiary popup__result--username">
          Username: <span class="result">${response.data.login}</span>
      </h3>
  
      <h3 class="heading-tertiary popup__result--repos">
          Repos: <span class="result">${response.data.public_repos}</span>
      </h3>
  
      <h3 class="heading-tertiary popup__result--url">
                URL: <a href="#" class="result__url">${response.data.url}</a>
      </h3>
          `;

      popupResult.innerHTML = output;
    });
  }

  btn.addEventListener("click", function() {
    getData();

    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }

    input.value = "";
  });

  close.addEventListener("click", function() {
    popup.style.display = "none";
  });

  window.addEventListener("click", function(e) {
    if (e.target == popup) {
      popup.style.display = none;
    }
  });
}
