import './Button.scss'

const Button = (props) => {
	return <a href={props.link} className='Button'>{props.text}</a>
} 
export default Button