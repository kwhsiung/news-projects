const sceneConfig = {
  methods: {
    setScene () {
      const { TweenMax, TimelineMax } = require('gsap')
      const ScrollMagic = require('scrollmagic')
      require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')
      require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')

      // dimensions
      const isMobile = window.innerWidth <= 767
      const isLaptop = window.innerWidth <= 1440 && window.innerWidth > 767
      const protagonistHeight = this.$el.querySelector('.description__protagonist').clientHeight

      // init controller
      const controller = new ScrollMagic.Controller()

      // build tween
      const tweenProtagonist = TweenMax.fromTo(
        `.header--story${this.storyOrderToNumber} .description__protagonist`,
        1,
        isMobile ? { x: '-50%', y: -window.innerHeight * 0 } : { x: '-50%', y: 0 },
        isMobile ? { x: '-50%', y: -window.innerHeight * 0.25, ease: Cubic.easeOut } : { x: '-50%', y: -protagonistHeight * 0.8, ease: Cubic.easeOut }
      )
      const timeline = new TimelineMax().add([tweenProtagonist])

      // build scene
      return new ScrollMagic.Scene({ triggerElement: `.header--story${this.storyOrderToNumber}`, duration: isMobile ? 1000 : 1000, offset: 0 })
      .setTween(timeline)
      // .addIndicators({ name: 'moving' }) // add indicators (requires plugin)
      .addTo(controller)
    }
  },
  mounted () { 
    if (process.browser) {
      const { TweenMax, TimelineMax } = require('gsap')
      const ScrollMagic = require('scrollmagic')
      require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')
      require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      if (!this.isCommentary) {
        let scene
        setTimeout(() => { scene = this.setScene() }, 500)
        window.addEventListener('resize', () => {
          const isMobile = window.innerWidth <= 767
          const protagonistHeight = this.$el.querySelector('.description__protagonist').clientHeight
          const tweenProtagonist = TweenMax.fromTo(
            `.header--story${this.storyOrderToNumber} .description__protagonist`,
            1,
            isMobile ? { x: '-50%', y: -window.innerHeight * 0 } : { x: '-50%', y: 0 },
            isMobile ? { x: '-50%', y: -window.innerHeight * 0.25, ease: Cubic.easeOut } : { x: '-50%', y: -protagonistHeight * 0.8, ease: Cubic.easeOut }
          )
          scene.setTween(tweenProtagonist)
        })
      }
    }
  }
}

export default sceneConfig