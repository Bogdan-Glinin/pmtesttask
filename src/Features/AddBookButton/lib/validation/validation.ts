import { object, string } from 'yup';

export const bookValidationSchema = object({
    name: string().required('Название книги обязательно для заполнения'),
    author: string().required('Автор обязателен для заполнения'),
    genre: string().required('Жанр обязателен для заполнения')
})