import './Steps.scss'
import stepsData from './stepsData'
import Step from '../Step/Step'

const Introduction: React.FC = () => {

	const stepsList = stepsData.map(step => <Step key={step.id} id={step.id} text={step.text} />)

	return (
		<section className="Steps">
			<h1 className="Steps-title">COMMENT ÇA MARCHE ?</h1>
			<div className="Steps-container">
				{stepsList}
			</div>
		</section>
	)
}
export default Introduction