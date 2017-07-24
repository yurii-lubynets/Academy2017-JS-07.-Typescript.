import {Fight} from './fight/fight';
import {Fighter, ImprovedFighter} from './fight/fighter';

export function showFight(value) {
	let p = document.createElement('p');
	p.innerHTML = value;
	document.querySelector('body').appendChild(p);
}

let input_points = document.getElementById('points') as HTMLInputElement;
let start_btn = document.getElementById('strt_btn') as HTMLButtonElement;

start_btn.addEventListener('click', () => {
	let fighter = new Fighter("X", 10, 100);
	let improvedFighter = new ImprovedFighter("Y", 12, 100);
	let points = input_points.value.split(' ').map((elem) => {return +elem;});
	let duel = new Fight();
	duel.fight(fighter, improvedFighter, points);
})