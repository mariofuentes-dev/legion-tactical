# Legion Tactical

Plataforma web y landing page oficial para **Legion Tactical**, enfocada en la simulación de airsoft y el entrenamiento táctico especializado.

---

## 🛠 Tecnologías Utilizadas

Este proyecto está construido bajo estándares de desarrollo de 2026, utilizando un stack moderno, escalable y optimizado para ofrecer el máximo rendimiento y una experiencia de usuario fluida:

- **React 19** - Biblioteca principal para la construcción de interfaces de usuario interactivas.
- **Vite 6** - Herramienta de construcción y entorno de desarrollo de nueva generación, ultra rápido.
- **Tailwind CSS 4** - Framework de utilidades CSS para un diseño ágil, moderno y completamente responsive.
- **TypeScript 5.8** - Superconjunto de JavaScript que añade tipado estático, garantizando un código más robusto y mantenible.

---

## 🚀 Guía de Instalación Local

Para colaborar en el desarrollo o ejecutar el proyecto en tu propio entorno, sigue estos pasos detallados.

### Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu sistema operativo:
- **Node.js** (Versión 20 LTS, 22 LTS o superior). Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **Git** para el control de versiones.

### Paso a paso

1. **Clonar el repositorio**
   Abre tu terminal de preferencia y clona el código fuente en tu máquina local:
   ```bash
   git clone https://github.com/mariofuentes-dev/legion-tactical.git
   cd legion-tactical
   ```

2. **Instalar dependencias**
   Descarga e instala todos los paquetes necesarios definidos en el archivo de configuración del proyecto:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   Una vez concluida la instalación, levanta el entorno de pruebas local:
   ```bash
   npm run dev
   ```
   La consola te devolverá una URL local (generalmente `http://localhost:3000`). Ábrela en tu navegador para ver la aplicación en funcionamiento. Gracias a la tecnología de Hot Module Replacement (HMR) de Vite, cualquier modificación que realices en el código se reflejará de forma instantánea.

---

## 🌐 Guía de Compilación y Despliegue (Hosting)

Esta aplicación genera archivos estáticos optimizados tras su compilación. **Por razones de seguridad y rendimiento, jamás debes subir el código fuente original sin compilar a un servidor de producción.**

### 1. Compilación del Proyecto

Para generar la versión final orientada a producción, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm run build
```

Este proceso de empaquetado creará automáticamente un directorio llamado `dist/` (distribution). **Los archivos generados dentro de esta carpeta son los únicos que necesitas para que la web funcione en internet.**

### 2. Opciones de Despliegue

Puedes alojar el proyecto utilizando el método que mejor se adapte a tu infraestructura:

#### Opción A: Alojamiento Tradicional (cPanel, Hostinger, Servidores Compartidos)
Ideal si gestionas un entorno clásico mediante FTP o un panel de control.

1. Tras ejecutar la compilación, localiza la carpeta `dist/` en tu ordenador.
2. Accede al administrador de archivos de tu panel de hosting o utiliza un cliente FTP (como FileZilla).
3. Navega hasta el directorio público de tu servidor (suele llamarse `public_html`, `www`, `htdocs` o similar).
4. Copia **únicamente el contenido interior** de la carpeta `dist/` (`index.html`, carpeta `assets/`, etc.) y pégalo directamente en la raíz pública de tu servidor.
5. **Aviso sobre enrutamiento (Importante):** Al ser una aplicación React, si utilizas un servidor web como Apache, debes crear un archivo `.htaccess` en tu carpeta pública con reglas de reescritura para que todas las peticiones apunten al archivo `index.html`. Esto evita errores `404 Not Found` al recargar la página en rutas específicas.

#### Opción B: Plataformas Cloud Modernas (Vercel, Netlify, Cloudflare Pages)
Es la metodología más recomendada por la industria actual, ya que estas plataformas están preconfiguradas para entornos React/Vite y gestionan el enrutamiento de forma nativa.

1. Inicia sesión en la plataforma elegida (ej. [Vercel](https://vercel.com/)).
2. Vincula tu cuenta de GitHub e importa el repositorio `legion-tactical`.
3. La plataforma detectará la configuración automáticamente. Verifica que los parámetros coincidan con:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Haz clic en "Deploy" (Desplegar). 
5. A partir de este momento, cada vez que realices un `git push` a la rama principal (`main`), la plataforma compilará y actualizará la web en producción de manera automática (Integración Continua).
