import { motion } from 'motion/react';
import { Mail, Phone, ArrowRight, Lock, Truck, Terminal, Database, Code, Layout, ShieldCheck, Cpu, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/50">
    <div className="flex justify-between items-center w-full px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
      <div className="text-xl font-extrabold tracking-tighter font-headline flex items-center gap-2">
        <div className="w-6 h-6 bg-primary-fixed rounded-sm shadow-[2px_2px_0px_black]"></div>
        KUMAR
      </div>
      <div className="hidden md:flex gap-10 items-center">
        {['Home', 'Work', 'Stack', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant hover:text-black transition-colors"
          >
            {item}
          </a>
        ))}
        <button className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-primary-fixed hover:text-black transition-all duration-500">
          Resume
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative pt-40 pb-32 px-6 md:px-12 max-w-[1440px] mx-auto min-h-[90vh] flex flex-col justify-center overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-8"
      >
        <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-outline-variant rounded-full text-[9px] font-bold tracking-[0.25em] uppercase text-on-surface-variant mb-10">
          <span className="flex h-2 w-2 rounded-full bg-primary-fixed animate-pulse"></span>
          Available for select projects
        </div>
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-12">
          Technical Architect. <br />
          <span className="text-on-surface-variant/20 italic">Frontend Engineer.</span><br />
          <span className="underline decoration-primary-fixed decoration-[8px] md:decoration-[12px] underline-offset-[8px]">Creative Thinker.</span>
        </h1>
        <div className="max-w-xl">
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12">
            Building production-ready systems at the intersection of robust <span className="text-black font-semibold">Information Science</span> and high-performance <span className="text-black font-semibold">User Interface Design</span>.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#work" className="group relative inline-flex items-center gap-4 bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-xs tracking-widest uppercase overflow-hidden transition-all">
              <span className="relative z-10">Explore Case Studies</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-primary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:col-span-4 relative hidden lg:block"
      >
        <div className="relative w-full aspect-[4/5] border border-outline-variant bg-white p-12 overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 border border-black flex items-center justify-center font-mono text-xs">01</div>
            <span className="font-mono text-[10px] text-on-surface-variant tracking-tighter uppercase leading-none">System_Architecture_v4.2</span>
          </div>
          <div className="relative flex-1 flex items-center justify-center py-10">
            <svg className="w-full h-full text-black/5" viewBox="0 0 200 200">
              <circle className="stroke-black/10 fill-none" cx="100" cy="100" r="80" strokeWidth="0.5"></circle>
              <rect className="stroke-black/20 fill-none rotate-45 origin-center" x="50" y="50" width="100" height="100" strokeWidth="0.5"></rect>
              <circle className="fill-primary-fixed" cx="100" cy="100" r="12"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[120%] h-[0.5px] bg-outline-variant rotate-[35deg]"></div>
              <div className="w-[120%] h-[0.5px] bg-outline-variant -rotate-[35deg]"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-1 bg-black w-full"></div>
            <div className="flex justify-between font-mono text-[10px] uppercase font-bold">
              <span>Stability: 99.9%</span>
              <span>Core: React/Py</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Expertise = () => (
  <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-outline-variant">
    <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
      <div className="max-w-2xl">
        <h2 className="font-headline text-xs font-bold tracking-[0.4em] uppercase text-primary-fixed bg-black inline-block px-2 py-1 mb-6">Expertise</h2>
        <p className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Engineered for speed, built for security, designed for users.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
      {[
        { id: '01', title: 'Interface Architecture', category: 'Front-End', desc: 'Developing deterministic UI components using React and TypeScript with a strict focus on atomic design principles.', icon: Layout },
        { id: '02', title: 'Data Cryptography', category: 'Security', desc: 'Implementing end-to-end encryption protocols and secure server-side logic using modern Python frameworks.', icon: ShieldCheck },
        { id: '03', title: 'Intelligent Systems', category: 'AI & ML', desc: 'Integrating machine learning models for predictive analytics, ensuring seamless bridges between logic and UI.', icon: Cpu },
      ].map((item) => (
        <div key={item.id} className="bg-white p-12 group transition-all duration-500 hover:bg-black hover:text-white">
          <span className="text-[10px] font-mono mb-12 block text-on-surface-variant group-hover:text-primary-fixed transition-colors">{item.id} // {item.category}</span>
          <h3 className="font-headline text-2xl font-bold mb-6">{item.title}</h3>
          <p className="text-on-surface-variant group-hover:text-white/60 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Work = () => (
  <section id="work" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
    <div className="flex justify-between items-end mb-16">
      <div>
        <h2 className="font-headline text-xs font-bold tracking-[0.4em] uppercase text-primary-fixed bg-black inline-block px-2 py-1 mb-6">Featured Work</h2>
        <h3 className="font-headline text-4xl font-extrabold tracking-tight">Case Studies</h3>
      </div>
      <a href="#" className="text-[10px] font-bold tracking-widest uppercase border-b-2 border-primary-fixed pb-2 flex items-center gap-2 hover:gap-4 transition-all">
        All Work <ExternalLink className="w-3 h-3" />
      </a>
    </div>
    <div className="grid grid-cols-1 gap-24">
      {/* Main Project */}
      <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 bg-surface-container rounded-2xl overflow-hidden aspect-[16/10] relative border border-outline-variant/30 transition-all duration-700 group-hover:border-primary-fixed">
          <img 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000" 
            alt="Smart Health Advisor"
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute bottom-8 left-8 flex gap-3">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest rounded-full border border-white/20">Healthcare AI</span>
            <span className="px-4 py-1.5 bg-primary-fixed text-black text-[9px] font-bold uppercase tracking-widest rounded-full">Active</span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <span className="font-mono text-[10px] text-on-surface-variant mb-6 block">PROJECT // 01</span>
          <h4 className="font-headline text-3xl font-extrabold mb-6 group-hover:text-primary-fixed transition-colors">Smart Health Advisor</h4>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            A predictive healthcare engine utilizing AES-256 encrypted records and machine learning to forecast chronic conditions with 94% accuracy.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
            {['React.js', 'Python', 'Scikit-Learn'].map((tech) => (
              <li key={tech} className="flex items-center gap-2 text-[10px] font-bold text-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full"></span> {tech}
              </li>
            ))}
          </ul>
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-black group-hover:text-primary-fixed group-hover:border-black transition-all">
            <ArrowRight className="w-5 h-5 -rotate-45" />
          </button>
        </div>
      </div>

      {/* Small Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { title: 'Secure Messaging Core', category: 'Cryptography System', desc: 'Military-grade AES encryption layer for web applications, ensuring data privacy in transit.', icon: Lock, tech: ['Flask', 'Python'] },
          { title: 'Logistics Management', category: 'Courier CMS', desc: 'High-concurrency delivery engine with automated routing and real-time tracking capabilities.', icon: Truck, tech: ['PHP', 'MySQL'] },
        ].map((project) => (
          <div key={project.title} className="group border-[0.5px] border-outline-variant p-10 hover:shadow-[0_0_0_1px_#CDFF00] transition-all bg-white rounded-xl">
            <div className="flex justify-between mb-12">
              <div className="w-10 h-10 border border-black flex items-center justify-center">
                <project.icon className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-bold tracking-widest text-on-surface-variant uppercase">{project.category}</span>
            </div>
            <h4 className="font-headline text-2xl font-bold mb-4">{project.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{project.desc}</p>
            <div className="flex gap-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[9px] font-bold tracking-widest uppercase py-1 border-b border-primary-fixed">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stack = () => (
  <section id="stack" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
    <h2 className="font-headline text-xs font-bold tracking-[0.4em] uppercase text-primary-fixed bg-black inline-block px-2 py-1 mb-16 mx-auto block text-center w-fit">Technical Arsenal</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[160px]">
      {/* Python (Big) */}
      <div className="col-span-2 row-span-2 bg-black text-white p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute inset-0 bento-dot opacity-10 group-hover:opacity-20 transition-opacity"></div>
        <div className="relative z-10 flex justify-between items-start">
          <Terminal className="w-10 h-10 text-primary-fixed" />
          <div className="text-[10px] font-mono opacity-50">#001_CORE</div>
        </div>
        <div className="relative z-10">
          <h4 className="font-headline text-3xl font-extrabold mb-2">Python</h4>
          <p className="text-[10px] text-primary-fixed/70 font-bold tracking-widest uppercase">Logic & Intelligence</p>
        </div>
      </div>
      {/* React (Mid) */}
      <div className="col-span-2 row-span-1 bg-white border-[0.5px] border-outline-variant p-8 rounded-2xl flex items-center justify-between group hover:border-primary-fixed transition-all shadow-sm">
        <div>
          <h4 className="font-headline text-xl font-bold mb-1">React.js</h4>
          <p className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">Client Runtime</p>
        </div>
        <Code className="w-8 h-8 group-hover:rotate-12 transition-transform duration-700" />
      </div>
      {/* SQL */}
      <div className="col-span-2 row-span-1 bg-surface-container p-8 rounded-2xl flex flex-col justify-center border-[0.5px] border-outline-variant hover:border-black transition-all">
        <div className="flex items-center gap-4">
          <Database className="w-6 h-6" />
          <div>
            <h4 className="font-headline font-bold">SQL / NoSQL</h4>
            <p className="text-[9px] text-on-surface-variant font-bold">Persistence</p>
          </div>
        </div>
      </div>
      {/* Mini Skills */}
      {['TS', 'FLASK', 'MONGO'].map((skill) => (
        <div key={skill} className="bg-white border-[0.5px] border-outline-variant rounded-2xl flex items-center justify-center group hover:bg-primary-fixed transition-colors cursor-default">
          <span className="font-bold text-[10px] tracking-widest">{skill}</span>
        </div>
      ))}
      <div className="bg-black text-white rounded-2xl flex items-center justify-center group hover:bg-primary-fixed hover:text-black transition-colors cursor-default">
        <span className="font-bold text-[10px] tracking-widest">GIT</span>
      </div>
      {/* Java */}
      <div className="col-span-2 row-span-1 border-[0.5px] border-outline-variant rounded-2xl flex items-center justify-between px-8 bg-white relative overflow-hidden shadow-sm">
        <div className="absolute -right-4 -bottom-4 opacity-5">
          <Code className="w-24 h-24" />
        </div>
        <div>
          <h4 className="font-headline text-lg font-bold">Java</h4>
          <p className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">Legacy & Logic</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
    <div className="bg-black rounded-3xl p-12 md:p-24 overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 right-0 w-full h-full bento-dot opacity-5"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.9] mb-12">
            Building the <span className="text-primary-fixed italic">future</span> of tech.
          </h2>
          <p className="text-white/40 text-lg mb-16 max-w-sm">I'm currently accepting new opportunities for the 2025 calendar. Let's engineer something memorable.</p>
          <div className="space-y-8">
            <a href="mailto:vkk24554@gmail.com" className="flex items-center gap-6 group">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                <Mail className="w-5 h-5 text-white group-hover:text-black" />
              </div>
              <span className="text-white font-mono text-sm tracking-tighter">vkk24554@gmail.com</span>
            </a>
            <a href="tel:+918867014612" className="flex items-center gap-6 group">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                <Phone className="w-5 h-5 text-white group-hover:text-black" />
              </div>
              <span className="text-white font-mono text-sm tracking-tighter">+91 8867014612</span>
            </a>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-3">
              <label className="text-[9px] font-bold text-primary-fixed tracking-[0.3em] uppercase">Identity</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 text-white py-4 focus:border-primary-fixed focus:outline-none transition-colors placeholder:text-white/10" 
                placeholder="NAME / ORGANIZATION" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[9px] font-bold text-primary-fixed tracking-[0.3em] uppercase">Brief</label>
              <textarea 
                className="w-full bg-transparent border-b border-white/20 text-white py-4 focus:border-primary-fixed focus:outline-none transition-colors placeholder:text-white/10" 
                placeholder="DESCRIBE YOUR PROJECT" 
                rows={4}
              />
            </div>
            <button className="w-full bg-primary-fixed text-black py-6 rounded-full font-extrabold text-xs tracking-[0.3em] uppercase hover:bg-white transition-all">
              Submit Inquest
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 md:px-12 border-t border-outline-variant bg-white">
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-xl font-extrabold tracking-tighter font-headline flex items-center gap-2">
          <div className="w-5 h-5 bg-black rounded-sm"></div>
          KUMAR
        </div>
        <div className="flex gap-12 text-[9px] font-bold tracking-[0.3em] uppercase">
          <a href="https://github.com/Kumarv2222" target="_blank" rel="noreferrer" className="hover:text-primary-fixed transition-colors">Github</a>
          <a href="https://linkedin.com/in/Kumar-vk" target="_blank" rel="noreferrer" className="hover:text-primary-fixed transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-fixed transition-colors">Twitter</a>
        </div>
        <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">
          © 2024 SYSTEM // ARCHITECT
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 technical-grid pointer-events-none -z-10 opacity-40"></div>
      <div className="fixed inset-0 grainy-bg pointer-events-none -z-10"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
