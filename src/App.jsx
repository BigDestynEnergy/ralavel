import { useState } from 'react'
import './App.css'
import HomeHeader from './components/Home Header'
import { Sidebar } from './components/sidebar'
import ComicsDisplay from './components/Comics'

export default function App(){
  const [searchQuery, setSearchQuery] = useState('')
  const [input, setInput] = useState('')
  return(
    <main>
      <HomeHeader 
      setSearchQuery={setSearchQuery}
      input={input}
      setInput={setInput}
      />
      <Sidebar/>
      <ComicsDisplay searchQuery={searchQuery}/>
    </main>
  )
}