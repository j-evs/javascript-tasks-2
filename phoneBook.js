'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {

    // Ваша невероятная магия здесь
    var phoneFormatted = phone.replace(/\s/g, '').replace(/(?!^)-/g, '');
    var regPhone = /(\+?\d+)?(\(\d{3}\)|\d{3})\d{7}/;
    var isValidPhone = regPhone.test(phoneFormatted);

    var regEmail = /\w+?@[\wа-я-]+?\.[\wа-я-]+/;
    var isValidEmail = regEmail.test(email);

    if (isValidPhone && isValidEmail) {
        phoneBook.push({
            name: name,
            phone: phoneFormatted,
            email: email
        })
    } else {
        console.log('Пожалуйста, используйте валидный номер телефона и адрес электронной почты');
    }
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {

    // Ваша удивительная магия здесь
    var matchedContacts = [];
    function showContacts(matchedContacts) {
        for (var i = 0; i < matchedContacts.length; i++) {
            console.log(matchedContacts[i].name + ', ' + matchedContacts[i].phone + ', ' + matchedContacts[i].email);
        }
    }
    !query ? matchedContacts = phoneBook :
        phoneBook.forEach(function(contact) {
            for (var field in contact) {
                contact[field].indexOf(query) !== -1 ? matchedContacts.push(contact) : false;
            };
        });
    matchedContacts.length ? showContacts(matchedContacts) : console.log('По запросу ' + query + ' ничего не нашли.');
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
    // Ваша необьяснимая магия здесь
    var deletedContactsCount = 0;
    phoneBook = phoneBook.filter(function(contact) {
        for (var field in contact) {
            if (contact[field].indexOf(query) !== -1) {
                deletedContactsCount++;
                return false;
            };
        };
        return true;
    });
    deletedContactsCount ? console.log('Удалено ' + deletedContactsCount + ' контактов.') : false;
};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {

    // Ваша чёрная магия здесь

};
