//CLIENT CLASS
//////////////////////////////////////////////////////////////
class Client {
    constructor(name, id){
        this.id = id
        this.name = name
    }
    getClient(){
        console.log(`Client Name & ID: ${this.name} ${this.id}`)
    }
}

//DISH CLASS
//////////////////////////////////////////////////////////////
class Dish {
    constructor(dishname, cost, ingredients) {
        this.dishname =  dishname;
        this.ingredients = ingredients;
        this.cost = cost;
    }
    totalCost(){
        let total = 10;
        for(let i = 0; i < this.ingredients.length; i++){
            total += this.ingredients[i].ingre_cost
        }
        return `Total Price: ${total}`
    }
    profitCost(){
        let total = 10;
        let profit = 0;
        for(let i = 0; i < this.ingredients.length; i++){
            total += this.ingredients[i].ingre_cost
        }
        profit = this.cost - total;
        console.log('Profit: ', profit)
    }
    // getDish() {
    //     console.log(`Dish: ${this.dishname}`)
    // }
    // getIngreCount() {
    //     console.log(`IngreCount: ${this.ingredients}`)
    // }
    // getDishCost() {
    //     console.log(`Dish Cost: ${this.cost}`)
    // }
}

//RESTAURANT CLASS
//////////////////////////////////////////////////////////////
class Restaurant {
    constructor() {
        this.orders = {};
    }
    addOrder(item, client) {
        if(!this.orders[client.id]){
            this.orders[client.id] = [item]
        }
        else {
            this.orders[client.id].push(item);
        }
    }
    printOrder(client) {
        this.orders[client.id].forEach(function(element, index) {
            console.log(`Order #${index} ${element.dishname}`)
        })
    }
    printCheck(){
        let total = 0;
        this.orders.forEach(function(element, index, cost) {
            total += element.cost
            console.log(`Order #${index} ${element.dishname} ${element.cost}`)
        })
        console.log('total price: ', total)
    }
} 

//INGREDIENT CLASS
//////////////////////////////////////////////////////////////
class Ingredient {
    constructor (ingre_name, ingre_cost) {
        this.ingre_name = ingre_name;
        this.ingre_cost = ingre_cost;
    }
    // getIngreName(){
    //     console.log(`Ingredients: ${this.ingre_name}`)
    // }
    // getIngreCost(){
    //     console.log(`Cost: ${this.ingre_cost}`)
    // }
}


//INSTANCES
//////////////////////////////////////////////////////////////

const goofy = new Client('goofy', 2)
const pluto = new Client('pluto', 1)
const cheese = new Ingredient('Cheese', 5);
const pepperoni = new Ingredient('Peeperoni', 4);
const dough = new Ingredient('Dough', 3);
const lettuce = new Ingredient('Lettuce', 4);
const tomato = new Ingredient('Tomato', 3);

const pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
const salad = new Dish('Salad', 35, [lettuce, cheese, tomato]);
const pizzaria = new Restaurant()

pizzaria.addOrder(pizza, goofy)
pizzaria.addOrder(salad, pluto)


//console.log(pizzaria.orders)
console.log(pizzaria.printOrder())
//console.log(pizza.getDish())
//console.log(cheese.getIngreName())
//console.log(cheese.getIngreCost())
//console.log(pizza.getIngreCount())
console.log(pizza.totalCost());
console.log(pizza.profitCost());
//console.log(pizza.getDishCost());
console.log(pizzaria.printCheck());
console.log(goofy.getClient())