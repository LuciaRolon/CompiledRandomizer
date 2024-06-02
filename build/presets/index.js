(function(self) {

  let exports
  if (self) {
    exports = self.sotnRando.presets
  } else {
    exports = [
      require('./casual'),
      require('./aperture'),
      require('./breach'),
      require('./summoner'),
      require('./forge'),
      require('./big-toss'),
      require('./grand-tour'),
      require('./crash-course'),
      require('./safe'),
      require('./adventure'),
      require('./bountyhunter'),
      require('./boss-rush'),
      require('./og'),
      require('./guarded-og'),
      require('./speedrun'),
      require('./lycanthrope'),
      require('./warlock'),
      require('./nimble'),
      require('./expedition'),
      require('./glitch'),
      require('./scavenger'),
      require('./empty-hand'),
      require('./bat-master'),
      require('./gem-farmer'),
      require('./third-castle'),
      require('./rat-race'),
      require('./chaos-lite'),
      require('./leg-day'),
      require('./beyond'),
      require('./magic-mirror'),
      require('./lookingglass'),
      require('./test'),
    ]
  }
  exports.sort(function(a, b) {
    if (!('weight' in a && 'id' in a)) {
      if (!('weight' in b && 'id' in b)) {
        return 0
      }
      return 1
    } else if (!('weight' in b && 'id' in b)) {
      return -1
    }
    const weight = a.weight - b.weight
    if (weight === 0) {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      }
    }
    return weight
  })

  if (self) {
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: exports,
    })
  } else {
    module.exports = exports
  }
})(typeof(self) !== 'undefined' ? self : null)
