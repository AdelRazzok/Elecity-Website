import './Button.scss'

interface Props {
	link: string
	text: string
} 

const Button: React.FC<Props> = ({ link, text }) => {
	return <a href={link} className='Button'>{text}</a>
} 
export default Button