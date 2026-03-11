import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import Layout from '../components/Layout'; // Asumido por h.Z
import ProjectCard from '../components/ProjectCard'; // Asumido por l.Z
import projects from '../data/projects'; // Asumido por k.ZP

const basePath = "/portfolio-sebastian-palomares-v2";

// 1. Array de Herramientas / Skills (variable "m")
const skills = [
  { title: "Meta Ads", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
  { title: "Google Ads", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { title: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { title: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { title: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { title: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { title: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", style: { filter: "invert(1)" } },
  { title: "SEO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
];

// 2. Array de Testimonios (variable "n")
const testimonials = [
  {
    quote: "Sebastian lideró campañas BTL que superaron nuestras expectativas de engagement. Su capacidad para coordinar equipos y proveedores es excepcional.",
    name: "Moving Pack",
    job: "Agencia de Marketing"
  },
  {
    quote: "Su gestión de comunidades para nuestras marcas Bosch y MAPFRE fue impecable. Reportería clara, métricas optimizadas y contenido de calidad.",
    name: "Havas Group",
    job: "Agencia de Publicidad"
  },
  {
    quote: "Desde la estrategia digital hasta las activaciones presenciales, Sebastian aporta una visión 360° que pocas personas tienen en el mercado.",
    name: "Ebombo",
    job: "Startup de Eventos"
  }
];

// 3. Componente de Título de Sección (variable "j")
const SectionTitle = ({ title }) => (
  <div className="overflow-x-hidden w-full pt-5">
    <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-10 pt-4 md:pt-0 md:w-max">
      {title}
    </h2>
  </div>
);

// 4. Componente Principal Home (variable "q")
export default function Home() {
  return (
    <Layout
      currentPage="Home"
      meta={{ desc: "Sebastian Palomares - Productor BTL, Community Manager y Creador de Contenido en Lima, Perú. Experiencia en Entel, Softys, UNICEF, Havas." }}
    >
      {/* SECCIÓN 1: HERO */}
      <div className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1" style={{ maxWidth: "1200px" }}>
        <img src={`${basePath}/static/profile.jpg`} alt="Sebastian Palomares" className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-fun-pink shadow-lg" />
        <p className="text-xl mb-5">Hola, soy Sebastian Palomares.</p>
        
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          Disfruto <span className="heroShiny1 text-fun-pink">produciendo</span> y <span className="heroShiny2 text-fun-pink">creando</span> experiencias de marca.
          
          <svg className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[350px]" style={{ animationDelay: "0.3s" }} viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="55" textAnchor="middle" style={{ fontFamily: "'Gloria Hallelujah', cursive", fontSize: "52px", fill: "none", stroke: "#c084fc", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", opacity: 0.5 }}>
              MARCA
            </text>
          </svg>
          
          <svg className="sqD hidden sm:block bottom-[-340px] left-[-180px] w-[200px]" style={{ animationDelay: "0.4s" }} viewBox="0 0 150 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="50" textAnchor="middle" style={{ fontFamily: "'Gloria Hallelujah', cursive", fontSize: "52px", fill: "none", stroke: "#c084fc", strokeWidth: 2, strokeLinecap: "round"