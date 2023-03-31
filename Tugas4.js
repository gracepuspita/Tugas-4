// Fungsi untuk menampilkan field sebanyak masukan user
function showField() {
  var jumlah = document.getElementById("jumlah").value;
  var click;
  var field = "";

  // Perulangan untuk mencetak field pilihan sebanyak input user
  for (var i = 1; i <= jumlah; i++) {
    field += "<p> Pilihan " + i + " <input placeholder = 'Masukkan Pilihan " + i + "' >" + "</p>";
  }

  // Memanggil fungsi showRadBut agar jalannya program diteruskan ke fungsi tsb
  click = "<p>" + '<button onclick="showRadBut()">OK</button>' + "</p>";
  document.getElementById("pilihan").innerHTML = field;
  document.getElementById("button").innerHTML = click;
}

// Fungsi untuk menampilkan radio button dengan option sesuai masukan user
function showRadBut() {
  var form = document.getElementById("pilihan");
  var values = form.getElementsByTagName("input");
  var submit;
  var radiobut = "";

  // Perulangan untuk mencetak radio button sebanyak dengan isi pilihan sesuai input user yang
  // dimasukkan saat fungsi showField dijalankan
  for (var i = 0; i < values.length; i++) {
    if (values[i].type == "text") {
      radiobut += 
      '<input type="radio" name="option" value="' + values[i].value + '">' + values[i].value + "<br>";
    }
  }

  // Memanggil fungsi Result agar jalannya program diteruskan ke fungsi tsb
  submit = '\n' + '<input type="submit" value="Submit" onclick="Result()">';
  document.getElementById("send").innerHTML = submit;
  list.innerHTML = radiobut;
}

// Menampilkan hasil akhir
function Result() {
  var testName = document.getElementById("nama");
  var form = document.querySelector("form");
  var result = document.getElementById("result");
  var jumlah = document.getElementById("jumlah").value;
  var text_box = document.getElementById("pilihan");
  var values = text_box.getElementsByTagName("input");
  var radiobut = "";

  for (var i = 0; i < values.length; i++) {
    if (values[i].type == "text") {
      radiobut += values[i].value + ", ";
    }
  }

  // Pada output akan ditampilkan field yang menampilkan hasil masukan dan pilihan user 
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
      result.textContent = "Halo! Nama saya " + testName.value + ", saya mempunyai sejumlah " + jumlah + " field yaitu " 
      + radiobut + " dan saya memilih " + selectedOption.value + ".";
    } else {
      result.textContent = "Please select an option.";
    }
  });
}