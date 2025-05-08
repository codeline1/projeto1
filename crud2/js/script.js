 // Função para carregar e exibir o arquivo JSON
    function loadJSON() {
      const fileInput = document.getElementById("jsonFile");
      const tableBody = document.querySelector("#data-table tbody");

      if (!fileInput.files[0]) {
        alert("Por favor, selecione um arquivo JSON.");
        return;
      }

      const reader = new FileReader();
      reader.onload = function(event) {
        const jsonData = JSON.parse(event.target.result);

        // Limpar tabela antes de exibir os novos dados
        tableBody.innerHTML = "";

        // Adicionar linhas na tabela
        jsonData.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
          `;
          tableBody.appendChild(row);
        });
      };
      reader.readAsText(fileInput.files[0]);
    }

    // Função para salvar os dados no banco de dados
    function saveToDatabase() {
      const tableBody = document.querySelector("#data-table tbody");
      const rows = tableBody.querySelectorAll("tr");

      if (rows.length === 0) {
        alert("Nenhum dado para salvar.");
        return;
      }

      const data = Array.from(rows).map(row => {
        const id = row.children[0].textContent;
        const name = row.children[1].textContent;
        const age = row.children[2].textContent;
        return { id, name, age };
      });

      // Enviar os dados para o servidor usando Fetch API
      fetch("save_to_db.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(result => {
        alert(result);
      })
      .catch(error => {
        console.error("Erro ao salvar no banco de dados:", error);
      });
    }