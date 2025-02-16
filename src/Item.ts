interface IItem{
    id: number;
    name: string;
    price: number;
}

class Item implements IItem{
    constructor(
        public id: number, public name: string, public price: number
    ) {}
}

export default Item;