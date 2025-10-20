import { useRef } from "react"
import { Container } from "react-bootstrap"
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Curriculum from "../assets/Curriculum.pdf"
import { motion } from "framer-motion";

export const Contacto = ()=>{
             
    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault( )

         Swal.fire({
      title: "Enviando mensaje...",
      text: "Por favor espera un momento.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });


        emailjs
        .sendForm(
            "service_2nk0wq5",
            "template_3qcry94",
            form.current,
            "riajljy4CAKKXk6aj"
        ).then(
            (result) =>{
                console.log(result.text)
         Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado con éxito!",
            text: "Gracias por contactarme. Te responderé pronto.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
          });
                form.current.reset()
            },
            (error) =>{
                console.log(error.text)
                 Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Cerrar",
          });
            }
        )

    }
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center ">
        <div
          className="card mx-auto text-white border border-white mt-4"
          style={{ maxWidth: "500px", width: "90%", background: "#1a1a1a" }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="mt-5">
                  <label className="form-label">NOMBRE</label>
                  <input
                    type="text"
                    name="from_name"
                    className="form-control"  
                    placeholder="INGRESA TU NOMBRE"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label className="form-label">CORREO ELECTRÓNICO</label>
                  <input
                    type="email"
                    name="from_email"
                    className="form-control"
                    placeholder="INGRESA TU CORREO"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label className="form-label">ASUNTO</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="¿SOBRE QUÉ GUSTAS HABLAR?"
                    required
                  />
                </div>

                <div className="mt-5">
                  <label className="form-label">MENSAJE</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="CUÉNTAME MÁS ACERCA DE TU PROYECTO..."
                    rows="4"
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-md mt-5 mb-5 text-white border border-white"
                  >
                    ENVIAR
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="card w-50 ms-auto me-auto border border-white" style={{background: "#1a1a1a"}}>
          <h2 className="text-center mt-3 text-white">Informacion de contacto</h2>
            <p className="text-center text-white fs-4"> Correo Electronico - roycen804@gmail.com <br/>
                Telefono - 461 10213388 <br/>
                Ciudad- Celaya Guanajuato.
            </p>

                <motion.a
                
                href={Curriculum}
                download="Curriculum.pdf"
                 className="btn btn-outline-light mt-3 col-md-4 ms-auto me-auto mb-3"
                  whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.9 }}     
                 transition={{ type: "spring", stiffness: 300 }}
                >
                 📄 Descargar CV
                </motion.a>
          </div>
        </div>
    </Container>
  );
};