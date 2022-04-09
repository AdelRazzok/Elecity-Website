import './Steps.scss'
import stepsData from './stepsData'
import Step from '../Step/Step'

const Introduction: React.FC = () => {

	const stepsList = stepsData.map(step => {
		return (
			<Step
				key={step.id}
				id={step.id}
				svg={step.svg}
				title={step.title}
				text={step.text}
			/>
		) 
	})

	return (
		<section className="Steps">
			<h1 className="Steps-title">...EN SEULEMENT 3 ÉTAPES</h1>
			<div className="Steps-container">
				{stepsList}
			</div>
		</section>
	)
}
export default Introduction