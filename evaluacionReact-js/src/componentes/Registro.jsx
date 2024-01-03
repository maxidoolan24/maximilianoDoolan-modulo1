import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './registro.css'


const Registro = () => {
  return (
    <>
     <Form className='registro'>
      <Row>
        <Col>
          <Form.Control placeholder="nombre" />
        </Col>
        <Col>
          <Form.Control placeholder="apellido" />
        </Col>
        <Col>
          <Form.Control placeholder="telefono" />
        </Col>

      </Row>
      <br />
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="ingrese su mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="ingrese su contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>repita su contraseña</Form.Label>
        <Form.Control type="password" placeholder="vuelva a ingresar su contraseña" />
      </Form.Group>
      

    </Form>
    </>
  )
}

export default Registro