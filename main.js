function aler() {
    alert("сайт не безопасный для здоровия!")
    alert("🎈🎆🎇🎉✨🎊")
    alert("Удалить Маенкрафт?")
    alert("（；´д｀）ゞo(￣┰￣*)ゞ(╬▔皿▔)╯╰（‵□′）╯")
    alert("௹௹৳৳௹௹௹")
}

function color() {
    color = prompt('Выберите цвет кнопки (red,blue,green)')
    if(color == 'red'){
        document.getElementById('color').style="background-color: red;font-size: 60px;"
    }
    if(color == 'blue'){
        document.getElementById('color').style="background-color: blue;font-size: 60px;"
    }
    if(color == 'green'){
        document.getElementById('color').style="background-color: green;font-size: 60px;"
    }
}
function colo() {
    colo = prompt('Выберите цвет кнопки (red,blue,green)')
    if(colo == 'red'){
        document.getElementById('colo').style="background-color: red;font-size: 60px;"
    }
    if(colo == 'blue'){
        document.getElementById('colo').style="background-color: blue;font-size: 60px;"
    }
    if(colo == 'green'){
        document.getElementById('colo').style="background-color: green;font-size: 60px;"
    }
}
function col() {
    col = prompt('Выберите цвет кнопки (red,blue,green)')
    if(col == 'red'){
        document.getElementById('col').style="background-color: red;font-size: 60px;"
    }
    if(col == 'blue'){
        document.getElementById('col').style="background-color: blue;font-size: 60px;"
    }
    if(col == 'green'){
        document.getElementById('col').style="background-color: green;font-size: 60px;"
    }
}
function co() {
    co = prompt('Выберите цвет кнопки (red,blue,green)')
    if(co == 'red'){
        document.getElementById('co').style="background-color: red;font-size: 60px;"
    }
    if(co == 'blue'){
        document.getElementById('co').style="background-color: blue;font-size: 60px;"
    }
    if(co == 'green'){
        document.getElementById('co').style="background-color: green;font-size: 60px;"
    }
}
function c() {
    co = prompt('Выберите цвет кнопки (red,blue,green)')
    if(co == 'red'){
        document.getElementById('co').style="background-color: red;font-size: 60px;"
    }
    if(co == 'blue'){
        document.getElementById('co').style="background-color: blue;font-size: 60px;"
    }
    if(co == 'green'){
        document.getElementById('co').style="background-color: green;font-size: 60px;"
    }
}
function BsecTN() {
    document.getElementById('wwwwww').innerHTML=`Привет ${document.getElementById('myInput').value}, как дела ${document.getElementById('myInput').value}? <br><b>Прикол:</b><br>Как тебя зовут <b>${document.getElementById('myInput').value}</b>?<p></p><u>Длина имени:<i>${document.getElementById('myInput').value.length}</u></i> `
}
function primer() {
    num1 = prompt('Введи первое число')
    sign = prompt('Введите действие (+,-,*,/)')
    num2 = prompt('Введите второе число')
    if(sign == '+'){
        document.getElementById('hi').innerHTML=`<b><u><i>${+num1+'+'+num2}=${+num1 + +num2}<i></u></b>`
    }
    if(sign == '-'){
        document.getElementById('hi').innerHTML=`<b><u><i>${+num1+'-'+num2}=${+num1 - +num2}<i></u></b>`
    }
    if(sign == '*'){
        document.getElementById('hi').innerHTML=`<b><u><i>${+num1+'·'+num2}=${+num1 * +num2}<i></u></b>`
        
    }
    if(sign == '/'){
        document.getElementById('hi').innerHTML=`<b><u><i>${+num1+'÷'+num2}=${+num1 / +num2}<i></u></b>`
    }
}
function code(){
    document.getElementById('code').innerHTML=`Твой код:<br>${document.getElementById('code2').value}`
}
function none(){
    document.getElementById('div').style="display: block;"
    document.getElementById('lock').style="display: none;"
}
function one(){
    nama=prompt("Ваше имя:")
    toLowerCa=nama.toLowerCase()
    document.getElementById('name').innerHTML=`<u><b><i>Имя:</i></b>${toLowerCa}</u>`
}
function on(){
    nam=prompt("Ваш возраст:")
    toLowerC=nam.toLowerCase()
    document.getElementById('nam').innerHTML=`<u><b><i>Лет:</i></b>${toLowerC}</u>`
}
function o(){
    na=prompt("Ваш размер (см.):")
    toLower=nam.toLowerCase()
    document.getElementById('na').innerHTML=`<u><b><i>Размер:</i></b>${toLower}</u>`
}