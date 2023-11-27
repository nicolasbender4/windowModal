import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody,ModalFooter, FormGroup, Label, Input} from 'reactstrap';
import './App.css'
//import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';


// function login(){
//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Something went wrong!",
//     footer: '<a href="#">Why do I have this issue?</a>'
//   });
// }

function App() {
  const [abrir,setAbrir] = useState(false);
  console.log(abrir)

  const abrirModal = () => setAbrir(!abrir); 

  const modalStyles = {
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)"
  }

  return (
    <>
    
      <div className='container'>
        <Button color='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={()=> {abrirModal(true)}}>Mostrar Modal</Button>
      </div>

      <Modal isOpen={abrir} style={modalStyles}>
      <ModalHeader>
        Iniciar Sesión
      </ModalHeader>
      <ModalBody>
      <FormGroup>
          <Label for='usuario'>Usuario</Label>
          <Input type='text'id='usuario'/>
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='text'id='password'/>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Iniciar Sesión</Button>
        <Button color='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"' onClick={abrirModal}>Cerrar</Button>
      </ModalFooter>
    </Modal>
    </>
  )
}

export default App
