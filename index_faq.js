document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const faq = question.parentElement;

        // Close all other open FAQs
        document.querySelectorAll('.faq').forEach(item => {
          if (item !== faq) {
            item.classList.remove('active');
          }
        });

        // Toggle the clicked FAQ
        faq.classList.toggle('active');
      });
    });