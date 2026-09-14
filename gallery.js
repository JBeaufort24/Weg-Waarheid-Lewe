document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('closeBtn');

  // Open Lightbox on image click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightbox.classList.add('active');
    });
  });

  // Close Lightbox functions
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    // Clear src after fade out transition finishes
    setTimeout(() => {
      lightboxImg.src = '';
    }, 300);
  };

  // Close when clicking the 'X' button
  closeBtn.addEventListener('click', closeLightbox);

  // Close when clicking outside the image overlay
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close using the Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});
