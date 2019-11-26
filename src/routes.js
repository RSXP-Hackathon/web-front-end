/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import Empresa from "views/Empresa";
import Eleva from "views/Eleva";
import Mentor from "views/Mentor";
import Aluno from "views/examples/Aluno.jsx";

var routes = {
  eleva: [
    {
      path: "/eleva",
      group: 'eleva',
      name: "Dashboard",
      icon: "ni ni-tv-2 text-primary",
      component: Eleva,
      layout: "/admin"
    },
    {
      path: "/empresas",
      group: 'eleva',
      name: "Empresas",
      icon: "ni ni-building text-primary",
      component: Eleva,
      layout: "/admin"
    },
    {
      path: "/eventos",
      group: 'eleva',
      name: "Eventos",
      icon: "ni ni-calendar-grid-58 text-primary",
      component: Eleva,
      layout: "/admin"
    },
    {
      path: "/mentores",
      group: 'eleva',
      name: "Mentores",
      icon: "ni ni-hat-3 text-primary",
      component: Eleva,
      layout: "/admin"
    },
    {
      path: "/alunos",
      group: 'eleva',
      name: "Alunos",
      icon: "ni ni-user-run text-primary",
      component: Eleva,
      layout: "/admin"
    },
    {
      path: "/vagas",
      group: 'eleva',
      name: "Vagas",
      icon: "ni ni-briefcase-24 text-primary",
      component: Eleva,
      layout: "/admin"
    },
    {
      path: "/cursos",
      group: 'eleva',
      name: "Cursos",
      icon: "ni ni-books text-primary",
      component: Eleva,
      layout: "/admin"
    },
  ],
  empresa: [
    {
      path: "/empresa",
      group: 'empresa',
      name: "Início",
      icon: "ni ni-tv-2 text-primary",
      component: Empresa,
      layout: "/admin"
    },
    {
      path: "/empresa/teste",
      group: 'empresa',
      name: "Empresa",
      icon: "ni ni-tv-2 text-primary",
      component: Icons,
      layout: "/admin"
    },
  ],
  mentor: [
    {
      path: "/mentor",
      group: 'mentor',
      name: "Mentor",
      icon: "ni ni-planet text-blue",
      component: Mentor,
      layout: "/admin"
    },
  ],
  aluno: [
    {
      path: "/aluno",
      group: 'aluno',
      name: "Aluno",
      icon: "ni ni-pin-3 text-orange",
      component: Aluno,
      layout: "/admin"
    },
  ],
  default: [
    {
      path: "/index",
      name: "Dashboard",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
      layout: "/admin"
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "ni ni-planet text-blue",
      component: Icons,
      layout: "/admin"
    },
    {
      path: "/maps",
      name: "Maps",
      icon: "ni ni-pin-3 text-orange",
      component: Maps,
      layout: "/admin"
    },
    {
      path: "/user-profile",
      name: "User Profile",
      icon: "ni ni-single-02 text-yellow",
      component: Profile,
      layout: "/admin"
    },
    {
      path: "/tables",
      name: "Tables",
      icon: "ni ni-bullet-list-67 text-red",
      component: Tables,
      layout: "/admin"
    },
    {
      path: "/login",
      name: "Login",
      icon: "ni ni-key-25 text-info",
      component: Login,
      layout: "/auth"
    },
    {
      path: "/register",
      name: "Register",
      icon: "ni ni-circle-08 text-pink",
      component: Register,
      layout: "/auth"
    }
  ]
};
export default routes;
