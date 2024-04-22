
const Phrase = ({phraseSelected}) => {

  return (
    <div>
        <p className="italic mb-5">{phraseSelected.phrase}</p>
        <p className="font-black uppercase">{phraseSelected.author}</p>
    </div>
    
    
  )
}

export default Phrase