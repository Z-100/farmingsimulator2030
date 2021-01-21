console.log("Why do you even look at the console??????");
class Chicken {
    age;
    
    constructor() {
        this.age = 0;
    }
    tick() {
        this.age++;
        return 1;
    }
}
class Cow {
    age;
    
    constructor() {
        this.age = 0;
    }
    tick() {
        this.age++;
        return 1;
    }
}
class Wheat {
    age;
    
    constructor() {
        this.age = 0;
    }
    tick() {
        this.age++;
        return 1;
    }
}

class Farm {
    days;
    chickens;
    cows;
    wheats;
    eggs;

    constructor() {
        this.days = 0;
        this.chickens = [];
        this.cows = [];
        this.wheats = [];
        this.eggs = [];
    }

    buyChicken() {
        this.chickens.push(new Chicken());
        document.getElementById("buyChickens").innerHTML = this.chickens.length;
    };
    buyCow() {
        this.cows.push(new Cow());
        document.getElementById("buyCows").innerHTML = this.cows.length;
    };
    buyWheat() {
        this.wheats.push(new Wheat());
        document.getElementById("buyWheats").innerHTML = this.wheats.length;
    };
}

var farm = new Farm();