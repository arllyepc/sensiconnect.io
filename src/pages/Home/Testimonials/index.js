import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { useEffect } from 'react';

/* IMPORTAÇÃO DE ÍCONES E IMAGENS */

import iconElQuoteRight from '../../../svg/el_quote-right.svg';
import imgTestimonial from '../../../img/photo-user.png';

const Testimonial = () => {
	useEffect(() => {
		const swiper = new Swiper('.swiper-container', {
			slidesPerView: 4,
			spaceBetween: 32,
			grabCursor: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				760: {
					slidesPerView: 2,
					spaceBetween: 32,
				},
				1020: {
					slidesPerView: 4,
					spaceBetween: 32,
				},
			},
			observer: true,
			observerParents: true,
		});
	}, []);

	let info = {
		name: 'José da Silva Pinheiro',
		photo: imgTestimonial,
		position: 'Diretor, Hospital Nome Exemplo',
		testimonial:
			'A Sensi Connect me surpreendeu com o profissionalismo na entrega do meu sistema de automoção de plantões de médicos.',
	};
	return (
		<>
			<div className='card-testimonial swiper-slide'>
				<img className='icon' src={iconElQuoteRight} alt='' />
				<div className='user-info'>
					<div className='user-photo'>
						<img src={info.photo} alt='' />
					</div>
					<h5>{info.name}</h5>
					<p className='sb-3'>{info.position}</p>
				</div>
				<p className='sb-1'>{info.testimonial}</p>
			</div>
		</>
	);
};

const Testimonials = () => {
	return (
		<>
			<section
				className='s-testimonials container container-swiper'
				data-aos='fade-up'
				data-aos-delay='200'>
				<div className='grid-12 swiper-container'>
					<div className='swiper-wrapper'>
						<Testimonial />
						<Testimonial />
						<Testimonial />
						<Testimonial />
						<Testimonial />
					</div>
					<div className='swiper-pagination'></div>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
