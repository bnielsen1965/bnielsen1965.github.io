UI.ready(init);


function init () {
  let list = UI.elements('icon-select');
  for (let item of list) {
    item.addEventListener('click', buttonClick);
  }
}

function buttonClick (e) {
  let group = e.currentTarget.className.split(' ').reduce((g, c) => g || (/^icon-group-.*$/.test(c) ? c : g), null);
  console.log(group)
  selectButton(group);
  selectList(group);
}

function selectButton (group) {
  let list = UI.elements('icon-select');
  for (let item of list) {
    if (item.classList.contains(group)) item.classList.add('icon-selected');
    else item.classList.remove('icon-selected');
  }
}

function selectList (group) {
  let list = UI.elements('icon-li');
  for (let item of list) {
    if (item.classList.contains(group)) item.classList.add('icon-selected');
    else item.classList.remove('icon-selected');
  }
}
