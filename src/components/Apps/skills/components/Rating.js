import React, {Component} from 'react';

class Offices extends Component {
	constructor(props, context) {
		super(props, context);
	}

	getInput5(isChecked, hability) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${hability.code}5`} name="rating" value="5" onChange={() => onChangeInput(5, hability)}/>);
	}

	getInput4(isChecked, hability) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${hability.code}4`} name="rating" value="4" onChange={() => onChangeInput(4, hability)}/>);
	}

	getInput3(isChecked, hability) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${hability.code}3`} name="rating" value="3" onChange={() => onChangeInput(3, hability)}/>);
	}

	getInput2(isChecked, hability) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${hability.code}2`} name="rating" value="2" onChange={() => onChangeInput(2, hability)}/>);
	}

	getInput1(isChecked, hability) {
		const {onChangeInput} = this.props;
		return (<input type="radio" checked={isChecked} id={`start${hability.code}1`} name="rating" value="1" onChange={() => onChangeInput(1, hability)}/>);
	}

	render() {
		const {hability} = this.props;
		debugger;
		return (
			<div className="ratingContainer">
				<h3>{hability.name}</h3>
				<fieldset className="rating">
					{this.getInput5(hability.value === 5, hability)}<label htmlFor={`start${hability.code}5`} title="Rocks!">5 stars</label>
					{this.getInput4(hability.value === 4, hability)}<label htmlFor={`start${hability.code}4`} title="Pretty good">4 stars</label>
					{this.getInput3(hability.value === 3, hability)}<label htmlFor={`start${hability.code}3`} title="Meh">3 stars</label>
					{this.getInput2(hability.value === 2, hability)}<label htmlFor={`start${hability.code}2`} title="Kinda bad">2 stars</label>
					{this.getInput1(hability.value === 1, hability)}<label htmlFor={`start${hability.code}1`} title="Sucks big time">1 star</label>
				</fieldset>
			</div>
		)
	}
}

export default Offices;
