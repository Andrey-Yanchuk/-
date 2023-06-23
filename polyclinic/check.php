<?php
    $login = filter_var(trim($_POST['login']),
    FILTER_SANITIZE_STRING);
    $name = filter_var(trim($_POST['name']),
    FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']),
    FILTER_SANITIZE_STRING);
    // Условное ветвление на проверку символов
    if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
        echo "Недопустимая длина логина";
        exit();
    } else if (mb_strlen($name) < 3 || mb_strlen($name) > 50) {
        echo "Недопустимая длина имени";
        exit();
    } else if (mb_strlen($pass) < 2 || mb_strlen($pass) > 15) {
        echo "Недопустимая длина пароля (пароль должен состоять от 2 до 15 символов)";
        exit();
    }

    // Делаем кэширование пароля
    // Функция md5() создает хэш из строки
    // Делаем "соль" из любых символов, главное прописать на латинице
    $pass = md5($pass."abcdefgh123456");

    // Подключаемся к базе данных
    $mysql = new mysqli('localhost', 'root', 'root', 'register-db');
    // Теперь помещаем данные которые находятся внутри БД
    $mysql->query("INSERT INTO `users` (`login`, `pass`, `name`)
    VALUES('$login','$pass', '$name')");

    $mysql->close();

    header('Location: index.html');
?>