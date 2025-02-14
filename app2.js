// 1. Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(), kuris sukuria naują Marsas objektą, turintį dvi savybes id: rand 100000 - 999999 ir pavadinimas: pagal taisyklę iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”. Metodas grąžina Marsas objektą. Metodą iškvietus trečią, ketvirtą ir t.t. kartus, metodas turi nekurti daugiau naujų Marsas objektų, o grąžinti atsitiktine tvarka, vieną iš dviejų jau sukurtų Marsas objektų. Tarkim penkis kartus iškvietus metodą, turime matyti tik du skirtingus objektus (žiūrim pagal id).

console.log('1 ----------------');

class Mars {
        static rand(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
      }

    static existingSatellites = [];
    static satelliteNames = ['Deimas', 'Fobas'];

    static pridetiPalydova(){
        if(Mars.existingSatellites.length < 2){
            const newId = rand(100000, 999999);
            const newName = Mars.satelliteNames[Mars.existingSatellites.length];
            const newSatellite = new Mars(newId, newName);
            Mars.existingSatellites.push(newSatellite);
            return  newSatellite;
        } else {
            let randomNum = rand(0, 1);
            console.log(randomNum)
            return Mars.existingSatellites[randomNum];
        }

    }

    constructor (id,name){
                this.id = id;
                this.name = name;
            }
}

console.log(Mars.pridetiPalydova());
console.log(Mars.pridetiPalydova());
console.log(Mars.pridetiPalydova());
console.log(Mars.pridetiPalydova());
console.log(Mars.pridetiPalydova());
console.log(Mars.pridetiPalydova());

// 2. Sukurti klasę Puodelis. Puodelis turi dvi savybes: spalva ir ipilta. Sukurti statinį metodą gamintiPuodelius(), kuris pagamina du objektus su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. Sukurti statinį metodą perpilti(), kuris “pilną” puodelį padaro tuščią ir atvirkščiai. Sukurti statinį metodus ispiltiViska(), kuris abu puodelius padaro “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro “pilnus”. Po šių metodų iškvietimo, metodas perpilti() turi veikti korektiškai ir logiškai (arba abu “tušti” arba abu “pilni”).
console.log('2 ----------------');

class Puodelis {

    static puodelis1;
    static puodelis2;

    static gamintiPuodelius(){ 

        Puodelis.puodelis1 = new Puodelis('raudonas', 'pilnas');
        Puodelis.puodelis2 = new Puodelis ('geltonas', 'tuscias');
    }

    static perpilti(){
        if (Puodelis.puodelis1.ipilta === 'pilnas' && Puodelis.puodelis2.ipilta === 'tuscias'  ) {
            Puodelis.puodelis1.ipilta = 'tuscias';
            Puodelis.puodelis2.ipilta = 'pilnas';

        } else if (Puodelis.puodelis1.ipilta === 'tuscias' && Puodelis.puodelis2.ipilta === 'pilnas' ){
            Puodelis.puodelis1.ipilta = 'pilnas';
            Puodelis.puodelis2.ipilta = 'tuscias';

        }
    }

    static ispiltiViska(){
        Puodelis.puodelis1.ipilta = 'tuscias';
        Puodelis.puodelis2.ipilta = 'tuscias';


    }

    static ipiltiIAbu(){
        Puodelis.puodelis1.ipilta = 'pilnas';
        Puodelis.puodelis2.ipilta = 'pilnas';

    }


    constructor (spalva, ipilta){
        this.spalva = spalva;
        this.ipilta = ipilta;
    }

}

Puodelis.gamintiPuodelius();
console.log('pradedam')
console.log(Puodelis.puodelis1, Puodelis.puodelis2);

console.log('perpilti - 1');
Puodelis.perpilti();
console.log(Puodelis.puodelis1, Puodelis.puodelis2);

console.log('perpilti - 2');
Puodelis.perpilti();
console.log(Puodelis.puodelis1, Puodelis.puodelis2);

console.log('ispilti');
Puodelis.ispiltiViska();
console.log(Puodelis.puodelis1, Puodelis.puodelis2);

console.log('ipilti Abu');
Puodelis.ipiltiIAbu();
console.log(Puodelis.puodelis1, Puodelis.puodelis2);

console.log('perpilti-2');
Puodelis.perpilti();
console.log(Puodelis.puodelis1, Puodelis.puodelis2);


// 3.
// Sukurti klasę Taskas, kuris turi savybę taskas rand 100-999. 
// Sukurti klasę Taskai, kuris turi savybe taskai, kuri yra masyvas iš 10 Taskas objektų. 
// Sukurkite išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, kuris yra masyvas iš 10 elementų, 
// o kiekvienas elementas yra Taskai objektas. 
// Išrūšiuokite masyvą daugTasku, pagal taskų sumą nuo didžiausio iki mažiausio.

class Taskas {

    static rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
    }

    constructor(){
        this.taskas = rand(100, 999);
    }

}

class Taskai {
    constructor(){
        this.taskai = [];
        for(let i = 0; i < 10; i++){
            this.taskai.push(new Taskas);
        }
    }
}

let naujasT = new Taskas();
console.log(naujasT);

let naujasArr = new Taskai();
console.log(naujasArr);

const daugTasku = [];
for (let i = 0; i < 10; i++){
    daugTasku.push(new Taskai());
}

console.log(daugTasku);