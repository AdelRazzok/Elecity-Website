import './Step.scss'

interface Props {
	svg: string
	title: string
	text: string
}

const Step: React.FC<Props> = ({ title, text, svg }) => {
  return (
	<div className='Step'>
		<div className="Step-wrapper">
			<img src={svg} />
			<p>{title}</p>
		</div>
		<span>{text}</span>
	</div>
  )
}
export default Step