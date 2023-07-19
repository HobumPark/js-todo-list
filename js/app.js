document.getElementById('btnAdd').addEventListener('click', addList); // 추가
document.getElementById('btnDelAll').addEventListener('click', delAllElement); // 전체삭제
document.getElementById('btnDelLast').addEventListener('click', delLastElement); // 마지막 요소 삭제
document.getElementById('DeleteSel').addEventListener('click', delSelected); // 선택 삭제

// 추가
function addList() {
    var contents = document.querySelector('.text-basic');

    if (!contents.value) {
        alert('enter item.');
        contents.focus();
        return false;
    }

    var tr = document.createElement('tr');

    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');

    var td01 = document.createElement('td');
    td01.appendChild(input);

    tr.appendChild(td01);

    var td02 = document.createElement('td');
    td02.innerHTML = contents.value;

    tr.appendChild(td02);

    document.getElementById('listBody').appendChild(tr);
    contents.value = '';

    contents.focus();
}

// 전체삭제
function delAllElement() {
    var list = document.getElementById('listBody');

    var listChild = list.children;

    for (var i = 0; i < listChild.length; i++) {
        list.removeChild(listChild[i])
        i--;
    }
}

// 마지막 항목 삭제
function delLastElement() {
    var body = document.getElementById('listBody');

    var list = document.querySelectorAll('#listBody > tr');

    if (list.length > 0) {
        var liLen = list.length - 1;
        body.removeChild(list[liLen]);

    } else {
        alert('삭제할 항목이 없습니다.')
        return false;
    }
}

// 선택 삭제
function delSelected() {
    var body = document.getElementById('listBody');
    var chkbox = document.querySelectorAll('#listBody .btn-chk');
    var parentElement = null;

    for (var i=0; i<chkbox.length; i++) {
        if (chkbox[i].checked == true) {
            parentElement=chkbox[i].parentNode.parentNode;
            body.removeChild(parentElement);
        }
    }
}
