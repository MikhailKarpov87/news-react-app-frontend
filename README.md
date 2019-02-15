# [Тестовое задание #3](https://maxpfrontend.ru/zametki/testovoe-zadanie-3/)

<img width="40%" src="https://s3.eu-central-1.amazonaws.com/github--projects/screen1.jpg" />

React/Redux приложение ленты новостей с Google Sign In авторизацией

React/Redux news app with Google Sign In authorization feature.

🇺🇸 This project has russian README and code comments so if you need more details about this project feel free to contact me.

[**Демо / Demo**](http://news-app-demo.getyoumedia.com/news)\*

\*Бэкенд сервер был заблокирован всеми любимым РКН ✌️ Используйте прокси для просмотра демо

Backend server was blocked by RKN ✌️ Use proxy to view the demo if you're trying to view it from Russia.\*

### О себе

- Имя, возраст и откуда вы?

  Михаил, 30 лет, Москва

- Опыт работы с React и JS в целом.

  React - около года. До этого опыт JS/Jquery/PHP/MySQL/etc - около 4 лет.

### Вопросы

- Откуда узнали о ТЗ?
  - [ ] [VK](https://vk.com/maxpfrontend)
  - [ ] [телеграм](https://t.me/maxpfrontend)
  - [x] [YouTube](https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q)
  - [ ] другое (укажите)
- Участвовали ли в ТЗ 1 / ТЗ 2
  - [ ] Да
  - [x] Нет

### Чек-лист решения

- [x] Авторизация через Google Sign In
- [x] Отображение списка новостей
- [x] Отображение новости в режиме чтения
- [x] Отображение новости в режиме редактирования
- [x] Удаление новости
- [x] Показ иконок "удалить/редактировать" только для автора
- [x] Роутинг и редиректы после действий

#### Бонус

- [ ] Создание пользователя с вводом рекапчи
- [ ] Форма входа для созданного пользователя (`/login`)

### Установка

- У вас должен быть установлен [Node](https://nodejs.org/en/)
- И запущен [бэкенд](https://github.com/maxfarseer/backend-tz3)
- `git clone` или скачайте этот репозиторий
- `npm install` для установки зависимостей
- Проверьте URL для бэкенда в файле `/src/config.js`
- Сохраните свой Google Client ID в файле `/.env`:

  ```
  REACT_APP_GOOGLE_CLIENT_ID=yourclientid.googleusercontent.com
  ```

- `npm start` для запуска локального dev-сервера
- `npm run build` для production сборки
