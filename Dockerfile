# Giai đoạn build
FROM node:20.13-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Giai đoạn production
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Cấu hình Nginx để xử lý routing của SPA
RUN echo '                                    \
  server {                                      \
  listen 2323;                              \
  location / {                              \
  root /usr/share/nginx/html;           \
  index index.html index.htm;           \
  try_files $uri $uri/ /index.html;     \
  }                                         \
  }' > /etc/nginx/conf.d/default.conf

EXPOSE 2323

CMD ["nginx", "-g", "daemon off;"]