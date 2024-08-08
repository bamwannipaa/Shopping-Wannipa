function validateForm(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == null || username == "" ){
        alert("Please enter your username")
        return false;
    }

    if(password == null || password == "" ){
        alert("Please enter your password")
        return false;
    }
    alert("Welcome To HOME")

}

let userSelectd = null;

function Read(){
    let data = {};
    data["txtName"] = document.getElementById("txtName").value;
    data["txtNick"] = document.getElementById("txtNick").value;
    data["txtAddress"] = document.getElementById("txtAddress").value;
    data["txtTel"] = document.getElementById("txtTel").value;
    return data;
}

function Create(data){
    let table = document.getElementById("tblContact").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.txtName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.txtNick;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.txtAddress;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.txtTel;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="Edit(this)">Edit</a>`;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="Delete(this)">Delete</a>`;

}

function ClearForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtNick").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtTel").value = "";
    userSelectd = null;
}

function Edit(td){
    userSelectd = td.parentElement.parentElement;
    document.getElementById("txtName").value = userSelectd.cells[0].innerHTML;
    document.getElementById("txtNick").value = userSelectd.cells[1].innerHTML;
    document.getElementById("txtAddress").value = userSelectd.cells[2].innerHTML;
    document.getElementById("txtTel").value = userSelectd.cells[3].innerHTML;
}

function Update(formData){
    userSelectd.cells[0].innerHTML = formData.txtName;
    userSelectd.cells[1].innerHTML = formData.txtNick;
    userSelectd.cells[2].innerHTML = formData.txtAddress;
    userSelectd.cells[3].innerHTML = formData.txtTel;
}

function Delete(td){
    if(confirm('คุณต้องการลบข้อมูล?')){
        row = td.parentElement.parentElement;
        document.getElementById("tblContact").deleteRow(row.rowIndex);
        ClearForm();
    }
}

function FormSubmit(){
    let formData = Read();

    if(userSelectd == null){
        Create(formData);
    }
    else{
        Update(formData);
    }
    ClearForm();
}