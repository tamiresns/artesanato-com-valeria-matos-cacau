import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import '../css/footer.css';
import '../css/icons.css';

const Footer = () => {
    return (
      <footer className="footer">
        <h1>Contato</h1>
        <section className="social-icons">
            <a href="URL_DO_FACEBOOK" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='icon'/>
            </a>
            <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='icon'/>
            </a>
            <a href="URL_DO_WHATSAPP" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='icon'/>
            </a>
            <a href="URL_DO_YOUTUBE" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='icon'/>
            </a>
        </section>
        <p>
            © {new Date().getFullYear()} Desenvolvido por{' '}
            <a href="https://github.com/tamiresns" target="_blank" rel="noopener noreferrer">Tamires Matos</a>.
        </p>      
      </footer>
    );
  };
  
  export default Footer;