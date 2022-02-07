
$(function()
{
  AOS.init({ duration: 1500 }); // Thời gian chạy animation

  var toTop = document.getElementById("toTopBtn"); // Quay lại đầu trang
  var menu = document.getElementById("menu");
  var counted = false; // Đếm số

  // Hiệu ứng Typing cho Premium
  var typed = new Typed('.typing',
  {
    strings: ["Trial", "Paid", "VIP"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })

  // Hiệu ứng chuyển màu thanh Menu
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
  
  // Kéo đến phần Gaming mới bắt đầu đếm
  window.onscroll = function () {
    scrollFunction();

    if (window.scrollY > 1000 && !counted) {
      $('.counter-count').each(function () {
        $(this).animate
          ({
            Counter: $(this).text()
          },
            {
              duration: 2500,
              easing: 'swing',
              step: function (now) {
                $(this).text(Math.ceil(now));
              }
            });
      });
      counted = true;
    }
  };

  // Hiệu ứng cho Follow trên menu
  $(".dropdown-toggle").mouseenter(function()
  {
    $(".dropdown-menu").fadeIn(1000);
  })

  $(".dropdown-toggle").mouseleave(function()
  {
    $(".dropdown-menu").delay(1500).fadeOut(1000);
  })
  
  // Hiệu ứng cho khung đăng ký cho Premium
  $("#premium .card:first").mouseenter(function()
  {
    $("#premium .card:first").animate({top: '-=15px'});
  })

  $("#premium .card:first").mouseleave(function()
  {
    $("#premium .card:first").animate({top: '+=15px'});
  })


   // Đóng mở Side Menu
  $('.navbar-responsive').click(function() {
    $('.navbar-side').css('display', 'block')
  });

  $('.navbar-side .btn').click(function() {
    $('.navbar-side').css('display', 'none')
  });

  $('a').click(function() {
    $('.navbar-side').css('display', 'none')
  });
})


// Hiệu ứng chuyển trang sản phẩm
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

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Kiểm tra tài khoản đăng nhập
function check() {
  let name = document.getElementById("user").value;
  let pwd = document.getElementById("password").value;
  let wrn = document.getElementById("noti");
  if (name !== "admin@gmail.com" || pwd !== "123") {
    wrn.style.display = "block";
    return false;
  }
}