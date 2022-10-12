import { render, screen } from '@testing-library/react'
import Footer from './'

describe('Testing Footer components', () => {
	beforeEach(async () => {
		render(<Footer />)
	})

	it('should render without crashing', async () => {})

	it('should render contact section', async () => {
		expect(screen.getByText('CONTACT')).toBeTruthy()
	})

	it('should render user account section', async () => {
		expect(screen.getByText('MON COMPTE')).toBeTruthy()
	})
})