const API_URL = 'http://localhost:5000/api';
$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

const devices = [];

devices.push({ user: "Mary", name: "Mary's iPhone" });
devices.push({ user: "Alex", name: "Alex's Surface Pro" });
devices.push({ user: "Mary", name: "Mary's MacBook" });

devices.forEach(function (device) {
  const table = document.querySelector('#devices');
  const row = document.createElement('tr');

  const user = document.createElement('td');
  const userText = document.createTextNode(device.user);
  user.appendChild(userText);

  const name = document.createElement('td');
  const nameText = document.createTextNode(device.name);
  name.appendChild(nameText);

  row.appendChild(user);
  row.appendChild(name);

  table.appendChild(row);
});

// devices.forEach(function (device) {
//   $('#devices tbody').append(`
//       <tr>
//         <td>${device.user}</td>
//         <td>${device.name}</td>
//       </tr>`
//   );
// });

// document.querySelector('#add-device').addEventListener('click', function () {
//     const user = document.querySelector('#user').value;
//     const name = document.querySelector('#name').value;
//     devices.push({ user: user, name: name });
//     console.log(devices);
// });

// $('#add-device').on('click', function () {
//     const user = $('#user').val();
//     const name = $('#name').val();
//     devices.push({ user: user, name: name });
//     console.log(devices);
// });

// $('#add-device').on('click', function () {
//     const user = $('#user').val();
//     const name = $('#name').val();
//     devices.push({ user, name });
//     console.log(devices);
// });

// $('#add-device').on('click', function () {
//     const user = $('#user').val();
//     const name = $('#name').val();
//     devices.push({ user, name });
//     console.log(devices);
//     location.href = 'device-list.html';
// });

// $('#add-device').on('click', function () {
//     const user = $('#user').val();
//     const name = $('#name').val();
//     devices.push({ user, name });
//     console.log(devices);
//     location.href = 'device-list.html';
//     const devices = localStorage.getItem('devices'); s
// });

// $.get('http://localhost:3001/devices')
// .then(response => {
//   console.log(response);
// })
// .catch(error => {
//   console.log(`Error: ${error}`);
// });

// $.get('http://localhost:3001/devices')
// .then(response => {
//   response.forEach(device => {
//     $('#devices tbody').append(`
//       <tr>
//         <td>${device.user}</td>
//         <td>${device.name}</td>
//       </tr>`
//     );
//   });
// })
// .catch(error => {
//   console.error(`Error: ${error}`);
// });

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post('http://localhost:3001/devices', body)
  .then(response => {
    location.href = '/';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

// $('#add-device').on('click', function () {
//   const user = $('#user').val();
//   const name = $('#name').val();
//   devices.push({ user, name });
//   console.log(devices);
//   location.href = '/';
//   const devices = localStorage.getItem('devices') || [];
//   localStorage.setItem('devices', JSON.stringify(devices));
// });

$('#add-device').on('click', function () {
  const user = $('#user').val();
  const name = $('#name').val();
  devices.push({ user, name });
  console.log(devices);
  location.href = '/';
  const response = $.get('http://localhost:3001/devices');
  console.log(response);
});