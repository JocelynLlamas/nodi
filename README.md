# NODI — Landing page v2: "El Internet Físico"

Segunda propuesta de dirección creativa, radicalmente distinta a la v1. Misma marca, mismo stack (React + Vite + Tailwind v4 + Framer Motion + Lucide React), experiencia completamente diferente.

## Concepto

NODI convierte objetos físicos en puertas hacia internet. En lugar de una landing organizada en secciones y cards, esta versión es un **mapa vivo de conexiones** que el usuario recorre como una sola historia continua: Hero (mapa de nodos) → transición cinematográfica (todo converge en un NODI físico) → tres pantallas tipográficas gigantes → "un NODI, muchas posibilidades" (sticky fullscreen) → "en cualquier lugar" → "en cualquier forma" → "tu negocio, tu NODI" → "¿qué quieres conectar?".

## La interacción central: el campo de proximidad

`src/lib/field.jsx` implementa un sistema global (`FieldProvider` + `useProximityNode`) que trata el cursor (o el dedo, en mobile) como si fuera un teléfono NFC: cualquier elemento marcado con `data-node` (a través de `<ConnectNode>`) reacciona cuando el puntero entra en su radio — se ilumina en aqua, recibe un leve tirón magnético y expone una variable CSS `--intensity` (0–1) que cada componente usa para animar color/glow/escala. Es la misma metáfora "acercar para conectar" aplicada a toda la interfaz, no solo al hero.

Implementación pensada para rendimiento: el `FieldProvider` no dispara renders de React en cada movimiento de mouse — usa un único `requestAnimationFrame` y aplica los estilos de forma imperativa (`el.style...`) a cada nodo suscrito.

## Estructura

```
src/
  lib/field.jsx           # sistema de proximidad (el "campo NFC" del cursor)
  components/
    FieldCursor.jsx        # anillo aqua que visualiza el campo (aditivo, no reemplaza el cursor nativo)
    ConnectNode.jsx         # wrapper reutilizable para cualquier elemento "conectable"
    NodiTag / PhoneFrame / WavePulse / ScreenContent / CustomIcons  # (compartidos con v1)
  sections/
    Hero.jsx               # mapa de nodos gigante, wordmark "nodi" con onda NFC real sobre la "i"
    Transition.jsx         # scroll cinematográfico: partículas convergiendo en un NODI físico
    BigWords.jsx            # UN TOQUE / UNA CONEXIÓN / INFINITAS POSIBILIDADES
    OneNodi.jsx              # sticky fullscreen: un NODI, el teléfono cambia de experiencia
    AnywherePlace.jsx        # EN CUALQUIER LUGAR — industrias como constelación
    AnywhereForm.jsx          # EN CUALQUIER FORMA — producto físico, momento editorial en blanco
    YourBusiness.jsx           # TU NEGOCIO. TU NODI. — personalización
    FinalConnect.jsx            # ¿QUÉ QUIERES CONECTAR? — demo + CTA
    Footer.jsx
```

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Decisiones y honestidad sobre trade-offs

- El cursor nativo se mantiene visible por accesibilidad/usabilidad; el anillo aqua es una capa aditiva (`pointer-events: none`), no lo reemplaza.
- No se usó GSAP: todo el scroll choreography (Hero, transición, "un NODI muchas posibilidades") se resolvió con Framer Motion (`useScroll` + `useTransform`) y IntersectionObserver, evitando una dependencia pesada adicional.
- En mobile el sistema de proximidad no se activa (no hay cursor); las animaciones de scroll y las micro-interacciones por tap se conservan.
- No se probó visualmente con navegador headless en este entorno — el build de producción pasa limpio, pero recomiendo revisar `npm run dev` en pantalla real antes de publicar, especialmente el timing de la transición cinematográfica y el hero en pantallas muy anchas o muy angostas.
