const video = document.getElementById("video-nivea");

video.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch(err => {
      console.error('Erro ao tentar ativar o modo de tela cheia:', err);
    });
  }
});
