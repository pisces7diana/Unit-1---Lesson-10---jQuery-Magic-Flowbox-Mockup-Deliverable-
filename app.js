// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
  const $container = $('#container');
  console.log($container);

  const $h1 = $('<h1>');
  console.log($h1)
  $h1.text('Hogwarts');
  $container.append($h1);

  const $h2 = $('<h2>');
  console.log($h2)
  $h2.text('Diana');
  $container.append($h2);

  const $h3 = $('<h3>');
  console.log($h3)
  $h3.text('Ravenclaw');
  $container.append($h3);

  const $h4 = $('<h4>');
  console.log($h4)
  $h4.addClass('cat').text('Pennygirl and Roam');
  $container.append($h4);

  const $h5 = $('<h4>');
  console.log($h5)
  $h5.text('Holly Wand with Unicorn Hair Core');
  $container.append($h5);

  const $ul = $('<ul>');
  console.log($ul)
  $ul.text('butter beer');
  $container.append($ul)
})