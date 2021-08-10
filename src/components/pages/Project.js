import React from 'react';
import Card from "./Card";

function Project() {
    let library = [
        //Important
        {
            id: 1,
            title: "Pye",
            desc: "Pye is a fun and easy polling platform for you and your friends! Prompt a question, get users to cast their votes, and instantly get the results in an easy to read pie chart!",
            imglink: "/assets/images/pye.png",
            gitlink: "https://github.com/Randy-chou/pye.git",
            deploy: "https://cryptic-basin-25278.herokuapp.com/",
            tech: "Sequelize, Handlebars, Chartjs, Cloudinary, Express.js ,HTML, Javascript, CSS",
        },
        {
            id: 2,
            title: "Crumbs",
            desc: "This website aims to capture the feel of a family cookbook with the utility of a web API. Look up recipes, save your favorites, and even click on individual ingredients to learn about their nutritional information.",
            imglink: "/assets/images/crumbscapture.png",
            gitlink: "https://github.com/Randy-chou/crumbs-food-app",
            deploy: "https://randy-chou.github.io/crumbs-food-app/",
            tech: "HTML, Javascript, CSS, Nodejs, AJAX, Third Party APIs",
        },
        {
            id: 3,
            title: "Book Search",
            desc: "This project was a refactoring of an old app to use Apallo in combination with GraphQL to directly querry the database.",
            imglink: "/assets/images/booksearch.png",
            gitlink: "https://github.com/Randy-chou/book_searc_refactor.git",
            deploy: "https://floating-beach-49642.herokuapp.com/",
            tech: "Mongodb, React, Express, Nodejs, HTML, Javascript, CSS",
        },
        {
            id: 4,
            title: "Offline Budget Tracker",
            desc: "Budget Tracker is a Progressive Web Application utilizes Mongodb to maintain a serverside database of monetary transactions that are sent to a front end application that allows you to display your financial history.",
            imglink: "/assets/images/workout.png",
            gitlink: "https://github.com/Randy-chou/offline-budget-tracker.git",
            deploy: "https://intense-dusk-28931.herokuapp.com/",
            tech: "Mongodb, PWA, Expressjs, HTML, Javascript, CSS",
        },
        {
            id: 5,
            title: "Workout",
            desc: "Workout Tracker maintains a serverside database of workouts that are sent to a front end application that allows you to display past workouts and add exercises to new workouts.",
            imglink: "/assets/images/offlinebudget.png",
            gitlink: "https://github.com/Randy-chou/workout_track.git",
            deploy: "https://powerful-wave-98733.herokuapp.com/",
            tech: "Mongodb, Expressjs, HTML, Javascript, CSS",
        },
        {
            id: 6,
            title: "Note Taker",
            desc: "This is web app communicates with a backend RESTapi server to allow you to store and retrieve notes remotely.",
            imglink: "/assets/images/note.png",
            gitlink: "https://github.com/Randy-chou/note_taker.git",
            deploy: "https://sheltered-scrubland-86582.herokuapp.com/",
            tech: "Expressjs, Nodejs, HTML, Javascript, CSS",
        },
        {
            id: 7,
            title: "Tech Blog",
            desc: "This website allows you to make posts and add comments. The website uses SQL to store account data to allow people to log in order to protect user posts from other users. Uses the MVC paradigm",
            imglink: "/assets/images/blog.png",
            gitlink: "https://github.com/Randy-chou/Tech_Blog_V1.git",
            deploy: "https://secure-fortress-85832.herokuapp.com/",
            tech: "Express, Sequelize, Handlebars SQL, HTML, Javascript, CSS",
        },
        {
            id: 8,
            title: "Employee Tracker",
            desc: "This app allows business owners to track and organize their company by creating a dynamic database of departments, roles, hierarchy, and employee information.",
            imglink: "/assets/images/tracker.png",
            gitlink: "https://github.com/Randy-chou/employee_tracker_2021.git",
            deploy: "",
            tech: "Nodejs, mySQL, HTML, Javascript, CSS",
        },
        {
            id: 9,
            title: "E-Commerce API",
            desc: "After spinning up the server with your personal credentials, you can then interact with an API to perform CRUD with a product database.",
            imglink: "/assets/images/placeholder-01.jfif",
            gitlink: "https://github.com/Randy-chou/E-CommerceBackEnd.git",
            deploy: "",
            tech: "Expressjs, Sequelize, HTML, Javascript, CSS",
        },
        {
            id: 10,
            title: "Code Quiz",
            desc: "This is front end only coding quiz that uses local storage to store quiz scores",
            imglink: "/assets/images/webpage_capture.png",
            gitlink: "https://github.com/Randy-chou/code-quiz-2021",
            deploy: "https://randy-chou.github.io/code-quiz-2021/",
            tech: "HTML, Javascript, CSS",
        },
        {
            id: 11,
            title: "Weather Dash",
            desc: "This is a web app that processes data from a third party API to display weather information",
            imglink: "/assets/images/weathercapture.png",
            gitlink: "https://github.com/Randy-chou/weather_dashboard-2021",
            deploy: "https://randy-chou.github.io/weather_dashboard-2021/",
            tech: "HTML, Javascript, CSS, Third Party APIs",
        },
        {
            id: 12,
            title: "Save Your Code",
            desc: "This is simple front end application containing common code snippets.",
            imglink: "/assets/images/saveyourcode-img.png",
            gitlink: "https://github.com/Randy-chou/saveyourcode-website-v1",
            deploy: "https://randy-chou.github.io/saveyourcode-website-v1/",
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