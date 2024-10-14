import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { PopularSports } from './components/PopularSports'
import { ProsOfSports } from './components/ProsOfSports'
import { ToDoBeforeSport } from './components/ToDoBeforeSport'
import { ImageGallery } from './components/ImageGallery'
import { WhySportIsImportant } from './components/WhySportIsImportant'
import { Footer } from './components/Footer'

function App() {
  const [toDos, setToDos] = useState([])
  useEffect(() =>
  {
    fetch("/ToDoBeforeSport.json")
    .then(response => response.json())
    .then(data => setToDos(data));
  })
  return (
    <>
      <Header />
      <main className="container my-4">
        <PopularSports />
        <ProsOfSports />
        <ToDoBeforeSport todos={toDos} />
        <ImageGallery />
        <WhySportIsImportant />
      </main>
      <Footer />
    </>
  )
}

export default App
