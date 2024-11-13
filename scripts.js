document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'articleTitle' class
  document.querySelectorAll('.articleTitle').forEach(title => {
    const answer = title.nextElementSibling;

    // Set initial display state and SVG icon
    const isActive = answer.classList.contains('active');
    answer.style.display = isActive ? 'block' : 'none';
    toggleSvgDisplay(title, isActive); // Show plus if inactive, minus if active

    // Add click event to toggle visibility and SVG icons
    title.addEventListener('click', () => {
      const currentlyActive = answer.classList.toggle('active');
      answer.classList.toggle('inactive', !currentlyActive);
      answer.style.display = currentlyActive ? 'block' : 'none';
      toggleSvgDisplay(title, currentlyActive);
    });
  });

  // Function to toggle SVG icon visibility based on active state
  function toggleSvgDisplay(titleElement, isActive) {
    titleElement.querySelectorAll('svg').forEach(svg => {
      svg.style.display = svg.classList.contains('inactive') ? (isActive ? 'inline' : 'none') : (isActive ? 'none' : 'inline');
    });
  }
});
