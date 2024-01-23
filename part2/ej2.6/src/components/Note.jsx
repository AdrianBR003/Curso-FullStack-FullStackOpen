const Note = ({note}) => {
    return <li>{note.name} {note.number}</li> //Hay que indicar la key, por eso la ponemos en la declaracion
  }

export default Note