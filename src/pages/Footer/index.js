/* IMAGENS */
import logoFooter from '../../svg/logotipofoo.svg';
import imgMap from '../../img/mapa.png';
/* ÍCONES */
import iconCall from '../../svg/call_24px_outlined.svg';
import iconEmail from '../../svg/email_24px_outlined.svg';
import iconLocation from '../../svg/location_on_24px_outlined.svg';
import iconWhatsApp from '../../svg/whatsapp_24px.svg';

const Footer = () => {
	return (
		<>
			{/* <!--============ FOOTER ============--> */}

			<footer>
				<div className='container row main'>
					<div className='grid-6 details'>
						<img
							className='footer-logo'
							src={logoFooter}
							alt='Logotipo da Sensi'
						/>
						<nav>
							<ul>
								<li>
									<span className='material-icons-outlined'>
										<img src={iconWhatsApp} alt='Ícone do WhatsApp' />
									</span>
									<a className='sb-1' href='tel:+55-62-98888-8888'>
										+55 (62) 98888-8888
									</a>
								</li>
								<li>
									<span className='material-icons-outlined'>
										<img src={iconCall} alt='Ícone de Telefone' />
									</span>
									<a className='sb-1' href='tel:+55-62-3888-8888'>
										+55 (62) 3888-8888
									</a>
								</li>
								<li>
									<span className='material-icons-outlined'>
										<img src={iconEmail} alt='Ícone de E-mail' />
									</span>
									<a className='sb-1' href='mailto:contato@sensiconnect.io'>
										contato@sensiconnect.io
									</a>
								</li>
								<li>
									<span className='material-icons-outlined'>
										<img src={iconLocation} alt='ícone de localidade no mapa' />
									</span>
									<p className='sb-1'>
										Avenida Deputado Jamel Cecílio, 2496 - Jardim Goiás <br />
										Goiânia / Goiás, 74810-100
									</p>
								</li>
							</ul>
						</nav>
					</div>

					<div className='grid-6'>
						<img src={imgMap} alt='' />
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='grid-12 bottom'>
							<p>© 2022 Sensi Connect - Todos os direitos reservados</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
