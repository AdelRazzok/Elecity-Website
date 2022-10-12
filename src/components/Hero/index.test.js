import { render, screen } from '@testing-library/react'
import Hero from './'

describe('Testing Hero component', () => {
	beforeEach(async () => {
		render(<Hero />)
	})

	it('should render without crashing', async () => {})

	it('should render title', async () => {
		expect(screen.getByText('LOUEZ PROPRE ET LOCAL')).toBeTruthy()
	})

	it('should render description', async () => {
		expect(screen.getByText("Profitez d’une offre de location de véhicule 100% électrique à la minute et parcourez librement votre ville")).toBeTruthy()
	})
})