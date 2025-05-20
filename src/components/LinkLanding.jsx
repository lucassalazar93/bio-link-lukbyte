// src/components/LinkLanding.jsx
import "./linkLanding.css";
import perfilImage from "../assets/logoLukbyte.png";

const LinkLanding = () => {
  return (
    <div className="link-container">
      <div className="link-card">
        <img src={perfilImage} alt="Perfil" className="link-avatar" />
        <h1>Lukbyte</h1>
        <p className="subtext">
          💡 Transformamos ideas En Experiencias Digitales Inolvidables 📲👨🏻‍💻
        </p>

        <div className="link-buttons">
          {/* WhatsApp - Solicita tu web */}
          <a
            href="https://wa.me/573150399322?text=¡Hola%20Lukbyte!%20Estoy%20interesado%20en%20crear%20mi%20sitio%20web%20personalizado.%20¿Podrías%20darme%20más%20información?"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Solicita tu web por WhatsApp
          </a>

          {/* Sitio web */}
          <a
            href="https://lukbyte-my-website.vercel.app/?scrollTo=inicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Ver sitio web oficial
          </a>

          {/* Portafolio */}
          <a
            href="https://lukbyte-my-website.vercel.app/servicios/ejemplos#web"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 Ver portafolio de proyectos
          </a>

          {/* Invitaciones digitales */}
          <a
            href="https://lukbyte-my-website.vercel.app/servicios/invitaciones-digitales"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎉 Invitaciones digitales
          </a>

          {/* Agenda tu demo - WhatsApp con mensaje */}
          <a
            href="https://wa.me/573150399322?text=Hola%20Lukbyte%2C%20me%20gustar%C3%ADa%20agendar%20una%20demo%20para%20conocer%20mejor%20sus%20servicios%20digitales."
            target="_blank"
            rel="noopener noreferrer"
          >
            📅 Agenda tu demo
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@lukbyte.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎥 Mira en TikTok
          </a>
        </div>

        <p className="footer">@2025 Lukbyte - Lucas Salazar 👨🏻‍💻</p>
      </div>
    </div>
  );
};

export default LinkLanding;
