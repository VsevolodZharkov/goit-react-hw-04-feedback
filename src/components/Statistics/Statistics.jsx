import PropTypes from 'prop-types'
const Statistics = ({ good, neutral, bad, sum, count }) => {
	return (
		<div>
			<ul>
				<li className="">
					<p>Good: {good}</p>
				</li>
				<li className="">
					<p>Neutral: {neutral}</p>
				</li>
				<li className="">
					<p>Bad: {bad}</p>
				</li>
				<li className="">
					<p>Total: {sum}</p>
				</li>
				<li className="">
					<p>Positive feedback: {count} %</p>
				</li>
			</ul>
		</div>
	)
}
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	sum: PropTypes.number.isRequired,
	count:PropTypes.number.isRequired
};
export { Statistics };