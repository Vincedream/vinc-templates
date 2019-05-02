import React from 'react'
import './common/icons/call.svg'
import SVGIcon from './common/components/svg-icon'
import './App.scss'

class App extends React.Component {
  componentDidMount() {
    console.log('this is App')
  }

  render() {
    const a = true
    const b = true
    return (
      <div className="app">
        <div className="title">title</div>
        this is App
        <If condition={a}>
          <h1>IfBlock</h1>
        </If>
        <Choose>
          <When condition={b}>
            <h1>When</h1>
          </When>
          <Otherwise>
            <h1>Otherwise</h1>
          </Otherwise>
        </Choose>

        <div>
          svgIcon test:
          <SVGIcon name="call" />
        </div>
      </div>
    )
  }
}

export default App
