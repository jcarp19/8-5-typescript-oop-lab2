/********************
*     OPP CLASS     *
********************/

class Player {
    name: string;
    jersey: number;

    constructor(name: string, jersey: number) {
        this.name = name;
        this.jersey = jersey;
    };

    listPlayers() {
        console.log(`${this.name} ${this.jersey}`);
    }
};

let mike: Player = new Player ("Michael", 23);
let p1: Player = new Player ("Isiah", 11);
let p2: Player = new Player ("Messi", 10);

mike.listPlayers();
p1.listPlayers();
p2.listPlayers();
console.log(mike.jersey);
console.log(p1.jersey);
console.log(p2.jersey);
console.log(mike.name);
console.log(p1.name);
console.log(p2.name);
console.log(mike);
console.log(p1);
console.log(p2);

// let example; // infer "any" as the annotation
// let example = 21; // infer "number" as the annotation
// let example = "text"; // infer "string" as the annotation

class Timer {
    name: string;
    time: number = 0; // default value of 0 for new items

    constructor (name: string) {
        this.name = name;
    }
}
let a = new Timer("Today");
console.log(a);


class Bike {
    speed: number = 0; // speed property starts at 0
    constructor() {

    };
    go(): void {
        this.speed++;
    }
};

class GearedBike extends Bike {
    gear: number = 1;

    shiftUp(): void {
        this.gear++;
    }
    shiftDown(): void {
        this.gear--;
    }
}

let myBike: GearedBike = new GearedBike();
myBike.go(); // method from Bike
myBike.shiftUp();
// myBike.shiftDown();
console.log(myBike.speed);
console.log(myBike.gear);

class ColorfulBike extends Bike {
    color: string;

    constructor(color: string) {
        super(); // Calls Bike's constructor
        this.color = color;
    }
}

class Phone {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
};
let cell = new Phone("Galaxy", 200);

class SmartPhone extends Phone {
    useful: boolean;
    constructor(name: string, price: number, useful: boolean) {
        super(name, price);
        this.useful = useful;
    }
};

let iPhone = new SmartPhone ("iPhone", 1000, true);
console.log(iPhone);

// lets do it again
class Movies {
    name: string;
    runtime: number;
    dateOfRelease: number;
    
    constructor(name: string, runtime: number, dateOfRelease:number) {
        this.name = name;
        this.runtime = runtime;
        this.dateOfRelease = dateOfRelease;
    }
    movieInfo(): void {
        console.log(`${this.name} was released in ${this.dateOfRelease} and has a runtime of ${this.runtime} minutes.`)
    }
}

let spaceJam = new Movies("Space Jam", 120, 1995);
console.log(spaceJam);

spaceJam.movieInfo();



class BadMovies extends Movies {
    rottenProperty: boolean;
    
    constructor(name: string, runtime: number, dateOfRelease: number, rottenPrperty: boolean) {
        super(name, runtime, dateOfRelease);
        this.rottenProperty = rottenPrperty;
    };
    movieInfo(): void {
        console.log(super.movieInfo() + `It also has a Rotten rating of ${this.rottenProperty}`);
    };
}
let spaceJam2 = new BadMovies("Space Jam 2", 130, 1997, true);
console.log(spaceJam2);

spaceJam2.movieInfo();


// class Games {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     };
// };

// class gameRating extends Games {
//     rating: string;

//     constructor(name: string, rating: string) {

//     }
// }
