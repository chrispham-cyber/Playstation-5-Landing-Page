function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    toTop.style.display = "block";
    menu.style.background = "white";

  } else {
    toTop.style.display = "none";
    menu.style.background = "none";
    menu.style.color = "red";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function check() {
  let name = document.getElementById("user").value;
  let pwd = document.getElementById("password").value;
  let wrn = document.getElementById("noti");
  if (name !== "admin@gmail.com" || pwd !== "123") {
    wrn.style.display = "block";
    return false;
  }
}

function toPage1() {
  pg1.style.display = "flex";
  pg2.style.display = "none";
  btn1.classList.add("active");
  btn2.classList.remove("active");
}

function toPage2() {
  pg2.style.display = "flex";
  pg1.style.display = "none";
  btn2.classList.add("active");
  btn1.classList.remove("active");
}
