import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { registerSchema } from '../schemas'
import './Register.scss'

interface FormValues {
	firstName: string
	lastName: string
	street: string
	zipcode: string
	city: string
	birthDate: string
	phone: string
	mail: string
	password: string
}
const apiUrl = 'http://localhost:5000/api/v1'

const Register: React.FC = () => {
	const [isEmailFree, setIsEmailFree] = useState<boolean>(true)
	const [success, setSuccess] = useState<boolean>(false)

	const initialValues: FormValues = {
		firstName: '',
		lastName: '',
		street: '',
		zipcode: '',
		city: '',
		birthDate: '',
		phone: '',
		mail: '',
		password: '',
	}

	const createUser = async (values: FormValues) => {
		const { firstName, lastName, street, zipcode, city, birthDate, phone, mail, password } = values
		const user = {
			first_name: firstName,
			last_name: lastName,
			address: {
				street: street,
				zipcode: zipcode,
				city: city,
			},
			birth_date: birthDate,
			phone: phone,
			mail: mail,
			password: password,
			role: 'user',
		}
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		}

		try {
			const res = await fetch(`${apiUrl}/users/register`, options)
			
			if(res?.status === 201) {
				setSuccess(true)
			} else {
				setIsEmailFree(false)
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<section className='Register'>
			<div className="Register-hero">
				<h1 className="Register-hero-title">S'ENREGISTRER</h1>
			</div>

			{success ? (
				<div>
					<h1>Merci pour votre inscription</h1>
					<p>
						<Link to='/login'>Connectez-vous</Link> dès maintenant.
					</p>
				</div>
			) : (
				<>
				<Formik
					initialValues={initialValues}
					validationSchema={registerSchema}
					onSubmit={(values: FormValues, { setSubmitting }) => {
						createUser(values)
						setSubmitting(false)
					}}
				>
					<Form className='Register-form'>
						<div className="Register-form-group">
							<Field
								type='text'
								name='firstName'
								placeholder='Prénom'
							/>
							<ErrorMessage name='firstName' component='span' className='error-msg' />

							<Field
								type='text'
								name='lastName'
								placeholder='Nom'
							/>
							<ErrorMessage name='lastName' component='span' className='error-msg' />
						</div>

						<div className="Register-form-group">
							<Field
								type='email'
								name='mail'
								placeholder='Adresse mail'
							/>
							<ErrorMessage name='mail' component='span' className='error-msg' />
							{!isEmailFree && <span className='error-msg'>E-mail invalide</span>}

							<Field
								type='text'
								name='phone'
								placeholder='Numéro de téléphone'
							/>
							<ErrorMessage name='phone' component='span' className='error-msg' />
						</div>

						<div className="Register-form-group">
							<Field
								type='date'
								name='birthDate'
								placeholder='Date de naissance'
								onBlur={(e) => console.log(e.target.value)}
							/>
							<ErrorMessage name='birthDate' component='span' className='error-msg' />
						</div>

						<div className="Register-form-group">
							<Field
								type='text'
								name='street'
								placeholder='Rue'
							/>
							<ErrorMessage name='street' component='span' className='error-msg' />

							<Field
								type='text'
								name='city'
								placeholder='Ville'
							/>
							<ErrorMessage name='city' component='span' className='error-msg' />

							<Field
								type='text'
								name='zipcode'
								placeholder='Code postal'
							/>
							<ErrorMessage name='zipcode' component='span' className='error-msg' />
						</div>

						<div className="Register-form-group">
							<Field
								type='password'
								name='password'
								placeholder='Mot de passe'
							/>
							<ErrorMessage name='password' component='span' className='error-msg' />

							<Field
								type='password'
								name='passwordConfirm'
								placeholder='Confirmation mot de passe'
							/>
							<ErrorMessage name='passwordConfirm' component='span' className='error-msg' />
						</div>

						<div className="Register-form-group">
							<button type='submit'>Valider</button>
						</div>
					</Form>
				</Formik>
				<Link to='/login' className='Register-form'>Déjà inscrit(e) ?</Link>	
				</>
			)}
		</section>
	)
}
export default Register