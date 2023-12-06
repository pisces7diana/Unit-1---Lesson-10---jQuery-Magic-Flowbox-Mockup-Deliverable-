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
  $h4.addClass('dog').text('Pennygirl and Roam');
  $container.append($h4);

  const $h5 = $('<h4>');
  console.log($h5)
  $h5.text('Holly Wand with Unicorn Hair Core');
  $container.append($h5);

  const $ul = $("<ul storage='trunk'></ul>");
  console.log($ul);
  $container.append($ul);

  const $li1 = $("<li></li>")
  console.log($li1);
  $li1.text('butter beer');
  $ul.append($li1);

  const $li2 = $("<li></li>")
  console.log($li2);
  $li2.addClass('secret').text('invisibility cloak');
  $ul.append($li2);

  const $li3 = $("<li></li>")
  console.log($li3);
  $li3.addClass('secret').text('magic map');
  $ul.append($li3);

  const $li4 = $("<li></li>")
  console.log($li4);
  $li4.addClass('secret').text('time turner');
  $ul.append($li4);

  const $li5 = $("<li></li>")
  console.log($li5);
  $li5.addClass('dog').text('leash');
  $ul.append($li5);

  const $li6 = $("<li></li>")
  console.log($li6);
  $li6.text("Bertie Bott's Every Flavor [Jelly] Beans.");
  $ul.append($li6);

})