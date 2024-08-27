# Phishing HTB

## Descripción
Phishing HTB es un laboratorio de phishing basado en la página de inicio de sesión de Hack The Box ([Login de Hack The Box](https://account.hackthebox.com/login)). Este laboratorio almacena el correo electrónico y la contraseña proporcionados en una base de datos MongoDB. Además, simula un inicio de sesión único (Single Sign-On) de Google, guardando en la misma base de datos las credenciales proporcionadas en este apartado.

También utiliza el servicio de correos Gmail a través de EmailJS para simular la autenticación de dos factores (2FA). En este proceso, se envía un número de verificación al correo del usuario, quien deberá ingresarlo en el sitio para completar la verificación. El laboratorio captura la IP privada del usuario para usarla como identificador único, mostrando al usuario únicamente las cuentas que ha ingresado durante el proceso de Single Sign-On.

## Requisitos
- Tener instalado NodeJS 20.0 o superior.

## Instalación
1. Clona el repositorio en tu carpeta usando `git clone `:
2. Instala las siguientes dependencias utilizando `npm install`:
   ```bash
   npm install ejs express get-client-ip mongodb nodemon
