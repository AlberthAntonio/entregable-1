import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

function BtnPhrase({setPhraseSelected, setbgSelected}) {
    
    const newPhrase = () => {
        const indexRandom = getRandomNumber(quotes.length)
        setPhraseSelected(quotes[indexRandom])
        const indexRandomPhotos = getRandomNumber(photos.length)
        setbgSelected(photos[indexRandomPhotos])
    }  
    return (
      <button className="bg-amber-600 ml-auto block cursor-pointer py-2 px-4 rounded-xl text-sm hover:brightness-125 text-white" onClick={newPhrase}>Probar suerte!!!</button>
    )
}

export default BtnPhrase