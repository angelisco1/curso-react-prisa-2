import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/nuevo-usuario">
        <a>Nuevo usuario</a>
      </Link>
      <Link as="/usuario/1" href="/usuario?id=1">
        <a>Usuario 1</a>
      </Link>
    </nav>
  )
}

export default Nav;