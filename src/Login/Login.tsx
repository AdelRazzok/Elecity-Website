import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../App'
import Profile from '../Profile/Profile'
import './Login.scss'

interface formValues {
	mail?: string
	password?: string
}

const Login: React.FC = () => {
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

	const { user, setUser } = useContext(UserContext)

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
			setFormErrors(prev => {
				return {
					...prev,
					password: data.error
				}
			})
		} else {
			const user = {
				firstname: data.firstname,
				lastname: data.lastname,
				address: {
					street: data.address.street,
					zipcode: data.address.zipcode,
					city: data.address.city,
				},
				birthDate: data.birthDate,
				phone: data.phone,
				mail: data.mail,
				token: data.token,
			}

			sessionStorage.setItem('user', JSON.stringify(user))

			setUser(() => {
				return user
			})
		}
	}
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			logUser()
		}
	}, [formErrors])

	return Object.keys(user).length === 0 ? (
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

				<Link to='/register'>Pas encore inscrit(e) ?</Link>

				<button className='Login-form-button'>Valider</button>
			</form>
		</section>
	) : (
		<Navigate to='/profile' />
	)

}
export default Login