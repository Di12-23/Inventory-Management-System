let inventory = {
    40: 0,
    20: 0,
    10: 0
};

function addToInventory(size) {
    inventory[size]++;
    updateInventory();
}

function removeFromInventory(size) {
    if (inventory[size] > 0) {
        inventory[size]--;
        updateInventory();
    } else {
        alert(`No more products of size ${size} to remove.`);
    }
}

function updateInventory() {
    document.getElementById("quantity1").textContent = inventory[40];
    document.getElementById("quantity2").textContent = inventory[20];
    document.getElementById("quantity3").textContent = inventory[10];
    document.getElementById("quantity4").textContent = inventory[10];
}

// Initialize inventory quantities
inventory[40] = 1; // Initial quantity for size 40
inventory[20] = 2; // Initial quantity for size 20
inventory[10] = 2; // Initial quantity for size 10

updateInventory();
