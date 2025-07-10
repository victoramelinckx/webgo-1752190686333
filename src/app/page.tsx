
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tu negocio: web lista en un día con soporte continuo." cta1="Digitaliza Ahora" />
<How step1Title="Contáctanos" step1Desc="Inicia el proceso con una llamada rápida." step2Title="Creamos tu Web" step2Desc="Tu sitio de ventas en menos de 24 horas." step3Title="Soporte 24/7" step3Desc="Estamos aquí para ayudarte siempre." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Rápidamente" subheadline="Transformamos negocios físicos en exitosos e-commerce sin complicaciones ni tiempo desperdiciado." beneficiotitulo1="Estrategia Rápida" beneficio1="Genera ventas online fácilmente." beneficiotitulo2="Gestión Sencilla" beneficio2="Ahorra tiempo con nuestro soporte." />
<Services heading="Digitaliza tu Negocio en 24 Horas" description="Transformamos tu presencia online sin que inviertas tiempo." services={[{"name":"Desarrollo Rápido","icon":"lightning","description":"Webs listas en menos de 24 horas."},{"name":"SEO Optimización","icon":"chart-line","description":"Aparece primero en las búsquedas."},{"name":"Gestión Continua","icon":"cogs","description":"Nos ocupamos de todo, siempre."},{"name":"Estrategias de Venta","icon":"bullseye","description":"Atrae clientes y aumenta ingresos."},{"name":"Soporte 24/7","icon":"headset","description":"Estamos contigo siempre que nos necesites."},{"name":"Integración de Sistemas","icon":"puzzle-piece","description":"Conecta tus ventas y herramientas fácilmente."}]} />
<BeforeAndAfter subheadline="Transformaciones digitales que impulsan el éxito y la innovación." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas si solo vendo por recomendación?","respuesta":"WebGo transforma tus recomendaciones en ventas online al crear un sitio web atractivo y sencillo de usar. Nosotros nos encargamos de todo, desde el diseño hasta la gestión, para que puedas enfocarte en lo que realmente importa: tu negocio."},{"pregunta":"¿Qué beneficios ofrece WebGo para emprendedores que no tienen tiempo para gestionar un sitio web?","respuesta":"WebGo se encarga de todo tu sitio web, desde la creación hasta el mantenimiento. Esto te ahorra tiempo y esfuerzo, permitiéndote concentrarte en hacer crecer tu negocio mientras nosotros atraemos nuevos clientes online."},{"pregunta":"¿Cómo puede WebGo ayudarme a generar ventas online si no sé por dónde empezar?","respuesta":"WebGo simplifica el proceso de ventas online al construir un sitio web optimizado que atrae clientes y genera ventas automáticamente. No necesitas experiencia previa; nuestro equipo experto lo hace todo por ti."},{"pregunta":"¿Qué hace diferente a WebGo de otros servicios de creación de sitios web?","respuesta":"WebGo no solo crea un sitio web, sino que lo optimiza para ventas online y se asegura de que sea fácil de usar para tus clientes. Ofrecemos un enfoque integral que otros servicios no brindan, desde el diseño hasta la optimización SEO."},{"pregunta":"¿Puede WebGo mejorar la visibilidad de mi negocio en línea?","respuesta":"Sí, WebGo mejora tu visibilidad online al diseñar un sitio web optimizado para SEO, aumentando tus posibilidades de ser encontrado por clientes potenciales en Internet. Más visibilidad significa más oportunidades de ventas."}]} />
<BookAppointment 
                      heading="Transforma Recomendaciones en Ventas Online" 
                      description="Con WebGo, digitaliza tu negocio y multiplica tus ventas sin complicaciones. Descubre cómo podemos ayudarte a crecer en el mundo digital hoy mismo."
                      formPostUrl="api/contact-us"
                      projectId="yY4MtF3YwKVWN9xREX0Q6WupIOD2"
                    />
<Footer />
    </main>
  );
}
