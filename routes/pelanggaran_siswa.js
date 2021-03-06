const express = require(`express`)
const app = express()

// membaca request data berupa json
app.use(express.json())

// call pelanggaran control
let pelanggaranSiswaControl = require("../controllers/pelanggaranSiswaControl")

let authorization = require("../middlewares/authorization")

//end point GET untuk menampilkan data pelanggaran siswa
app.get("/", [authorization.authorization], pelanggaranSiswaControl.getDataPelanggaranSiswa)

app.post("/find", [authorization.authorization], pelanggaranSiswaControl.filterPS)

app.get("/:id_siswa", [authorization.authorization], pelanggaranSiswaControl.filterNama)

//end point POST untuk menambah data pelanggaran siswa
app.post("/", [authorization.authorization],pelanggaranSiswaControl.addDataPelanggaranSiswa)

//end point PUT untuk mengedit data pelanggaran siswa
app.put("/:id_pelanggaran_siswa", [authorization.authorization],pelanggaranSiswaControl.editDataPelanggaranSiswa)

//end point DELETE untuk menghapus data pelanggaran siswa
app.delete("/:id_pelanggaran_siswa", [authorization.authorization],pelanggaranSiswaControl.deleteDataPelanggaranSiswa)

module.exports = app