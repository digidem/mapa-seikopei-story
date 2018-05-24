var getRevisionedUrls = require('./get-revisioned-urls')

module.exports = getImageUrls

function getImageUrls (str, cb) {
  var urls = []
  urls = urls.concat(matchAll(str, /<img[^>]+src="([^">]+)"/g))
  urls = urls.concat(matchAll(str, /-image:\s?url\(([^)]+)\)/g))
  getRevisionedUrls(urls, cb)
}

function matchAll (str, re) {
  var m
  var results = []

  do {
    m = re.exec(str)
    if (m) results.push(m[1])
  } while (m)

  return results
}