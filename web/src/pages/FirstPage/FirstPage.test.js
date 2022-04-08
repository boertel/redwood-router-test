import { render } from '@redwoodjs/testing/web'

import FirstPage from './FirstPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FirstPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FirstPage />)
    }).not.toThrow()
  })
})
