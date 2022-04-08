import './Step.scss'

interface Props {
	title: string
	text: string
	svg: string
}

const Step: React.FC<Props> = ({ title, text, svg }) => {
  return (
	<div className='Step'>
		<div className="Step-wrapper">
			<img src={svg} alt="Logo étape" />
			<p>{title}</p>
		</div>
		<span>{text}</span>
	</div>
  )
}
export default Step