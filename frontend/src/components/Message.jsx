import {Alert} from "react-bootstrap"

const Message = ({variant, children}) => {
  return (
    <Alert variant={variant}>{children}</Alert>
  )
}

Message.defaultProps = { //O default mostrara uma caixa azul. Danger = vermelha e successful verde
  variant:'info',
}
export default Message