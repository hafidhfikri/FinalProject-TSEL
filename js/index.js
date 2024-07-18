// content json portofolio jasa koding
var data_porto = [
  {
    kategori : "koding",
    data_img : "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    data_konten : "kami melakukan koding untuk membangun sistem pesantren kilat"
  },
  {
    kategori : "koding",
    data_img : "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    data_konten : "kami melakukan koding untuk membangun sistem pusat data nasional republik rakyat zimbabwe"
  },
  {
    kategori : "koding",
    data_img : "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    data_konten : "kami melakukan koding untuk membangun rumah sakit di daerah terpencil"
  },
  {
    kategori : "pentest",
    data_img : "https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE",
    data_konten : "kami melakukan pentest untuk menguji sistem keamanan sistem pusat data nasional republik rakyat zimbabwe"
  },
  {
    kategori : "pentest",
    data_img : "https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE",
    data_konten : "kami melakukan pentest untuk menguji sistem keamanan sistem pusat data nasional republik rakyat ululu"
  },
  {
    kategori : "pentest",
    data_img : "https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE",
    data_konten : "kami melakukan pentest untuk menguji sistem keamanan sistem pusat data nasional republik rakyat skibidi"
  },
  {
    kategori : "pentest",
    data_img : "https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE",
    data_konten : "kami melakukan pentest untuk menguji sistem keamanan sistem pusat data nasional negara kesatuan antares"
  },
  {
    kategori : "support",
    data_img : "https://fastly.picsum.photos/id/249/3000/2000.jpg?hmac=U2oOCXdXUwt6ftKMC4icF6eS8dGDUZJM_0-qi0JEqjk",
    data_konten : "kami melakukan it support pada sistem pusat data nasional republik rakyat zimbabwe"
  },
  {
    kategori : "support",
    data_img : "https://fastly.picsum.photos/id/249/3000/2000.jpg?hmac=U2oOCXdXUwt6ftKMC4icF6eS8dGDUZJM_0-qi0JEqjk",
    data_konten : "kami melakukan it support pada sistem pusat data nasional republik rakyat ululu"
  },
  {
    kategori : "support",
    data_img : "https://fastly.picsum.photos/id/249/3000/2000.jpg?hmac=U2oOCXdXUwt6ftKMC4icF6eS8dGDUZJM_0-qi0JEqjk",
    data_konten : "kami melakukan it support pada sistem pusat data nasional republik rakyat skibidi"
  }
];

let konten_el = document.getElementById("konten-holder");

data_porto.forEach(num => {
  konten_el.innerHTML += `
  <div class="col">
      <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${num.data_img}" alt="Card image cap">
          <div class="card-body">
              <p class="card-text">${num.data_konten}</p>
          </div>
      </div>
  </div>
  `
})

function show_pentest() {
  konten_el.innerHTML = "";

  data_porto.forEach(num => {
    if (num.kategori == "pentest") {
      konten_el.innerHTML += `
      <div class="col">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${num.data_img}" alt="Card image cap">
              <div class="card-body">
                  <p class="card-text">${num.data_konten}</p>
              </div>
          </div>
      </div>
    `
    }
  })
}

function show_koding() {
  konten_el.innerHTML = "";

  data_porto.forEach(num => {
    if (num.kategori == "koding") {
      konten_el.innerHTML += `
      <div class="col">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${num.data_img}" alt="Card image cap">
              <div class="card-body">
                  <p class="card-text">${num.data_konten}</p>
              </div>
          </div>
      </div>
    `
    }
  })
}

function show_support() {
  konten_el.innerHTML = "";

  data_porto.forEach(num => {
    if (num.kategori == "support") {
      konten_el.innerHTML += `
      <div class="col">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${num.data_img}" alt="Card image cap">
              <div class="card-body">
                  <p class="card-text">${num.data_konten}</p>
              </div>
          </div>
      </div>
    `
    }
  })
}

function show_all() {
  konten_el.innerHTML = "";

  data_porto.forEach(num => {
    konten_el.innerHTML += `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${num.data_img}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">${num.data_konten}</p>
            </div>
        </div>
    </div>
    `
  })
}

function displayTodo() {
  const todos = JSON.parse(localStorage.getItem('todos'))

  let list = ``

  if (todos) {
      for (let i = 0; i < todos.length; i++) {
          list += `
          <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
              <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <div class="form-check">
                      <input class="form-check-input me-0" type="checkbox" value="" id=${todos[i].id} onchange="setComplete(this.checked, this.id)" aria-label="..." ${todos[i].checked ? 'checked' : ''} />
                  </div>
              </li>
              <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                  <p class="lead fw-normal mb-0">${todos[i].name}</p>
              </li>
              <li class="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                  <button type="button" class="btn btn-danger" id=${todos[i].id} onClick="deleteTodo(this.id)">Delete</button>
              </li>
          </ul>
          `
      }
  }

  document.getElementById('list-todo').innerHTML = list
}

function setComplete(checked, id) {
  let todos = JSON.parse(localStorage.getItem('todos'))

  todos = todos.map(el => {
      if (el.id === Number(id)) {
          el.checked = checked
      }
      return el
  })

  localStorage.setItem('todos', JSON.stringify(todos))

  displayTodo()
}

function submitTodo() {
  const todo = document.getElementById('add-todo').value

  let todos = JSON.parse(localStorage.getItem('todos'))

  if (todos) {
      todos.push({
          id: todos[todos.length - 1].id + 1,
          name: todo,
          checked: false
      })
  } else {
      todos = [{
          id: 0,
          name: todo,
          checked: false
      }]
  }

  localStorage.setItem('todos', JSON.stringify(todos))
  document.getElementById('add-todo').value = ''

  displayTodo()
}

function deleteTodo(id) {
  let todos = JSON.parse(localStorage.getItem('todos'))

  todos = todos.filter(el => el.id !== Number(id))

  if (todos.length) {
      localStorage.setItem('todos', JSON.stringify(todos))
  } else {
      localStorage.removeItem('todos')
  }

  displayTodo()
}


