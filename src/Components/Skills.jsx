import { FaDatabase, FaGitAlt, FaJava, FaReact } from "react-icons/fa"
import { SiCss3, SiHtml5, SiJavascript, SiSpringboot } from "react-icons/si";


export const Skills= ()=>{

    const skill = [
        {icon: <FaJava color="#f89820"/>, name:"Java"},
        {icon: <SiSpringboot color="#6db33f"/> , name:"Springboot"},
        {icon: <SiJavascript color="f0db4f" />, name:"JavaScript"},
        {icon: <SiHtml5 color="e34c26"/>, name:"HTML"},
        {icon: <FaReact color="#61dafb"/>, name:"React"},
        {icon: <FaDatabase color="#00618a" />, name:"MySQL"},
        {icon: <FaGitAlt color="#f14e32" />, name:"Git"},
        {icon: <SiCss3 color="264de4" />, name:"CSS"}
        

    ];

 


    return(
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-2 mb-3">
           
            {skill.map((s,i)=>(
                <div
                key={i}
                className="text-center"
                style={{transition: "transform 0.3s", cursor:"pointer"}}
                onMouseEnter={(e)=> (e.target.style.transform  = "scale(1.2)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                    <div className="fs-1"> {s.icon}</div>
                    <div className="text-white">{s.name}</div>

                </div>
            ))}
            
        </div>
    )
}