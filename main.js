function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }