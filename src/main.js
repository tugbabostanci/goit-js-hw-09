import { loadConfigFromFile } from "vite";

document.addEventListener('DOMContentLoaded', () => {
  const galleryLink = document.querySelector('a[href="/01-gallery.html"]');
  const formLink = document.querySelector('a[href="/02-form.html"]');
  
  galleryLink.addEventListener('click', (e) => {
    console.log("Redirecting to Gallery");
  });
  
  formLink.addEventListener('click', (e) => {
    console.log("Redirecting to User Form");
  });

});

