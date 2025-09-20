# 🪑 Eci Furniture — Frontend

Frontend de la plataforma **Eci Furniture**, una aplicación web que permite a los usuarios navegar el catálogo de muebles, crear pedidos personalizados o por estilo, y ver sus órdenes anteriores. Esta interfaz consume una API REST desplegada en Azure.

## 🌐 Demo

🌍 [https://ecifurniture-frontend.azurewebsites.net](https://ecifurniture-frontend.azurewebsites.net)  
🔗 API base: `https://ecifurniture-agaueea9ckdubzf4.canadacentral-01.azurewebsites.net/api`

---

## 🛠️ Tecnologías Utilizadas

- **React 18**
- **Tailwind CSS** — estilos rápidos y responsivos
- **Axios** — consumo de API REST
- **React Router DOM** — navegación entre vistas
- **Vite** — servidor de desarrollo rápido (o Create React App si usaste CRA)

---

## 🧩 Funcionalidades

- 📂 Ver catálogo de muebles por tipo y estilo
- 🛒 Crear pedidos personalizados seleccionando ítems
- 🎨 Crear pedidos completos por estilo (silla + mesa + sofá)
- 📃 Ver historial de pedidos por usuario
- 🔄 Navegación fluida entre secciones con diseño responsivo

---

## 📁 Estructura del Proyecto

src/
├── components/
│ ├── CatalogPage.jsx
│ ├── CreateOrderByStyle.jsx
│ ├── OrdersPage.jsx
│ └── HomePage.jsx
├── App.jsx
├── AppRoutes.jsx
├── main.jsx
└── index.css


---

## 📦 Instalación Local

---

# Clona el repositorio
git clone https://github.com/tu-usuario/eci-furniture-frontend.git
cd eci-furniture-frontend

# Instala dependencias
npm install

# Inicia la app
npm run dev  # o npm start si usas CRA

🔌 Conexión con la API
La app se conecta por defecto a:

https://ecifurniture-agaueea9ckdubzf4.canadacentral-01.azurewebsites.net/api

⚠️ Puedes modificar esta URL desde los archivos donde se utiliza axios.

# Componentes Clave
📦 CatalogPage.jsx
Muestra el catálogo de muebles y permite agregar ítems a un pedido personalizado.

CreateOrderByStyle.jsx
Permite al usuario crear un pedido completo (silla, mesa, sofá) de un estilo seleccionado.

OrdersPage.jsx
Muestra todas las órdenes previas del usuario.

HomePage.jsx
Landing page básica con bienvenida y navegación.

Catálogo interactivo

Confirmación de pedido

Visualización de órdenes anteriores

# Notas Finales
El userId actualmente está codificado como 12345 para efectos de demostración.

Se puede integrar autenticación en futuras versiones.

El diseño es completamente responsivo gracias a Tailwind CSS.

Despliegue
La app puede desplegarse fácilmente en:

Azure Static Web Apps

Vercel

Netlify

GitHub Pages

npm run build
Y luego subir el contenido de la carpeta dist/ o build/.

Autor
Desarrollado por David Santiago Espinosa— 2025
Proyecto académico: Universidad Escuela Colombiana de Ingenieria Julio Garavito