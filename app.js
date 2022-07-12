document.addEventListener('DOMContentLoaded', () => {

    let root = document.getElementById('root');
    let panel = document.getElementById('panel')

    let cup1 = document.createElement('div');
    cup1.setAttribute('class', 'cup');
    cup1.setAttribute('id', 'cup1');
    let cup2 = document.createElement('div');
    cup2.setAttribute('class', 'cup');
    cup2.setAttribute('id', 'cup2');
    root.append(cup1, cup2);

    let arrowBox = document.createElement('div');
    arrowBox.setAttribute('class', 'arrowBox');
    let arrow1 = document.createElement('a');
    arrow1.setAttribute('class', 'arrow');
    arrow1.setAttribute('href', '#');
    arrow1.innerHTML = `<i class="fa-solid fa-arrow-right-long"></i>`
    let arrow2 = document.createElement('a');
    arrow2.setAttribute('class', 'arrow');
    arrow2.setAttribute('href', '#');
    arrow2.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i>`
    arrowBox.append(arrow1, arrow2);
    cup1.after(arrowBox);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn btn-danger');
    deleteBtn.innerHTML = 'Delete';

    let addBrick = document.createElement('form');
    addBrick.innerHTML =
        `<input type="text" id="brickTitle" style="display: inline-block">
         <select class="form-select" id="colorSelector" style="width: 150px;display: inline">
            <option>cyan</option>
            <option>red</option>
            <option>yellow</option>
            <option>green</option>
         </select>
         <input type="submit" class="btn btn-primary">`
    addBrick.style.margin = '20px';
    deleteBtn.style.margin = '0 20px 20px 20px';
    panel.append(addBrick);
    panel.append(deleteBtn);

    let colorSelector = document.getElementById('colorSelector');
    let brickTitle = document.getElementById('brickTitle');

    let array1;
    array1 = ['cyan', 'red', 'yellow', 'green'];

    for (let i in array1) {
        let brick = document.createElement('div');
        brick.style.backgroundColor = `${array1[i]}`;
        brick.setAttribute('class', 'brick');
        brick.setAttribute('id', `brick${i}`);
        brick.setAttribute('tabindex', '0')
        cup1.append(brick);
    }
    let brick;
    let isBrickSelected;
    cup1.addEventListener('click', () => {
        brick = document.activeElement;
        if (brick.getAttribute('class') === 'brick') {
            isBrickSelected = true;
            colorSelector.value = brick.style.backgroundColor;
            brickTitle.value = brick.innerText;
        }
    });
    cup2.addEventListener('click', () => {
        brick = document.activeElement;
        if (brick.getAttribute('class') === 'brick') {
            isBrickSelected = true;
            colorSelector.value = brick.style.backgroundColor;
            brickTitle.value = brick.innerText;
        }
    });
    arrow1.addEventListener('click', () => {
        if (brick.getAttribute('class') === 'brick') {
            brick.remove();
            cup2.prepend(brick);
        }
        isBrickSelected = false;
    });
    arrow2.addEventListener('click', () => {
        if (brick.getAttribute('class') === 'brick') {
            brick.remove();
            cup1.prepend(brick);
        }
        isBrickSelected = false;
    });
    deleteBtn.addEventListener('click', () => {
        if (brick.getAttribute('class') === 'brick') {
            brick.remove();
        }
        isBrickSelected = false;
    });
    addBrick.addEventListener('submit', () => {
        if (!isBrickSelected) {
            brick = document.createElement('div');
            brick.style.backgroundColor = `${colorSelector.value}`;
            brick.setAttribute('class', 'brick');
            brick.setAttribute('tabindex', '0')
            brick.innerHTML = `<h3>${brickTitle.value}</h3>`;
            cup1.prepend(brick);
        } else {
            brick.style.backgroundColor = `${colorSelector.value}`;
            brick.setAttribute('class', 'brick');
            brick.setAttribute('tabindex', '0')
            brick.innerHTML = `<h3>${brickTitle.value}</h3>`;
        }
        isBrickSelected = false;
    });

});