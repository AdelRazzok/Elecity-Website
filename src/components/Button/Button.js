import './Button.scss'

const Button = (props) => <a href={props.link} className='Button'>{props.text}</a>
export default Button