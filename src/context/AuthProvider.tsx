import { createContext, useState } from 'react'

interface Auth {
	accessToken: string
	auth: {}
	setAuth: React.Dispatch<React.SetStateAction<{}>>
}

const AuthContext = createContext<Auth|any>({})

export const AuthProvider = ({ children }: any) => {
	const [auth, setAuth] = useState({})

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthContext