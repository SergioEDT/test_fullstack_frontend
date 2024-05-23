Repositorio para el proyecto FrontEnd

Requisitos previos
- Node.js y npm instalados en tu sistema.
- Angular CLI instalado globalmente (npm install -g @angular/cli).

Instalación
1. Clona este repositorio en tu máquina local:
    git clone <URL_del_repositorio>

2. Ve al directorio del proyecto Angular:
    cd nombre_del_proyecto_angular

3. Instala las dependencias del proyecto:
    npm install

Configuración
1. Abre el archivo src/environments/environment.ts y actualiza el valor de apiUrl con la URL de el API Python. Por ejemplo:
    export const environment = {
        production: false,
        apiUrl: 'http://localhost:8000' // Reemplaza esta URL con la URL de tu API Python
    };

Ejecución
1. Con las dependencias instaladas, puedes iniciar el servidor de desarrollo de Angular ejecutando el siguiente comando:
    ng serve -o --port 4300
Importante ejecutar en este puerto ya que es el que se tiene registrado en el CORS del API

2. Si tu API Python está ejecutándose en una URL diferente a http://localhost:8000, asegúrate de actualizar la variable apiUrl en el archivo environments.ts como se indicó anteriormente.

Detener la ejecución
1. Para detener el servidor de desarrollo de Angular, simplemente presiona Ctrl + C en la terminal donde se está ejecutando.