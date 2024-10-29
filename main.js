const ZAD_COUNT = 40;
const form = document.querySelector('.zad-buttons');

for (let i = 1; i <= ZAD_COUNT; i++) {
  form.appendChild(createTaskButton(i));
  form.appendChild(createCodeButton(i));
}

function WinOpen(task, code = false, height = 800, width = 800, top = 100, left = 100) {
  if (code) {
    window.open(
      `z${task}/z${task}_blaszkowska-KOD.html`,
      `okienko_z${task}-KOD`,
      `toolbar=no, directories=no, menubar=no, height=${height}, width=${width}, top=${top}, left=${left}`);

    return;
  }

  window.open(
    `z${task}/z${task}_blas.html`,
    `okienko_z${task}`,
    `toolbar=no, directories=no, menubar=no, height=${height}, width=${width}, top=${top}, left=${left}`);
}

function createTaskButton(index) {
  const button = document.createElement('input');
  button.type = 'button';

  button.name = `zadanie${index}`;
  button.value = `zadanie${index}-Błaszkowska`;
  button.onclick = () => { WinOpen(index) };

  return button;
}

function createCodeButton(index) {
  const button = document.createElement('input');
  button.type = 'button';

  button.name = `zadanie${index}-kod`;
  button.value = `zadanie${index}-blaszkowska-kod`;
  button.onclick = () => { WinOpen(index, true) };

  return button;
}
