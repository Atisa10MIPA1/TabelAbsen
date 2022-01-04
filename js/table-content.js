const absentNumbers = [
    "No. 1", "No. 2", "No. 3", "No. 4", "No. 5", "No. 6", "No. 7", "No. 8", "No. 9",
    "No. 10", "No. 11", "No. 12", "No. 13", "No. 14", "No. 15", "No. 16", "No. 17", "No. 18"
]
const studentOneNames = [
    "Amalia Julietta Helmi", "Abee Lie Kurniawan", "Calysta Valencia", "Chen Zhi Xuan",
    "Dean Amadeus", "Fairy Yumi Ranita", "Fanny Octaviana Pangestu",
    "Felicia", "Fernaldy Kurniawan", "Jason Wijaya", "Jennifer Sanjaya", "Levina Diloka",
    "Made Mahadewi Savitri Dyah Ayu Parwati", "Marchkenjiro Erkhan Vinsta",
    "Ni Made Ayu Adinda Parwati", "Peter Raphael Gunawan", "Regina Jayanti Purnama Halim",
    "Theofrolic Anathapindika Dean"
]
const studentOneStatus = [
    "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir",
    "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir"
]
const studentTwoNames = [
    "Arnoldus Christiano Ronaldo Tonda Wogo", "Aullya Nadine Kuswandi",
    "Bryan Tirtadjaja Yonathan", "Elissa Cynthia Halim", "Ellen Amanda",
    "Felecia Tan", "Floriant Permana", "Jessica Limitia", "Kathleen Kalyana Mitta",
    "Marvell Jayadhammo Darmawan", "Nicholas Thanandara Wen", "Reyvan Marcellino",
    "Valerie Oriena Minarno", "Vanessa", "Victor Marlino", "Willy Kusumah", "Rifani", "-"
]
const studentTwoStatus = [
    "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir",
    "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "Hadir", "-"
]
const tableAbsentNumbers = document.querySelectorAll(".absent-number")
const tableStudentOneNames = document.querySelectorAll(".student-one-name")
const tableStudentOneStatus = document.querySelectorAll(".student-one-status")
const tableStudentTwoNames = document.querySelectorAll(".student-two-name")
const tableStudentTwoStatus = document.querySelectorAll(".student-two-status")

reset()

let table = document.querySelector(".table")
let columns = table.querySelectorAll(".table__column")

for (let i = 0; i < columns.length; i++) {
    columns[i].onclick = function () {
        if (this.hasAttribute("cell-clicked")) return

        this.setAttribute("cell-clicked", "yes")
        this.setAttribute("cell-text", this.textContent)

        let input = document.createElement("input")
        input.setAttribute("type", "text")
        input.value = this.textContent
        input.style.width = this.offsetWidth - (this.clientLeft * 2) + "px"
        input.style.height = this.offsetHeight - (this.clientTop * 2) + "px"
        input.style.border = "0px"
        input.style.fontFamily = "inherit"
        input.style.fontSize = "inherit"
        input.style.textAlign = "inherit"
        input.style.backgroundColor = "LightGrey"

        input.onblur = function () {
            let tableColumn = input.parentElement
            let originalText = tableColumn.getAttribute("cell-text")
            let currentText = this.value

            if (originalText != currentText) {
                tableColumn.removeAttribute("cell-clicked")
                tableColumn.removeAttribute("cell-text")
                tableColumn.textContent = currentText
                tableColumn.style.cssText = "padding: 0.5rem"
                console.log(originalText + " is changed to " + currentText)
            }
            else {
                tableColumn.removeAttribute("cell-clicked")
                tableColumn.removeAttribute("cell-text")
                tableColumn.textContent = originalText
                tableColumn.style.cssText = "padding: 0.5rem"
                console.log("No changes")
            }
        }

        this.textContent = ""
        this.style.cssText = "padding 0px 0px"
        this.append(input)
        this.firstElementChild.select()
    }
}

function dropDownBox() {
    let select = document.getElementById("subject")
    let option = select.options[select.selectedIndex]
    return option.text
}

function getData() {
    let sickStudentOneStudents = []
    let permitStudentOneStudents = []
    let alphaStudentOneStudents = []
    let sickStudentTwoStudents = []
    let permitStudentTwoStudents = []
    let alphaStudentTwoStudents = []

    for (let i = 0; i < tableStudentOneStatus.length; i++) {
        if (tableStudentOneStatus[i].textContent.toLowerCase() == "sakit") {
            sickStudentOneStudents.push(tableStudentOneNames[i])
        }
        if (tableStudentOneStatus[i].textContent.toLowerCase() == "izin") {
            permitStudentOneStudents.push(tableStudentOneNames[i])
        }
        if (tableStudentOneStatus[i].textContent.toLowerCase() == "alfa") {
            alphaStudentOneStudents.push(tableStudentOneNames[i])
        }
        if (tableStudentTwoStatus[i].textContent.toLowerCase() == "sakit") {
            sickStudentTwoStudents.push(tableStudentTwoNames[i])
        }
        if (tableStudentTwoStatus[i].textContent.toLowerCase() == "izin") {
            permitStudentTwoStudents.push(tableStudentTwoNames[i])
        }
        if (tableStudentTwoStatus[i].textContent.toLowerCase() == "alfa") {
            alphaStudentTwoStudents.push(tableStudentTwoNames[i])
        }
    }

    let currentDate = new Date()
    let day = currentDate.getDate()
    let availableMonth = [
        "Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember"
    ]
    let month = currentDate.getMonth()
    let year = currentDate.getFullYear()
    let today = day + " " + availableMonth[month] + " " + year
    let message = `
    Pelajaran: ${dropDownBox()}
    Tanggal: ${today}
    
    10 MIPA 1
    Sakit: ${sickStudentOneStudents.join(", ")}
    Izin: ${permitStudentOneStudents.join(", ")}
    Alfa: ${alphaStudentOneStudents.join(", ")}

    10 MIPA 2
    Sakit: ${sickStudentOneStudents.join(", ")}
    Izin: ${permitStudentOneStudents.join(", ")}
    Alfa: ${alphaStudentOneStudents.join(", ")}
    `
    return message
}

function reset() {
    for (let i = 0; i < tableAbsentNumbers.length; i++) {
        tableAbsentNumbers[i].textContent = absentNumbers[i]
    }

    for (let i = 0; i < tableStudentOneNames.length; i++) {
        tableStudentOneNames[i].textContent = studentOneNames[i]
    }

    for (let i = 0; i < tableStudentOneStatus.length; i++) {
        tableStudentOneStatus[i].textContent = studentOneStatus[i]
    }

    for (let i = 0; i < tableStudentTwoNames.length; i++) {
        tableStudentTwoNames[i].textContent = studentTwoNames[i]
    }

    for (let i = 0; i < tableStudentTwoStatus.length; i++) {
        tableStudentTwoStatus[i].textContent = studentTwoStatus[i]
    }
}

function copyData() {
    navigator.clipboard.writeText(getData())
}
