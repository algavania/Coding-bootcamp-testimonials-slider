var btn_previous = document.getElementById('btn-previous');
var btn_next = document.getElementById('btn-next');

var text_one = document.getElementsByClassName('text-one');
var text_two = document.getElementsByClassName('text-two');

var text_job = document.getElementsByClassName('text-job');
var text_name = document.getElementsByClassName('text-name');

var img_tanya = document.getElementById('img-tanya');
var img_john = document.getElementById('img-john');

var clicked = false;

var windowSize = window.matchMedia("(max-width: 1100px)");

const btn_clicked = () => {
    if (clicked) {
        for (let index = 0; index < text_one.length; index++) {
            text_one[index].style.display = 'block';
            text_two[index].style.display = 'none';
        }
        if (windowSize.matches) {
            text_name[0].style.display = 'block';
            text_job[0].style.display = 'inline';
        } else {
            text_name[0].style.display = 'inline';
            text_job[0].style.display = 'inline';
        }

        img_john.style.display = 'none';
        img_tanya.style.display = 'block';
        img_tanya.className += 'fade center';
        img_john.className = '';

        clicked = false;
    } else {
        for (let index = 0; index < text_one.length; index++) {
            text_one[index].style.display = 'none';
            text_two[index].style.display = 'block'
        }
        if (windowSize.matches) {
            text_name[1].style.display = 'block';
            text_job[1].style.display = 'block';
        } else {
            text_name[1].style.display = 'inline';
            text_job[1].style.display = 'inline';
        }
        img_tanya.style.display = 'none';
        img_john.style.display = 'block';
        img_john.className += 'fade center';
        img_tanya.className = '';

        clicked = true;
    }
}

btn_previous.addEventListener('click', btn_clicked);
btn_next.addEventListener('click', btn_clicked);