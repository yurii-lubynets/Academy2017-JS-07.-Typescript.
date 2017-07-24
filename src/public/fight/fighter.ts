import {showFight} from '../index';

export interface IFighter{
	name: string;
	power: number;
	health: number;
	hit: (enemy: Fighter, point: number) => void;
}

export class Fighter implements IFighter{
	name: string;
	power: number;
	health: number;
	constructor(name = " ", power = 0, health = 0){
		this.name = name;
		this.power = power;
		this.health = health;
	}
	private _setDamage(damage) {
		this.health = this.health - damage > 0 ? this.health - damage : 0;
        if(this.health <= 0) {
			showFight(`${this.name} is dead.`);
        } else {
			showFight(`${this.name}'s health is: ${this.health}. Damage is ${damage} points.`);
        }
	}
	hit(enemy: Fighter, point) {
		let damage = point*this.power;
		enemy._setDamage(damage);
	}
}
export class ImprovedFighter extends Fighter{
	doubleHit(enemy, point) {
		let doublePoint = point*2;
		this.hit(enemy, doublePoint);
	}
}