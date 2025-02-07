// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis kuri lygi 0. 
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
console.log(`1 ---------`);
class Kibiras1 {
    constructor(){
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni(){
        this.akmenuKiekis += 1
    }

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu(){
        console.log(`Iš viso pririnkote akmenų: ${this.akmenuKiekis}`)
    }
}

let jonoKibiras = new Kibiras1();
console.log(jonoKibiras);

jonoKibiras.prideti1Akmeni();
jonoKibiras.kiekPririnktaAkmenu();

jonoKibiras.prideti1Akmeni();
jonoKibiras.kiekPririnktaAkmenu();

jonoKibiras.pridetiDaugAkmenu(4);
jonoKibiras.kiekPririnktaAkmenu();


// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. 
// Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje
console.log(`2 ---------`);
class Pinigine {
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis){
        if(kiekis <= 2){
            this.metaliniaiPinigai += kiekis;
        }else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti(){
        this.visoSuma = this.metaliniaiPinigai + this.popieriniaiPinigai;
        return this.visoSuma;
    }
}

let jonoPinigine = new Pinigine();
console.log(jonoPinigine);

jonoPinigine.ideti(2);
console.log(jonoPinigine.skaiciuoti());

jonoPinigine.ideti(1);
let turtas = jonoPinigine.skaiciuoti();
console.log(turtas);

jonoPinigine.ideti(22);
console.log(jonoPinigine.skaiciuoti());

// 3. Sukurti klasę Troleibusas. 
// Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
// Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
console.log(`3 ---------`);
class Troleibusas{
    constructor(){
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius){
        if(keleiviuSkaicius > 0){
            this.keleiviuSkaicius += keleiviuSkaicius;
        }else {
            console.log(`Neigiamas keleivių skaičius yra neįmanomas, pasitikrinkite įllipančių keleivių kiekį.`);
         return;
        }
        return keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius){
        if(keleiviuSkaicius > 0 && this.keleiviuSkaicius >= keleiviuSkaicius){
            this.keleiviuSkaicius -= keleiviuSkaicius;
        }else {
            console.log(`Neigiamas keleivių skaičius yra neįmanomas, pasitikrinkite išlipančių keleivių kiekį.`);
            return;
        }
            return keleiviuSkaicius;
    }

    vaziuoja(){
        console.log(`Važiuojancių troleibusu keleivių skaičius: ${this.keleiviuSkaicius}`);
    }

}

const trolis1 = new Troleibusas();
console.log(trolis1);

trolis1.ilipa(3);
trolis1.vaziuoja();

trolis1.ilipa(15);
trolis1.vaziuoja();

trolis1.islipa(2);
trolis1.vaziuoja();

trolis1.islipa(10);
trolis1.vaziuoja();

console.log(`islipa 7`)
trolis1.islipa(7);
trolis1.vaziuoja();

trolis1.islipa(-2);
trolis1.vaziuoja();

const trolis2 = new Troleibusas();
console.log(trolis2);

trolis2.ilipa(10);
trolis2.vaziuoja();

trolis2.islipa(11);
trolis2.vaziuoja();

trolis2.islipa(-2);
trolis2.vaziuoja();

console.log(`---`)
trolis2.ilipa(-10);
trolis2.vaziuoja();

// 4.
// 5. 
// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. 
// Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. 
// Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
console.log(`6 -------`);
class Pinigine2 {
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.metaliniaiKartai = 0;
        this.popieriniaiKartai = 0;
    }

    ideti(kiekis){
        if(kiekis <= 2){
            this.metaliniaiPinigai += kiekis;
            this.metaliniaiKartai++;
        }else {
            this.popieriniaiPinigai += kiekis;
            this.popieriniaiKartai++;
        }
    }

    skaiciuoti(){
        this.visoSuma = this.metaliniaiPinigai + this.popieriniaiPinigai;
        return this.visoSuma;
    }

    monetos (){
    return this.metaliniaiKartai;
    }

    banknotai(){
        return this.popieriniaiKartai;

    }
}

const onosPinigine = new Pinigine2();
console.log(onosPinigine);

onosPinigine.ideti(1);
onosPinigine.ideti(1);
onosPinigine.ideti(1);
onosPinigine.ideti(5);
onosPinigine.ideti(15);
console.log(onosPinigine.skaiciuoti()); //23
console.log(onosPinigine.monetos()); //3
console.log(onosPinigine.banknotai()); //2

// 7. 

// 8. Sukurti klasę Stikline. 
// Sukurti savybes turis ir kiekis. 
// Turis turi būti pasirenkamas objekto kūrimo metu. 
// Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. 
// Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. 
// Parašyti metodą ispilti(), kuris grąžiną kiekį. 
// Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  ??????????????????????????
// Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. 
// Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
// Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
console.log(`8 --------`);

class Stikline{
    constructor(turis){
        this.turis = turis;
        this.kiekis = 0;
        this.ispilta = 0;
    }

    ipilti(kiekis){
            this.kiekis += kiekis;
            this.kiekis <= this.turis ? this.kiekis  : this.kiekis = this.turis;
            console.log(`įpylėme: ${kiekis}, stiklines turis yra ${this.turis}, todel viso yra ${this.kiekis}`);
        return this.kiekis;
    }

    ispilti(){
        this.ispilta = this.kiekis;
        this.kiekis = 0; //stikline tuscia
        console.log(`išpylėme: ${this.ispilta}`);
        return this.ispilta;

    }

    stiklinejeYra(){
        console.log(`kiekis likes stiklineje: ${this.kiekis}`)
        return this.kiekis;
    }
}

const stiklineTest = new Stikline(100);
console.log(stiklineTest);

// stiklineTest.ipilti(50);
// console.log(stiklineTest.kiekis);

stiklineTest.ipilti(80);
stiklineTest.stiklinejeYra();

stiklineTest.ipilti(20);
stiklineTest.stiklinejeYra();

stiklineTest.ispilti();
stiklineTest.stiklinejeYra();


const stikline1 = new Stikline(200);
console.log(stikline1);
stikline1.ipilti(200);
const ispylemIs1 = stikline1.ispilti();
console.log(`ispylem is stikline1: ${ispylemIs1}`);

const stikline2 = new Stikline(150);
console.log(stikline2);
stikline2.ipilti(ispylemIs1);
const ispylemIs2 = stikline2.ispilti();
console.log(`ispylem is stikline2: ${ispylemIs2}`);

const stikline3 = new Stikline(100);
console.log(stikline3);
stikline3.ipilti(ispylemIs2);
const ispylemIs3 = stikline3.ispilti();
console.log(`ispylem is stikline3: ${ispylemIs3}`);

