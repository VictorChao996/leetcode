// /*
//  * @lc app=leetcode id=649 lang=javascript
//  *
//  * [649] Dota2 Senate
//  */

// // @lc code=start
// /**
//  * @param {string} senate
//  * @return {string}
//  */
// var predictPartyVictory = function (senate) {
// 	let round = senate.length;
// 	let r = 0,
// 		d = 0,
// 		turn = senate[0],
// 		changeTurn = { R: ["D", 0], D: ["R", 0] };

// 	//count R & D
// 	for (let i = 0; i < senate.length; i++) {
// 		if (senate[i] == "R") {
// 			r++;
// 			changeTurn.D[1] = r;
// 		}
// 		if (senate[i] == "D") {
// 			d++;
// 			changeTurn.R[1] = d;
// 		}
// 	}
// 	let p = 1; //pointer
// 	while (true) {
// 		if (changeTurn.R[1] == 1 && changeTurn.D[1] == 0) return "Dire";
// 		if (changeTurn.R[1] == 0 && changeTurn.D[1] == 1) return "Radiant";

// 		if (senate[p] != turn && senate[p] != 0) {
// 			senate[p] = 0;
// 			changeTurn[ture][1]--;
// 			turn = changeTurn[turn][0];
// 		}
// 	}

// 	// for (let i = 0; i < round; i++) {
// 	// 	console.log(`D: ${changeTurn.R[1]}, R: ${changeTurn.D[1]}`);
// 	// 	if (changeTurn.R[1] == 0 && changeTurn.D[1] != 0) return "Radiant";

// 	// 	if (changeTurn.R[1] != 0 && changeTurn.D[1] == 0) return "Dire";

// 	// 	for (let j = 1; j < senate.length; j++) {
// 	// 		if (senate[j] != turn && senate[j] != 0) {
// 	// 			senate[j] = 0;
// 	// 			changeTurn[turn][1]--;
// 	// 			turn = changeTurn[turn];
// 	// 		}
// 	// 	}
// 	// }
// };
// // @lc code=end
