/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tswapGold.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");let o=Object.values(document.querySelector("body > div > div > div"))[1].children[0]._owner["stateNode"];o.props.liveGameController.getDatabaseVal("c",e=>{o.setState({players:e?Object.entries(e).map(([e,{b:o,g:t}])=>({name:e,blook:o,gold:t||0})).filter(e=>e.name!=o.props.client.name).sort(({gold:e},{gold:o})=>o-e):[],ready:!0,phaseTwo:!0,stage:"prize",choiceObj:{type:"swap"}})})})();