const _ = require('lodash')

const input = [
  {
    url: 'http://itdc.ge/site/drupal',
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

const sortPageByUrl = pages => {
  return _.sortBy(pages, [
    o => {
      return o.url
    }
  ])
}

const reportTopLevel = pages => {
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      //if url include put difference
      if (pages[j].url.includes(pages[i].url)) {
        pages[j].technologies = _.difference(
          pages[j].technologies,
          pages[i].technologies
        )
      }
    }
  }

  return pages
}

const simplify = pages => {
  const sortedPage = sortPageByUrl(pages)
  const _output = []

  sortedPage.map(p => {
    if (_.find(_output, { technologies: p.technologies })) {
      return null
    } else {
      _output.push({
        url: p.url,
        technologies: p.technologies
      })
      return null
    }
  })

  return reportTopLevel(_output)
}

const result = simplify(input)

console.log(_.isEqual(result, output))
