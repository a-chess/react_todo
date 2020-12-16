import React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routing from '@js/entrypoints/routing'
import Header from '@js/components/header'
import store from '@js/redux/store'

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Header />
          <Routing />
        </div>
      </Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app-root'))
