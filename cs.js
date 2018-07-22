class Gym {
    constructor () {
        this.allTrainers = [];
    }
    add (trainer) {
        this.allTrainers.push(trainer);
    }
    get (trainerName) {
       for (let i of this.allTrainers) {
         if (i.name === trainerName) return i;
       }
    }
    all () {
        return this.allTrainers;
    }
}

const gymMembers = new Gym();

class Trainers {
    constructor(name) {
        this.name = name;
        this.allPokemon = [];
    }

    add(pokeObj) {
        this.allPokemon.push(pokeObj);
    }
    get(name) {
        return this.allPokemon.find((element) => {
            return element === name;
        })
    }
    all() {
        return this.allPokemon;
    }

}

class Pokemon {
    constructor(name, hp, attack, defense, abilities, photo) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.photo = photo;
    }
}

// global var to track how many trainers have been added so far to DOM
let trainerNum = 0;

// function that will assign content
const assignContent = (trainersPokemon, pokemonNum) => {
    const trainerName = gymMembers.all()[trainerNum].name;
    document.getElementById(trainerName).textContent = trainerName.toUpperCase();

    const target = document.getElementById(`${trainerName}-${pokemonNum}`);
    console.log(target);
    const template =
        `<img class='images' src='${trainersPokemon.photo}'></img>
        <h3>${trainersPokemon.name}</h3>
        <p>HP: ${trainersPokemon.hp}</p>
        <p>Attack: ${trainersPokemon.attack}</p>
        <p>Defense: ${trainersPokemon.defense}</p>
        <p>Abilities ${trainersPokemon.abilities.join(', ')}</p>`

    const div = document.createElement('div');
    div.innerHTML = template;
    
    target.appendChild(div);
}

let pokemonSearch = (idValue, trainer) => {
  // Function will:
  // 1. add trainer to gymMembers
  // 2. add pokemon to trainer
  // 3. if trainer has 3 pokemon, it will render info to the DOM
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idValue}`).then((response) => {
        const data = response.data;

        const pokemon = new Pokemon(
            data.name,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            data.abilities.map(x => x.ability.name),
            data.sprites.front_default
        )

        const trainerObj = new Trainers(trainer);
        if (!gymMembers.get(trainer)) gymMembers.add(trainerObj);
        gymMembers.get(trainer).add(pokemon);
    }).then(() => {
        const trainersPokemon = gymMembers.get(trainer).all();
        if (trainersPokemon.length === 3) {
            for (let i = 0; i < 3; i++) {
                assignContent(trainersPokemon[i], i+1);
            }
            trainerNum++;
        }
    }).catch((error) => {
        console.log(error);
    });
}

// Add starter pokemon
const starterPokemon = {
    kevin: [59,130,149],
    jihae: [50,200,238],
    chhoti: [260,286,802]
};

for (let k in starterPokemon) {
    for (let v of starterPokemon[k]) {
        pokemonSearch(v, k);
    }
}