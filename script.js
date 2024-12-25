fetch("https://jsonplaceholder.typicode.com/users")
   .then((res) => res.json())
   .then((users) => {
      const container = document.getElementById("cards-container");
      const input = document.getElementById("name");

      function renderCards(filteredUsers) {
         container.innerHTML = "";
         filteredUsers.forEach((user) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                            <div class="avatar"></div>
                            <h2>${user.name}</h2>
                            <p><i>📧</i> ${user.email}</p>
                            <p><i>📞</i> ${user.phone}</p>
                            <p><i>🏠</i> ${user.address.city}, ${user.address.street}</p>
                        `;

            container.appendChild(card);
         });
      }

      renderCards(users);

      input.addEventListener("input", () => {
         const searchTerm = input.value.toLowerCase();
         const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm)
         );
         renderCards(filteredUsers);
      });

      const btn = document.querySelector("button");
      btn.addEventListener("click", () => {
         document.body.classList.toggle("dark");
      });
   });
