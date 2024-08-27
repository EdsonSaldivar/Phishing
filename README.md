# Phishing HTB

## Descripción
Phishing HTB es un laboratorio de phishing basado en la página de inicio de sesión de Hack The Box (https://account.hackthebox.com/login). Este laboratorio almacena el correo electrónico y la contraseña proporcionados en una base de datos MongoDB. Además, simula un inicio de sesión único (Single Sign-On) de Google, guardando en la misma base de datos las credenciales proporcionadas en este apartado.

También utiliza el servicio de correos Gmail a través de EmailJS para simular la autenticación de dos factores (2FA). En este proceso, se envía un número de verificación al correo del usuario, quien deberá ingresarlo en el sitio para completar la verificación. El laboratorio captura la IP privada del usuario para usarla como identificador único, mostrando al usuario únicamente las cuentas que ha ingresado durante el proceso de Single Sign-On.

## Requisitos
- Tener instalado NodeJS 20.0 o superior.

## Instalación
1. Clona el repositorio en tu carpeta usando `git clone https://github.com/EdsonSaldivar/Phishing.git`:

2. Instala las siguientes dependencias utilizando `npm install`:
   ```bash
   npm install ejs express get-client-ip mongodb nodemon

3. Tu proyecto debería contener al menos los siguientes archivos esenciales aparte de las carpetas instaladas desde el `git clone`:
      - app.js
      - La carpeta node_modules
      - package.json
      - package-lock.json

## Uso
1. Navega a la carpeta del proyecto e inicia la aplicación con el siguiente comando:
   ```bash
   nodemon app.js

2. Abre tu navegador y accede a `localhost:3000/login` para empezar a visualizar y probar el laboratorio de phishing.

## Ejemplo de ataque de phishing
Se le envía un correo a la víctima con el siguiente mensaje:

De parte de Hack The Box, nos comprometemos a la seguridad de nuestros usuarios y para verificar que tu contraseña esté asegurada, te solicitamos iniciar sesión en nuestra siguiente liga: "localhost:3000/login".
El usuario ingresa a la URL e inicia sesión. Una vez que el usuario completa el proceso, se le presenta una pantalla de agradecimiento por verificar sus credenciales y se le redirige a la página oficial de Hack The Box: https://www.hackthebox.com/.

css
Copiar código

Este archivo proporciona toda la información necesaria para instalar, ejecutar y entender el uso del proyecto. Si necesitas agregar más detalles, como la configuración de EmailJS o la base de datos MongoDB, puedes incluir una sección adicional. ¿Te gustaría añadir algo más?
