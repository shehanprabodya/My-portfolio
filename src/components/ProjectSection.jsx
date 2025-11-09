import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects =[
    { id:1,title:"Sea Explore Desktop Application",
    description:"We build this project under the OOP course module and including myself we have six group members devloped this project ",
    image: `${import.meta.env.BASE_URL}projects/project1.png`,
    tags:["java","javaFx","OOP-Concept","MYSQl"],
    demoUrl:"#",
    githubUrl:"#",
    },
    { id:2,title:"Gym Management Desktop Application",
    description:"We build this project under the Rapid Application devlopment course module  focusing on design patterns ",
    image: `${import.meta.env.BASE_URL}projects/project2.png`,
    tags:["C#",".NET","SQl","Design-Patterns"],
    demoUrl:"#",
    githubUrl:"#",
    },

];


export const ProjectSection = () =>{
    return(
        <section id="projects"  className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary">{" "}Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-1-2xl mx-auto">
                    Here are some of my University project. Each project was devloped under the guidence of 
                    our lectures in the University . I will upload my individual Projects later.

                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) =>(
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span> 
                                        ))}
                                    </div>
                            
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                        </a>

                                    </div>
                                </div>
                             </div>
                        </div>

                    ))}

                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2 " target="_blank" href="https://github.com/shehanprabodya">
                        Check My Github <Github/>
                    </a>
                </div>
            </div>

        </section>

    );
}