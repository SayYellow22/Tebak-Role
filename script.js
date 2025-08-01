// Kumpulan id 
const ucapan = document.getElementById("output-congs");
const hasilCheck = document.getElementById("output-check");
const deskCheck = document.getElementById("output-desk");
const buttonCheck = document.getElementById("button-check");
const username = document.getElementById("usernamenya");
const pringkat1 = document.getElementById("output-title1");
const pringkat2 = document.getElementById("output-title2");
const pringkat3 = document.getElementById("output-title3");
const persentas1 = document.getElementById("persentas1");
const persentas2 = document.getElementById("persentas2");
const persentas3 = document.getElementById("persentas3");

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

  const KumpulanRole = ["Wibu", "Jomok", "Pedo", "SDM Tinggi", "SDM Rendah", "Sigma", "Cool Banget Njir", "Karbit", "Tukang Timpa", "Femboy"];
  
  let peringkat = [];
  let peringkatBaru = [];
  let usernames = "";
  
  username.addEventListener('input', () => {
    usernames = username.value;
    if (usernames.trim() !== "") {
      enabled()
    } else {
      disabled()
    }
  });
  disabled()
  
function dapatkanHasil() {
  for (let i = 0; i < 8; i++) {
  const persentase = Math.floor(Math.random() * 100) + 1;
  const hasilnya = KumpulanRole[Math.floor(Math.random() * KumpulanRole.length)];
  
  //fungsi dapatkan peringkat
  peringkat.push({out: hasilnya, persen: persentase} );
  }
}
function Timescount() {
let timeouts = 3;
  const interval = setInterval(() => {
      deskCheck.textContent = `Tunggu ${timeouts} Detik`;
      timeouts -= 1;
      if (timeouts <= 0) {
        clearInterval(interval);
      }
  }, 1000);
}
function Reset() {
  peringkat.length = 0;
  peringkatBaru.length = 0;
  hasilCheck.style.opacity = "0";
  bar1.style.width = "0";
  bar2.style.width = "0";
  bar3.style.width = "0";
  ucapan.textContent = "";
  hasilCheck.textContent = "";
  deskCheck.textContent = "";
  pringkat1.textContent = "";
  pringkat2.textContent = "";
  pringkat3.textContent = "";
  persentas1.textContent = "";
  persentas2.textContent = "";
  persentas3.textContent = "";
}

function disabled() {
  buttonCheck.disabled = true;
  buttonCheck.style.background = "rgba(0,0,0,0.2)";
}
function enabled() {
  buttonCheck.disabled = false;
  buttonCheck.style.background = "rgba(0,0,0,0.7)";
}

function convert() {
  setTimeout(() => {
    cariUlang(peringkatBaru, 0)
  }, 100);
    setTimeout(() => {
  pringkat3.textContent = `${peringkatBaru[0].out}`;
  pringkat2.textContent = `${peringkatBaru[1].out}`;
  pringkat1.textContent = `${peringkatBaru[2].out}`;
  
  deskCheck.textContent = "Medapatkan role! menunggu persentase role!";
  }, 1000);
  setTimeout(() => {
    persentas3.textContent = `${peringkatBaru[0].persen}%`;
    persentas2.textContent = `${peringkatBaru[1].persen}%`;
    persentas1.textContent = `${peringkatBaru[2].persen}%`;
  
    bar1.style.width = `${peringkatBaru[2].persen}%`;
    bar2.style.width = `${peringkatBaru[1].persen}%`;
    bar3.style.width = `${peringkatBaru[0].persen}%`;
    deskCheck.textContent = "";
  }, 3000);
  
}

function Logs(apakah) {
  if (apakah == true) {
    setTimeout(() => {
    hasilCheck.style.opacity = "1";
    hasilCheck.textContent = "Tunggu sebentar..."
    hasilCheck.style.color = "rgba(0,0,0,0.4)";
    }, 1000);
  } else {
    setTimeout(() =>{
    hasilCheck.style.opacity = "0";
    }, 1400);
  }
}

function disabledInput() {
  username.style.width = "0%";
  username.style.height = "0%";
  username.style.opacity = "0";
  setTimeout(() => {
  username.style.display = "none";
  }, 1000)
}

function Check() {
  disabledInput()
  disabled()
  Reset()
  Logs(true)
    setTimeout(() => {   //Delay output
    dapatkanHasil()
    convert()
    }, 2000);
    setTimeout(() => {
      Logs(false)
      checkLogs()
    }, 4000);
}

function checkLogs() {
    setTimeout(() => {
      hasilCheck.style.color = "#3fa500";
      hasilCheck.style.opacity = "1";
      deskCheck.style.opacity = "1";
    hasilCheck.textContent = `Selamat ${usernames}!`
    deskCheck.textContent = "Hanya untuk seru-seruan. Jangan berkecil hati jika role yg kamu miliki tidak sesuai dengan dirimu!."
    enabled()
    }, 2000);
}

function cariUlang(peringkatBaru, index) {
  if (index >= peringkat.length) return peringkatBaru;
  let obj = peringkat[index];
  if (!peringkatBaru.find(o => o.out === obj.out)) {
    peringkatBaru.push(obj);
  }
  return cariUlang(peringkatBaru, index + 1);
}