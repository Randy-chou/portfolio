import React from 'react';
import Card from "./Card";

function Project() {
    let library = [
        //Important
        {
            id: 1,
            title: "Crumbs",
            desc: "This is a web app",
            imglink: "/assets/images/crumbscapture.png",
            gitlink: "https://github.com/Randy-chou/crumbs-food-app",
            deploy: "https://randy-chou.github.io/crumbs-food-app/",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 2,
            title: "Note Taker",
            desc: "This is a web app",
            imglink: "/assets/images/note.png",
            gitlink: "https://github.com/Randy-chou/note_taker.git",
            deploy: "https://secure-fortress-85832.herokuapp.com/",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 3,
            title: "Tech Blog",
            desc: "This is a web app",
            imglink: "/assets/images/blog.png",
            gitlink: "https://github.com/Randy-chou/Tech_Blog_V1.git",
            deploy: "https://randy-chou.github.io/crumbs-food-app/",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 4,
            title: "Employee Tracker",
            desc: "This is a web app",
            imglink: "/assets/images/tracker.png",
            gitlink: "https://github.com/Randy-chou/employee_tracker_2021.git",
            deploy: "",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 5,
            title: "E-Commerce API",
            desc: "This is a web app",
            imglink: "/assets/images/placeholder-01.jfif",
            gitlink: "https://github.com/Randy-chou/E-CommerceBackEnd.git",
            deploy: "",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 6,
            title: "Save Your Code",
            desc: "This is a web app",
            imglink: "/assets/images/saveyourcode-img.png",
            gitlink: "https://github.com/Randy-chou/saveyourcode-website-v1",
            deploy: "https://randy-chou.github.io/saveyourcode-website-v1/",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 7,
            title: "Weather Dash",
            desc: "This is a web app",
            imglink: "/assets/images/weathercapture.png",
            gitlink: "https://github.com/Randy-chou/weather_dashboard-2021",
            deploy: "https://randy-chou.github.io/weather_dashboard-2021/",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 8,
            title: "Code Quiz",
            desc: "This is a web app",
            imglink: "/assets/images/webpage_capture.png",
            gitlink: "https://github.com/Randy-chou/code-quiz-2021",
            deploy: "https://randy-chou.github.io/code-quiz-2021/",
            tech: "HTML, Javascript, CSS",
        },
    ];

    return (
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 my-5 px-4">
            {library.map((proj) => (
                <div className="col pb-5 d-flex flex-column justify-content-center align-items-center" key={proj.id}>
                <Card
                    title={proj.title}
                    imglink={proj.imglink}
                    gitlink={proj.gitlink}
                    desc={proj.desc}
                    deploy={proj.deploy}
                    tech={proj.tech}
                />
                </div>
            ))}
        </section>
    )
}

export default Project;