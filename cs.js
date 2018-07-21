// class Gym{
//     constructor(){
//         this.allTrainers = [];
//     }
//     add(trainerObj){
//         this.allTrainers.push(trainerObj);
//     }
// }

// let gymMembers = new Gym();

// class Trainers{
//     constructor(){
//         this.allPokemon = [];
//     }   

//     add(pokeObj){
//         this.allPokemon.push(pokeObj);
//     }
//     get(name){
//         return this.allPokemon.find((element) => {
//             return element === name;
//         })

//     }
    
// }

// let chhoti = new Trainers();
// let kevin = new Trainers();
// let jihae = new Trainers();

// class Pokemon{
//     constructor(name, hp, attack, defense, abilities){
//         this.name = name;
//         this.hp = hp;
//         this.attack = attack;
//         this.defense = defense;
//         this.abilities = abilities;
//     }

// }

// let pokemonSearch = (idValue,trainer) =>{
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${idValue}`).then((response)=>{
//     let data = response.data;
//     console.log(data);

//     let getAbilities = [];
//     data.abilities.forEach((element)=>{
//         getAbilities.push(element.ability.name);
//     });
//     console.log(getAbilities);

//     let pokemon = new Pokemon(
//         data['name'],
//         data.stats[5].base_stat,
//         data.stats[4].base_stat,
//         data.stats[3].base_stat,
//         getAbilities
//     )

//     let stat = data.stats;
//     console.log(stat);

//     let hp = stat[5].base_stat;
//     let para1 = document.createElement('p');
//     para1.textContent = 'HP : ' + hp;
//     document.body.appendChild(para1);
//     console.log(hp);
    

//     let attack = stat[4].base_stat;
//     let para2 = document.createElement('p');
//     para2.textContent = 'Attack : ' + attack;
//     document.body.appendChild(para2);
//     console.log(attack);

//     let defense = stat[3].base_stat;
//     let para3 = document.createElement('p');
//     para3.textContent = 'Defense : ' + defense;
//     document.body.appendChild(para3);
//     console.log(defense);

//     let para = document.createElement('p');
//     para.innerHTML = 'Ability : ' + getAbilities.join(", ");
//     document.body.appendChild(para);
    
//     trainer.add(pokemon);

//     gymMembers.add(trainer);
    

// }).catch((error) =>{
//     console.log(error);
// })
// }

// const starterPokemon = {
//     kevin: [59,130,149],
//     chhoti: [260,286,802],
//     jihae: [50,200,238]
// };

// for (let k in starterPokemon) {
//     for (let v of starterPokemon[k]) {
//         pokemonSearch(v, k);
//     }
// };