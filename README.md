# WebProyecto1

Este proyecto es una aplicación web desarrollada utilizando React y Node.js. Está diseñada para manejar la gestión de publicaciones y autenticación de usuarios.

## Características

- **Autenticación de Usuarios**: Inicio de sesión y registro.
- **CRUD de Publicaciones**: Los usuarios pueden crear, leer, actualizar y eliminar publicaciones.
- **Protección de Rutas**: Las rutas críticas están protegidas y solo accesibles para usuarios autenticados.
- **Lazy Loading**: Uso de React Suspense para cargar componentes de manera eficiente.
- **Linting**: Configuración de ESLint para mantener un código limpio y consistente.

## Tecnologías Utilizadas

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Base de Datos**: MariaDB
- **Seguridad**: JWT para manejo de sesiones, bcrypt para hashing de contraseñas
- **Linting**: ESLint con configuración personalizada

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://example.com/WebProyecto1.git
   cd WebProyecto1
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crear un archivo `.env` en la raíz del proyecto y añadir las siguientes variables:
   ```plaintext
   DB_HOST=localhost
   DB_USER=yourusername
   DB_PASS=yourpassword
   DB_NAME=yourdbname
   JWT_SECRET=yoursecret
   ```

4. **Ejecutar el servidor:**
   ```bash
   npm start
   ```

5. **Ejecutar el frontend (en una nueva terminal):**
   ```bash
   cd frontend
   npm start
   ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, envía un pull request o abre un issue para sugerencias o errores.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
