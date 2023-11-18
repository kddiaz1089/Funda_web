document.addEventListener("DOMContentLoaded", function () {
    const data = [
      { id: 1, name: "Item 1", description: "Description 1" },
      // Add more data items
    ];
  
    const table = document.getElementById("data-table");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
  
    const itemsPerPage = 10;
    let currentPage = 0;
  
    function displayTable() {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageData = data.slice(startIndex, endIndex);
  
      table.innerHTML = "";
      pageData.forEach((item, index) => {
        const row = table.insertRow();
        row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td><button onclick="viewDetails(${index})">See More</button></td>
        `;
      });
  
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = endIndex >= data.length;
    }
  
    function viewDetails(index) {
      const selectedItem = data[currentPage * itemsPerPage + index];
      const loadingMessage = "Loading...";
  
      alert(loadingMessage);
  
      new Promise((resolve) => {
        setTimeout(() => {
          alert(`Viewing details for ${selectedItem.name}`);
          resolve();
        }, 2000);
      });
    }
  
    prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        displayTable();
      }
    });
  
    nextButton.addEventListener("click", function () {
      const totalPages = Math.ceil(data.length / itemsPerPage);
      if (currentPage < totalPages - 1) {
        currentPage++;
        displayTable();
      }
    });
  
    // Initial display
    displayTable();
  });
  
