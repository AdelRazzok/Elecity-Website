import * as yup from 'yup'

const empty: string = 'Champ requis'
const tooLong: string = 'Saisie trop longue'
const invalid: string = 'Format invalide'

export const registerSchema = yup.object().shape({
	firstName: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	lastName: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	mail: yup
		.string()
		.email(invalid)
		.required(empty),
	phone: yup
		.string()
		.length(10, invalid)
		.required(empty),
	birthDate: yup
		.string()
		.length(10, invalid)
		.required(empty),
	street: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	city: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	zipcode: yup
		.string()
		.length(5, invalid)
		.required(empty),
	password: yup
		.string()
		.min(5, 'Mot de passe trop court')
		.max(255, tooLong)
		.required(empty),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
		.required(empty),
})

export const loginSchema = yup.object().shape({
	mail: yup
		.string()
		.email(invalid)
		.required(empty),
	password: yup.string().required(empty),
})

export const profileSchema = yup.object().shape({
	firstName: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	lastName: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	mail: yup
		.string()
		.email(invalid)
		.required(empty),
	phone: yup
		.string()
		.length(10, invalid)
		.required(empty),
	birthDate: yup
		.string()
		.length(10, invalid)
		.required(empty),
	street: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	city: yup
		.string()
		.max(50, tooLong)
		.required(empty),
	zipcode: yup
		.string()
		.length(5, invalid)
		.required(empty),
})