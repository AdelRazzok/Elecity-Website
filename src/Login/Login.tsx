import React, { useState, useEffect } from 'react'
import './Login.scss'

const Login: React.FC = () => {

	interface formValues {
		mail?: string
		password?: string
	}

	const [formValues, setFormValues] = useState<formValues>({})
	const [formErrors, setFormErrors] = useState<formValues>({})
	const [isSubmit, setIsSubmit] = useState<boolean>(false)

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
		setFormErrors(checkFormValues(formValues))
		setIsSubmit(true)
	}
	const checkFormValues = (values: formValues) => {
		const errors: formValues = {}

		if (!values.mail) {
			errors.mail = 'Champ requis'
		}
		if (!values.password) {
			errors.password = 'Champ requis'
		}
		return errors
	}

	const logUser = async () => {
		const user = {
			mail: formValues.mail,
			password: formValues.password
		}
		const settings = {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			}
		}
		const res = await fetch('http://localhost:5000/api/v1/users/login', settings)
		const data = await res.json()
		if (data.error) {
			console.log(`Erreur: ${data.error}`)
			setFormErrors(prev => {
				return {
					...prev,
					password: data.error
				}
			})
		} else {
			sessionStorage.setItem('userToken', data.token)
		}
	}
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			logUser()
		}
	}, [formErrors])

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
					<p className='error-msg'>{formErrors.mail}</p>
				</div>

				<div className="Login-form-group">
					<label htmlFor='password'>Mot de passe :</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={handleChange}
					/>
					<p className='error-msg'>{formErrors.password}</p>
				</div>

				<button className='Login-form-button'>Valider</button>
			</form>
		</section>
	)
}
export default Login