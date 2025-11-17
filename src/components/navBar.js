import van from "vanjs-core";
const {div,h1,li,ul,a,img} = van.tags;

const bar = document.getElementById("nav-bar");

const NavBar = () => div({id:"nav-container"},
  img({
    src: "../public/assets/gvlogo.png",
    alt: "Logo",
    class: "nav-bar-logo"
  }),
  div({style:"display:flex; gap:30px;align-items:center"},
    a({href:"/index.html"},"Inicio"),
    a({href:"/about.html"},"Acerca de"),
    a({href:"/login.html"},"Inciar Sesión")
  )
)

van.add(bar, NavBar());

