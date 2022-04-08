import './Step.scss'

interface Props {
	id: number
	text: string
}

const Step: React.FC<Props> = ({ id, text }) => {
  return (
	<div className='Step'>
		<div className="Step-wrapper">
			<p>SVG</p>
			<p>{text}</p>
		</div>
		<span>{id}.</span>
	</div>
  )
}
export default Step