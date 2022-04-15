import './Register.scss'
import { useState } from 'react'

const Register: React.FC = () => {

	interface State {
		username: String
		password: String
	}
	const [formData, setFormData] = useState<State>({
		username: "",
		password: ""
	})

	const handleChange = (event: any) => {
		const { name, value } = event.target
		setFormData(prev => {
			return {
				...prev,
				[name]: value
			}
		})
		console.log(formData)
	}

	return (
		<div className='Register'>
			<div className="Register-form">
				<label htmlFor="username">Nom d'utilisateur :</label>
				<input
					type="text"
					className='Register-form-input'
					id='username'
					name='username'
					onChange={handleChange}
				/>
				<label htmlFor="password">Mot de passe :</label>
				<input
					type="password"
					className='Register-form-input'
					id='password'
					name='password'
					onChange={handleChange}
				/>
				<button
					type='button'
					className='Register-form-button'
				>
					Valider
				</button>
			</div>
		</div>
	)
}
export default Register