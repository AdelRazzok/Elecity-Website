import './Step.scss'

interface Props {
	id: number
	text: string
}

const Step: React.FC<Props> = ({ id, text }) => {
  return (
	<div className='Step'>
		<div className="Step-wrapper">
			<p>{text}</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, porro.</p>
		</div>
		<span>{id}.</span>
	</div>
  )
}
export default Step