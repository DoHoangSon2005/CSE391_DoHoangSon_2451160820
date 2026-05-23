let students = [];

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}

function loadStudents() {

    let data = localStorage.getItem("students");

    if (data) {

        students = JSON.parse(data);

    }
    else {

        students = [

            {
                id: "SV001",
                name: "Nguyen Van A",
                birthday: "2004-01-10",
                className: "CNTT1",
                score: 8.5,
                email: "a@gmail.com"
            },

            {
                id: "SV002",
                name: "Tran Thi B",
                birthday: "2004-05-20",
                className: "CNTT2",
                score: 7.8,
                email: "b@gmail.com"
            }

        ];

        saveStudents();
    }

}

function renderStudents() {

    let tableBody =
        document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    if (students.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="7">
                    Chưa có sinh viên
                </td>
            </tr>
        `;

        return;
    }

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        tableBody.innerHTML += `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birthday}</td>

                <td>${student.className}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>

            </tr>
        `;
    }

}

function updateStatistics() {

    document.getElementById(
        "totalStudents"
    ).innerText = students.length;

    let totalScore = 0;

    for (let i = 0; i < students.length; i++) {

        totalScore += students[i].score;
    }

    let average = 0;

    if (students.length > 0) {

        average =
            totalScore / students.length;
    }

    document.getElementById(
        "averageScore"
    ).innerText = average.toFixed(2);

}

loadStudents();

renderStudents();

updateStatistics();

let openModalBtn =
    document.getElementById("openModalBtn");

let closeModalBtn =
    document.getElementById("closeModalBtn");

let studentModal =
    document.getElementById("studentModal");

let studentForm =
    document.getElementById("studentForm");

openModalBtn.onclick = function () {

    studentModal.style.display = "block";

};

closeModalBtn.onclick = function () {

    studentModal.style.display = "none";

    resetForm();

};

function resetForm() {

    studentForm.reset();

}

studentForm.onsubmit = function (event) {

    event.preventDefault();

    let id =
        document.getElementById("studentId").value;

    let name =
        document.getElementById("studentName").value;

    let birthday =
        document.getElementById("studentBirthday").value;

    let className =
        document.getElementById("studentClass").value;

    let score =
        document.getElementById("studentScore").value;

    let email =
        document.getElementById("studentEmail").value;

    let student = {

        id: id,
        name: name,
        birthday: birthday,
        className: className,
        score: Number(score),
        email: email

    };

    students.push(student);

    saveStudents();

    renderStudents();

    updateStatistics();

    studentModal.style.display = "none";

    resetForm();

};