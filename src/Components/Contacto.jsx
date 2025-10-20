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
     <Container className="p-3">
      <div className="d-flex flex-wrap justify-content-center gap-4">

        {/* Formulario */}
        <div
          className="card text-white border border-white"
          style={{ maxWidth: "500px", width: "100%", background: "#1a1a1a" }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-3">

              <div className="mb-3">
                <label className="form-label">NOMBRE</label>
                <input
                  type="text"
                  name="from_name"
                  className="form-control"
                  placeholder="INGRESA TU NOMBRE"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  name="from_email"
                  className="form-control"
                  placeholder="INGRESA TU CORREO"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">ASUNTO</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="¿SOBRE QUÉ GUSTAS HABLAR?"
                  required
                />
              </div>

              <div className="mb-3">
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
                <motion.button
                  type="submit"
                  className="btn btn-md mt-3 mb-3 text-white border border-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ENVIAR
                </motion.button>
              </div>

            </div>
          </form>
        </div>

        {/* Información de contacto y CV */}
        <div
          className="card text-white border border-white"
          style={{ maxWidth: "400px", width: "100%", background: "#1a1a1a" }}
        >
          <div className="p-3 text-center">
            <h2 className="mt-3">Información de contacto</h2>
            <p className="fs-6 mt-2">
              Correo Electrónico: roycen804@gmail.com <br />
              Teléfono: 461 10213388 <br />
              Ciudad: Celaya, Guanajuato
            </p>

            <motion.a
              href={Curriculum}
              download="Curriculum.pdf"
              className="btn btn-outline-light mt-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              📄 Descargar CV
            </motion.a>
          </div>
        </div>

      </div>
    </Container>
  );
};