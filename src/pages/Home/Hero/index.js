import bannerImg from '../../../img/banner.png';
import arrowForwardIcon from '../../../svg/arrow_forward_24px.svg';
import sensiBrandElementCircle from '../../../svg/sensi-element-1.svg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
	return (
		<>
			<div className='bg-home' data-aos='fade-down' data-aos-delay='200'>
				<img
					src={bannerImg}
					alt='Imagem de garota sorrindo e segurando um smartphone'
				/>
			</div>

			<section className='hero'>
				<div className='row container'>
					<div className='grid-6' data-aos='fade-up' data-aos-delay='400'>
						<h1>
							Ideias que simplificam <br />
							<span className='typing'>
								<Typewriter
									options={{
										strings: [
											'seu dia a dia',
											'seu trabalho',
											'sua vida',
											'o mundo',
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</span>
						</h1>
						<h4>
							Nós da Sensi desenvolvemos soluções tecnológicas criativas com
							foco na sua necessidade
						</h4>
						<button className='btn-fill-xl'>
							Entre em contato
							<div className='icon'>
								<img src={arrowForwardIcon} alt='' />
							</div>
						</button>
					</div>
				</div>
				<div
					className='next-session'
					data-aos='fade-up'
					data-aos-delay='600'
					data-aos-offset='0'>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='40px'
							viewBox='0 0 24 24'
							width='40px'
							fill='#Fcfcfc'>
							<path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
							<path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
						</svg>
					</span>
				</div>
			</section>

			<div className='row hero-img' data-aos='fade-up' data-aos-delay='800'>
				<img src={sensiBrandElementCircle} alt='' />
			</div>
		</>
	);
};

export default Hero;
