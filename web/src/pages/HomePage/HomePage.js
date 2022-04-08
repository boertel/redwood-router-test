import { useLocation, Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { pathname } = useLocation()
  console.log('home', { pathname })
  return (
    <ul>
      <li>
        <Link to={routes.first()}>/first</Link>
      </li>
      <li>
        <Link to={routes.home()}>/</Link>
      </li>
    </ul>
  )
}

export default HomePage
