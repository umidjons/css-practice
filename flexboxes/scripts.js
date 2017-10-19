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

  const fourthItem = document.getElementById('fourth-item');
  const fourthItemOrder = 1 * document.getElementById('fourth-item-order').value;
  fourthItem.style.order = fourthItemOrder;

  const firstItem = document.getElementById('first-item');
  const firstItemGrow = document.getElementById('first-item-grow').value;
  firstItem.style.flexGrow = 1 * firstItemGrow;

  const secondItem = document.getElementById('second-item');
  const secondItemBasis = document.getElementById('second-item-basis').value;
  secondItem.style.flexBasis = secondItemBasis;
});
