function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTop.style.display = "block";
      menu.style.background = "white";
    } else {
      toTop.style.display = "none";
      menu.style.background  = "none";;
    }
  }

function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  function check() 
    {
        let name = document.getElementById("user").value;
        let pwd = document.getElementById("password").value;
        let wrn = document.getElementById("noti");
        if (name !== "admin@gmail.com" || pwd !== "123")
        { 
          wrn.style.display = "block";
          return false;
        }
    }

    