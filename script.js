var text;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


text = ['Once upon a time there was a Princess.  Many a suitor came to the palace to win her hand in marriage, but it seemed to the Princess that each one of them looked at her without really seeing her at all. ', '“They act like there’s nothing more to a princess than her fine crown and royal dresses,” she said to herself with a frown.', 'One afternoon after one of these visits, the Princess thought, “Sometimes I wish I were little again.” She found her favorite ball from childhood, the one that sparkled when she threw it up high to the sun. ', ' She took the ball to the palace yard and threw it higher and higher.', 'One time she threw it extra high and when she ran to catch the ball, she tripped on a tree stump.', 'The ball fell and plopped right down into the royal well!', 'She raced over to fetch her ball before it dropped too far, but by the time she got there she could no longer see it in the water.', '“Oh no!” she moaned, “This is terrible!”  Just then a small green frog poked its head above the water.    “Maybe I can help you,” said the Frog.   ', '“Yes,” said the Princess. “Please get my ball!”  “No problem,” said the Frog.  “But first there’s something I must ask of you.”', '“What do you mean?” said the Princess.  “It’s for you to spend time with me today,” said the Frog.', '“I’m not sure I know what that means,” said the Princess.  “Just spend time with me today,” repeated the Frog.'];

let element_story = document.getElementById('story');
text.push(text[0]);
element_story.innerText = text.shift();


document.getElementById('previous_page').addEventListener('click', (event) => {
  let element_story2 = document.getElementById('story');
  text.unshift(text.slice(-1)[0]);
  element_story2.innerText = text.pop();

});

document.getElementById('next_page').addEventListener('click', (event) => {
  let element_story3 = document.getElementById('story');
  text.push(text[0]);
  element_story3.innerText = text.shift();

});

document.getElementById('submit').addEventListener('click', (event) => {
  let element_names = document.getElementById('names');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('names').value);
  new_li.setAttribute("class", 'name');

  element_names.appendChild(new_li);
  let new_div = document.createElement('div');
  new_div.innerText = getNumberOrString(document.getElementById('comments').value);
  new_div.setAttribute("class", 'comment');

  element_names.appendChild(new_div);

});
