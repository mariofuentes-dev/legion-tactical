# Legion Tactical

Landing page y plataforma web para Legion Tactical (simulación de airsoft y entrenamiento táctico).

## Tecnologías Utilizadas

- **React**
- **Vite** (Entorno de desarrollo rápido)
- **Tailwind CSS** (Estilos)
- **TypeScript**

## Guía de Instalación Local

Para ejecutar el proyecto en tu ordenador necesitas tener instalado [Node.js](https://nodejs.org/).

1. **Clonar el repositorio y entrar en la carpeta:**
   ```bash
   git clone https://github.com/mariofuentes-dev/legion-tactical.git
   cd legion-tactical
   ```

2. **Instalar todas las dependencias necesarias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de pruebas:**
   ```bash
   npm run dev
   ```
   *La consola te indicará una dirección local (por ejemplo, http://localhost:3000) para ver la web desde tu navegador.*

## Generar versión para Producción (Hosting)

Para publicar la web de forma oficial en cualquier servidor (cPanel, Hostinger, Vercel, etc.), no debes subir el código fuente tal cual. Hay que compilarlo:

1. Ejecuta el siguiente comando:
   ```bash
   npm run build
   ```
2. Esto creará automáticamente una carpeta llamada **dist**.
3. Coge **únicamente los archivos que están dentro de dist** y súbelos a tu hosting (en la carpeta public_html, www o equivalente).
