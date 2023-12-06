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

  const $h6 = $('<h5>');
  console.log($h6);
  $h6.text('Spring 2017');
  $container.append($h6);

  const $table = $('<table>');
  console.log($table);
  $container.append($table);

  const $thead = $("<thead>");
  console.log($thead);
  $table.append($thead);

  const $th1 = $("<th>");
  console.log($th1);
  $th1.text('Day');
  $thead.append($th1);

  const $th2 = $("<th>");
  console.log($th2);
  $th2.text('Classes');
  $thead.append($th2);

  const $tr = $("<tr>");
  console.log($tr);
  $table.append($tr);

  const $td1 = $("<td>");
  console.log($td1);
  $td1.text('Monday');
  $tr.append($td1);

  const $td2 = $("<td>");
  console.log($td2);
  $td2.text('Herbology');
  $tr.append($td2);

  const $tr1 = $("<tr>");
  console.log($tr1);
  $table.append($tr1);

  const $td3 = $("<td>");
  console.log($td3);
  $td3.text('Tuesday');
  $tr1.append($td3);

  const $td4 = $("<td>");
  console.log($td4);
  $td4.text('Divination');
  $tr1.append($td4);

  const $tr2 = $("<tr>");
  console.log($tr2);
  $table.append($tr2);

  const $td5 = $("<td>");
  console.log($td5);
  $td5.text('Wednesday');
  $tr2.append($td5);

  const $td6 = $("<td>");
  console.log($td6);
  $td6.text('History of Magic');
  $tr2.append($td6);

  const $tr3 = $("<tr>");
  console.log($tr3);
  $table.append($tr3);

  const $td7 = $("<td>");
  console.log($td7);
  $td7.text('Thursday');
  $tr3.append($td7);

  const $td8 = $("<td>");
  console.log($td8);
  $td8.text('Charms');
  $tr3.append($td8);

  const $tr4 = $("<tr>");
  console.log($tr4);
  $table.append($tr4);

  const $td9 = $("<td>");
  console.log($td9);
  $td9.text('Friday');
  $tr4.append($td9);

  const $td10 = $("<td>");
  console.log($td10);
  $td10.text('Potions');
  $tr4.append($td10);

  $h5.remove();

  $li1.remove();

  $h5.text('New Wand with Unicorn Hair Core');
  $container.append($h5);
  $h4.after($h5);
  $h5.css("color", "indigo");

  $h4.remove();

  $h3.after($h4);

  $('.secret').hide('slow');

  $('.secret').delay(2000).hide('slow');

  $('.secret').show('slow');

  $li5.addClass('cabbage').text('leash');
  $ul.append($li5);

  $li5.removeClass('cabbage');

  $h6.text('Fall 2018');

  $li1.text('butter beer');
  $ul.prepend($li1);

  $ul.attr('storage', 'chest');
})