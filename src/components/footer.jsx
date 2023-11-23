const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="footer-logo">
                    <img src="logo.png" alt="Logo de la empresa" className="w-12 h-12" />
                </div>
                <div className="footer-links">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
                        <li><a href="#" className="hover:text-gray-400">Productos</a></li>
                        <li><a href="#" className="hover:text-gray-400">Servicios</a></li>
                        <li><a href="#" className="hover:text-gray-400">Acerca de nosotros</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>Contáctanos:</p>
                    <p>Email: info@tuempresa.com</p>
                    <p>Teléfono: +123456789</p>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;