import { Link } from "react-router-dom";

const Help = () => {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>💬 Clon de WhatsApp</h1>
        <p style={styles.paragraph}>
          Esta aplicación actúa como una plataforma de comunicación digital que
          facilita el intercambio de mensajes en tiempo real y gestiona la
          persistencia de las interacciones y los datos de usuario.
        </p>
        <hr style={styles.hr} />
      </header>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>💾 Chats</h2>
        <p style={styles.paragraph}>
          La funcionalidad central del sistema es garantizar que la información
          se mantenga intacta entre sesiones. Esto se logra mediante:
        </p>
        <ul>
          <li>
            <strong>Contactos (Usuarios):</strong> Almacenamiento y recuperación
            de la lista de usuarios con los que se han iniciado conversaciones.
          </li>
          <li>
            <strong>Historial de Conversaciones:</strong> Registro cronológico de
            todos los mensajes enviados y recibidos, manteniendo la integridad
            de las interacciones pasadas.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>🎯 Módulos de la Interfaz de Usuario</h2>
        <p style={styles.paragraph}>
          La aplicación está segmentada en cuatro componentes clave que dirigen
          la experiencia del usuario y las funcionalidades del sistema:
        </p>

        <ol>
          <li>
            <h3> - 🎫 Autenticación (Contraseña)</h3>
            <p>
              <strong>Propósito:</strong> Proteger el acceso y verificar la
              identidad del usuario.
            </p>
            <p>
              <strong>Mecanismo:</strong> Requiere la validación de credenciales
              (contraseña) para iniciar una sesión privada en la plataforma.
            </p>
          </li>

          <li>
            <h3> - 📜 Lista de Contactos</h3>
            <p>
              <strong>Propósito:</strong> Navegación y selección de la
              conversación deseada.
            </p>
            <p>
              <strong>Mecanismo:</strong> Muestra una lista dinámica de
              contactos. Al seleccionar uno, se carga el historial de mensajes
              correspondiente en el módulo principal.
            </p>
          </li>

          <li>
            <h3> - 💬 Chat Principal</h3>
            <p>
              <strong>Propósito:</strong> Envío y recepción de mensajes en tiempo
              real.
            </p>
            <p>
              <strong>Mecanismo:</strong> Incluye un área para la composición del
              mensaje y un control de envío. Los mensajes se visualizan
              secuencialmente.
            </p>
          </li>

          <li>
            <h3> - ⚙️ Configuración</h3>
            <p>
              <strong>Propósito:</strong> Personalizacion de la experiencia y la interfaz.
            </p>
            <p>
              <strong>Opciones Disponibles:</strong>
            </p>
            <ul>
              <li>
                <strong>Ahorro de Energía:</strong> Activa un modo visual de baja
                luminosidad (modo oscuro) optimizando la eficiencia energética y
                la ergonomía visual.
              </li>
            </ul>
          </li>
        </ol>

        <section style={styles.section}>
          <ol>

            <h2 style={styles.subtitle}>🎯 Como levantar el repositorio</h2>
            <p>El codigo fuente se encuentra disponible publicamente
              en el siguiente repositorio:
              <p>
                https://github.com/Luksveliz/proyecto-final-react
              </p>
            </p>
            <p> <strong>Como levantar el repositorio:</strong>
              <li> Clona elrepositorio</li>
              <li> Instala las dependencias con <strong>npm install</strong></li>
              <li> Inicia con <strong>npm run dev</strong></li></p>

          </ol>
        </section>

        <section style={styles.section}>
          <ol>

            <h2 style={styles.subtitle}>🎯 Tecnologias Utilizadas</h2>

            <li> React - Biblioteca de interfaz de usuario</li>
            <li> Vite - Herramienta de desarrollo rápida</li>
            <li> React Route Dom - Navegacion del lado del cliente</li>

          </ol>
        </section>
      </section>

      <footer style={styles.footer}>
        <hr style={styles.hr} />
        <p>

          <Link to="/chat" style={styles.link}>
            Ir al Chat →
          </Link>
        </p>
      </footer>
    </main>
  );
};


const styles = {
  main: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    padding: "40px",
    margin: "40px auto",
    maxWidth: "800px",
    fontFamily: "Segoe UI, Roboto, Inter, sans-serif",
    color: "#0b1220",
    lineHeight: 1.6,
  },

  header: { textAlign: "center" },
  title: { color: "#25d366", fontSize: "2em", marginBottom: "10px" },
  subtitle: {
    color: "#25d366",
    borderBottom: "2px solid #25d366",
    paddingBottom: "4px",
  },

  paragraph: { marginBottom: "10px" },
  section: {
    background: "#fafcff",
    border: "1px solid #e4e7eb",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
  },

  hr: { border: 0, borderTop: "1px solid #e4e7eb", margin: "24px 0" },
  footer: { textAlign: "center", color: "#6b7280", marginTop: "30px" },
  link: { color: "#25d366", fontWeight: "600", textDecoration: "none" },
};

export default Help;