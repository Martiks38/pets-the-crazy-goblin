# Mounts - The Mad Goblin

Tienda de mascotas de [World of Warcraft](https://worldofwarcraft.blizzard.com/es-es/)

> `En desarrollo`

## TODO

- [ ] Corregir nombre de las funciones de la API y de los controladores.

## Tecnologías usadas

La página web está desarrollada con el framework [Next.js](https://nextjs.org) y utilizó CSS para estilizar con el post-procesador [PostCSS](https://postcss.org).

Para probar y validar el funcionamiento de la aplicación, utilizó la librería [Vitest](https://vitest.dev).

La base de datos está hecha en [MongoDB](https://www.mongodb.com).

## API

Dirección: [http://localhost:3000/api/](http://localhost:3000/api/)

Los endpoints disponibles son:

- GET `/pets`: Devuelve todas las mascotas de Pets - The Crazy Goblin.
- GET `/pets/prices`: Devuelve las mascotas de acuerdo al rango de precios de Pets - The Crazy Goblin.
- GET `/pets/:name`: Devuelve una mascota de acuerdo al nombre de Pets - The Crazy Goblin.
- GET `/pets/types`: Devuelve todos los tipos de mascotas con una imagen de Pets - The Crazy Goblin.
- GET `/pets/types/:type`: Devuelve las mascotas de acuerdo al tipo de Pets - The Crazy Goblin.
- GET `/pets/types/:type/prices`: Devuelve las mascotas de acuerdo al tipo y al rango de precios de Pets - The Crazy Goblin.
