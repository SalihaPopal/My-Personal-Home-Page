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


text = ['Once upon a time there was a Princess.  Many a suitor came to the palace to win her hand in marriage, but it seemed to the Princess that each one of them looked at her without really seeing her at all.    “They act like there’s nothing more to a princess than her fine crown and royal dresses,” she said to herself with a frown.  One afternoon after one of these visits, the Princess thought, “Sometimes I wish I were little again.” She found her favorite ball from childhood, the one that sparkled when she threw it up high to the sun.  She took the ball to the palace yard and threw it higher and higher.', 'One time she threw it extra high and when she ran to catch the ball, she tripped on a tree stump. The ball fell and plopped right down into the royal well!  She raced over to fetch her ball before it dropped too far, but by the time she got there she could no longer see it in the water.  “Oh no!” she moaned, “This is terrible!”  Just then a small green frog poked its head above the water.    “Maybe I can help you,” said the Frog.', '“Yes,” said the Princess. “Please get my ball!”  “No problem,” said the Frog.  “But first there’s something I must ask of you.”  “What do you mean?” said the Princess.  “It’s for you to spend time with me today,” said the Frog.  “I’m not sure I know what that means,” said the Princess.  “Just spend time with me today,” repeated the Frog.', '“All right then, fine!” said the Princess.  “Now please, get my ball!”', '“I’m on it,” said the Frog.  He dived deep into the well. A few moments later, up he came with the ball held high in one hand.  “Thank you,” said the Princess, taking it from him.    She turned to go.  “Wait a minute!” said the Frog.  “You promised to spend time with me today!”  “I already did,” she said with a shrug.  And the Princess walked back to the palace.  That night at dinner with her family and the royal advisers, there was a knock on the door. The servant opened the door and saw no one there. The Frog, standing down low, cleared his throat.', '“The Princess promised to spend time with me today,” said the Frog in as loud a voice as he could.  “So here I am.”  “Daughter!” said the King from the far end of the table.  “Did you promise to spend time with this Frog, as he claims?”  “Sort of,” said the Princess.  After a pause, she added, “Oh very well, come on in.”', 'The servants quickly set a new place setting for the Frog, and he hopped over to the royal dining table.', 'Conversation turned to a topic of concern in the kingdom.  None of the royal advisers knew what to do.  “Father, if I may,” said the Princess.  “Perhaps we could–“  “Stop!” said the King, cutting her off.  “I have enough advisors, believe me.”  “If I may,” said the Frog, and it was the first time he had spoken at the table.     ', '“There’s more to a princess than her fine crown and royal dresses.”  The Princess stared at the Frog. How could this little frog – more than anyone else – understand such a thing?  After dinner, the Frog bowed to the Princess.  He said, “You have done what you said you would do.  I suppose it’s time now for me to go.”  “No wait!” said the Princess, “it’s not that late.  How about a walk in the garden?”  The Frog was delighted.  The two of them walked in the royal garden, the Frog hopping along the stone wall so he and the Princess were at the same level and could talk easily.', ' They laughed about many things. Later, when the sun set, they admired the deep rosy reds it cast in the sky.  The Princess said, “You know, being with you tonight was a lot more fun than I thought.”  “I had a very good time, too,” said the Frog.  “Who knew?” said the Princess with a laugh. She leaned over and kissed the Frog lightly on his cheek.   ', 'At once, there was a puff of clouds and smoke.  The small green frog had changed into a young prince!  The Princess jumped back in surprise, and who could blame her?  The Prince quickly told her not to worry, that all was well. Years before, an evil witch had put a spell on him that he must stay a frog until he was kissed by a princess.  The witch had laughed an evil laugh, saying, “Like THAT will ever happen!” But it did!  Now the Prince and Princess could get to know each other better.  Years later, after they were married, they had a beautiful setting made for the ball and placed it on their royal dining table.  And when the sunlight shone in through the palace windows, the ball sparkled for all to see.   ', 'THE END'];

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

document.getElementById('but1').addEventListener('click', (event) => {
  let element_list_2 = document.getElementById('list_2');
  let new_li = document.createElement('li');
  new_li.innerText = 'Mobile';

  element_list_2.appendChild(new_li);

});

document.getElementById('but2').addEventListener('click', (event) => {
  let element_list_22 = document.getElementById('list_2');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Headphone';

  element_list_22.appendChild(new_li2);

});

document.getElementById('but3').addEventListener('click', (event) => {
  let element_list_23 = document.getElementById('list_2');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'iPad';

  element_list_23.appendChild(new_li3);

});
