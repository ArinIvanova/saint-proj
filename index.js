
let fruits = [
    {id: 1, title: 'Кофе', img: 'https://i.pinimg.com/originals/b9/8c/dd/b98cdd89a78aac10701c5ec1ab0f75ae.jpg'},
    {id: 2, title: 'Чай',  img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/26/s1201.jpg'},
    {id: 3, title: 'Десерты',  img: 'https://almette.ru/uploads/recipe/Qhf7TvJUy1AEC6cq8TGg25jyxtRvFNrt0nprfF3m.jpeg'},
  ]
  
  const toHTML = fruit => `
    <div class="col">
      <div class="card">
        <img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Открыть</a>
          <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Закрыть</a>
        </div>
      </div>
    </div>
  `
  
  function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
  }
  
  render()
  
  const priceModal = $.modal({
   
    closable: true,
    width: '400px',
    footerButtons: [
      {text: 'Закрыть', type: 'primary', handler() {
        priceModal.close()
      }}
    ]
  })
  
  document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)
  
    if (btnType === 'price') {
      priceModal.setContent(`
        <p>Вы открыли ${fruit.title}: <strong>тут должно быть api</strong></p>
      `)
      priceModal.open()
    } else if (btnType === 'remove') {
      $.confirm({
        title: 'Вы уверены?',
        content: `<p>Вы закрываете: <strong>${fruit.title}</strong></p>`
      }).then(() => {
        fruits = fruits.filter(f => f.id !== id)
        render()
      }).catch(() => {
        console.log('Cancel')
      })
    }
  })