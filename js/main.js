// lines 2-14 https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
    });
  });

const mailcontainerElements = document.querySelectorAll('.mailcontainer');
mailcontainerElements.forEach((el) => observer.observe(el));