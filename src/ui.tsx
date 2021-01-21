import React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'

type Props = {}

export const App: React.FC<Props> = () => {
  const updateColor = (element: HTMLInputElement) => {
    if (element) element.value = '5'
    this.textbox = element
  }

  const onCreate = () => {
    const count = parseInt(this.textbox.value, 10)
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  return(
    <div>
      <h2>Rectangle Creator</h2>
      <div>
        <p>colors</p>
        <input onChange={updateColor} />
        <p>color3: <input ref={this.countRef} /></p>
      </div>
      <button id="create" onClick={this.onCreate}>Create</button>
      <button onClick={this.onCancel}>Cancel</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
