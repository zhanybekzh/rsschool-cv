
;(() => {
  const targetToStartBarAnimation = document.querySelector(
    '.content__languages'
  )
  const bars = document.querySelectorAll(
    '.languages__item .languages__progress-value'
  )

  const animateBars = () => {
    bars.forEach((barItem) => {
      const barValue = barItem.dataset.percent
      barItem.style.width = barValue + '%'
    })
  }

  const observerLanguages = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBars()
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.5
    }
  )
  if (targetToStartBarAnimation) {
    observerLanguages.observe(targetToStartBarAnimation)
  } else {
    console.error('Element .content__languages not found')
  }

  const targetToStartRateAnimation =
    document.querySelector('.sidebar__skills')
  const rates = document.querySelectorAll(
    '.sidebar__skills .skills__level'
  )

  const animateRates = () => {
    rates.forEach((rateItem) => {
      const rateValue = rateItem.dataset.rate
      rateItem.innerHTML = ''

      const fragment = document.createDocumentFragment()
      for (let i = 1; i <= 3; i += 1) {
        const div = document.createElement('div')
        div.classList.add('skills__rate')
        if (i <= rateValue) {
          div.classList.add('skills__rate_black')
        }
        fragment.appendChild(div)
        setTimeout(() => {
          div.classList.add('skills__rate_visible')
        }, i * 300)
      }
      rateItem.appendChild(fragment)
    })
  }

  const observerRates = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateRates()
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.5
    }
  )
  if (targetToStartRateAnimation) {
    observerRates.observe(targetToStartRateAnimation)
  } else {
    console.error('Element .sidebar__skills not found')
  }
})()