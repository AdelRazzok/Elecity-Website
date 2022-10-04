import { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginSchema } from '../schemas'
import AuthContext from '../context/AuthProvider'
import './Login.scss'

interface FormValues {
	mail: string
	password: string
}
const apiUrl = 'http://localhost:5000/api/v1'

const Login: React.FC = () => {
	const { auth, setAuth } = useContext(AuthContext)

	const initialValues: FormValues = {
		mail: '',
		password: '',
	}

	const login = async (values: FormValues) => {
		const { mail, password } = values
		const logs = {
			mail,
			password,
		}
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(logs),
		}

		try {
			const res = await fetch(`${apiUrl}/users/login`, options)
			const data = await res.json()

			if(res?.status === 200) {
				setAuth(data)
			}
		} catch (err) {
			console.log(err)
		}
	}

	if(auth.accessToken) {
		return <Navigate to='/profile' replace />
	}

	return (
		<section className='Login'>
			<div className="Login-hero">
				<h1 className="Login-hero-title">SE CONNECTER</h1>
			</div>
	
			<Formik
				initialValues={initialValues}
				validationSchema={loginSchema}
				onSubmit={(values: FormValues, { setSubmitting }) => {
					login(values)
				}}
			>
				<Form className='Login-form'>
					<div className="Login-form-group">
						<Field
							type='email'
							name='mail'
							placeholder='Adresse mail'
						/>
						<ErrorMessage name='mail' component='span' className='error-msg' />
					</div>

					<div className="Login-form-group">
						<Field
							type='password'
							name='password'
							placeholder='Mot de passe'
						/>
						<ErrorMessage name='password' component='span' className='error-msg' />
					</div>

					<button type="submit">Valider</button>
				</Form>
			</Formik>
			<Link to='/register' className='Login-form'>Pas encore inscrit(e) ?</Link>
		</section>
	)
}
export default Login