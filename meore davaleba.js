const input = [
  {
    url: 'http://itdc.ge/site/drupal/',
    technologies: ['Drupal', 'Apache', 'PHP 5', 'RedHat']
  },
  {
    url: 'http://itdc.ge/site/drupal/a',
    technologies: ['Drupal', 'Apache', 'PHP 5', 'RedHat']
  },
  {
    url: 'http://itdc.ge/site/drupal/a/1',
    technologies: ['Drupal', 'Apache', 'PHP 5', 'RedHat']
  },
  {
    url: 'http://itdc.ge/site/drupal/a/2',
    technologies: ['Drupal', 'Apache', 'PHP 5', 'RedHat']
  },
  {
    url: 'http://itdc.ge/site/drupal/a/3/4',
    technologies: ['Drupal', 'Apache', 'PHP 5', 'RedHat']
  },
  {
    url: 'http://itdc.ge/site/drupal/b',
    technologies: ['Drupal', 'Apache', 'PHP 5', 'RedHat']
  },
  {
    url: 'http://itdc.ge/site/drupal/c',
    technologies: ['Drupal', 'Apache', 'PHP 5', 'RedHat', 'jQuery']
  },
  {
    url: 'http://itdc.ge/site/jml',
    technologies: ['Joomla', 'Apache', 'PHP 4', 'jQuery']
  },
  { url: 'http://itdc.ge/site/jml/pdfs', technologies: ['PDF generator'] },
  { url: 'http://itdc.ge/site', technologies: ['Apache', 'PHP 5'] }
]

const output = [
  { url: 'http://itdc.ge/site', technologies: ['Apache', 'PHP 5'] },
  { url: 'http://itdc.ge/site/drupal', technologies: ['Drupal', 'RedHat'] },
  { url: 'http://itdc.ge/site/drupal/c', technologies: ['jQuery'] },
  {
    url: 'http://itdc.ge/site/jml',
    technologies: ['Joomla', 'PHP 4', 'jQuery']
  },
  { url: 'http://itdc.ge/site/jml/pdfs', technologies: ['PDF generator'] }
]

const techologiesTools = [
  { key: 'site', out: ['Apache', 'PHP 5'] },
  { key: 'drupal', out: ['Drupal', 'RedHat'] },
  { key: 'c', out: ['jQuery'] },
  { key: 'jml', out: ['Joomla', 'PHP 4', 'jQuery'] },
  { key: 'pdfs', out: ['PDF generator'] }
]

const unique = arr => {
  return (arr = arr.filter(
    (thing, index, self) =>
      index === self.findIndex(t => t.key === thing.key && t.url === thing.url)
  ))
}

const simplify = pages => {
  const answer = []
  const defaultPage = 'http://itdc.ge/'

  pages.map(({ url }) => {
    const removedSite = url.replace(defaultPage, '')
    const splitedSite = removedSite.split('/')
    const reversedSite = splitedSite.reverse()

    let isDone = false
    for (let i = 0; i < reversedSite.length; i++) {
      const urlKey = reversedSite[i] //drupal, site , etc.. from url
      if (isDone) {
        break
      }
      for (let j = 0; j < techologiesTools.length; j++) {
        const techKey = techologiesTools[j].key
        const technologies = techologiesTools[j].out
        if (urlKey === techKey) {
          //create url
          let url = []
          for (let z = i; z < reversedSite.length; z++) {
            url.push(reversedSite[z])
          }
          url = url.reverse()
          url = url.join('/')
          url = `${defaultPage}${url}`

          answer.push({
            url,
            technologies
          })
          isDone = true
        }
      }
    }
    return null
  })

  const filteredOutput = unique(answer)
  return filteredOutput
}

const result = simplify(input)

// R.equals(result, output)
