import styles from "./Footer.module.css"

function Footer() {
    return (
      <footer className= {styles.footer}>
        <div className={styles.footer__content}>
          <div className={styles.footer__section}>
            <h3>Contato</h3>
            <p>Endereço: Rua dos Passeios, 123</p>
            <p>Telefone: (00) 1234-5678</p>
            <p>Email: contato@agenciadepasseios.com</p>
          </div>
          <div className={styles.footer__section}>
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/tours">Nossos Passeios</a></li>
              <li><a href="/about">Sobre Nós</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </div>
          <div className={styles.footer__section}>
            <h3>Siga-nos</h3>
            <ul className={styles.social__icons}>
              <li><a href="https://www.youtube.com/watch?v=TPXr2fkz0EM"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://www.youtube.com/watch?v=TPXr2fkz0EM"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://www.youtube.com/watch?v=TPXr2fkz0EM"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <p>&copy; {new Date().getFullYear()} Agência de Passeios. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;

