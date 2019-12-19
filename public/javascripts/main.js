(function () {
  const copyButton = document.querySelector('#copy')
  const urlCode = document.querySelector('#url-code')

  copyButton.addEventListener('click', event => {
    event.target.textContent = 'Link Copied'
    event.target.setAttribute('class', 'col-4 btn btn-lg btn-outline-info mt-5 font-weight-bold copy')
    urlCode.setAttribute('class', 'text-info')
  })

  copyButton.addEventListener('blur', event => {
    event.target.textContent = 'Copy Link'
    event.target.setAttribute('class', 'col-4 btn btn-lg btn-outline-warning mt-5 font-weight-bold copy')
    urlCode.setAttribute('class', 'text-warning')
  })
})()