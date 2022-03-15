/* 	IMPORTAÇÃO DE COMPONENTES DO SITE */

import Hero from '../Home/Hero';
import Project from '../Home/Project';
import Testimonials from '../Home/Testimonials';

/* IMAGENS DO CORPO DO SITE*/

import ImgAboutUs from '../../img/photo-about-us.png';
import retangleElement from '../../svg/retangle-element.svg';
import imgSystem from '../../img/system.png';
import imgSites from '../../img/sites.png';
import imgApps from '../../img/apps.png';
import imgConsult from '../../img/consult.png';

/* IMAGENS DE PROJETOS */

import imgProjectPlantaoExtra from '../../img/plantao-extra.png';
import imgProjectCardapioDeNegocios from '../../img/cardapio-negocios.png';
import imgProject44Express from '../../img/44express.png';
import imgProjectMeuSocialPost from '../../img/meu-socialpost.png';
import imgProjectTemPoderQuemAge from '../../img/tem-poder-quem-age.png';
import imgProjectOfertaPlay from '../../img/oferta-play.png';

/* IMAGENS DE PARCEIROS */

import imgPartnerPlantaoExtra from '../../svg/plantao-extra-logo.svg';
import imgPartnerFebracis from '../../svg/febracis-logo.svg';
import imgPartner44Express from '../../svg/44express.svg';
import imgPartnerCardapioDeNegocios from '../../svg/cardapio-de-negocios-logo.svg';
import imgPartnerBuritiShopping from '../../svg/buriti-shopping-logo.svg';
import imgPartnerSolidops from '../../svg/solidops-logo.svg';

/* ÍCONES CTA */

import iconCtaCall from '../../svg/call_dark.svg';
import iconCtaEmail from '../../svg/email_dark.svg';
import iconCtaWhatsApp from '../../svg/whatsapp_dark.svg';

/* SCROLL NAVIGATION */

import { Element } from 'react-scroll';

