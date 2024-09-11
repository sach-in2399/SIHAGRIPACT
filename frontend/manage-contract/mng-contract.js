// Sample contracts data
const contracts = [
     {
         id: "C001",
         buyerName: "Alexander",
         crop: "Wheat",
         quantity: "500kg",
         price: "$1000",
         date: "2024-09-05",
     },
     {
         id: "C002",
         buyerName: "Prince",
         crop: "Rice",
         quantity: "1000kg",
         price: "$2000",
         date: "2024-08-20",
     },
     {
         id: "C003",
         buyerName: "Sam",
         crop: "Corn",
         quantity: "300kg",
         price: "$750",
         date: "2024-07-15",
     }
 ];
 
 // Function to load contracts into the table
 function loadContracts() {
     const contractsList = document.getElementById('contracts-list');
 
     // Clear any existing rows
     contractsList.innerHTML = '';
 
     contracts.forEach(contract => {
         const row = `
             <tr>
                 <td>${contract.id}</td>
                 <td>${contract.buyerName}</td>
                 <td>${contract.crop}</td>
                 <td>${contract.quantity}</td>
                 <td>${contract.price}</td>
                 <td>${contract.date}</td>
                 <td><button onclick="downloadContract('${contract.id}')">Download</button></td>
                 <td><button>Delete</button></td>

             </tr>
         `;
         contractsList.innerHTML += row;
     });
 }
 
 // Function to download contract (simulated for now)
 function downloadContract(id) {
     alert(`Downloading contract: ${id}`);
     // You can simulate this download with a file link or trigger a file download
     // For real implementation, this should trigger actual file download or redirect
 }
 
 // Load contracts when the page loads
 window.onload = loadContracts;
 