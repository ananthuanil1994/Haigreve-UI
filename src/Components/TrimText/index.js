import React from 'react';
import PropTypes from 'prop-types';

const formatTitle = (title) => {
	return title.split('<em>').join('').split('</em>').join('');
};
function TrimText(props) {
	let trimmed = '';
	if (!props) return trimmed;
	let title = props.title;
	if (props.title) {
		title = typeof title === 'string' ? title : '' + title;
		trimmed = title.substring(0, props.limit);
		if (trimmed.length < title.length) {
			trimmed += '...';
		}
		const className = props.cssClass ? props.cssClass : '';
		const elementProps = { className };
		if (props.id) elementProps.id = props.id;
		if (props.tooltip) {
			elementProps['data-toggle'] = 'tooltip';
			elementProps['title'] = formatTitle(props.title);
		}
		if (props.html) {
			elementProps['dangerouslySetInnerHTML'] = { __html: trimmed };
			return React.createElement(props.tag, elementProps);
		} else {
			return React.createElement(props.tag, elementProps, trimmed);
		}
	} else return React.createElement(props.tag, '', '');
}
TrimText.propTypes = {
	title: PropTypes.string.isRequired,
	limit: PropTypes.number.isRequired,
	tag: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.oneOf([React.Fragment]),
	]).isRequired,
	tooltip: PropTypes.bool,
	cssClass: PropTypes.string,
	html: PropTypes.bool,
};

export default TrimText;
