import React from "react" //Lo importamos porque es necesario en muchas aplicaciones de versiones antiguas

const Note = ({note}) => {
    return <li>{note.content}</li> //Hay que indicar la key, por eso la ponemos en la declaracion
  }

export default Note