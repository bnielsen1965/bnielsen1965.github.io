UI.ready(init);

// initialize page when ready
function init () {
  let list = UI.elements('icon-select');
  for (let item of list) {
    item.addEventListener('click', buttonClick);
  }
}

// handle button click event
function buttonClick (e) {
  let group = e.currentTarget.className.split(' ').reduce((g, c) => g || (/^icon-group-.*$/.test(c) ? c : g), null);
  selectButton(group);
  selectList(group);
}

// highlight the selected button
function selectButton (group) {
  let list = UI.elements('icon-select');
  for (let item of list) {
    if (item.classList.contains(group)) item.classList.add('icon-selected');
    else item.classList.remove('icon-selected');
  }
}

// highlight selections in list
function selectList (group) {
  clearLiState();
  let list = UI.elements('icon-span');
  for (let item of list) if (item.classList.contains(group)) item.parentNode.classList.add('icon-selected');
}

// set or clear parent li class
function parentLiState (elem, selected) {
  if (selected) elem.parentNode.classList.add('icon-selected');
  else elem.parentNode.classList.remove('icon-selected');
}

// clear list selections
function clearLiState () {
  let list = UI.elements('icon-li');
  for (let item of list) item.classList.remove('icon-selected');
}
