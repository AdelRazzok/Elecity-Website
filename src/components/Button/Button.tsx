import './Button.scss'

const Button = (props: { link: string, text: string}) => {
	return <a href={props.link} className='Button'>{props.text}</a>
} 
export default Button