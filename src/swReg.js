if ('serviceWorker' in navigator) {
  var dtxx = Date.now()
  navigator.serviceWorker.register(`./sw.js?t=${dtxx}`).then(reg => {
    console.log(`Registration succeeded. Scope is ${reg.scope}`);
  }).catch(err => {
    console.log(`Registration failed with ${err.toString()}`);
  });
}
