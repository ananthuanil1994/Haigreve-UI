import React, { Component } from 'react';
import PropType from 'prop-types';
import { TextInput } from '../TextInput';
import { SelectElement } from '../SelectElement';
import style from './style.module.scss';
import DatePickerElement from '../DatePicker';
import SVGIcons from '../SVGIcons';
import TextArea from '../TextArea';
export default class InputField extends Component {
	render() {
		return (
			<div className={style.formFeild}>
				<div
					className={`${style.formFeild__feilditem} ${this.props.className}`}>
					<label
						className={style.feildlabel}
						htmlFor={this.props.htmlForName}>
						<span className={style.labelBlock}>
							{this.props.title}
						</span>
						{this.props.isRequired ? (
							<span className={style.starIcon}>
								<SVGIcons type='SVG-asterisks' />
							</span>
						) : (
							''
						)}
					</label>
					<InputTypes {...this.props} />
				</div>
				{this.props.hint ? (
					<hint
						className={`${style.formHint} ${
							this.props.inputType === 'textArea'
								? style.textRight
								: ''
						}`}>
						{this.props.hint}
					</hint>
				) : null}
				<p className={style.error}>{this.props.error ? this.props.error : null}</p>
			</div>
		);
	}
}
InputField.Prototype = {
	className: PropType.string,
	type: PropType.string,
	placeholder: PropType.string,
	value: PropType.string,
};

function InputTypes(props) {
	const { inputType } = props;
	switch (inputType) {
		case 'selectElement':
			return (
				<SelectElement
					showArrow={props.showArrow}
					allowClear={props.allowClear}
					mode={props.mode}
					id={props.id}
					htmlForName={props.htmlForName}
					placeholder={props.placeholderLabel}
					optionList={props.optionList}
					value={props.value}
					defaultValue={props.defaultValue}
					onChange={props.onChange}
					tokenSeparators={props.tokenSeparators}
				/>
			);
		case 'date':
			return (
				<DatePickerElement {...props} handleChange={props.onChange} />
			);
		case 'textArea':
			return <TextArea {...props} handleChange={props.onChange} />;
		default:
			return (
				<TextInput
					max={props.max}
					maxLength={props.maxLength}
					onChange={props.onChange}
					disabled={props.disabled}
					required={props.required}
					placeholder={props.placeholderLabel}
					value={props.value}
					htmlType={props.htmlType}
					onPressEnter={props.onPressEnter}
					name={props.htmlForName}
					id={props.id}
					min={props.min}
					className={!props.isValid ? 'error-field' : ''}
				/>
			);
	}
}
