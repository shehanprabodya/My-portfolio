
const projects =[
    { id:1,title:"Sea Explore Desktop Application",
    description:"We build this project under the OOP course module and including myself we have six group members devloped this project ",
    image:"/projects/project1.png",
    tags:["java","javaFx","OOP-Concept","MYSQl"],
    demoUrl:"#",
    githubUrl:"#",
    },
    { id:2,title:"Gym Management Desktop Application",
    description:"We build this project under the Rapid Application devlopment course module  focusing on design patterns ",
    image:"/projects/project2.png",
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
                        </div>

                    ))}

                </div>
            </div>

        </section>

    );
}