var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
  #thumbnail, ytd-thumbnail {
    display: none !important;
  }
  #comments {
    display: none !important;
  }
`;
document.head.appendChild(style);
