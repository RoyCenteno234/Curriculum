import { Card, Button } from "react-bootstrap";
import TiendaImg from "../Images/Tienda.png";
import InmobiliariaImg from "../Images/Inmobiliaria.png";
import RoyRoxImg from "../Images/RoyRox.png";
import PaginaWeb from "../Images/PaginaWeb.png"
import "./Proyectos.css"
export const Proyectos = ()=>{

const projects = [
{
    name:"Tienda E-Commerce",
    description:"Simulacion de tienda E-commerce con autenticacion de usuario",
    tech:["Java, React, Springboot, MySql"],
    image: TiendaImg

},
{
    name:"Pagina Web Inmobiliaria",
    description:"Pagina Web",
    tech:["Html, JavaScript, Css"],
    image: PaginaWeb

},

{
    name:"Inmobiliaria",
    description:"Registro de clientes",
    tech:["Java, SpringBoot, MySql, React"],
    image: InmobiliariaImg
},
{
    name:"RoyRox",
    description:"Simulacion de pagina deportiva (HYROX)",
    tech:["React, Java, Springboot"],
    image: RoyRoxImg
}
]

    return (
        <>

        <div className="d-flex flex-wrap justify-content-center gap-3 p-5 ">
            {projects.map((proj,index) =>(
                    <Card style={{width :"18rem"}} key={index}>
                        <Card.Img variant="top" src={proj.image}/>
                        <Card.Body className="text-white bg-black">
                            <Card.Title> {proj.name}</Card.Title>
                            <Card.Text>{proj.description}</Card.Text>
                            <Card.Text>
                                <strong>Tecnologias:</strong> {proj.tech.join(", ")}
                            </Card.Text>
                        </Card.Body>
                    </Card>

            ))}
         
          


        </div>
            
        </>
    )
}