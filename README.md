# Legion Tactical

Landing page y plataforma web para Legion Tactical (simulaciÃ³n de airsoft y entrenamiento tÃ¡ctico).

## TecnologÃ­as Utilizadas

- **React**
- **Vite** (Entorno de desarrollo rÃ¡pido)
- **Tailwind CSS** (Estilos)
- **TypeScript**

## GuÃ­a de InstalaciÃ³n Local

Para ejecutar el proyecto en tu ordenador necesitas tener instalado [Node.js](https://nodejs.org/).

1. **Clonar el repositorio y entrar en la carpeta:**
   `ash
   git clone https://github.com/mariofuentes-dev/legion-tactical.git
   cd legion-tactical
   `

2. **Instalar todas las dependencias necesarias:**
   `ash
   npm install
   `

3. **Iniciar el servidor de pruebas:**
   `ash
   npm run dev
   `
   *La consola te indicarÃ¡ una direcciÃ³n local (por ejemplo, http://localhost:3000) para ver la web desde tu navegador.*

## Generar versiÃ³n para ProducciÃ³n (Hosting)

Para publicar la web de forma oficial en cualquier servidor (cPanel, Hostinger, Vercel, etc.), no debes subir el cÃ³digo fuente tal cual. Hay que compilarlo:

1. Ejecuta el siguiente comando:
   `ash
   npm run build
   `
2. Esto crearÃ¡ automÃ¡ticamente una carpeta llamada **dist**.
3. Coge **Ãºnicamente los archivos que estÃ¡n dentro de dist** y sÃºbelos a tu hosting (en la carpeta public_html, www o equivalente).
