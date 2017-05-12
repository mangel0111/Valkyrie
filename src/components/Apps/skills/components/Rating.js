import React, {Component} from 'react';

class Offices extends Component {
	constructor(props, context) {
		super(props, context);
	}

	getInput5(isChecked, skill) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${skill.code}5`} name="rating" value="5" onChange={() => onChangeInput(5, skill)}/>);
	}

	getInput4(isChecked, skill) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${skill.code}4`} name="rating" value="4" onChange={() => onChangeInput(4, skill)}/>);
	}

	getInput3(isChecked, skill) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${skill.code}3`} name="rating" value="3" onChange={() => onChangeInput(3, skill)}/>);
	}

	getInput2(isChecked, skill) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${skill.code}2`} name="rating" value="2" onChange={() => onChangeInput(2, skill)}/>);
	}

	getInput1(isChecked, skill) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${skill.code}1`} name="rating" value="1" onChange={() => onChangeInput(1, skill)}/>);
	}

	render() {
		const {skill} = this.props;
		return (
			<div className="ratingContainer">
				<h3>{skill.name}</h3>
				<fieldset className="rating">
					{this.getInput5(skill.value === 5, skill)}<label htmlFor={`start${skill.code}5`} title="Rocks!">5 stars</label>
					{this.getInput4(skill.value === 4, skill)}<label htmlFor={`start${skill.code}4`} title="Pretty good">4 stars</label>
					{this.getInput3(skill.value === 3, skill)}<label htmlFor={`start${skill.code}3`} title="Meh">3 stars</label>
					{this.getInput2(skill.value === 2, skill)}<label htmlFor={`start${skill.code}2`} title="Kinda bad">2 stars</label>
					{this.getInput1(skill.value === 1, skill)}<label htmlFor={`start${skill.code}1`} title="Sucks big time">1 star</label>
				</fieldset>
			</div>
		)
	}
}

export default Offices;
