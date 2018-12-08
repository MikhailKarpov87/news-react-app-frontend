# [Тестовое задание #3](https://maxpfrontend.ru/zametki/testovoe-zadanie-3/)

React/Redux приложение ленты новостей с Google Sign In авторизацией

<img width="40%" src="https://s3.eu-central-1.amazonaws.com/github--projects/screen1.jpg" />

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
  `REACT_APP_GOOGLE_CLIENT_ID=yourclientid.googleusercontent.com`
- `npm start` для запуска локального dev-сервера
- `npm run build` для production сборки
