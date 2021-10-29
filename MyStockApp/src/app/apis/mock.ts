import { of } from 'rxjs';
import { Item } from './../model/Item';
import { Customer } from '../model/Customer';
export class MockData {
    items: Item[] = [];
    customers: Customer[] = [];

    constructor() {
        this.populateItems();
        this.populateCustomers();
    }

    populateCustomers() {
        const cust1: Customer = new Customer();
        cust1.id = '001';
        cust1.address = 'Mumbai';
        cust1.name = 'Cust01';
        this.customers.push(cust1);
 /*        this.customers.push(new Customer('002', 'Cust02', 'Pune'));
        this.customers.push(new Customer('003', 'Cust03', 'Mumbai'));
        this.customers.push(new Customer('004', 'Cust04', 'Delhi'));
  */   }
    populateItems() {
        const i1: Item = new Item();
        i1.name = 'Sample01';
        i1.id = '001';
        i1.qty = 20;
        this.items.push(i1);
/*         this.items.push(new Item('002', 'Sample02', 40));

        this.items.push(new Item('003', 'Sample03', 80));

        this.items.push(new Item('004', 'Sample04', 60));

        this.items.push(new Item('005', 'Sample05', 25));

 */    }
    getItems() {
        console.log(this.items)
        return of(this.items);
    }

    getCustomers() {
        console.log(JSON.stringify(this.customers))
        return of(this.customers);
    }

}