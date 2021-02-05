const page = document.querySelectorAll('.page');
const pages = document.querySelector('.pages');
const light = document.querySelector('.light');
const sect = document.querySelector('.sect');
const container = document.querySelector('.container');

const page1 = document.getElementById('1');
const page2 = document.getElementById('2');
const page3 = document.getElementById('3');
const page4 = document.getElementById('4');
const page5 = document.getElementById('5');
const page6 = document.getElementById('6');
const page7 = document.getElementById('7');

const sHeight = document.getElementById('sliderHeight');
const mHeight = document.getElementById('manualHeight');
const sWeight = document.getElementById('sliderWeight');
const mWeight = document.getElementById('manualWeight');

const section = document.getElementsByTagName('section');

const sectionBody = document.getElementById('body');
const sectionParents = document.getElementById('parents');
const sectionHead = document.getElementById('head');
const sectionFace = document.getElementById('face');

const chooseParents = document.getElementById('chooseParents');
const parents = document.querySelectorAll('parent');

console.log(chooseParents.children);

sHeight.oninput = (e) => {
  mHeight.value = sHeight.value;
};
sWeight.oninput = (e) => {
  mWeight.value = sWeight.value;
};

page1.onclick = (e) => {
  for (i = 0; i < section.length; i++) {
    section[i].style.display = 'none';
  }
  sectionBody.style.display = 'inherit';
};
page2.onclick = (e) => {
  for (i = 0; i < section.length; i++) {
    section[i].style.display = 'none';
  }
  sectionParents.style.display = 'inherit';
};
page3.onclick = (e) => {
  for (i = 0; i < section.length; i++) {
    section[i].style.display = 'none';
  }
  sectionHead.style.display = 'inherit';
  sectionHead.classList.toggle('section-fade');
};
page4.onclick = (e) => {
  for (i = 0; i < section.length; i++) {
    section[i].style.display = 'none';
  }
  sectionFace.style.display = 'inherit';
  sectionFace.classList.toggle('section-fade');
};

page1.onmouseover = (e) => {
  page1.children[1].classList.toggle('sect-2');
  page1.children[0].classList.toggle('light-2');
};
page2.onmouseover = (e) => {
  page2.children[0].classList.toggle('light-2');
  page2.children[1].classList.toggle('sect-2');
};
page3.onmouseover = (e) => {
  page3.children[0].classList.toggle('light-2');
  page3.children[1].classList.toggle('sect-2');
};
page4.onmouseover = (e) => {
  page4.children[0].classList.toggle('light-2');
  page4.children[1].classList.toggle('sect-2');
};
page5.onmouseover = (e) => {
  page5.children[0].classList.toggle('light-2');
  page5.children[1].classList.toggle('sect-2');
};
page6.onmouseover = (e) => {
  page6.children[0].classList.toggle('light-2');
  page6.children[1].classList.toggle('sect-2');
};
page7.onmouseover = (e) => {
  page7.children[0].classList.toggle('light-2');
  page7.children[1].classList.toggle('sect-2');
};

page1.onmouseout = (e) => {
  page1.children[0].classList.toggle('light-2');
  page1.children[1].classList.toggle('sect-2');
};
page2.onmouseout = (e) => {
  page2.children[0].classList.toggle('light-2');
  page2.children[1].classList.toggle('sect-2');
};
page3.onmouseout = (e) => {
  page3.children[0].classList.toggle('light-2');
  page3.children[1].classList.toggle('sect-2');
};
page4.onmouseout = (e) => {
  page4.children[0].classList.toggle('light-2');
  page4.children[1].classList.toggle('sect-2');
};
page5.onmouseout = (e) => {
  page5.children[0].classList.toggle('light-2');
  page5.children[1].classList.toggle('sect-2');
};
page6.onmouseout = (e) => {
  page6.children[0].classList.toggle('light-2');
  page6.children[1].classList.toggle('sect-2');
};
page7.onmouseout = (e) => {
  page7.children[0].classList.toggle('light-2');
  page7.children[1].classList.toggle('sect-2');
};
