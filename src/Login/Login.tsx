import './Login.scss'
import React, { useState } from 'react'

const Login: React.FC = () => {

	interface formValues {
		mail?: string
		password?: string
	}

	const [formValues, setFormValues] = useState<formValues>({})
	console.log(formValues)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormValues(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('Submited')
	}

	return (
		<section className="Login">
			<div className="Login-hero">
				<h1 className="Login-hero-title">SE CONNECTER</h1>
			</div>

			<form className='Login-form' onSubmit={handleSubmit}>
				<div className="Login-form-group">
					<label htmlFor='mail'>Adresse mail :</label>
					<input
						type='text'
						name='mail'
						id='mail'
						onChange={handleChange}
					/>
				</div>

				<div className="Login-form-group">
					<label htmlFor='password'>Mot de passe :</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={handleChange}
					/>
				</div>

				<button className='Login-form-button'>Valider</button>
			</form>
		</section>
	)
}
export default Login