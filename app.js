document.addEventListener('DOMContentLoaded', () => {

    let root = document.getElementById('root');

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

    // let deleteBtn = document.createElement('button');
    // deleteBtn.prepend(root);

    let array1;
    array1 = ['blue', 'red', 'yellow', 'green'];

    for (let i in array1) {
        let brick = document.createElement('div');
        brick.style.backgroundColor = `${array1[i]}`;
        brick.setAttribute('class', 'brick');
        brick.setAttribute('id', `brick${i}`);
        brick.setAttribute('tabindex', '0')
        cup1.append(brick);
    }
    let brick;
    cup1.addEventListener('click', () => {
        brick = document.activeElement;
    });
    cup2.addEventListener('click', () => {
        brick = document.activeElement;
    });
    arrow1.addEventListener('click', () => {
        brick.remove();
        cup2.prepend(brick);
    });
    arrow2.addEventListener('click', () => {
        brick.remove();
        cup1.prepend(brick);
    });
});