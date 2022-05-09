import Header from './components/header'

import initialEmails from './data/emails'

import {useState} from "react"

import './styles/app.css'



function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)

  const inboxEmails = emails.map((printEmail) => {
    return(
      <li className="email">
        <div className="select">
          <input className="select-checkbox" type="checkbox" />
        </div>
        <div className="star">
          <input className="star-checkbox" type="checkbox" />
        </div>
        <div className="sender">{printEmail.sender}</div>
        <div className="title">{printEmail.title}</div>
      </li>
    )
  })

  

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li className="item active">
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li className="item">
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{inboxEmails}</main>
    </div>
  )
}

export default App
