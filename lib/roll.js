export function roll(sides, dice, rolls) {
  let result = []  
  
  for(let i = 0; i < rolls; i++){
		let n = 0;
		for(let j = 0; j < dice; j++){
		  	n += Math.floor(Math.random() * sides) + 1;
		}
		result.push(n);
	}
  
  const rollResult = {
    sides: sides,
    dice: dice,
    rolls: rolls,
    results: result
  }
  
  return JSON.stringify(rollResult);
}