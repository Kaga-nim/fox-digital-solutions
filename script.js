// script.js
document.addEventListener('DOMContentLoaded', function () {
  const splash = document.getElementById('splash');
  const content = document.getElementById('content');
  const skipBtn = document.getElementById('skipBtn');

  const SPLASH_DURATION = 3000; // durasi splash (ms) - sesuaikan

  // Fungsi untuk menutup splash dan tunjukkan konten
  function hideSplash() {
    if (!splash.classList.contains('splash--hide')) {
      splash.classList.add('splash--hide');
      // tambahkan kelas untuk menampilkan konten
      content.classList.add('content--visible');
    }
  }

  // Jika user klik "Lewati"
  if (skipBtn) {
    skipBtn.addEventListener('click', hideSplash);
  }

  // Pastikan splash muncul sekian detik setelah load lalu menghilang
  window.addEventListener('load', function () {
    // beri delay biar animasinya terlihat
    setTimeout(hideSplash, SPLASH_DURATION);
  });

  // Fallback: jika resource tidak trigger 'load', tetap hide splash after X time
  // (mis. jaringan bermasalah)
  setTimeout(function() {
    // jika konten belum terlihat, paksa tunjukkan
    if (!content.classList.contains('content--visible')) hideSplash();
  }, SPLASH_DURATION + 1000);
});
