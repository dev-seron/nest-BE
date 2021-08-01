import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [
        {
            id: "34343434343434",
            name: "Item 1",
            description: " 1 - I'm coming from the Service",
            qty: 25
        },
        {
            id: "21211211212122",
            name: "Item 2",
            description: " 2 - I'm coming from the Service",
            qty: 25
        }

    ];

    findAll(): Item[] {
        return this.items
    }
}
