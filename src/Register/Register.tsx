import './Register.scss'
import React, { useState, useEffect } from 'react'

const Register: React.FC = () => {

	interface userSchema {
		firstName?: String
		lastName?: String
		street?: String
		zipcode?: String
		city?: String
		birthDate?: String
		phone?: String
		mail?: String
		password?: String
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

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues)
		}
	}, [formErrors])

	const checkFormValues = (values: userSchema) => {
		const errors: any = {}
		const emptyErrMsg = 'Champ requis'

		if (!values.firstName) {
			errors.firstName = emptyErrMsg
		} 
		if (!values.lastName) {
			errors.lastName = emptyErrMsg
		}
		if (!values.street) {
			errors.street = emptyErrMsg
		}
		if (!values.zipcode) {
			errors.zipcode = emptyErrMsg
		}
		if (!values.city) {
			errors.city = emptyErrMsg
		}
		if (!values.birthDate) {
			errors.birthDate = emptyErrMsg
		}
		if (!values.phone) {
			errors.phone = emptyErrMsg
		}
		if (!values.mail) {
			errors.mail = emptyErrMsg
		}
		if (!values.password) {
			errors.password = emptyErrMsg
		}

		return errors
	}
	
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
export default Register