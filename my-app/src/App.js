import style from './App.module.css';
import { useState } from 'react';

export const App = () => {
	let NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	let deistvie = ['+', '-', 'C', '='];

	let result = '';

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const Onclick = (value) => () => {
		if (Number(value) && !operator) {
			setOperand1(operand1.concat(value));
			setIsResult(false);
		}
		if ((operand1 && value === '+') || (operand1 && value === '-')) {
			setOperator(operator.concat(value));
			setIsResult(false);
		}
		if (operator === '+' || operator === '-') {
			setOperand2(operand2.concat(value));
			setIsResult(false);
		}
		if (value === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setIsResult(false);
		}
		if (operand1 && operator === '+' && operand2) {
			if (value === '=') {
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(true);
			}
		} else if (operand1 && operator === '-' && operand2) {
			if (value === '=') {
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(true);
			}
		}
	};

	result = operand1 + operator + operand2;
	return (
		<>
			<div className={style.container}>
				<form>
					<input type="text" className={isResult ? style.display_otvet : style.display} value={result}></input>
				</form>
				<div>
					{NUMS.map((chislo) => {
						return (
							<button name={chislo} className={style.button} onClick={Onclick(chislo)}>
								{chislo}
							</button>
						);
					})}
					{deistvie.map((deistvie) => {
						return (
							<button name={deistvie} className={style.button} onClick={Onclick(deistvie)}>
								{deistvie}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};
