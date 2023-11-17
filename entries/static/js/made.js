/**
 * Created by sarah on 18/08/23.
 */

const form = document.getElementsByClassName("contact-form form");

function focusFunc() {
  let parent = this.parentNode; /** this refers to the specific input field that triggered the focus event. */
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

Array.from(form).forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

