
class UI {
  static ready (handler) {
    window.addEventListener('load', handler);
  }

  static exit (handler) {
    window.addEventListener('unload', handler);
  }

  static element (id) {
    return document.getElementById(id);
  }

  static elements (className) {
    return document.getElementsByClassName(className);
  }

  static elementHTML (id, html) {
    let element = UI.element(id);
    if (!element) return;
    element.innerHTML = html;
  }

  static elementAppendHTML (id, html) {
    let element = UI.element(id);
    if (!element) return;
    element.innerHTML += html;
  }

  static inputValue (id, value) {
    if (value === undefined) return UI.element(id).value;
    UI.element(id).value = value;
  }

  static clickAction (id, action) {
    UI.element(id).addEventListener('click', action);
  }

  static enterAction (id, action) {
    UI.element(id).addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        action();
      }
    });
  }

  static clearAll () {
    UI.clearMessages();
    UI.clearErrors();
  }

  static clearMessages () {
    UI.elementHTML('messages', '');
  }

  static clearErrors () {
    UI.elementHTML('errors', '');
  }

  static appendMessage (message) {
    UI.elementAppendHTML('messages', message + '<br>');
  }

  static appendError (error) {
    UI.elementAppendHTML('errors', error + '<br>');
  }

}
