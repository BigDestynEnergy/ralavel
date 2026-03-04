import { useState } from 'react'
import './App.css'
import HomeHeader from './components/Home Header'
import { Sidebar } from './components/Sidebar'
import ComicsDisplay from './components/Comics'
import Login from './components/Login'

export default function App(){
  const [searchQuery, setSearchQuery] = useState('');
  const [input, setInput] = useState('');
  const [note, setNote] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hide, setHide] = useState('')
  const [screen, setScreen] = useState('login'); // start at login

  return(
    <main>
      {screen === "login" ? (
        <Login setScreen={setScreen}
        
        hide={hide}
        note={note}
        email={email}
        setEmail={setEmail}
        setNote={setNote}
        password={password}
        setPassword={setPassword}
        setHide={setHide}/>
      ) : (
        <>
          <HomeHeader 
            setSearchQuery={setSearchQuery}
            input={input}
            setInput={setInput}
          />
          <Sidebar/>
          <ComicsDisplay searchQuery={searchQuery}/>
        </>
      )}
    </main>
  )
}