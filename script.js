const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-modal");

const modalSuccess = document.querySelectorAll(".modal-success");

const reset = document.querySelector(".reset");

reset.addEventListener('click', ()=> {
  location.reload();
})

modalSuccess.forEach(element => {
  element.addEventListener('click', ()=> {
    const modal2 = document.getElementById("modal2");
    modal2.showModal();
    const modalOpen = document.getElementById("modal1");
    modalOpen.close();
  })
})

openModal.forEach(modal => {
    modal.addEventListener('click', ()=> {
        const modalOpen = document.getElementById("modal1");
        modalOpen.showModal();
    })
});

closeModal.addEventListener('click', ()=> {
    const modalOpen = document.getElementById("modal1");
    modalOpen.close();
})


const radioButtons = document.querySelectorAll('.checkbox');

  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      // Remove 'active' class from all .selected divs and disable all radio buttons
      radioButtons.forEach(rb => {
        const card = rb.closest('.card');
        const selected = card.querySelector('.selected');
        if (selected) {
          selected.classList.remove('active');
          card.classList.remove('active');
        }
        rb.checked = false; // Disable all radio buttons
      });

      radio.checked=true;

      // Find the closest card and add the 'active' class to its .selected div
      const card = radio.closest('.card');
      const selected = card.querySelector('.selected');
      if (selected) {
        selected.classList.add('active');
        card.classList.add('active');
      }

      radioButtons.forEach(rb => {
        if (rb !== radio) {
          rb.disabled = false;
        }
      });
      
    });
  });


const off_screen = document.querySelector(".off-screen-menu")
const icon = document.querySelector(".ham-icon")

icon.addEventListener("click", () => {
    off_screen.classList.toggle('active');
    icon.classList.toggle('active');   
})