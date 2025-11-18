## Avance de Proyecto: Guitar Villain 
[Deploy de la pagina](https://dolphin-app-dtkb5.ondigitalocean.app/)

Este `README.md` describe el estado actual y los objetivos futuros de **Guitar Villain**, un juego rítmico estilo Guitar Hero desarrollado en JavaScript con estética **Synthwave**.

***

### Descripción General del Proyecto

**Guitar Villain** es un juego de ritmo musical para navegadores inspirado en títulos como *Guitar Hero*. El proyecto busca ofrecer una experiencia de juego moderna y visualmente atractiva, utilizando una paleta de colores y una estética que evoca el movimiento **Synthwave** (neón, rejillas, paisajes futuristas).

| Aspecto | Detalle |
| :--- | :--- |
| **Tecnología Principal** | JavaScript (ESM) |
| **Gráficos/Renderizado** | [PIXI.js](https://www.pixijs.com/) (para una renderización 2D rápida y eficiente). |
| **Sonido** | [Howler.js](https://howlerjs.com/) (para gestión de audio). |
| **Componentes/Estructura** | [VanJS](https://vanjs.org/) (para componentes de UI ligeros). |
| **Estética** | Synthwave (temática de neón, rejillas, colores brillantes sobre fondos oscuros). |

***

###  Avance Actual (`HECHO`)

Se han implementado los siguientes componentes y funcionalidades principales:

1.  **Reproducción de Música de Fondo:**
    * La canción de fondo comienza a reproducirse automáticamente al iniciar la escena del juego (`src/scenes/main_menu.js` y `src/scenes/game.js`).
    * *(Nota: Se implementa una advertencia de **Disclaimer: Bajar volumen al apretar play** al inicio por el uso de archivos con derechos de autor).*
2.  **Mecánica de Botones y Feedback Visual:**
    * Se ha implementado el soporte para **cinco botones de nota** con las teclas: `A`, `S`, `J`, `K`, `L`.
    * Al presionar las teclas, se activa una **animación de feedback visual** correspondiente, simulando la pulsación de un traste o botón.
3.  **Estructura de la Página:**
    * El esqueleto de la aplicación y la integración de las librerías base (PIXI.js, Howler.js, VanJS) están funcionales.
    * La estructura básica de la interfaz sigue una **estética Synthwave** utilizando el archivo `styles.css`. 

***

###  Próximos Objetivos (`POR HACER`)

Las siguientes funcionalidades son prioritarias para el siguiente ciclo de desarrollo:

1.  **Mecánica de Juego de Notas (`Core Gameplay`):**
    * Implementar la lógica para **mostrar las notas** (`notes`) de la canción bajando por las 5 "cuerdas" (carriles).
    * Crear la lógica de **detección de aciertos** (*hit detection*) para verificar si el jugador presiona la tecla correcta en el momento oportuno.
2.  **Sistema de Puntuación y Progresión:**
    * Implementación de un sistema de **registro de usuarios** (autenticación).
    * Creación y conexión a una **base de datos** para almacenar información del usuario (por ejemplo, horas jugadas, puntuaciones, canciones desbloqueadas).
3.  **Gestión de Activos/Archivos:**
    * Crear la estructura y configuración necesaria para **gestionar y cargar archivos de canciones** y **assets** de forma dinámica, manteniendo los archivos originales fuera del repositorio (`.gitignore`).

***

###  Consideraciones de Repositorio

* **Archivos Excluidos:** Las **canciones de música** y los **assets de placeholder** que actualmente tienen derechos de autor se mantendrán **fuera del repositorio** (`.gitignore`) para evitar problemas legales.
* **Reemplazo de Assets:** Se deberán crear **assets libres de derechos** o específicos del proyecto para reemplazar los placeholders una vez finalizado el desarrollo de las mecánicas.
