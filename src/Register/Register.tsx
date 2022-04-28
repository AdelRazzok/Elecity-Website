import './Register.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register: React.FC = () => {

	interface userSchema {
		firstName?: string
		lastName?: string
		street?: string
		zipcode?: string
		city?: string
		birthDate?: string
		phone?: string
		mail?: string
		password?: string
	}

	const [formValues, setFormValues] = useState<userSchema>({
		firstName: "",
		lastName: "",
		street: "",
		zipcode: "",
		city: "",
		birthDate: "",
		phone: "",
		mail: "",
		password: "",
	})
	const [formErrors, setFormErrors] = useState<userSchema>({})
	const [isSubmit, setIsSubmit] = useState(false)

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

	const checkFormValues = (values: userSchema) => {
		const errors: userSchema = {}
		const emptyErrMsg = 'Champ requis'
		const formatErrMsg = 'Format invalide'
		const nameRgx = /^[a-z éèçâêîôûäëïöü,.'-]{2,20}$/i
		const streetRgx = /^[0-9]{1,3}[a-z éèçâêîôûäëïöü,.'-]{1,50}$/i
		const zipcodeRgx = /^[0-9]{5}$/
		const cityRgx = /^[a-z éèçâêîôûäëïöü,.'-]{2,50}$/i
		const birthDateRgx = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
		const phoneRgx = /^[0-9]{10}$/
		const mailRgx = /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,5}$/i

		if (!values.firstName) {
			errors.firstName = emptyErrMsg
		} else if (!nameRgx.test(values.firstName)) {
			errors.firstName = formatErrMsg
		}
		if (!values.lastName) {
			errors.lastName = emptyErrMsg
		} else if (!nameRgx.test(values.lastName)) {
			errors.lastName = formatErrMsg
		}
		if (!values.street) {
			errors.street = emptyErrMsg
		} else if (!streetRgx.test(values.street)) {
			errors.street = formatErrMsg
		}
		if (!values.zipcode) {
			errors.zipcode = emptyErrMsg
		} else if (!zipcodeRgx.test(values.zipcode)) {
			errors.zipcode = formatErrMsg
		}
		if (!values.city) {
			errors.city = emptyErrMsg
		} else if (!cityRgx.test(values.city)) {
			errors.city = formatErrMsg
		}
		if (!values.birthDate) {
			errors.birthDate = emptyErrMsg
		} else if (!birthDateRgx.test(values.birthDate)) {
			errors.birthDate = formatErrMsg
		}
		if (!values.phone) {
			errors.phone = emptyErrMsg
		} else if (!phoneRgx.test(values.phone)) {
			errors.phone = formatErrMsg
		}
		if (!values.mail) {
			errors.mail = emptyErrMsg
		} else if (!mailRgx.test(values.mail)) {
			errors.mail = formatErrMsg
		}
		if (!values.password) {
			errors.password = emptyErrMsg
		}
		return errors
	}
	
	if (Object.keys(formErrors).length === 0 && isSubmit) {
		return (
			<div>
				<p>Inscription réussie !</p>
				<Link to='/'>Retournez à l'accueil</Link>
			</div>
		)
	} else {
		return (	
			<section className='Register'>
				<div className="Register-hero">
						<h1 className="Location-hero-title">S'ENREGISTRER</h1>
				</div>
	
				<form className="Register-form" onSubmit={handleSubmit}>
					<div className="Register-form-group">
						<label htmlFor="firstName">Prénom :</label>
						<input
							type="text"
							className='Register-form-input'
							id='firstName'
							name='firstName'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.firstName}</p>
					</div>
	
					<div className="Register-form-group">
						<label htmlFor="lastName">Nom :</label>
						<input
							type="text"
							className='Register-form-input'
							id='lastName'
							name='lastName'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.lastName}</p>
					</div>
	
					<div className="Register-form-group">
						<label htmlFor="street">Adresse :</label>
						<input
							type="text"
							className='Register-form-input'
							id='street'
							name='street'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.street}</p>
	
						<label htmlFor="zipcode">Code postal :</label>
						<input
							type="text"
							className='Register-form-input'
							id='zipcode'
							name='zipcode'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.zipcode}</p>
	
						<label htmlFor="city">Ville :</label>
						<input
							type="text"
							className='Register-form-input'
							id='city'
							name='city'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.city}</p>
					</div>
	
					<div className="Register-form-group">
						<label htmlFor="birthDate">Date de naissance :</label>
						<input
							type="text"
							className='Register-form-input'
							id='birthDate'
							name='birthDate'
							placeholder='JJ/MM/AAAA'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.birthDate}</p>
					</div>
	
					<div className="Register-form-group">
						<label htmlFor="phone">Téléphone :</label>
						<input
							type="text"
							className='Register-form-input'
							id='phone'
							name='phone'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.phone}</p>
					</div>
	
					<div className="Register-form-group">
						<label htmlFor="mail">E-mail :</label>
						<input
							type="text"
							className='Register-form-input'
							id='mail'
							name='mail'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.mail}</p>
					</div>
	
					<div className="Register-form-group">
						<label htmlFor="password">Mot de passe :</label>
						<input
							type="password"
							className='Register-form-input'
							id='password'
							name='password'
							onChange={handleChange}
						/>
						<p className='error-msg'>{formErrors.password}</p>
					</div>
	
					<button className='Register-form-button'>Valider</button>
				</form>
			</section>
		)
	}
}
export default Register