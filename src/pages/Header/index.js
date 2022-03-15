import logoDesk from '../../svg/logotipos.svg';
import logoMobile from '../../svg/logotipos-alt.svg';
import imgWhatsApp from '../../svg/bx_bxl-whatsapp.svg';

import { useState } from 'react';

import { Link } from 'react-scroll';

const Header = () => {
	const handleToggle = () => {
		setNavState((prev) => !prev);
	};
	const [navState, setNavState] = useState(true);

	return (
		<>
			<header>
				<div className='container'>
					<div className='logo-desk'>
						<a href='/'>
							<img src={logoDesk} alt='Logotipo da Sensi Connect' />
						</a>
					</div>
					<div className='logo-mobilexs'>
						<a href='/'>
							<img src={logoMobile} alt='Logotipo de Sensi Connect' />
						</a>
					</div>
					<nav>
						<ul className='menu'>
							<li>
								<Link to='about-us' offset={-88} className='p-1'>
									Sobre nós
								</Link>
							</li>
							<li>
								<Link to='products' offset={-88} className='p-1'>
									Produtos
								</Link>
							</li>
							<li>
								<Link to='partners' offset={-88} className='p-1'>
									Parceiros
								</Link>
							</li>
							<li>
								<Link to='testimonials' offset={-88} className='p-1'>
									Depoimentos
								</Link>
							</li>
							<li>
								<Link to='cta' offset={-88} className='p-1'>
									Contato
								</Link>
							</li>
						</ul>
					</nav>
					<a
						href='https://api.whatsapp.com/send?phone=55999999999999'
						target='_blank'
						rel='noreferrer'
						className='cta-desk btn-green'>
						<span className='mr-1'>
							<img src={imgWhatsApp} alt='Logo do aplicativo WhatsApp' />
						</span>
						Falar com a Sensi
					</a>
					{/* //============ HEADER MOBILE ============// */}
					<button
						onClick={handleToggle}
						className={navState ? 'menu-btn' : 'menu-btn open'}>
						<div className='menu-btn__burger'></div>
					</button>
				</div>
			</header>
			{/* //============ MENU MOBILE ============// */}
			<nav className={navState ? 'navbar-mobile' : 'navbar-mobile active'}>
				<ul>
					<li onClick={handleToggle}>
						<a href='#about-us'>Sobre nós</a>
					</li>
					<li onClick={handleToggle}>
						<a href='#projects'>Produtos</a>
					</li>
					<li onClick={handleToggle}>
						<a href='#partners'>Parceiros</a>
					</li>
					<li onClick={handleToggle}>
						<a href='#testimonials'>Depoimentos</a>
					</li>
					<li onClick={handleToggle}>
						<a href='#cta'>Contato</a>
					</li>
				</ul>
				<a
					href='https://api.whatsapp.com/send?phone=55999999999999'
					target='_blank'
					rel='noreferrer'
					className='btn-green'>
					<span className='mr-1'>
						<img src={imgWhatsApp} alt='Logo do aplicativo WhatsApp' />
					</span>
					Falar com a Sensi
				</a>
			</nav>
		</>
	);
};

export default Header;
