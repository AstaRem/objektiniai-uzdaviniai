// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis kuri lygi 0. 
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
console.log(`1 ---------`);
class Kibiras1 {
    constructor(kamDuotasKibiras = 'neaisku'){
        this.akmenuKiekis = 0;
        this.akmenuRinkejas = kamDuotasKibiras;
    }

    prideti1Akmeni(){
        this.akmenuKiekis += 1
    }

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu(){
        console.log(`${this.akmenuRinkejas} - iš viso pririnko akmenų: ${this.akmenuKiekis}`)
    }
}

let jonoKibiras = new Kibiras1('Jonas');
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
        // const islipo = Math.min(this.keleiviuSkaicius, keleiviuSkaicius);   //isbandyti sita varianta
        // this.keleiviuSkaicius -= islipo;
        if(keleiviuSkaicius > 0 && this.keleiviuSkaicius >= keleiviuSkaicius){
            this.keleiviuSkaicius -= keleiviuSkaicius;
        }else {
            // throw new Error('Neigiamas keleivių skaičius yra neįmanomas, pasitikrinkite išlipančių keleivių kiekį.')  // tokiu budu perduodame info apie klaida kitam programuotojui, ir kodas toliau nebevykdomas.
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

//pasitikrinti
try{
    trolis2.islipa(30);
} catch(error) {
    console.log('Klaida' + error.message);
}

// 4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifi kuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
console.log('4 ---------------------');
class Troleibusas2 {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius){
        this.visiKeleiviai += keleiviuSkaicius;
    }


    constructor(){
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius){
            this.keleiviuSkaicius += keleiviuSkaicius;
            this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius){
        const islipo = Math.min(this.keleiviuSkaicius, keleiviuSkaicius);   
        this.keleiviuSkaicius -= islipo;
        this.constructor.bendrasKeleiviuSkaicius(-islipo);
    }

    vaziuoja(){
        console.log(`Važiuojancių troleibusu keleivių skaičius: ${this.keleiviuSkaicius}`);
    }

}

const trol11 = new Troleibusas2();
const trol12 = new Troleibusas2();
const trol13 = new Troleibusas2();

trol11.ilipa(1);
trol12.ilipa(10);
trol13.ilipa(20);

trol11.islipa(2);
trol12.islipa(2);
trol13.islipa(2);



trol11.vaziuoja();
trol12.vaziuoja();
trol13.vaziuoja();

console.log(Troleibusas2.visiKeleiviai);


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

// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifi kuokite metodus prideti1Akmeni(), pridetiDaugAkmenu(kiekis).
console.log ('7 -----------------------');

class Kibiras2 {

    static visiAkmenys = 0;
    
    static akmenuSkaiciusVisuoseKibiruose(kiekis){
        this.visiAkmenys += kiekis;
    }

    constructor(kamDuotasKibiras = 'neaisku'){
        this.akmenuKiekis = 0;
        this.akmenuRinkejas = kamDuotasKibiras;
    }

    prideti1Akmeni(){
        this.akmenuKiekis += 1
        this.constructor.akmenuSkaiciusVisuoseKibiruose(1);

    }

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis;
        this.constructor.akmenuSkaiciusVisuoseKibiruose(kiekis);
    }

    kiekPririnktaAkmenu(){
        console.log(`${this.akmenuRinkejas} - iš viso pririnko akmenų: ${this.akmenuKiekis}`)
    }
}

const arnoKibiras = new Kibiras2('Arnas');
const linosKibiras = new Kibiras2('Lina');
const lukoKibiras = new Kibiras2('Lukas');

arnoKibiras.prideti1Akmeni();
linosKibiras.pridetiDaugAkmenu(2);
lukoKibiras.pridetiDaugAkmenu(10);

arnoKibiras.kiekPririnktaAkmenu();
linosKibiras.kiekPririnktaAkmenu();
lukoKibiras.kiekPririnktaAkmenu();

console.log(Kibiras2.visiAkmenys);


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
            // console.log(`įpylėme: ${kiekis}, stiklines turis yra ${this.turis}, todel viso yra ${this.kiekis}`);
        return this.kiekis;
    }

    ispilti(){
        this.ispilta = this.kiekis;
        this.kiekis = 0; //stikline tuscia
        // console.log(`išpylėme: ${this.ispilta}`);
        return this.ispilta;

    }

    stiklinejeYra(){
        // console.log(`kiekis likes stiklineje: ${this.kiekis}`)
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
// console.log(stikline1);
stikline1.ipilti(200);
const ispylemIs1 = stikline1.ispilti();
// console.log(`ispylem is stikline1: ${ispylemIs1}`);

const stikline2 = new Stikline(150);
// console.log(stikline2);
stikline2.ipilti(ispylemIs1);
const ispylemIs2 = stikline2.ispilti();
// console.log(`ispylem is stikline2: ${ispylemIs2}`);

const stikline3 = new Stikline(100);
// console.log(stikline3);
stikline3.ipilti(ispylemIs2);
const ispylemIs3 = stikline3.ispilti();
// console.log(`ispylem is stikline3: ${ispylemIs3}`);

// 9. Sukurti klasę Grybas. 
// Sukurti klasę Krepsys. 
// Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). 
// Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
// Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: 
// valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. 

// Eiti grybauti, t.y. Kurti naujus Grybas objektus, 
// jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, 
// t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).
console.log(`9 --------`);

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomBoolean(){
    return Math.random() <= 0.5 ? true : false;
}

// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());

class Grybas {
    constructor(){
        this.valgomas = randomBoolean();
        this.sukirmijes = randomBoolean();
        this.svoris = rand(5, 45);
    }

}

class Krepsys {
    constructor(){
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas){
        // this.grybas = grybas;
        // console.log(this.grybas);
    // console.log(`Grybas valgomas:${grybas.valgomas} ir sukirmijes: ${grybas.sukirmijes}, jo svoris: ${grybas.svoris}`);
        if(grybas.valgomas && !grybas.sukirmijes) {
            // console.log(`dedam i krepseli`)
            this.prikrauta += grybas.svoris;
            // console.log(this.prikrauta);
        } else {
            // console.log(`netinka`)
        }
        // console.log(`svoris krepselyje: ${this.prikrauta}`)
        return this.prikrauta;
    }

    grybauti(){
        while( this.prikrauta < this.dydis){
            const grybas = new Grybas();
            this.deti(grybas);
        }
        // console.log(`svoris, prikrautas i krepseli: ${this.prikrauta}`)
        return this.prikrauta;

    }
}

// const grybas1 = new Grybas();
// console.log(grybas1);
const onosKrepsys = new Krepsys();
// console.log(onosKrepsys);
// console.log(`grybas 1 svoris:${grybas1.svoris}`);
// console.log(onosKrepsys.deti(grybas1));

// const grybas2 = new Grybas();
// console.log(`grybas 2 svoris: ${grybas2.svoris}`);
// console.log(onosKrepsys.deti(grybas2));

// const grybas3 = new Grybas();
// console.log(`grybas 3 svoris: ${grybas3.svoris}`);
// console.log(onosKrepsys.deti(grybas3));

// const grybas4 = new Grybas();
// console.log(`grybas 4 svoris: ${grybas4.svoris}`);
// console.log(onosKrepsys.deti(grybas4));

onosKrepsys.grybauti();

console.clear()
