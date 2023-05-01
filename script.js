const checkbox = document.getElementById('burgerCheckBoxID')
const menu = document.getElementById('menuID')
const upBtn = document.getElementById('upBtnID')



checkbox.addEventListener('click', function check() {
    if (checkbox.checked) {
      menu.style.display = 'flex'
    } else {
      menu.style.display = 'none'
    }
  });
  
window.addEventListener('resize', function executeIfMinWidth780(){
    if (window.matchMedia('(min-width: 780px)').matches) {
        checkbox.checked = true
        menu.style.display = 'flex'
    }
});

window.addEventListener('resize', function executeIfMaxWidth780(){
    if (window.matchMedia('(max-width: 780px)').matches) {
        checkbox.checked = false
        menu.style.display = 'none'
    }
});


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "block";
      } else {
        upBtn.style.display = "none";
    }
};

function goUpFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}