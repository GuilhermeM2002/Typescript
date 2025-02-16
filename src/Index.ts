import Item from './Item';
import Inventory from './Inventory';

// Create some items
const item1 = new Item(1, "Laptop", 999.99);
const item2 = new Item(2, "Smartphone", 499.99);

// Create an inventory
const inventory = new Inventory<Item>();

// Add items to the inventory
inventory.addItem(item1);
inventory.addItem(item2);

// List all items
inventory.listItems();

// Remove an item
inventory.removeItem(1);

// List items again
inventory.listItems();