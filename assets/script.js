$(document).ready(function () {
  $('#pokemon-info').hide()

  $('#search').click(function (event) {
    event.preventDefault()

    let pokemon = $('#pokemon-name').val().toLowerCase()
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    $.get(apiUrl, buildCard).fail(function () {
      $('#pokemon-info')
        .html('<p style="color: red;">Pokémon não encontrado!</p>')
        .fadeIn()
    })

    $('#pokemon-name').val('')
  })
})

function buildCard(data) {
  console.log(data)
  const name = data.name.toUpperCase()
  const picture = data.sprites.front_default
  const types = data.types.map((t) => t.type.name).join(', ')
  const abilities = data.abilities.map((a) => a.ability.name).join(', ')

  $('#pokemon-info')
    .html(
      `
    <h2>${name}</h2>
    <img src="${picture}" alt="Imagem do ${name}" />
    <p><strong>Type(s):</strong> ${types}</p> 
    <p><strong>Abilities:</strong> ${abilities}</p> 
  `
    )
    .fadeIn()
}
