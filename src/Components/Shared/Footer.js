import 'boosted/dist/css/boosted.min.css';

function Footer() { 
    return (
        <footer className="footer navbar fixed-bottom" data-bs-theme="dark">
            <h2 className="visually-hidden">Sitemap & information</h2>
            <div className="container-fluid footer-terms">
                <ul className="navbar-nav gap-md-3 d-flex justify-content-evenly" style={{ width: '100%' }}>
                    <li className="fw-bold">© Orange 2024</li>
                    <li><a className="nav-link" href="#">Terms and conditions</a></li>
                    <li><a className="nav-link" href="#">Privacy</a></li>
                    <li><a className="nav-link active" href="#" aria-current="page">Accessibility statement</a></li>
                    <li><a className="nav-link" href="#">Cookie policy</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
