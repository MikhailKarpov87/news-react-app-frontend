export const errors = [
  { en: "Title must not be empty", ru: "Заголовок не может быть пустым" },
  { en: "Content must not be empty", ru: "Контент не может быть пустым" },
  { en: "Bad news item ID", ru: "Новость не найдена" },
  { en: "No token provided", ru: "В запросе отсутствует токен" },
  { en: "Not authorized to view profile", ru: "Не авторизован для просмотра профайла" },
  { en: "Captcha is not passed", ru: "Не была передана Captcha" },
  { en: "Bad Google cliend ID", ru: "Неверный Google Client ID" },
  { en: "Error on server while verifying token", ru: "Ошибка на сервере при проверке токена" },
  { en: "Bad credentials", ru: "Неверные данные для входа" },
  { en: "News item not found", ru: "Новость не найдена" },
  {
    en: "Not authorized to edit this news item",
    ru: "Вы не авторизованы для редактирования этой новости"
  },
  {
    en: "Not authorized to delete this news item",
    ru: "Вы не авторизованы для удаления этой новости"
  },
  { en: "User not found", ru: "Пользователь не найден" },
  { en: "User already exists", ru: "Пользователь уже существует" },
  {
    en: "Password must contain at least 6 characters",
    ru: "Пароль должен быть минимум 6 символов"
  },
  { en: "Password must not be empty", ru: "Пароль не должен быть пустым" },
  { en: "Username must not be empty", ru: "Имя пользователя не должно быть пустым" }
];

export const getErrorText = message => {
  const errorText = errors.find(error => error.en === message);
  return errorText ? errorText.ru : message;
};

//Actions types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const START_LOADING = "START_LOADING";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILED = "GET_NEWS_FAILED";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILED = "GET_POST_FAILED";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILED = "EDIT_POST_FAILED";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILED";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILED = "DELETE_POST_FAILED";
