import { useLocation, Link, routes } from '@redwoodjs/router'

const FirstPage = () => {
  const { pathname } = useLocation()
  console.log('first', { pathname })
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

export default FirstPage
