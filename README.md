# Repaso Hockey 🏑 — Deportes Colectivos II

Web tipo app móvil para repasar la asignatura mediante tests. Contenido extraído de las **Sesiones 1–5** (TecnoCampus · UPF).

## Temas (8 · 370 preguntas, ≥40 por tema)
1. Iniciación y Lógica del Juego
2. Técnica en Ataque
3. Técnica en Defensa (Recuperación)
4. Prevención de Lesiones
5. Preparación Física
6. Modelo de Juego
7. Diseño de Tareas
8. Reglamento y Adaptaciones

Modos: **test por tema**, **examen aleatorio** (20 preguntas con nota tipo examen: +0,3 acierto / −0,1 fallo / 0 en blanco), **modo estudio** (fichas clave) y guardado de progreso/mejor marca en el navegador. Sin preguntas de historia, fechas, pesos ni hockey sala.

## Probar en local
Abre `index.html` en el navegador. (Si algo no carga, sirve la carpeta con un servidor local: `python -m http.server` y entra en `http://localhost:8000`.)

## Desplegar en GitHub Pages
1. Crea un repositorio en GitHub (p. ej. `repaso-hockey`).
2. Sube el contenido de esta carpeta a la raíz del repo:
   ```bash
   git init
   git add .
   git commit -m "Repaso Hockey"
   git branch -M main
   git remote add origin https://github.com/USUARIO/repaso-hockey.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
4. En 1–2 min estará en `https://USUARIO.github.io/repaso-hockey/`.

> El archivo `.nojekyll` ya está incluido para que GitHub Pages sirva todo correctamente.

## Añadir / editar preguntas
Todo el contenido está en [`js/questions.js`](js/questions.js). Cada pregunta:
```js
{ q: "Enunciado", opts: ["A","B","C","D"], a: 0, exp: "Explicación" }
```
`a` es el índice (0–3) de la opción correcta. Las fichas del modo estudio están en el array `estudio` de cada tema.
