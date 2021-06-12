import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const Index = () => {
    return (
        <div className="container" style={{marginTop:20}}>
            <App />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));