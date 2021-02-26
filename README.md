### Scripts

- dev: Ejectuta un servidor en modo desarrollo
- start: Ejecuta el servidor en modo produccion, levanta igual las vistas del  cliente
- build: compila y crea la aplicacion cliente React en produccion

# Descripcion

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)
Un proyecto  creado con Express y MongoDB, implementando JWT. El servidor renderiza vistas con express-handlebars y devuelve la aplicacion React desde el servidor.
Con la authenticacion se genera un token y almacena en una cookie junto al rol del usurio, despues la autorirazacion se hace desde el servidor y el cliente con un provider personalizado de React
# Requerimientos
- Node.js
- Npm
- dotenv ( se requiere un archivo ".env" en el directorio raiz, solo en entornos de desarrollo)
.env => 
-URL= url de una base de datos
-SECRET=palabra secreta para firmar tokens
-ALGORITMO= algoritmo de cifrado de prefencia "SHA256"
