import {Fighter, ImprovedFighter} from './fighter';
import {showFight} from '../index';

export interface IFight {
	fight: (fighter: Fighter, 
		improvedFighter: ImprovedFighter, 
		points: number[]
	) => void;
}

export class Fight implements IFight {
	fight(fighter, improvedFighter, points) {
		if (points.length === 0) {
			showFight('points length is null');
    	}
		let round = true;
		for (let i = 0; i < points.length; i++) {
			round ? fighter.hit(improvedFighter, points[i]) : improvedFighter.hit(fighter, points[i]);
			/*round ? fighter.hit(improvedFighter, points[i]) : improvedFighter.doubleHit(fighter, points[i]);*/
			if (fighter.health === 0 || improvedFighter.health === 0) {
				let fighterWinner = round ? fighter.name : improvedFighter.name;
				showFight(`${fighterWinner} wins.`);
				break;
			}
			round = !round;
		}
	}
}