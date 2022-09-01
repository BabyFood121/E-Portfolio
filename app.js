let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackRound(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX *scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0
      const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else (document.body.classList.remove("dark-theme")
    )
}

// template_0pis0gl   service_hp74wta     c5oWTSKw5U5MVDbgi

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_hp74wta",
      "template_0pis0gl",
      event.target,
      "c5oWTSKw5U5MVDbgi"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily unavailable. Please contact me directly on allie2005nicholas@gmail.com"
      );
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
