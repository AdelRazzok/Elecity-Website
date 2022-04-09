import './Step.scss'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface Props {
	id: number
	svg: string
	title: string
	text: string
}

const Step: React.FC<Props> = ({ title, text, svg, id }) => {

	const refs = useRef<HTMLElement[] | []>([])

	useLayoutEffect(() => {
		gsap.fromTo(refs.current!, {
			opacity: 0,
			y: '30%',
		}, {
			opacity: 1,
			y: '0%',
			duration: .2,
			ease: 'power1.easeOut',
			delay: `0.${id}`,
			stagger: {
				amount: .2,
			},
			scrollTrigger: {
				trigger: refs.current!,
			},
			clearProps: 'scale',
		})
	}, [])

  return (
	<div className='Step'>
		<div className="Step-wrapper">
			<img src={svg} />
			<p
			ref={el => { refs.current = el ? [...refs.current, el] : [] }}
			>{title}</p>
		</div>
		<span
		ref={el => { refs.current = el ? [...refs.current, el] : [] }}
		>{text}</span>
	</div>
  )
}
export default Step