function newFunction(operator) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("myId").innerHTML = "Please enter valid numbers.";
  } else {
      let total;

      switch (operator) {
          case '+':
          total = num1 + num2;
              break;
          case '-':
          total = num1 - num2;
              break;
          case '*':
          total = num1 * num2;
              break;
          case '/':
              if (num2 === 0) {
                  document.getElementById("myId").innerHTML = "Division by zero is not allowed.";
                  return;
              }
              total = num1 / num2;
              break;
          default:
              document.getElementById("myId").innerHTML = "Invalid operator.";
              return;
      }

      document.getElementById("myId").innerHTML = "Total: " + total;
  }
}

function ggInput() {
    const inputDate= document.getElementById('input').value
    const day= new Date(inputDate)
    const today= day.getDay()

let dayValue=""
switch(today){
case 0:
    dayValue="Sunday"
break;

case 1:
    dayValue= "Monday"
break;

case 2:
    dayValue= "Tuesday"
break;

case 3:
    dayValue="Wednesday"
break;

case 4:
    dayValue="Thursday"
break;

case 5:
    dayValue="Friday"
break;

case 6:
    dayValue="Saturday"
break;
}

document.getElementById("result").innerHTML = dayValue
}

function GGinputFunction() {
    var ggInput = document.getElementById('gg').value 
    console.log (2028 - parseInt(ggInput));
    if(parseInt(ggInput) >= 18){
        console.log("Legal Age")
    }else{
        console.log("Minor Age")
    }
}

$('[name="myNameInput"]').on('change', function (){
    console.log($('[name="myNameInput"]').val());
});

const newList = [];

$('#getData').on('click', function(){
    console.log('I Am Working!');
    var catchThemAll = $.ajax({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/',
    }).done(function(data){
        console.log(data.results);
        let list = "";
        data.results.map((item, key) => {
            list += '<a>' + item.name.toUpperCase() + '<button class="show-skill-button" onclick="getDetails('+key+')">Show Skill</button></a>';
            newList.push(item);
        });
        $('#myList').html(list);
    });
});

function getDetails(id) {
    console.log(newList[id]);
    $.ajax({
        method: 'GET',
        url: newList[id].url,
    }).done(function (data) {
        console.log(data);
        let sampledetails = '<h2>' + data.name.toUpperCase() + '</h2>';
        sampledetails += '<img src="' + data.sprites.front_default + '"/>';
        sampledetails += '<p>Height: ' + data.height + '</p>';
        sampledetails += '<p>Weight: ' + data.weight + '</p>';
        sampledetails += '<p>Type: ' + data.types.map(type => type.type.name).join(', ') + '</p>';
        sampledetails += '<p>Stats:</p>';
        sampledetails += '<ul>';
        data.stats.forEach(stat => {
            sampledetails += '<li>' + stat.stat.name + ': ' + stat.base_stat + '</li>';
        });
        sampledetails += '</ul>';
        $('#details').html(sampledetails);
    });
}

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 200;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    });
}

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    document.addEventListener('scroll', function () {
        const elements = document.querySelectorAll('.animated');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('show');
            }
        });
    });

