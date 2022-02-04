let ul = document.querySelector("#myUL");
const input = document.querySelector("#myInput");
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector(".myForm");
addBtn.addEventListener("click", AddToDo);
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
writeList();
function AddToDo(e) {
  e.preventDefault();
  const task = {
    text: input.value,
    isDone: false,
  };
  tasks.push(task);
  form.reset();
  localStorage.setItem("tasks", JSON.stringify(tasks));
  writeList();
}

function writeList() {
  const html = tasks.map((item, index) => {
    const classItems = item.isDone ? "done" : "";
    return `
              <li  data-index=${index} class=" ${classItems}">
                  <div >${item.text} <i class="fas fa-trash float-right"></i></div>
              </li>
          `;
  });

  ul.innerHTML = html.join("");
}
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.parentNode.parentNode.dataset.index;
    tasks.splice(index, 1);
    e.target.parentNode.parentNode.remove();
    console.log(index)
  } else {
    e.target.parentNode.classList.add("done");
    tasks[e.target.parentNode.dataset.index].isDone =
      !tasks[e.target.parentNode.dataset.index].isDone;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  writeList();
});
