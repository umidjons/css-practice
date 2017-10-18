'use strict';

const btnApply = document.getElementById('apply');

btnApply.addEventListener('click', (event)=>{
  event.preventDefault();

  const height = document.getElementById('container-height').value;
  const display = document.getElementById('container-display').value;
  const direction = document.getElementById('flex-direction').value;
  const wrap = document.getElementById('flex-wrap').value;
  const justify = document.getElementById('justify-content').value;
  const alignItems = document.getElementById('align-items').value;
  const alignContent = document.getElementById('align-content').value;

  const flexContainer = document.getElementById('flex-container');
  flexContainer.style.height = height;
  flexContainer.style.display = display;
  flexContainer.style.flexDirection = direction;
  flexContainer.style.flexWrap = wrap;
  flexContainer.style.justifyContent = justify;
  flexContainer.style.alignItems = alignItems;
  flexContainer.style.alignContent = alignContent;
});
