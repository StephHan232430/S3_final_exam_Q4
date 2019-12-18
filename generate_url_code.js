function generateUrlCode(url) {
  const characterPool = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const characterArray = characterPool.split('')
  let urlCode = ''
  for (let i = 0; i < 5; i++) {
    urlCode += characterArray[Math.floor(Math.random() * characterArray.length)]
  }

  return urlCode
}

module.exports = generateUrlCode