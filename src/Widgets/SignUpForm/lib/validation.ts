import { object, string } from 'yup';

export const validationSignUp = object({
    name: string().required("Имя обязательно к заполнению"),
    role: string().required("Роль обязательна к выбору"),
    login: string().email('Неверный формат почты').required('Почта обязательна к заполнению'),
    password: string().required('Заполните поле пароль')
})