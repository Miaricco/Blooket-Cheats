/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tmaxCurrentAbilities.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const o=Object.values(document.querySelector("body > div > div > div"))[1].children[0]._owner["stateNode"];for(var[t,s]of Object.entries(o.state.abilities))for(let e=0;e<10-s;e++)o.state.game.scene.game.events.emit("level up",t,o.state.abilities[t]++);o.setState({level:o.state.game.scene.level=[1,3,5,10,15,25,35].sort((e,t)=>Math.abs(e-o.state.level)-Math.abs(t-o.state.level))[0]-1})})();