const Main = () => {
	return (
		<>
			<Hero />

			{/* <!--============ SECTION ABOUT US ============--> */}
			<Element name='about-us'>
				<section
					id='about-us'
					className='s-about-us'
					data-aos='fade-up'
					data-aos-delay='0'>
					<div className='row container'>
						<div className='grid-6 about-us-imgs'>
							<img
								className='img-1'
								data-aos='fade-up'
								data-aos-delay='200'
								src={ImgAboutUs}
								alt='Homem olhando concentrado para a tela do computador'
							/>
							<img className='img-2' src={retangleElement} alt='' />
						</div>

						<div className='grid-6 about-us-text'>
							<h3>Sobre nós</h3>
							<h3>Transformando ideias em soluções</h3>
							<p>
								Somos uma empresa de tecnologia em constante movimento. <br />
								Nossa ideia é melhorar e simplificar a vida de pessoas e
								empresas.
							</p>

							<p>
								Acreditamos em soluções tecnológicas inovadoras que cabem na
								palma da mão e que transformam o mundo. Somos a Sensi Connect.
							</p>
							<a
								href='https://api.whatsapp.com/send?phone=55999999999999'
								target='_blank'
								rel='noreferrer'>
								Quero realizar minha ideia {'>'}
							</a>
						</div>
					</div>
				</section>
			</Element>
			{/* <!--============ SECTION WHAT WE DO ============--> */}
			<section
				id='what-we-do'
				className='s-what-we-do'
				data-aos='fade-up'
				data-aos-delay='0'>
				<div className='container row'>
					<h3 className='grid-12'>O que fazemos?</h3>
					<div className='grid-4 what-we-do-text'>
						<h2>Soluções</h2>
						<p>
							Nós podemos oferecer soluções completas e exclusivas para você e
							sua empresa.
						</p>

						<p>
							Temos certeza que poderemos atender as necessidades técnicas do
							seu projeto.
						</p>
						<a
							href='https://api.whatsapp.com/send?phone=55999999999999'
							target='_blank'
							rel='noreferrer'>
							Quero conhecer o portólio Sensi {'>'}
						</a>
					</div>
					<div className='grid-8' data-aos='fade-up' data-aos-delay='200'>
						<ul className='row what-we-do-list-desktop'>
							<li className='grid-3'>
								<div className='we-do-img'>
									<img src={imgSystem} alt='Imagem de computador' />
								</div>
								<h4>Sistemas</h4>
							</li>
							<li className='grid-3'>
								<div className='we-do-img'>
									<img src={imgSites} alt='Imagem de projeto de site' />
								</div>
								<h4>Sites</h4>
							</li>
							<li className='grid-3'>
								<div className='we-do-img'>
									<img
										src={imgApps}
										alt='Imagem de pessoa segurando um smartphone'
									/>
								</div>
								<h4>Aplicativos</h4>
							</li>
							<li className='grid-3'>
								<div className='we-do-img'>
									<img
										src={imgConsult}
										alt='Imagem de pessoas trabalhando com notebooks'
									/>
								</div>
								<h4>Consultoria</h4>
							</li>
						</ul>

						<ul className='row what-we-do-list-mobile'>
							<li className='grid-nobreak-6'>
								<div className='we-do-img'>
									<img src={imgSystem} alt='Imagem de computador' />
								</div>
								<h4>Sistemas</h4>
							</li>
							<li className='grid-nobreak-6'>
								<div className='we-do-img'>
									<img src={imgSites} alt='Imagem de projeto de site' />
								</div>
								<h4>Sites</h4>
							</li>
							<li className='grid-nobreak-6'>
								<div className='we-do-img'>
									<img
										src={imgApps}
										alt='Imagem de pessoa segurando um smartphone'
									/>
								</div>
								<h4>Aplicativos</h4>
							</li>
							<li className='grid-nobreak-6'>
								<div className='we-do-img'>
									<img
										src={imgConsult}
										alt='Imagem de pessoas trabalhando com notebooks'
									/>
								</div>
								<h4>Consultoria</h4>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* <!--============ HOW WE DO ============--> */}

			<section
				id='how-we-do'
				className='s-how-we-do container'
				data-aos='fade-up'
				data-aos-delay='0'>
				<div className='grid-12'>
					<h2>Como fazemos?</h2>
					<div className='card-list'>
						<div
							className='card-how-we-do'
							data-aos='fade-up'
							data-aos-delay='100'>
							<span className='material-icons-outlined'>
								{' '}
								<svg
									width='60'
									height='68'
									viewBox='0 0 60 68'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M53.3333 7.33342H50V0.666748H43.3333V7.33342H16.6667V0.666748H10V7.33342H6.66667C3 7.33342 0 10.3334 0 14.0001V60.6668C0 64.3334 3 67.3334 6.66667 67.3334H53.3333C57 67.3334 60 64.3334 60 60.6668V14.0001C60 10.3334 57 7.33342 53.3333 7.33342ZM53.3333 60.6667H6.66667V27.3334H53.3333V60.6667ZM6.66667 14.0001V20.6667H53.3333V14.0001H6.66667ZM13.3333 34.0001H46.6667V40.6667H13.3333V34.0001ZM36.6667 47.3334H13.3333V54.0001H36.6667V47.3334Z'
										fill='#2A90CB'
									/>
								</svg>
							</span>

							<h4>Planejamento</h4>
							<p>
								Compreensão da regra de negócio, necessidade e objetivo do
								projeto, planejamento de cronogramas com elaboração de prazos,
								levantamento de requisitos e especificações técnicas.
							</p>
						</div>
						<div
							className='card-how-we-do'
							data-aos='fade-up'
							data-aos-delay='200'>
							<span className='material-icons-outlined'>
								<svg
									width='64'
									height='68'
									viewBox='0 0 64 68'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M11.9997 30.6667L30.333 0.666748L48.6663 30.6667H11.9997ZM36.7663 24.0001L30.333 13.4667L23.8663 24.0001H36.7663ZM48.6663 37.3334C40.3663 37.3334 33.6663 44.0334 33.6663 52.3334C33.6663 60.6334 40.3663 67.3334 48.6663 67.3334C56.9663 67.3334 63.6663 60.6334 63.6663 52.3334C63.6663 44.0334 56.9663 37.3334 48.6663 37.3334ZM40.333 52.3334C40.333 56.9334 44.0663 60.6667 48.6663 60.6667C53.2663 60.6667 56.9997 56.9334 56.9997 52.3334C56.9997 47.7334 53.2663 44.0001 48.6663 44.0001C44.0663 44.0001 40.333 47.7334 40.333 52.3334ZM0.333008 65.6667H26.9997V39.0001H0.333008V65.6667ZM20.333 45.6667H6.99967V59.0001H20.333V45.6667Z'
										fill='#2A90CB'
									/>
								</svg>
							</span>

							<h4>Conceituação</h4>
							<p>
								Elaboração de briefings e pesquisas, entrevistas com usuários e
								clientes chaves, criação de personas e afins. Produção de mapas
								mentais e desenvolvimento de fluxos de navegação.
							</p>
						</div>
						<div
							className='card-how-we-do'
							data-aos='fade-up'
							data-aos-delay='300'>
							<span className='material-icons-outlined'>
								<svg
									width='66'
									height='66'
									viewBox='0 0 66 66'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M46.3331 0.81665L27.4665 19.65V5.18332H0.799805V31.85H27.4665V19.65L46.3331 38.5167H34.1331V65.1833H60.7998V38.5167H46.3331L65.1998 19.65L46.3331 0.81665ZM55.7665 19.6833L46.3331 10.25L36.8998 19.6833L46.3331 29.1167L55.7665 19.6833ZM20.7998 25.1833V11.85H7.46647V25.1833H20.7998ZM54.1331 45.1833V58.5167H40.7998V45.1833H54.1331ZM20.7998 58.5167V45.1833H7.46647V58.5167H20.7998ZM0.799805 38.5167H27.4665V65.1833H0.799805V38.5167Z'
										fill='#2A90CB'
									/>
								</svg>
							</span>

							<h4>Design</h4>
							<p>
								Etapas focadas no usuário estudos e desenvolvimentos de
								wireframes, prototipação de telas (baixa e alta fidelidade),
								aplicação de conceitos de acessibilidade, validação com
								usuários.
							</p>
						</div>
						<div
							className='card-how-we-do'
							data-aos='fade-up'
							data-aos-delay='400'>
							<span className='material-icons-outlined'>
								{' '}
								<svg
									width='68'
									height='60'
									viewBox='0 0 68 60'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M67.3337 13.3333V20H60.667V26.6667H67.3337V33.3333H60.667V40H67.3337V46.6667H60.667V53.3333C60.667 57 57.667 60 54.0003 60H7.33366C3.66699 60 0.666992 57 0.666992 53.3333V6.66667C0.666992 3 3.66699 0 7.33366 0H54.0003C57.667 0 60.667 3 60.667 6.66667V13.3333H67.3337ZM7.33366 53.3333H54.0003V6.66667H7.33366V53.3333ZM14.0003 33.3333H30.667V46.6667H14.0003V33.3333ZM47.3337 13.3333H34.0003V23.3333H47.3337V13.3333ZM14.0003 13.3333H30.667V30H14.0003V13.3333ZM47.3337 26.6667H34.0003V46.6667H47.3337V26.6667Z'
										fill='#2A90CB'
									/>
								</svg>
							</span>

							<h4>Desenvolvimento</h4>
							<p>
								Modelagem de dados, Design Patterns, DevOps, métodos ágeis,
								plano de testes, ajustes e elaboração de manuais para entrega e
								implementação do projeto.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <!--============ SECTION PROJECTS ============--> */}
			<Element name='products'>
				<section
					id='projects'
					className='s-projects'
					data-aos='fade-up'
					data-aos-delay='0'>
					<div className='row container'>
						<h2 className='grid-12'>Nossos projetos</h2>
						<div className='grid-12 projects-list'>
							<Project
								key={1}
								title='Plantão Extra'
								imgUrl={imgProjectPlantaoExtra}
							/>
							<Project
								key={2}
								title='Cardápio de Negócios'
								imgUrl={imgProjectCardapioDeNegocios}
							/>
							<Project key={3} title='44Express' imgUrl={imgProject44Express} />
							<Project
								key={4}
								title='Meu SocialPost'
								imgUrl={imgProjectMeuSocialPost}
							/>
							<Project
								key={5}
								title='Tem Poder Quem Age'
								imgUrl={imgProjectTemPoderQuemAge}
							/>
							<Project
								key={6}
								title='OfertaPlay'
								imgUrl={imgProjectOfertaPlay}
							/>
						</div>
					</div>
				</section>
			</Element>
			{/* <!--============ SECTION PARTNERS ============--> */}
			<Element name='partners'>
				<section id='partners' className='s-partners'>
					<div className='container'>
						<div
							className='partners-title'
							data-aos='fade-up'
							data-aos-delay='0'>
							<h2>Nossos parceiros</h2>
						</div>

						<ul>
							<li data-aos='zoom-in' data-aos-delay='0'>
								<img
									src={imgPartnerPlantaoExtra}
									alt='Logotipo de Plantão Extra'
								/>
							</li>
							<li data-aos='zoom-in' data-aos-delay='100'>
								<img src={imgPartnerFebracis} alt='Logotipo da Febracis' />
							</li>
							<li data-aos='zoom-in' data-aos-delay='200'>
								<img src={imgPartner44Express} alt='Logotipo da 44Express' />
							</li>
							<li data-aos='zoom-in' data-aos-delay='300'>
								<img
									src={imgPartnerCardapioDeNegocios}
									alt='Logotipo da Cardápio de Negócios'
								/>
							</li>
							<li data-aos='zoom-in' data-aos-delay='400'>
								<img
									src={imgPartnerBuritiShopping}
									alt='Logotipo do Buriti Shopping'
								/>
							</li>
							<li data-aos='zoom-in' data-aos-delay='400'>
								<img src={imgPartnerSolidops} alt='Logotipo da Solid.ops' />
							</li>
						</ul>
					</div>
				</section>
			</Element>
			{/*<!--============ SECTION TESTIMONIALS ============-->*/}
			<Element name='testimonials'>
				<section
					id='testimonials'
					className='container box'
					data-aos='fade-up'
					data-aos-delay='0'>
					<h2 className='grid-12 flex-center-column'>Depoimentos</h2>
					<div className='row'>
						<div className='grid-3'></div>
						<p className='grid-6'>
							A opinião de parceiros e clientes que confiaram e confiam em nossa
							equipe para transformar ideias em soluções práticas de maneira
							inteligente e eficiente.
						</p>
						<div className='grid-3'></div>
					</div>
				</section>

				<Testimonials />
			</Element>
			{/* <!--============ CTA ============--> */}
			<Element name='cta'>
				<section id='cta' className='s-cta px-2'>
					<div className='container'>
						<div className='cta-text' data-aos='fade-up' data-aos-delay='0'>
							<h3>Vamos conversar?</h3>

							<h2>
								Estamos prontos para <br />
								te atender!
							</h2>
						</div>
						<div className='btns' data-aos='fade-up' data-aos-delay='100'>
							<div className='btn'>
								<span>
									<img src={iconCtaWhatsApp} alt='Ícone de WhatsApp grande' />
								</span>
								<h6>Clique aqui para enviar um WhatsApp</h6>
							</div>

							<div className='btn'>
								<span>
									<img src={iconCtaEmail} alt='Ícone de e-mail grande' />
								</span>
								<h6>Clique aqui para enviar um e-mail</h6>
							</div>
							<div className='btn'>
								<div className='img'>
									<span>
										<img src={iconCtaCall} alt='Ícone de telefone grande' />
									</span>
								</div>
								<h6>Clique aqui para fazer uma ligação</h6>
							</div>
						</div>
					</div>
				</section>
			</Element>
		</>
	);
};

export default Main;
