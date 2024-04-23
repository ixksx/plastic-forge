document.querySelector('.filter_btn2').addEventListener('click', function() {
    document.querySelector('.filter_btn2').classList.toggle('active');
    document.querySelector('.filter').classList.toggle('active');
    document.querySelector('.filter_btn1').classList.toggle('active');
})

document.querySelector('.filter_btn1').addEventListener('click', function() {
    document.querySelector('.filter_btn1').classList.toggle('active');
    document.querySelector('.filter').classList.toggle('active');
    document.querySelector('.filter_btn2').classList.toggle('active');
})
