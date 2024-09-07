# Utiliser une image de base Node.js
FROM node:14

# Installer les dépendances
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]