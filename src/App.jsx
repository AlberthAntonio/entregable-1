
import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import getRandomNumber from './utils/getRandomNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'

function App() {
  
  const [phraseSelected, setPhraseSelected] = useState(quotes[getRandomNumber(quotes.length)])
  const [bgSelected, setbgSelected] = useState(photos[getRandomNumber(photos.length)])

  const objStyle = {
    backgroundImage: `url(/images/fondo${bgSelected})`
  }


  return (
    <div className='min-h-screen flex justify-center items-center bg-cover bg-center' style={objStyle}>
      <h1 className='absolute top-20 text-3xl uppercase font-bold'>Galleta de la fortuna</h1>
      <article className='max-w-[400px] p-6 bg-[#95245c] rounded-xl shadow-2xl text-red-50'>
        <Phrase phraseSelected={phraseSelected}/>
        <BtnPhrase 
          setPhraseSelected={setPhraseSelected}
          setbgSelected={setbgSelected}/>
      </article>
    </div> 
  )
}

export default App
