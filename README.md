# React Project: Redux Toolkit & React Query

Этот проект демонстрирует разницу в работе с API-запросами с использованием **Redux Toolkit** и **React Query**.

# **Redux Toolkit** vs **React Query**
- Redux Toolkit — если тебе нужно хранить все данные приложения в одном месте, чтобы удобно ими управлять.

- React Query — если ты работаешь с запросами к серверу и хочешь, чтобы данные автоматически сохранялись и обновлялись без лишней возни.

#  Разница между Redux Toolkit и React Query

| Функция               | Redux Toolkit                     | React Query              |
|-----------------------|---------------------------------|--------------------------|
| **Управление состоянием** | Глобальное                      | Локальное (пер запрос)  |
| **Кеширование данных**  | Нет (нужно настраивать)        | Автоматическое          |
| **Количество кода**    | Больше (`slice`, `store`, `reducers`) | Меньше (`useQuery`) |
| **Обновление данных**  | Через `dispatch` и `reducers`  | Автоматическое обновление |
| **Использование с API** | `createAsyncThunk`            | `useQuery`               |
