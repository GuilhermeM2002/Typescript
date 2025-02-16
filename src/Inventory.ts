import IItem from "./Item";

class Invetory<T extends IItem>{
    private items: T[] = [];

    addItem(item: T): void{
        this.items.push(item);
    }

    removeItem(id: number): void{
        this.items.filter(item => item.id !== id);
    }

    listItems(): void {
        console.log("Inventory Items:");
        this.items.forEach(item => {
            console.log(`ID: ${item.id}, Name: ${item.name}, Price: $${item.price}`);
        });
    }
}

export default Invetory;