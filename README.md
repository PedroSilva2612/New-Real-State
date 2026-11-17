# New Real State

Web de una sola página para una inmobiliaria (proyecto de portfolio de Pedro Silva). Rediseño completo de la versión de 2023: solo se conserva el logotipo.

## Qué incluye

- **Hero** dividido con la casa de cristal frente al mar y la oferta vigente.
- **Recorrido**: un paseo por cinco estancias (recibidor, salón, cocina, dormitorio y terraza) que explica los cinco pasos de la compra de una casa. Cada foto se descubre al hacer scroll y un pequeño plano marca en qué estancia estás.
- **Sobre nosotros**: una frase que se ilumina palabra a palabra, y la forma de trabajar.
- **Servicios**: comprar, alquilar, vender y conocer barrios; la foto cambia con la fila.
- **Descuento**: 50 % en honorarios de venta hasta el 31 de diciembre de 2026, con código copiable.
- **Contacto**: formulario de visita con Netlify Forms y validación en español.
- **Pie** oscuro con cierre, enlaces, privacidad y créditos de las fotos.

## Tecnología

- [Astro](https://astro.build) con salida estática (`dist/`).
- Sistema visual, movimiento y momentos de scroll del kit de la skill design-taste-frontend (`public/assets/`), sin modificar.
- CSS y JS propios de la página: `public/site.css` y `public/site.js`.
- Tipografías: Red Hat Display y Red Hat Text (Google Fonts).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Netlify

`netlify.toml` ya define el build (`npm run build`) y la carpeta publicada (`dist`). Conecta el repositorio en Netlify y despliega sin más ajustes. Los envíos del formulario aparecen en **Forms → visita** del panel de Netlify.

## Pendiente de sustituir

- Las fotos de interiores son provisionales (Wikimedia Commons, ver `/creditos/`); conviene cambiarlas por fotos propias.
- Cuando haya dominio, añadir `<link rel="canonical">` y la URL absoluta de `og:image` en `src/pages/index.astro`.
