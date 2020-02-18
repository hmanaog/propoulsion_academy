///////////////////////////////////////////////////////
////////////////////PERSON CLASS///////////////////////
///////////////////////////////////////////////////////
class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.isAlive = true;
    }
    greet(){
        console.log(`Hello this is ${this.firstname} ${this.lastname}`)
    }
}


///////////////////////////////////////////////////////
////////////////////WRITER CLASS///////////////////////
///////////////////////////////////////////////////////
class Writer extends Person{
    constructor(firstname, lastname) {
        super(firstname, lastname);
        // this.pseudonym = function(){
        //     console.log((this.firstname+this.lastname).split("").reverse().join(""));
        // }
    }
    signBook() {
         let pseudonym = (this.firstname+this.lastname).split("").reverse().join("");
         return pseudonym
        //console.log(this.pseudonym)
    }
}


///////////////////////////////////////////////////////
///////////////////DEVELOPER CLASS/////////////////////
///////////////////////////////////////////////////////
class Developer extends Person{
    constructor(firstname, lastname, codename) {
        super(firstname, lastname);
        this.codename = codename;
    }
    impress(){ 
        for(let i = 0; i<6; i++){
            console.log('01')
        }
        return this.codename
    }
}


///////////////////////////////////////////////////////
////////////////////SINGER CLASS///////////////////////
///////////////////////////////////////////////////////
class Singer extends Person{
    constructor(firstname, lastname, artisticName){
        super(firstname, lastname)
        this.artisticName = artisticName;
    }
    melody(){
        return `${this.artisticName} ${this.firstname} ${this.lastname}`
    }
    sing(){
        for(let i = 0; i<4; i++){
            console.log(this.melody())
        }
    }
}


///////////////////////////////////////////////////////
//////////////////JUNIORDEV CLASS//////////////////////
///////////////////////////////////////////////////////
class JuniorDev extends Developer{
    constructor(firstname, lastname, codename){
       super(firstname, lastname, codename) 
       this.isStruggling = true;
    }
    complain(){
        return this.codename.toUpperCase()
    }
    workHard(){
        for(let i = 0; i<11; i++){
            console.log(`${this.codename} is working hard`)
        }
    }
}



const laurent = new Person('Laurent', 'Meyer')
const writer = new Writer('Laurent', 'Meyer')
const Max = new Developer('Maxin', 'Frei', 'Ping Pong King')
const Isabelle = new Singer('Isabelle', 'Che Kim', 'Fancy')
const Bert = new JuniorDev('bert', 'manaog', 'noob')

console.log(laurent.greet())
console.log(writer.signBook())
console.log(Max.impress())
console.log(Isabelle.melody())
console.log(Isabelle.sing())
console.log(Bert.complain())
console.log(Bert.workHard())