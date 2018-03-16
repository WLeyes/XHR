console.log('Connected to app.js');
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);
// console.log('READYSTATE:', xhr.readyState);


  xhr.onload = function() {
    console.log('READYSTATE:', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML =
      `<h1>${this.responseText}</h1>`;
    }
  }
// OPTIONAL - Used for spinners/loaders
xhr.onprogress = function() {
  console.log('READYSTATE:', xhr.readyState);
}
  // older method
  // xhr.onreadystatechange = function(){
  //   console.log('READYSTATE:', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

xhr.onerror = function() {
  console.log('Request error!');
}

  // Send Data
  xhr.send();
}

  /*
Ready State Values
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished

Some common HTTP Statuses 

200 OK
  300 Multiple Choices
  301 Moved Permanently
  302 Found
  304 Not Modified
  307 Temporary Redirect
  400 Bad Request
  401 Unauthorized
403 Forbidden
404 Not Found
  410 Gone
  500 Internal Server Error
  501 Not Implemented
  503 Service Unavailable
550 Permission denied

*/