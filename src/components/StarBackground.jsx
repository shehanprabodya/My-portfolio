import { useEffect, useState } from "react";

//id,size,x,y,opacity,animationDuration

export const StarBackground = () =>{
    const[stars,setStars] = useState([])
    const[meteors,setMeteors] = useState([]);

    useEffect(() =>{
        generateStars();
        generateMeteors();
    },[]);

    const generateStars = () =>{

    const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = []

    for(let i=0;i<numberOfStars;i++){
        newStars.push({
            id: i,
            Size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        });
    }

    setStars(newStars);
    };

     const generateMeteors = () =>{

    const numberOfMeteors = 4;
    const newSMeteors = []

    for(let i=0;i<numberOfMeteors;i++){
        newSMeteors.push({
            id: i,
            Size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 10,
            delay: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 3 + 3,
        });
    }

    setMeteors(newSMeteors);
};

    return(
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        { stars.map((star) =>(
            <div
                key={star.id}
                className="star animate-pulse-subtle"
                style={{
                    width: star.Size + "px",
                    height: star.Size + "px",
                    left: star.x + "%",
                    top: star.y +"%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}
            />
        ))}
        { meteors.map((meteor) =>(
            <div
                key={meteor.id}
                className="meteor animate-meteor"
                style={{
                    width: meteor.Size  * 50 + "px",
                    height: meteor.Size * 2+ "px",
                    left: meteor.x + "%",
                    top: meteor.y +"%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }}
            />
        ))}
    </div>
    );
};