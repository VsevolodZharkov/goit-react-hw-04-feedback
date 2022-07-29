import PropTypes from 'prop-types'

const FeedBackBtn = ({handlerClick, keyState}) => {
		return (
				<div className="">
					{keyState.map((item) => {
						return 	<button className="" name={item} type='button' onClick={handlerClick}>
											{item}
										</button>
					})}
				</div>
		)
	}
	FeedBackBtn.propTypes = {
		handlerClick: PropTypes.func.isRequired,
		keyState: PropTypes.array.isRequired
	};
export { FeedBackBtn };







