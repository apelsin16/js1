(function () {
    'use strict';
    function pow(x, n) {
        var result = x;

        for (var i = 1; i < n; i++) {
            result *= x;
        }

        return result;
    }

    var x = prompt('x?', '');
    var n = prompt('n?', '');

    if (n <= 1) {
        alert('Степень ' + n +
            'не поддерживается, введите целую степень, большую 1'
        );
    } else {
        alert( pow(x, n) );
    }
})();

var continueTask = confirm ('Желаете продолжить?');
if (continueTask === true) {

(function() {


    'use strict';
    var arr = [];
    for (var i = 0; i < 5; i++)
     {
        arr[i] = prompt('Введите любое имя', '');

    }
    console.log('arr', arr);
    var name = prompt('Введите имя пользователя', '');

        for (var j = 0; j < 5; j++) {
            if (name === arr[j]) {
            alert(name + ' Вы успешно вошли в систему');
        break;
        }

        else {
            alert ('Ошибка');
            break;
    }
}

})();
}
