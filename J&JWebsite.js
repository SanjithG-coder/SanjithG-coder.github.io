// Simulated Data
const stock = {
    products: [
        { id: 1, name: "Product A", description: "High-quality product A", price: 100 },
        { id: 2, name: "Product B", description: "Reliable product B", price: 150 },
    ],
    nearestPlant: "Plant 1, Location XYZ",
};

// User Data
const users = {
    customers: [
        { username: "customer1", password: "pass1" }, // Placeholder for real authentication
        // Add more customer entries as needed
    ],
    employees: [
        { badgeId: "EMP001", name: "John Doe" },
        // Add more employee entries as needed
    ],
    suppliers: [
        { supplierId: "SUP001", name: "Supplier A" },
        // Add more supplier entries as needed
    ]
};

// Functions
function loginCustomer(username, password) {
    const user = users.customers.find(u => u.username === username && u.password === password);
    if (user) {
        alert("Login successful! Welcome, Customer.");
        displayStock();
    } else {
        alert("Invalid username or password.");
    }
}

function loginEmployee(badgeId) {
    const employee = users.employees.find(e => e.badgeId === badgeId);
    if (employee) {
        alert(`Login successful! Welcome, ${employee.name}.`);
        displayStock();
    } else {
        alert("Invalid badge ID.");
    }
}

function loginSupplier(supplierId) {
    const supplier = users.suppliers.find(s => s.supplierId === supplierId);
    if (supplier) {
        alert(`Login successful! Welcome, ${supplier.name}.`);
        displayStock();
    } else {
        alert("Invalid supplier ID.");
    }
}

function displayStock() {
    console.log("Current Stock:");
    stock.products.forEach(product => {
        console.log(`- ${product.name}: $${product.price} (${product.description})`);
    });
    console.log(`Nearest Plant: ${stock.nearestPlant}`);
}

// UI Interaction for Customer Login
document.getElementById("customerLoginBtn")?.addEventListener("click", () => {
    const username = document.getElementById("customerUsername").value;
    const password = document.getElementById("customerPassword").value;
    loginCustomer(username, password);
});

// UI Interaction for Employee Login
document.getElementById("employeeLoginBtn")?.addEventListener("click", () => {
    const badgeId = document.getElementById("employeeBadgeId").value;
    loginEmployee(badgeId);
});

// UI Interaction for Supplier Login
document.getElementById("supplierLoginBtn")?.addEventListener("click", () => {
    const supplierId = document.getElementById("supplierId").value;
    loginSupplier(supplierId);
});
