import { useState } from 'react'
import { Fragment } from 'react'
import { Section } from './Section/Section'
import { FeedBackBtn } from './FeedBackBtn/FeedBackBtn'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'

const App = () => {
		const [ good, setGood ] = useState(0);
		const [ neutral, setNeutral ] = useState(0);
		const [ bad, setBad ] = useState(0);

		const handlerClick = (event) => {
			switch(event.target.name) {
				case 'good':
					setGood(ps => ps + 1);
					break;
				
				case 'neutral':
					setNeutral(ps => ps + 1);
					break;
				
				case 'bad':
					setBad(ps => ps + 1);
					break;
					
				default:
					return;
			}
		};

		const countTotalFeedback = () => {
    	return good + neutral + bad;
  	};

		const countPositiveFeedbackPercentage = () => {
    	return Math.ceil((good * 100) / countTotalFeedback());
  	};

		let sum = countTotalFeedback();
		let count = countPositiveFeedbackPercentage();
		let allKey = [ 'good', 'neutral', 'bad' ];

    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedBackBtn 
						handlerClick={handlerClick} 
						allkey={allKey}
					/>
        </Section>
        <Section title="Statistics">
					{sum === 0 ? 
					(<Notification message="There is no feedback" />) : 
					(<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            sum={sum}
            count={count}
          />)
					} 
        </Section>
      </Fragment>
    );
}
export { App };
// export class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handlerClick = ({ target: { name } }) => {
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return Math.ceil((good * 100) / (this.countTotalFeedback()));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
// 		let sum = this.countTotalFeedback();
// 		let count =  this.countPositiveFeedbackPercentage();
// 		const keyState = Object.keys(this.state);
//     return (
//       <Fragment>
//         <Section title="Please leave feedback">
//           <FeedBackBtn 
// 						handlerClick={this.handlerClick} 
// 						keyState={keyState}
// 					/>
//         </Section>
//         <Section title="Statistics">
// 					{sum === 0 ? 
// 					(<Notification message="There is no feedback" />) : 
// 					(<Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             sum={sum}
//             count={count}
//           />)
// 					} 
//         </Section>
//       </Fragment>
//     );
//   }
// }
