/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare, 
  Send, 
  Home, 
  Briefcase, 
  Droplets, 
  Users, 
  Recycle, 
  Clock, 
  Heart,
  ArrowRight,
  ChevronDown,
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Tractor,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getGeminiResponse } from './services/geminiService';

// --- Types ---
interface Message {
  role: 'user' | 'model';
  text: string;
}

// --- Components ---

const Stats = () => {
  const stats = [
    { label: "Toneladas de acero recicladas", value: 850, suffix: "t" },
    { label: "Proyectos en Santa Fe", value: 120, suffix: "+" },
    { label: "Personalizable", value: 100, suffix: "%" }
  ];

  return (
    <section className="py-12 bg-hope-black text-hope-white border-y border-hope-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-black text-hope-orange mb-2"
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <p className="text-xs uppercase tracking-widest text-hope-white/40 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-hope-white/90 backdrop-blur-md border-b border-hope-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="C:\Users\mateo\OneDrive\Escritorio\logo-hope.jpg" alt="Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
            <span className="text-xl font-black tracking-tighter text-hope-black hidden sm:block">
              HOPE CONTENEDORES<span className="text-hope-orange">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#productos" className="text-sm font-medium hover:text-hope-orange transition-colors">Productos</a>
            <a href="#proyectos" className="text-sm font-medium hover:text-hope-orange transition-colors">Proyectos</a>
            <a href="#nosotros" className="text-sm font-medium hover:text-hope-orange transition-colors">Nosotros</a>
            <a href="#sustentabilidad" className="text-sm font-medium hover:text-hope-orange transition-colors">Sustentabilidad</a>
            <a href="#contacto" className="text-sm font-medium hover:text-hope-orange transition-colors">Contacto</a>
            <button className="bg-hope-black text-hope-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-hope-orange transition-all transform hover:scale-105">
              Presupuesto
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-hope-white border-b border-hope-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#productos" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Productos</a>
              <a href="#proyectos" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Proyectos</a>
              <a href="#nosotros" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Nosotros</a>
              <a href="#sustentabilidad" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Sustentabilidad</a>
              <a href="#contacto" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Contacto</a>
              <button className="w-full bg-hope-orange text-hope-white py-4 rounded-xl font-bold">
                Solicitar Presupuesto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hope-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover opacity-20" 
          alt="Background" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hope-white via-hope-white/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-hope-orange/10 text-hope-orange text-xs font-bold uppercase tracking-wider mb-6">
              Esperanza, Santa Fe
            </span>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.85] text-hope-black mb-8 tracking-tighter">
              ESPACIOS <br />
              <span className="text-hope-orange">SOSTENIBLES</span> <br />
              QUE IMPULSAN <br />
              TU FUTURO
            </h1>
            <p className="text-xl text-hope-black/70 max-w-lg mb-10 leading-relaxed">
              Transformamos contenedores marítimos en soluciones habitables e industriales de alta calidad. Construcción modular rápida, eficiente y con triple impacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#productos"
                className="bg-hope-black text-hope-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-hope-orange transition-all group shadow-xl shadow-hope-black/10"
              >
                Ver Catálogo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#nosotros"
                className="border-2 border-hope-black/10 px-10 py-5 rounded-full font-bold hover:bg-hope-black/5 transition-all text-center"
              >
                Nuestra Historia
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] border-8 border-hope-white">
              <img 
                src="/hope-principal.png" // <--- SACALE EL "public" Y DEJÁ LA BARRA
                alt="Hope Contenedores Hero" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"  
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-hope-orange p-8 rounded-[32px] shadow-2xl hidden sm:block">
              <div className="flex items-center gap-4 text-hope-white">
                <Recycle size={40} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Impacto</p>
                  <p className="text-2xl font-black">100% Reciclable</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductDetailModal = ({ isOpen, onClose, product }: { isOpen: boolean; onClose: () => void; product: any }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] bg-hope-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-hope-white w-full max-w-4xl max-h-[90vh] rounded-[40px] overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <button onClick={onClose} className="absolute top-6 right-6 bg-hope-white p-2 rounded-full shadow-lg hover:bg-hope-orange hover:text-hope-white transition-all">
                <X size={24} />
              </button>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-hope-black/60 to-transparent">
                <h3 className="text-3xl font-black text-hope-white uppercase tracking-tighter">{product.title}</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 sm:p-12 custom-scrollbar">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-hope-orange mb-4">Descripción General</p>
                  <p className="text-hope-black/70 leading-relaxed mb-8">{product.longDescription}</p>
                  
                  <p className="text-xs font-bold uppercase tracking-widest text-hope-orange mb-4">Especificaciones Técnicas</p>
                  <ul className="space-y-3">
                    {product.details.map((detail: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-hope-black/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-hope-orange mt-1.5 shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-hope-orange mb-4">Galería de Detalles</p>
                  <div className="grid grid-cols-2 gap-4">
                    <img src={`https://picsum.photos/seed/${product.title}-1/400/300`} className="rounded-2xl shadow-sm" alt="Detail 1" referrerPolicy="no-referrer" />
                    <img src={`https://picsum.photos/seed/${product.title}-2/400/300`} className="rounded-2xl shadow-sm" alt="Detail 2" referrerPolicy="no-referrer" />
                    <img src={`https://picsum.photos/seed/${product.title}-3/400/300`} className="rounded-2xl shadow-sm" alt="Detail 3" referrerPolicy="no-referrer" />
                    <img src={`https://picsum.photos/seed/${product.title}-4/400/300`} className="rounded-2xl shadow-sm" alt="Detail 4" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-hope-black/5 p-6 rounded-3xl border border-hope-black/5">
                    <p className="text-sm font-bold mb-2">¿Te interesa este módulo?</p>
                    <p className="text-xs text-hope-black/60 mb-4">Consultá por personalizaciones y tiempos de entrega.</p>
                    <a 
                      href="https://wa.me/543496557841" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-hope-black text-hope-white px-6 py-3 rounded-full text-xs font-bold hover:bg-hope-orange transition-all"
                    >
                      Consultar por WhatsApp <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = [
    {
      title: "Línea Habitacional",
      icon: <Home className="w-6 h-6" />,
      items: ["Viviendas", "Quinchos", "Estudios"],
      image: "https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=600",
      color: "bg-blue-500",
      longDescription: "Nuestra línea habitacional combina diseño moderno con la máxima eficiencia térmica. Transformamos contenedores en hogares acogedores, estudios luminosos o quinchos funcionales, listos para habitar en tiempo récord.",
      details: [
        "Aislación térmica en lana de vidrio o poliuretano inyectado.",
        "Revestimientos interiores en Durlock o madera tratada.",
        "Aberturas de aluminio de alta gama con vidrios DVH.",
        "Instalación eléctrica y sanitaria completa.",
        "Pisos flotantes de PVC de alto tránsito.",
        "Terminaciones exteriores personalizables."
      ]
    },
    {
      title: "Línea Industrial",
      icon: <Briefcase className="w-6 h-6" />,
      items: ["Oficinas", "Obras", "Pañoles"],
      image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&q=80&w=600",
      color: "bg-hope-orange",
      longDescription: "Ideal tanto para oficinas como para obras. Construimos con materiales que se adaptan a tu presupuesto y necesidad, con posibilidades que van desde durlock hasta pisos de pvc o aberturas. Consultanos por alternativas económicas, estándar o premium.",
      details: [
        "Estructura reforzada para traslados frecuentes.",
        "Revestimiento interior adaptable (Durlock, PVC).",
        "Iluminación LED de alta eficiencia.",
        "Puertas de seguridad reforzadas.",
        "Pre-instalación para aire acondicionado.",
        "Alternativas Económicas, Estándar o Premium."
      ]
    },
    {
      title: "Línea Sanitarios",
      icon: <Droplets className="w-6 h-6" />,
      items: ["Baños 6m", "Baños 3m", "Duchas"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      color: "bg-teal-500",
      longDescription: "Diseñamos tu sanitario ad hoc para cualquier tipo de industria. Con posibilidad de división entre hombre y mujer, bidet, duchas y más. Como todos nuestros productos, es personalizado y se configura en base a tu necesidad.",
      details: [
        "Versión 6 metros (ducha opcional).",
        "Versión 3 metros compacta.",
        "División hombre/mujer disponible.",
        "Configuración ad-hoc según industria.",
        "Termotanque eléctrico y grifería de calidad.",
        "Alternativas Económicas, Estándar o Premium."
      ]
    },
    {
      title: "Línea Agro",
      icon: <Tractor className="w-6 h-6" />,
      items: ["Comedores", "Viviendas Personal", "Depósitos"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
      color: "bg-emerald-600",
      longDescription: "Soluciones modulares para el sector agropecuario. Comedores de campo, viviendas para personal y depósitos de insumos diseñados para la exigencia del entorno rural.",
      details: [
        "Diseño resistente al entorno rural.",
        "Viviendas para personal de campo.",
        "Comedores móviles o fijos.",
        "Depósitos de insumos seguros.",
        "Fácil traslado entre lotes.",
        "Aislación térmica reforzada."
      ]
    }
  ];

  return (
    <section id="productos" className="py-24 bg-hope-white text-hope-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase">NUESTROS PRODUCTOS</h2>
          <p className="text-hope-black/60 max-w-2xl mx-auto">
            Soluciones modulares diseñadas para cada necesidad, desde el confort de un hogar hasta la eficiencia de una obra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-hope-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-hope-black/5 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 p-2 rounded-xl text-hope-white ${cat.color}`}>
                  {cat.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <ul className="space-y-2 mb-8">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-hope-black/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-hope-orange"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setSelectedProduct(cat)}
                  className="w-full py-3 rounded-xl border-2 border-hope-black/10 font-bold text-sm hover:bg-hope-orange hover:border-hope-orange hover:text-hope-white transition-all"
                >
                  Saber más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ProductDetailModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      client: "POLICIA DE SANTA FE",
      description: "Oficina de 30 metros cuadrados diseñada para operatividad y durabilidad.",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "U.E. CORREDOR VIAL N6",
      description: "Oficina de 30 metros cuadrados para control y administración vial.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-hope-black text-hope-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase">PROYECTOS HOPE</h2>
          <p className="text-hope-white/60 max-w-2xl mx-auto">
            Casos de éxito que demuestran nuestra capacidad de respuesta y calidad constructiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[40px] overflow-hidden shadow-2xl aspect-video border border-hope-white/10"
            >
              <img src={project.image} alt={project.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-hope-black via-hope-black/20 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-hope-orange text-xs font-bold uppercase tracking-widest mb-2">Cliente Institucional</h3>
                <p className="text-hope-white text-3xl font-black mb-2">{project.client}</p>
                <p className="text-hope-white/70 text-sm max-w-md">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-hope-white text-hope-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hope-orange/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase">TRABAJEMOS JUNTOS</h2>
            <p className="text-hope-black/60 text-lg mb-12 leading-relaxed">
              ¿Tenés un proyecto en mente? Nuestro equipo está listo para asesorarte y transformar tu idea en una realidad modular.
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6">
                <div className="bg-hope-orange p-4 rounded-2xl">
                  <Mail className="text-hope-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40">Email</p>
                  <p className="text-xl font-bold">hopecontenedores@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-hope-orange p-4 rounded-2xl">
                  <Phone className="text-hope-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40">WhatsApp</p>
                  <p className="text-xl font-bold">+54 3496 55-7841</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-hope-orange p-4 rounded-2xl">
                  <MapPin className="text-hope-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40">Ubicación</p>
                  <p className="text-xl font-bold">Parque Industrial Esperanza, Santa Fe</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-hope-black/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-hope-orange mb-6">Seguinos</h4>
              <div className="flex gap-4 mb-12">
                <a 
                  href="https://www.instagram.com/hopesacontenedores/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-hope-black text-hope-white rounded-2xl hover:bg-hope-orange transition-all shadow-lg shadow-hope-black/10"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100076858683258" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-hope-black text-hope-white rounded-2xl hover:bg-hope-orange transition-all shadow-lg shadow-hope-black/10"
                >
                  <Facebook size={24} />
                </a>
              </div>
              <p className="text-xs text-hope-black/40 uppercase tracking-widest font-bold">
                © 2026 Hope Contenedores. Todos los derechos reservados.
              </p>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <form className="bg-hope-black/5 p-10 rounded-[40px] border border-hope-black/10 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-hope-orange mb-2">Nombre Completo</label>
                <input type="text" className="w-full bg-hope-white border border-hope-black/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-hope-orange/50 transition-all" placeholder="Tu nombre..." />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-hope-orange mb-2">Email</label>
                <input type="email" className="w-full bg-hope-white border border-hope-black/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-hope-orange/50 transition-all" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-hope-orange mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-hope-white border border-hope-black/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-hope-orange/50 transition-all" placeholder="Contanos tu idea..."></textarea>
              </div>
              <button type="submit" className="w-full bg-hope-orange text-hope-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-hope-black transition-all shadow-xl shadow-hope-orange/20">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-24 overflow-hidden bg-hope-white text-hope-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400" alt="Team" className="rounded-3xl shadow-lg mt-12" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" alt="Work" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
             </div>
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hope-orange/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <h2 className="text-4xl font-black tracking-tighter mb-8">CONOCÉ A HOPE</h2>
            <div className="space-y-6 text-lg text-hope-black/70 leading-relaxed">
              <p>
                Fundada en 2022 en el Parque Industrial de Esperanza, Santa Fe, por <span className="text-hope-black font-bold">Ana Sanguineti</span> junto a su hermano <span className="text-hope-black font-bold">Franco</span> y un equipo apasionado.
              </p>
              <p>
                Nacimos con la visión de transformar el acero reciclado en espacios que inspiren. No solo construimos módulos; creamos oportunidades de crecimiento con un enfoque de <span className="text-hope-orange font-bold">triple impacto</span>: social, ambiental y económico.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-hope-orange" size={20} />
                    <span className="font-bold text-hope-black">Humano</span>
                  </div>
                  <p className="text-sm">Trato personalizado y cercano en cada proyecto.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-hope-orange" size={20} />
                    <span className="font-bold text-hope-black">Rápido</span>
                  </div>
                  <p className="text-sm">Entrega en tiempos récord frente a la obra tradicional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sustainability = () => {
  return (
    <section id="sustentabilidad" className="py-24 bg-hope-black text-hope-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="mx-auto text-hope-orange mb-6" size={48} fill="currentColor" />
        <h2 className="text-4xl font-black tracking-tighter mb-8">NUESTRO COMPROMISO</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-hope-white/5 border border-hope-white/10">
            <h3 className="text-xl font-bold mb-4 text-hope-orange">Ambiental</h3>
            <p className="text-hope-white/60 text-sm">Reciclamos contenedores marítimos, reduciendo la huella de carbono y el desperdicio de acero.</p>
          </div>
          <div className="p-8 rounded-3xl bg-hope-white/5 border border-hope-white/10">
            <h3 className="text-xl font-bold mb-4 text-hope-orange">Social</h3>
            <p className="text-hope-white/60 text-sm">Generamos empleo local en Esperanza y promovemos la formación técnica de nuestro equipo.</p>
          </div>
          <div className="p-8 rounded-3xl bg-hope-white/5 border border-hope-white/10">
            <h3 className="text-xl font-bold mb-4 text-hope-orange">Económico</h3>
            <p className="text-hope-white/60 text-sm">Ofrecemos soluciones eficientes que permiten a empresas y familias crecer de forma escalable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return null;
};

// --- Chatbot Widget ---

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Necesito ayuda para elegir mi contenedor",
    "Quiero ver modelos de viviendas",
    "Quiero información sobre la línea industrial"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMsg = messageToSend.trim();
    if (!text) setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const timeoutPromise = new Promise<string>((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 15000)
      );

      const response = await Promise.race([
        getGeminiResponse(userMsg, history),
        timeoutPromise
      ]);

      setMessages(prev => [...prev, { role: 'model', text: response || 'Lo siento, no pude procesar eso.' }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Perdón, me quedé pensando de más. ¿Podrías repetirme eso? O si es urgente, escribile a Exequiel por WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white w-[350px] sm:w-[400px] h-[600px] rounded-[2rem] shadow-2xl border border-black/5 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="p-6 flex justify-between items-center bg-white">
              <span className="font-bold text-lg text-hope-black">Hope Assistant</span>
              <button onClick={() => setIsOpen(false)} className="text-hope-black/40 hover:text-hope-black transition-colors">
                <ChevronDown size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 pb-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center text-center pt-8 space-y-6">
                  {/* Logo Icon */}
                  <div className="w-16 h-16 bg-hope-orange/10 rounded-2xl flex items-center justify-center transform rotate-12">
                    <div className="w-10 h-10 bg-hope-orange rounded-xl flex items-center justify-center transform -rotate-12">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-hope-black">¡Hola! 👋</h3>
                    <p className="text-hope-black/60">¿En qué te puedo ayudar hoy?</p>
                  </div>

                  <div className="w-full space-y-2 pt-4">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="w-full flex items-center justify-between p-4 bg-white border border-black/5 rounded-2xl hover:bg-hope-black/5 transition-colors group text-left"
                      >
                        <span className="text-sm font-medium text-hope-black/80">{q}</span>
                        <ArrowUpRight size={18} className="text-hope-black/20 group-hover:text-hope-orange transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pt-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-hope-orange text-hope-white rounded-tr-none' 
                          : 'bg-hope-black/5 text-hope-black rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-hope-black/5 p-4 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-hope-black/20 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-hope-black/20 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="w-1.5 h-1.5 bg-hope-black/20 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white">
              <div className="relative border-2 border-hope-black rounded-[1.5rem] p-4 focus-within:ring-4 focus-within:ring-hope-orange/10 transition-all">
                <textarea 
                  rows={2}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Escribí tu pregunta"
                  className="w-full bg-transparent resize-none text-sm focus:outline-none pr-12 text-hope-black placeholder:text-hope-black/30"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className={`absolute right-4 bottom-4 p-2 rounded-xl transition-all ${
                    input.trim() && !isLoading 
                      ? 'bg-hope-black/5 text-hope-black hover:bg-hope-orange hover:text-white' 
                      : 'bg-hope-black/5 text-hope-black/20'
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-hope-black/30 mt-4">
                La IA puede producir información inexacta
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-hope-orange text-hope-white p-5 rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 rounded-full bg-hope-orange animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        <span className="absolute right-full mr-4 bg-hope-black text-hope-white text-xs py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          ¿Te ayudo a elegir?
        </span>
      </motion.button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-hope-orange selection:text-hope-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Projects />
        <AboutUs />
        <Sustainability />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
