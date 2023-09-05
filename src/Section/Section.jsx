import './Section.css'

export default function Section() {
  return (
    <section>
        <div className="logo">
            <h1 href="#"><span>Categorias</span></h1>
        </div>
        <div className="nav-wrap">
            <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
                <li><a href="#">Terror</a></li>
                <li><a href="#">Comedia</a></li>
                <li><a href="#">Anime</a></li>
                <li><a href="#">Accion</a></li>
            </ul>
            </nav>
        </div>
    </section>
  )
}

