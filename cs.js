class Gym{
    constructor(){
        this.allTrainers = [];
    }
    add(trainer){
        this.allTrainers.push(trainer);
    }

}
let gymMembers = new Gym();

class Trainers{
    constructor(){
        this.allPokemon = [];
    }   

    add(pokeObj){
        this.allPokemon.push(pokeObj);
    }
    get(name){
        return this.allPokemon.find((element) => {
            return element === name;
        })
    }
    all(){
        return this.allPokemon;
    }
    
}

let chhoti = new Trainers();
let kevin = new Trainers();
let jihae = new Trainers();

console.log(kevin);
console.log(jihae);
console.log(chhoti);

class Pokemon{
    constructor(name, hp, attack, defense, abilities){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }

}

let pokemonSearch = (idValue,trainer) =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idValue}`).then((response)=>{
    let data = response.data;
    console.log(data);

    let getAbilities = [];
    data.abilities.forEach((element)=>{
        getAbilities.push(element.ability.name);
    });
    console.log(getAbilities);

    let pokemon = new Pokemon(
        data['name'],
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        getAbilities
    )

    // document.getElementById('kevin1Poke-stats').innerHTML = pokemon.name;

    let pokeName = document.createElement('h3');
    pokeName.textContent = pokemon.name;
    // document.body.appendChild(pokeName);

    let stat = data.stats;
    console.log(stat);

    let hp = stat[5].base_stat;
    let para1 = document.createElement('p');
    para1.textContent = 'HP : ' + hp;
    // document.body.appendChild(para1);
    console.log(hp);
    

    let attack = stat[4].base_stat;
    let para2 = document.createElement('p');
    para2.textContent = 'Attack : ' + attack;
    // document.body.appendChild(para2);
    console.log(attack);

    let defense = stat[3].base_stat;
    let para3 = document.createElement('p');
    para3.textContent = 'Defense : ' + defense;
    // document.body.appendChild(para3);
    console.log(defense);

    let para = document.createElement('p');
    para.textContent = 'Ability : ' + getAbilities.join(", ");
    // document.body.appendChild(para);
    
    trainer.add(pokemon);

    gymMembers.add(trainer);    
   

}).catch((error) =>{
    console.log(error);
});
}

pokemonSearch(260, chhoti);   
pokemonSearch(286, chhoti);
pokemonSearch(802, chhoti);
pokemonSearch(59, kevin);
pokemonSearch(130, kevin);
pokemonSearch(149, kevin);
pokemonSearch(200, jihae);
pokemonSearch(50, jihae);
pokemonSearch(238, jihae);

//trainer1 pokemon info

let kevinPoke1 = document.getElementById('poke1Name').innerHTML = 'Arcanine';
let kevinPoke1Hp = document.getElementById('poke1Hp').innerHTML = 'HP :' + 91;
let kevinPoke1Atk = document.getElementById('poke1Attack').innerHTML = 'Attack :' + 110;
let kevinPoke1Def = document.getElementById('poke1Defense').innerHTML = 'Defense: ' + 80;
let kevinPoke1Abli = document.getElementById('poke1Ability').innerHTML = 'Ability : justified, flash-fire, intimidate';

let kevinPoke2 = document.getElementById('poke2Name').innerHTML = 'Gyarados';
let kevinPoke2Hp = document.getElementById('poke2Hp').innerHTML = 'HP :' + 95;
let kevinPoke2Atk = document.getElementById('poke2Attack').innerHTML = 'Attack :' + 125;
let kevinPoke2Def = document.getElementById('poke2Defense').innerHTML = 'Defense: ' + 79;
let kevinPoke2Abli = document.getElementById('poke2Ability').innerHTML = 'Ability : moxie, intimidate';

let kevinPoke3 = document.getElementById('poke3Name').innerHTML = 'Dragonite';
let kevinPoke3Hp = document.getElementById('poke3Hp').innerHTML = 'HP :' + 91;
let kevinPoke3Atk = document.getElementById('poke3Attack').innerHTML = 'Attack :' + 134;
let kevinPoke3Def = document.getElementById('poke3Defense').innerHTML = 'Defense: ' + 95;
let kevinPoke3Abli = document.getElementById('poke3Ability').innerHTML = 'Ability : multiscale, inner-focus';


// trainer2 pokemon info
let jihaePoke1 = document.getElementById('poke4Name').innerHTML = 'Diglett';
let jihaePoke1Hp = document.getElementById('poke4Hp').innerHTML = 'HP :' + 10;
let jihaePoke1Atk = document.getElementById('poke4Attack').innerHTML = 'Attack :' + 25;
let jihaePoke1Def = document.getElementById('poke4Defense').innerHTML = 'Defense: ' + 55;
let jihaePoke1Abli = document.getElementById('poke4Ability').innerHTML = 'Ability : sand-force, arena-trap, sand-veil';

let jihaePoke2 = document.getElementById('poke5Name').innerHTML = 'Misdreavus';
let jihaePoke2Hp = document.getElementById('poke5Hp').innerHTML = 'HP :' + 60;
let jihaePoke2Atk = document.getElementById('poke5Attack').innerHTML = 'Attack :' + 60;
let jihaePoke2Def = document.getElementById('poke5Defense').innerHTML = 'Defense: ' + 60;
let jihaePoke2Abli = document.getElementById('poke5Ability').innerHTML = 'Ability : levitate';

let jihaePoke3 = document.getElementById('poke6Name').innerHTML = 'Smoochum';
let jihaePoke3Hp = document.getElementById('poke6Hp').innerHTML = 'HP :' + 45;
let jihaePoke3Atk = document.getElementById('poke6Attack').innerHTML = 'Attack :' + 30;
let jihaePoke3Def = document.getElementById('poke6Defense').innerHTML = 'Defense: ' + 15;
let jihaePoke3Abli = document.getElementById('poke6Ability').innerHTML = 'Ability : hydration, forewarn, oblivious';


//trainer 3 pokemon

let chhotiPoke2 = document.getElementById('poke7Name').innerHTML = 'Breloom';
let chhotiPoke2Hp = document.getElementById('poke7Hp').innerHTML = 'HP :' + 60;
let chhotiPoke2Atk = document.getElementById('poke7Attack').innerHTML = 'Attack :' + 130;
let chhotiPoke2Def = document.getElementById('poke7Defense').innerHTML = 'Defense: ' + 80;
let chhotiPoke2Abli = document.getElementById('poke7Ability').innerHTML = 'Ability : technician, poision-heal, effect-spore';

let chhotiPoke3 = document.getElementById('poke8Name').innerHTML = 'Swampert';
let chhotiPoke3Hp = document.getElementById('poke8Hp').innerHTML = 'HP :' + 100;
let chhotiPoke3Atk = document.getElementById('poke8Attack').innerHTML = 'Attack :' + 110;
let chhotiPoke3Def = document.getElementById('poke8Defense').innerHTML = 'Defense: ' + 90;
let chhotiPoke3Abli = document.getElementById('poke8Ability').innerHTML = 'Ability : damp, torrent';

let chhotiPoke1 = document.getElementById('poke9Name').innerHTML = 'Marshadow';
let chhotiPoke1Hp = document.getElementById('poke9Hp').innerHTML = 'HP :' + 90;
let chhotiPoke1Atk = document.getElementById('poke9Attack').innerHTML = 'Attack :' + 125;
let chhotiPoke1Def = document.getElementById('poke9Defense').innerHTML = 'Defense: ' + 80;
let chhotiPoke1Abli = document.getElementById('poke9Ability').innerHTML = 'Ability : technician';