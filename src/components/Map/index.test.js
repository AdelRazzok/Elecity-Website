import { render, screen } from '@testing-library/react'
import Map from './'

describe('Testing Map components', () => {
	beforeEach(async () => {
		render(<Map />)
	})

	it('should render without crashing', async () => {})

	it('should render title', async () => {
		expect(screen.getByText('RETROUVEZ NOUS PRES DE CHEZ VOUS')).toBeTruthy()
	})

	it('should render map', async () => {
		expect(screen.getByRole('img')).toBeTruthy()
	})
})