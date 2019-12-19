(function () {
  const copyButton = document.querySelector('#copy')

  copyButton.addEventListener('click', event => {
    event.target.textContent = 'Link Copied'
  })

  copyButton.addEventListener('blur', event => {
    event.target.textContent = 'Copy Link'
  })
})()