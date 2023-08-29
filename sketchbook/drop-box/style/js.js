const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

function fileClick() {
    document.getElementById('file-input').click();
}

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    // Exiba o nome do arquivo (opcional)
    alert(`Arquivo selecionado: ${files[0].name}`);
  }
});

// Lidar com a seleção de arquivo por clique
fileInput.addEventListener('change', () => {
  // Exiba o nome do arquivo (opcional)
  alert(`Arquivo selecionado: ${fileInput.files[0].name}`);
});
