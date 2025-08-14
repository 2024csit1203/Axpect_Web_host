const form = document.getElementById("contactForm");
    const messageDiv = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://sheetdb.io/api/v1/m1ldwodvsks7s", {
        method: "POST",
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          messageDiv.textContent = "Form submitted successfully!";
          messageDiv.className = "success";
          form.reset();
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch((error) => {
        messageDiv.textContent = "Something went wrong. Please try again.";
        messageDiv.className = "error";
        console.error("Error submitting form:", error);
      });
    });