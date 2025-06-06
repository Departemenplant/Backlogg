const API_URL = '<GAS_WEB_APP_URL>'; // Ganti dengan URL Web App deployment

async function fetchData() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const tbody = document.querySelector('#data-table tbody');
  tbody.innerHTML = '';
  data.slice(1).forEach(r => {
    const tr = document.createElement('tr');
    r.forEach(c => {
       const td = document.createElement('td');
       td.textContent = c;
       tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

document.getElementById('form').addEventListener('submit', async e => {
  e.preventDefault();
  const payload = {
    nama: e.target.nama.value,
    email: e.target.email.value,
    pesan: e.target.pesan.value
  };
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });
  e.target.reset();
  fetchData();
});

fetchData();
