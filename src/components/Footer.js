import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import '../css/footer.css';
import '../css/icons.css';

const Footer = () => {
    return (
      <footer className="footer">
        <h1>Contato</h1>
        <ul className="social-icons">
            <li>
                <a href="URL_DO_FACEBOOK" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='icon' alt='Ícone do Facebook'/>
                </a>
            </li>
            <li>
                <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='icon' alt='Ícone do Instagram'/>
                </a>
            </li>
            <li>
                <a href="URL_DO_WHATSAPP" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='icon' alt='Ícone do Whatsapp'/>
                </a>
            </li>
           <li>
                <a href="URL_DO_YOUTUBE" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className='icon' alt='Ícone do Youtube'/>
                </a>
           </li>         
        </ul>
        <p className='author'>
            © {new Date().getFullYear()} Desenvolvido por{' '}
            <a href="https://github.com/tamiresns" target="_blank" rel="noopener noreferrer" aria-label="Perfil do GitHub da desenvolvedora Tamires Matos">Tamires Matos</a>.
        </p>      
      </footer>
    );
  };
  
  export default Footer;