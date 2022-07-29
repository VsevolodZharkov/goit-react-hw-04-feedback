import { Fragment } from "react";
import PropTypes from 'prop-types'

const Section = ({title, children }) => {
	return (
		<Fragment>
			<h2>{title}</h2>
			{children}
		</Fragment>
	)
}
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}
export { Section };