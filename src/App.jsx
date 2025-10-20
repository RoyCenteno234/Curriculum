import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container } from "react-bootstrap"
import { Skills } from './Components/Skills'
import { Proyectos } from './Components/Proyectos'
import { Contacto } from './Components/Contacto'
import fotoPersonal from "./Images/FotoCur.jpeg"
import { motion } from "framer-motion";

function App() {
  

  return (
    <div className='text-white' style={{background: "#1a1a1a" }}>
    <NavBar/>

    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}   
  transition={{ duration: 2 }}  >
      <Container>
      <div id="sobre-mi">
      <h2 className="text-center p-5 mt-5">SOBRE MI </h2>
       <div className="d-flex  justify-content-center align-items-center gap-1">


          <div className='card w-25 ms-auto me-auto'>
          <img src={fotoPersonal} alt='IMAGEN PERSONAL' className='img img-fluid'></img>
        </div>


    
        <div className="card w-50 ms-auto me-auto border border-white "style={{background: "#1a1a1a" }}>
          <div className="card-body">
            <p className="mt-4 ms-5 fs-5 text-white" > Hola, soy Roy Mauricio Centeno Ramirez <br/>
                Soy un desarrollador Full Stack centrado en tecnologias modernas
                como React y SpringBoot.<br/> Domino tanto el frontend como el backend, integrando APIs REST 
                manejando autenticacion con JWT <br/> y bases de datos como MySQL.Tambien utilizo herramientas como 
                bootstrap, Tailwind CSS y Git/GitHub <br/> para la construccion de interfaces atractivas 
                y mantener un control de versiones eficiente.
                <br/>
                Apasionado por la innovacion, buscando participar en proyectos que unan tecnologia y creatividad para generar soluciones
                de alto impacto.
                </p>
          </div>
        </div>
        
       
       
      

       </div>
       </div>
       </Container>

          
          <div id="habilidades">
          <div className='p-5'></div>
       <h2 className= "text-center mt-5">HABILIDADES TECNICAS</h2>

       <div className="d-flex">
          <div className="card w-50 ms-auto me-auto border border-white mt-4 " style={{background: "#1a1a1a" }}>
            <p className="text-center fs-5 mt-3 text-white"> Tecnologias y herramientas con las que trabajo para crear experiencias 
            digitales excepcionales
            </p>
            <Skills/>
          </div>
      </div>
      </div>

      <div id="proyectos">
        <div className='p-5'>
          <h2 className='text-center p-5 mt-5'> PROYECTOS </h2>
        <Proyectos/>
        </div>
      </div>

      <div id="contacto">
        <div className='p-5'>
            <h2 className='text-center mb-4'>CONTACTO</h2>
               <Contacto/>
        </div>
      </div>

      </motion.div>
      
    </div>
  )
}

export default App
