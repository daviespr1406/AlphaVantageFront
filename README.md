# Alpha Vantage — Frontend

Frontend de la plataforma **AlphaVantage**, una aplicación web que permite a los usuarios navegar el catálogo del mercado accionario consumiendo un API que permita hacer la revision en distintas fechas de los movimientos

## 🌐 Demo

🌍 [https://ecifurniture-frontend.azurewebsites.net](https://ecifurniture-frontend.azurewebsites.net)  
🔗 API base: `alphavantage-faaccxfka8hhdjcb.canadacentral-01.azurewebsites.net/api`

---

## Tecnologías Utilizadas

- **React 18**
- **Tailwind CSS** — estilos rápidos y responsivos
- **Axios** — consumo de API REST
- **React Router DOM** — navegación entre vistas
- **Vite** — servidor de desarrollo rápido (o Create React App si usaste CRA)

---

## 🧩 Funcionalidades
- 📃 Ver historial de movimientos por simbolo
- 🔄 Navegación fluida entre secciones con diseño responsivo

---

## 📁 Estructura del Proyecto

src/
├── components/
│ ├── AlphaVantage.jsx
│ └── HomePage.jsx
├── App.jsx
├── main.jsx
└── index.css


---

## Instalación Local

---

# Clona el repositorio
git clone https://github.com/daviespr1406/AlphaVantageFront.git
cd AlphaVantageFront

# Instala dependencias
npm install

# Inicia la app
npm start

🔌 Conexión con la API
La app se conecta por defecto a:

alphavantage-faaccxfka8hhdjcb.canadacentral-01.azurewebsites.net/api

⚠️ Puedes modificar esta URL desde los archivos donde se utiliza axios.

# Componentes Clave
AlphaVantage.jsx
Muestra los movimientos en bolsa segun los parametros elegidos por el usuario
HomePage.jsx
Landing page básica con bienvenida y navegación.

Autor
Desarrollado por David Santiago Espinosa— 2025
Proyecto académico: Universidad Escuela Colombiana de Ingenieria Julio Garavito