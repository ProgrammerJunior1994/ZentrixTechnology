const WHATSAPP_NUMBER = "523151132995";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle?.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".contratar-plan").forEach(button => {
    button.addEventListener("click", () => {
      const plan = button.dataset.plan;
      const message =
        `Hola INTESYS. Me interesa contratar el paquete ${plan}. ` +
        `Quisiera consultar cobertura, instalación y requisitos.`;
      window.open(whatsappUrl(message), "_blank");
    });
  });

  const contactButton = document.getElementById("whatsappContact");
  if (contactButton) {
    contactButton.href = whatsappUrl(
      "Hola INTESYS. Tengo una pregunta sobre sus servicios de internet y cibercafé."
    );
  }

  const form = document.getElementById("hireForm");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const paquete = document.getElementById("paquete").value;
    const zona = document.getElementById("zona").value.trim();

    const message =
      `Hola INTESYS, mi nombre es ${nombre}. ` +
      `Me interesa contratar el paquete: ${paquete}. ` +
      `Mi colonia/zona es: ${zona}. ` +
      `Quisiera saber si hay cobertura, el proceso de instalación y los requisitos.`;

    window.open(whatsappUrl(message), "_blank");
  });
});
