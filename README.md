# Portafolio de Practicas - Materia: Graficación

¡Bienvenido/a al repositorio base para tu portafolio de la materia de **Graficación**! 

Este espacio será tu "lienzo digital" durante todo el semestre. Aquí integrarás y mostrarás cada uno de los proyectos y prácticas que desarrolles, transitando desde los gráficos interactivos en 2D hasta entornos virtuales en 3D.

---
Este repositorio tiene un doble propósito:
1. **Tu Portafolio Web:** La página que se verá publicamente en internet para ejecutar tus proyectos.
2. **Tu ejercicios en código:** Las carpetas donde guardarás los archivos de código fuente de cada práctica para su revisión.

---

## ¿Cómo crear tu propio portafolio con esta plantilla?

Sigue estos sencillos pasos en tu primera sesión de clase para dejar lista tu infraestructura en la nube:

### 1. Copiar esta plantilla (Fork)
No necesitas descargar nada a tu computadora todavía. 
1. Ve a la parte superior derecha de esta página y busca el botón que dice **"Use this template"** (Usar esta plantilla) o **"Fork"**.
2. Selecciona tu cuenta personal de GitHub.
3. En el nombre del repositorio, escribe estrictamente: `graficacion-portafolio`.
4. Asegúrate de que esté configurado como **Public** (Público) y haz clic en **Create repository**.

### 2. Personalizar tus datos básicos
Ahora que el repositorio es tuyo, vamos a ponerle tu nombre:
1. Dentro de tu nuevo repositorio, haz clic sobre el archivo llamado `index.html`.
2. Busca el icono del **lápiz** en la esquina superior derecha para editar el archivo directamente desde el navegador.
3. Busca la línea que dice `[Tu Nombre Aquí]` y `[Tu numero de control]` y reemplázalos con tus datos reales.
4. Baja al final de la página, haz clic en el botón verde **"Commit changes..."** (Guardar cambios) y confirma.

### 3. Publicar tu portafolio en Internet (GitHub Pages)
Haremos que tu portafolio sea una página web real y accesible desde cualquier dispositivo:
1. En la barra de menús de tu repositorio, haz clic en la pestaña **Settings** ⚙️ (Configuración).
2. En el menú lateral izquierdo, busca la sección **Pages**.
3. Donde dice *Build and deployment -> Branch*, cambia la opción de `None` a `main` (o `master`). Deja la otra opción en `/ (root)`.
4. Haz clic en el botón **Save** (Guardar).
5. Espera un minuto y recarga la página. En la parte superior aparecerá un recuadro con un enlace parecido a este: `https://tu-usuario.github.io/graficacion-portafolio/`. 

**¡Felicidades! Ese enlace es tu portafolio web en vivo. Copiálo y entrégalo en la tarea de Google Classroom.**

---

## ¿Cómo se actualiza el portafolio durante el semestre?

A lo largo del curso usaras herramientas como el editor web de **p5.js** (para 2D) y **Visual Studio Code** (para 3D). Tu único trabajo para entregar tareas será:

1. Programar tu práctica y obtener el enlace de ejecución (o subir tus archivos).
2. Entrar a tu `index.html` en GitHub.
3. Editar el archivo para cambiar el símbolo `#` de la actividad correspondiente por el enlace real de tu proyecto.
   * *Ejemplo:* Cambiar `<a href="#"...>` por `<a href="https://editor.p5js.org/tu-usuario/sketches/..."...>`
4. Guardar los cambios (**Commit**). Tu página web se actualizará sola en un par de minutos.

---

## ¿Cómo organizar tus códigos y actualizar el portafolio?

Conforme avancemos en el semestre, crearemos carpetas específicas para guardar el código fuente de cada actividad de manera ordenada. Tu repositorio terminará viéndose así:

```text
graficacion-portafolio/
│
├── index.html           ◄— Tu portafolio (la página web principal)
├── css/style.css       ◄— El diseño visual de tu portafolio
│
├── Unidad_1/            ◄— Carpeta para los códigos de la Unidad 1
│   ├── AA_1.1_Primitivas/
│   │   └── sketch.js    ◄— Aquí pegarás el código 
│   └── AA_1.2_Colores/
│   │   └── sketch.js    ◄— Aquí pegarás el código 
│   └── AA_1.3_Animación/
│   │   └── sketch.js    ◄— Aquí pegarás el código 
│   └── AA_1.4_Reto/
│       └── sketch.js    ◄— Aquí pegarás el código 
└── Unidad_2/            ◄— Carpeta para los códigos de la Unidad 2
    └── AA_2.1_Traslación/
        └── sketch.js
---
```

## Tecnologías que utilizaremos
* **HTML5 y CSS3:** Para la estructura de este portafolio.
* **p5.js (JavaScript):** Para aprender coordenadas, colores, pinceles interactivas y transformaciones 2D.
* **Three.js (JavaScript + WebGL):** Para dar el salto a mundos 3D, cámaras, luces y texturas.

Si tienes dudas durante el proceso de configuración, levanta la mano en el laboratorio para que la profesora o tus compañeros te apoyemos. 

¡Mucho éxito en este semestre!
