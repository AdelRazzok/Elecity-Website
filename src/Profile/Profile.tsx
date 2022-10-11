import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { profileSchema } from '../schemas'
import AuthContext from '../context/AuthProvider'
import './Profile.scss'

interface User {
	first_name: string
	last_name: string
	street: string
	city: string
	zipcode: string
	phone: string
	mail: string
}

const Profile: React.FC = () => {
	const { auth, setAuth } = useContext(AuthContext)
	const [user, setUser] = useState<User>({
		first_name: '',
		last_name: '',
		street: '',
		city: '',
		zipcode: '',
		phone: '',
		mail: '',
	})

	useEffect(() => {
		const getUserInfos = async () => {
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${auth.accessToken}`,
				},
			}
			const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/infos`, options)
			const data = await res.json()

			const { first_name, last_name, mail, phone } = data
			const { street, zipcode, city } = data.address
			setUser({
				first_name,
				last_name,
				mail,
				phone,
				street,
				zipcode,
				city
			})
		}
		getUserInfos()
	}, [])

	const updateUser = (values: User) => {
		console.log(values)
	}
	
	const logout = () => {
		setAuth({})
		return <Navigate to='/' replace />
	}

	return  (
		<section className="Profile">
			<div className="Profile-hero">
				<h1 className="Profile-hero-title">MON PROFIL</h1>
			</div>

			<Formik
				initialValues={user}
				validationSchema={profileSchema}
				onSubmit={(values: User, { setSubmitting }) => {
					updateUser(values)
					setSubmitting(false)
				}}
				enableReinitialize
			>
				<Form className='Profile-form'>
					<div className='Profile-form-group'>
						<Field
							type='text'
							name='first_name'
							placeholder='Prénom'
						/>
						<ErrorMessage
							name='first_name'
							component='span'
							className='error-msg'
						/>
					</div>

					<div className='Profile-form-group'>
						<Field
							type='text'
							name='last_name'
							placeholder='Nom'
						/>
						<ErrorMessage
							name='last_name'
							component='span'
							className='error-msg'
						/>
					</div>

					<div className='Profile-form-group'>
						<Field
							type='email'
							name='mail'
							placeholder='Adresse mail'
						/>
						<ErrorMessage
							name='mail'
							component='span'
							className='error-msg'
						/>
					</div>

					<div className='Profile-form-group'>
						<Field
							type='text'
							name='phone'
							placeholder='Numéro de téléphone'
						/>
						<ErrorMessage
							name='phone'
							component='span'
							className='error-msg'
						/>
					</div>

					<div className='Profile-form-group'>
						<Field
							type='text'
							name='street'
							placeholder='Rue'
						/>
						<ErrorMessage
							name='street'
							component='span'
							className='error-msg'
						/>
					</div>

					<div className='Profile-form-group'>
						<Field
							type='text'
							name='city'
							placeholder='Ville'
						/>
						<ErrorMessage
							name='city'
							component='span'
							className='error-msg'
						/>
					</div>

					<div className='Profile-form-group'>
						<Field
							type='text'
							name='zipcode'
							placeholder='Code postal'
						/>
						<ErrorMessage
							name='zipcode'
							component='span'
							className='error-msg'
						/>
					</div>

					<div className="Profile-form-controls">
						<button type="submit">Modifier mes informations</button>
						<button onClick={logout}>Déconnnexion</button>
					</div>
				</Form>
			</Formik>
		</section>
	)
}
export default Profile