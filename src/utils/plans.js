import fiveGAnimation from '../../public/assets/5G.json'
import hiddenFeesAnimation from '../../public/assets/hidden-fees.json'
import taxesIncludedAnimation from '../../public/assets/taxes-included.json'
import internationalCallingAnimation from '../../public/assets/international-calling.json'

export const PLANS = [
    {
      price: '15',
      type: 'monthly',
      gigs: '4 GIGS',
      description: {
        "01": "4G LTE/5G High-Speed Data",
        "02": "UNLIMITED Talk & Text",
        "03": "Per Line"
      },
      bestValue: false,
      styles: {
        topHalfColor: '#000000',
        topHalfBackgroundColor: '#34CFCB'
      }
    },
    {
      price: '25',
      type: 'monthly',
      gigs: 'UNLIMITED',
      description: {
        "01": "4G LTE/5G High-Speed Data",
        "02": "UNLIMITED Data, Talk & Text",
        "03": "Per Line"
      },
      bestValue: true,
      styles: {
        topHalfColor: '#000000',
        topHalfBackgroundColor: '#FDD700'
      }
    },
    {
      price: '10',
      type: 'monthly',
      gigs: '1 GIG',
      description: {
        "01": "4G LTE/5G High-Speed Data",
        "02": "UNLIMITED Talk & Text",
        "03": "Per Line"
      },
      bestValue: false,
      styles: {
        topHalfColor: '#FFFFFF',
        topHalfBackgroundColor: '#0337A2'
      }
    }
  ]

  export const LINE_OR_PLANS = [
    {
        ImageSrc: '/assets/Step-1_Icon-Lines.png',
        MaxHeight: '120px',
        descriptions: [
            'Pick The Number of',
            'Lines You Want'
        ]
    },
    {
        ImageSrc: '/assets/Step-2_Icon-Plans.png',
        descriptions: [
            'Pick One of Our Plans',
            'Starting at $9.99/line'
        ]
    },
    {
        ImageSrc: '/assets/Step-3_Icon-Upgrade.png',
        descriptions: [
            'Upgrade When',
            'You Need It'
        ]
    }
]

export const BUY_OR_BRING_PHONE_OPTIONS = [
    {
      Title: 'Bring Your Number',
      ImageSrc: '/assets/Bring-Your-Own-Number.png',
      MaxHeight: '164px',
      Url: 'https://dev.hellomobile.com/byon/validate',
      'ButtonText': 'Learn More'
    },
    {
      Title: 'Bring Your Phone',
      ImageSrc: '/assets/Bring-Your-Phone.png',
      Url: 'https://dev.hellomobile.com/byop/validate',
      'ButtonText': 'Learn More'
    },
    {
      Title: 'Buy a New Phone',
      ImageSrc: '/assets/Buy-New-Phone.png',
      Url: 'https://dev.hellomobile.com/shop/phones',
      'ButtonText': 'Shop Phones'
    }
]

export const ANIMATED_ICONS = [
  {
    animationData: fiveGAnimation,
    descriptions: [
      "Fastest Speed with",
      "4G LTE/ 5G Data"
    ]
  },
  {
    animationData: hiddenFeesAnimation,
    descriptions: [
      "No Hidden Activation Fees"
    ]
  },
  {
    animationData: taxesIncludedAnimation,
    descriptions: [
      "Taxes Included"
    ]
  },
  {
    animationData: internationalCallingAnimation,
    descriptions: [
      "UNLIMITED International",
      "Calling to 60+ Countries"
    ]
  },
]