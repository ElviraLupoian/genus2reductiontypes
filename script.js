// for LaTeX formatting
window.MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$']],

    macros: {
      Z: '\\mathbb{Z}',
      Q: '\\mathbb{Q}',
      C: '\\mathbb{C}',
      D: '\\mathrm{D}',
      X: '\\mathrm{X}',
      Y: '\\mathrm{Y}',
      fs: '\\mathfrak{s}',
      ft: '\\mathfrak{t}',
      Art: '\\operatorname{Art}',
      Gal: '\\operatorname{Gal}',
      Aut: '\\operatorname{Aut}',
      GL: '\\operatorname{GL}',
      PGL: '\\operatorname{PGL}',
      disc: '\\operatorname{disc}',
      Jac: '\\operatorname{Jac}',
      codim: '\\operatorname{codim}',
      I: '\\mathrm{I}',
      II: '\\mathrm{II}',
      III: '\\mathrm{III}',
      IV: '\\mathrm{IV}',
      V: '\\mathrm{V}',
      VI: '\\mathrm{VI}',
      VII: '\\mathrm{VII}',
      VIII: '\\mathrm{VIII}',
      IX: '\\mathrm{IX}',
      cR: '\\mathcal{R}'
    }
  },

  svg: {
    fontCache: 'global'
  }
};

// Namikawa--Ueno data.
// parameterRange records the family-parameter restrictions from Tables 7.1--7.7.
// omegaValuation stores v(omega_min / omega^0), whereas the paper displays
// its negative.
window.namikawaUenoTypes = [
  {
    "id": "i-0-0-0",
    "nuType": "$\\I_{0-0-0}$",
    "nuTypePlain": "I_{0-0-0}",
    "mrncReductionType": "$\\mathrm{I}_{\\mathrm{g2}}$",
    "mrncReductionTypePlain": "I_g2",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-0-0-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-0-0-0.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$"
    ],
    "wildPrimes": null,
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$0$",
    "minimalDiscriminant": "$0$",
    "numberOfComponents": "$1$",
    "omegaValuation": "$0$"
  },
  {
    "id": "i-star-0-0-0",
    "nuType": "$\\I^*_{0-0-0}$",
    "nuTypePlain": "I^*_{0-0-0}",
    "mrncReductionType": "$2^{1,1,1,1,1,1}$",
    "mrncReductionTypePlain": "2^{1,1,1,1,1,1}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star-0-0-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star-0-0-0.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$1$"
    ],
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^4$",
    "tamagawaNumber": "$16$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$10$",
    "numberOfComponents": "$7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii",
    "nuType": "$\\II$",
    "nuTypePlain": "II",
    "mrncReductionType": "$\\mathrm{D}_{\\mathrm{g1}}$",
    "mrncReductionTypePlain": "D_g1",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$15$",
    "numberOfComponents": "$3$",
    "omegaValuation": "$-1$"
  },
  {
    "id": "iii",
    "nuType": "$\\III$",
    "nuTypePlain": "III",
    "mrncReductionType": "$3^{1,1,2,2}$",
    "mrncReductionTypePlain": "3^{1,1,2,2}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$"
    ],
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z \\times \\Z/3\\Z$",
    "tamagawaNumber": "$9$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$10$",
    "numberOfComponents": "$7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "iv",
    "nuType": "$\\IV$",
    "nuTypePlain": "IV",
    "mrncReductionType": "$6^{2,4,3,3}$",
    "mrncReductionTypePlain": "6^{2,4,3,3}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iv.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$1$"
    ],
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$20$",
    "numberOfComponents": "$6$",
    "omegaValuation": "$-1$"
  },
  {
    "id": "v",
    "nuType": "$\\V$",
    "nuTypePlain": "V",
    "mrncReductionType": "$6^{1,1,4}$",
    "mrncReductionTypePlain": "6^{1,1,4}",
    "mrmfibre": "genus2-special-fibres/images/mrm-special-fibres/v.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/v.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$5$",
    "numberOfComponents": "$2$",
    "omegaValuation": "$0$"
  },
  {
    "id": "v-star",
    "nuType": "$\\V^*$",
    "nuTypePlain": "V^*",
    "mrncReductionType": "$6^{5,5,2}$",
    "mrncReductionTypePlain": "6^{5,5,2}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/v-star.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/v-star.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$15$",
    "numberOfComponents": "$12$",
    "omegaValuation": "$0$"
  },
  {
    "id": "vi",
    "nuType": "$\\VI$",
    "nuTypePlain": "VI",
    "mrncReductionType": "$4^{1,3,2,2}$",
    "mrncReductionTypePlain": "4^{1,3,2,2}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/vi.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/vi.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$10$",
    "numberOfComponents": "$7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "vii",
    "nuType": "$\\VII$",
    "nuTypePlain": "VII",
    "mrncReductionType": "$8^{1,3,4}$",
    "mrncReductionTypePlain": "8^{1,3,4}",
    "mrmfibre": "genus2-special-fibres/images/mrm-special-fibres/vii.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/vii.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$"
    ],
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$5$",
    "numberOfComponents": "$2$",
    "omegaValuation": "$0$"
  },
  {
    "id": "vii-star",
    "nuType": "$\\VII^*$",
    "nuTypePlain": "VII^*",
    "mrncReductionType": "$8^{5,7,4}$",
    "mrncReductionTypePlain": "8^{5,7,4}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/vii-star.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/vii-star.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$1$"
    ],
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$15$",
    "numberOfComponents": "$12$",
    "omegaValuation": "$0$"
  },
  {
    "id": "viii-1",
    "nuType": "$\\VIII\\text{-}1$",
    "nuTypePlain": "VIII-1",
    "mrncReductionType": "$10^{1,4,5}$",
    "mrncReductionTypePlain": "10^{1,4,5}",
    "mrmfibre": "genus2-special-fibres/images/mrm-special-fibres/viii-1.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/viii-1.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$2$",
      "$5$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$4$",
    "numberOfComponents": "$1$",
    "omegaValuation": "$0$"
  },
  {
    "id": "viii-2",
    "nuType": "$\\VIII\\text{-}2$",
    "nuTypePlain": "VIII-2",
    "mrncReductionType": "$10^{7,8,5}$",
    "mrncReductionTypePlain": "10^{7,8,5}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/viii-2.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/viii-2.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$1$"
    ],
    "wildPrimes": [
      "$2$",
      "$5$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12$",
    "numberOfComponents": "$9$",
    "omegaValuation": "$0$"
  },
  {
    "id": "viii-3",
    "nuType": "$\\VIII\\text{-}3$",
    "nuTypePlain": "VIII-3",
    "mrncReductionType": "$10^{3,2,5}$",
    "mrncReductionTypePlain": "10^{3,2,5}",
    "mrmfibre": "genus2-special-fibres/images/mrm-special-fibres/viii-3.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/viii-3.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$2$",
      "$5$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$18$",
    "numberOfComponents": "$4$",
    "omegaValuation": "$-1$"
  },
  {
    "id": "viii-4",
    "nuType": "$\\VIII\\text{-}4$",
    "nuTypePlain": "VIII-4",
    "mrncReductionType": "$10^{9,6,5}$",
    "mrncReductionTypePlain": "10^{9,6,5}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/viii-4.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/viii-4.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$1$"
    ],
    "wildPrimes": [
      "$2$",
      "$5$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$16$",
    "numberOfComponents": "$13$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ix-1",
    "nuType": "$\\IX\\text{-}1$",
    "nuTypePlain": "IX-1",
    "mrncReductionType": "$5^{1,2,2}$",
    "mrncReductionTypePlain": "5^{1,2,2}",
    "mrmfibre": "genus2-special-fibres/images/mrm-special-fibres/ix-1.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ix-1.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$"
    ],
    "wildPrimes": [
      "$5$"
    ],
    "componentGroup": "$\\Z/5\\Z$",
    "tamagawaNumber": "$5$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$8$",
    "numberOfComponents": "$5$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ix-2",
    "nuType": "$\\IX\\text{-}2$",
    "nuTypePlain": "IX-2",
    "mrncReductionType": "$5^{1,1,3}$",
    "mrncReductionTypePlain": "5^{1,1,3}",
    "mrmfibre": "genus2-special-fibres/images/mrm-special-fibres/ix-2.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ix-2.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$"
    ],
    "wildPrimes": [
      "$5$"
    ],
    "componentGroup": "$\\Z/5\\Z$",
    "tamagawaNumber": "$5$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$6$",
    "numberOfComponents": "$3$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ix-3",
    "nuType": "$\\IX\\text{-}3$",
    "nuTypePlain": "IX-3",
    "mrncReductionType": "$5^{2,4,4}$",
    "mrncReductionTypePlain": "5^{2,4,4}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ix-3.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ix-3.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$5$"
    ],
    "componentGroup": "$\\Z/5\\Z$",
    "tamagawaNumber": "$5$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$14$",
    "numberOfComponents": "$11$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ix-4",
    "nuType": "$\\IX\\text{-}4$",
    "nuTypePlain": "IX-4",
    "mrncReductionType": "$5^{3,3,4}$",
    "mrncReductionTypePlain": "5^{3,3,4}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ix-4.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ix-4.svg",
    "potentialStableType": "$\\I$",
    "potentialStableTypePlain": "I",
    "parameters": [],
    "parameterRange": null,
    "leadingCoefficientParity": [
      "$0$",
      "$1$"
    ],
    "wildPrimes": [
      "$5$"
    ],
    "componentGroup": "$\\Z/5\\Z$",
    "tamagawaNumber": "$5$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12$",
    "numberOfComponents": "$9$",
    "omegaValuation": "$0$"
  },
  {
    "id": "i-l-0-0",
    "nuType": "$\\I_{l-0-0}$",
    "nuTypePlain": "I_{l-0-0}",
    "mrncReductionType": "$\\mathrm{I}_{l,\\mathrm{g1}}$",
    "mrncReductionTypePlain": "I_{l,g1}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-l-0-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-l-0-0.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": null,
    "componentGroup": "$\\Z/l\\Z$",
    "tamagawaNumber": "$l$",
    "conductorExponent": "$1$",
    "minimalDiscriminant": "$l$",
    "numberOfComponents": "$l$",
    "omegaValuation": "$0$"
  },
  {
    "id": "i-star-l-0-0",
    "nuType": "$\\I^*_{l-0-0}$",
    "nuTypePlain": "I^*_{l-0-0}",
    "mrncReductionType": "$\\mathrm{I}^{*}_{0,l\\mathrm{D}}$",
    "mrncReductionTypePlain": "I^*_{0,lD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star-l-0-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star-l-0-0.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z \\times \\Z/2\\Z \\times X_l$",
    "tamagawaNumber": "$16$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+10$",
    "numberOfComponents": "$l+7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "iii-ii-l",
    "nuType": "$\\III\\text{-}\\II_l$",
    "nuTypePlain": "III-II_l",
    "mrncReductionType": "$\\mathrm{III}_{l}$",
    "mrncReductionTypePlain": "III_l",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-ii-l.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/(2l+1)\\Z$",
    "tamagawaNumber": "$2l+1$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+3$",
    "numberOfComponents": "$l+1$",
    "omegaValuation": "$0$"
  },
  {
    "id": "iii-star-ii-star-l",
    "nuType": "$\\III^*\\text{-}\\II^*_l$",
    "nuTypePlain": "III^*-II^*_l",
    "mrncReductionType": "$\\mathrm{III}^{*}_{l\\mathrm{D}}$",
    "mrncReductionTypePlain": "III^*_{lD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-star-ii-star-l.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-star-ii-star-l.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/8\\Z$",
    "tamagawaNumber": "$8$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+13$",
    "numberOfComponents": "$l+10$",
    "omegaValuation": "$0$"
  },
  {
    "id": "iv-ii-l",
    "nuType": "$\\IV\\text{-}\\II_l$",
    "nuTypePlain": "IV-II_l",
    "mrncReductionType": "$\\mathrm{IV}_{l}$",
    "mrncReductionTypePlain": "IV_l",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-ii-l.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$\\Z/(3l+2)\\Z$",
    "tamagawaNumber": "$3l+2$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+4$",
    "numberOfComponents": "$l+2$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii-star-ii-star-l",
    "nuType": "$\\II^*\\text{-}\\II^*_l$",
    "nuTypePlain": "II^*-II^*_l",
    "mrncReductionType": "$\\mathrm{II}^{*}_{l\\mathrm{D}}$",
    "mrncReductionTypePlain": "II^*_{lD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-ii-star-l.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-ii-star-l.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$X_l$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+14$",
    "numberOfComponents": "$l+11$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii-l-plus-1-0",
    "nuType": "$\\II_{(l+1)-0}$",
    "nuTypePlain": "II_{(l+1)-0}",
    "mrncReductionType": "$\\mathrm{I}^{*}_{0,l}$",
    "mrncReductionTypePlain": "I^*_{0,l}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-l-plus-1-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-l-plus-1-0.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/(4l+4)\\Z$",
    "tamagawaNumber": "$4l+4$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+6$",
    "numberOfComponents": "$l+4$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii-star-l-plus-1-0",
    "nuType": "$\\II^*_{(l+1)-0}$",
    "nuTypePlain": "II^*_{(l+1)-0}",
    "mrncReductionType": "$[2]\\mathrm{I}_{\\mathrm{g1},(l+1)\\mathrm{D}}$",
    "mrncReductionTypePlain": "[2]I_{g1,(l+1)D}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-l-plus-1-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-l-plus-1-0.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$l+16$",
    "numberOfComponents": "$l+4$",
    "omegaValuation": "$-1$"
  },
  {
    "id": "iv-star-ii-l-plus-1",
    "nuType": "$\\IV^*\\text{-}\\II_{l+1}$",
    "nuTypePlain": "IV^*-II_{l+1}",
    "mrncReductionType": "$\\mathrm{IV}^{*}_{l}$",
    "mrncReductionTypePlain": "IV^*_l",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iv-star-ii-l-plus-1.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-star-ii-l-plus-1.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$\\Z/(3l+4)\\Z$",
    "tamagawaNumber": "$3l+4$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+8$",
    "numberOfComponents": "$l+6$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii-ii-star-l-plus-1",
    "nuType": "$\\II\\text{-}\\II^*_{l+1}$",
    "nuTypePlain": "II-II^*_{l+1}",
    "mrncReductionType": "$\\mathrm{II}_{(l+1)\\mathrm{D}}$",
    "mrncReductionTypePlain": "II_{(l+1)D}",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-ii-star-l-plus-1.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$X_l$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+8$",
    "numberOfComponents": "$l+5$",
    "omegaValuation": "$0$"
  },
  {
    "id": "iii-star-ii-l-plus-1",
    "nuType": "$\\III^*\\text{-}\\II_{l+1}$",
    "nuTypePlain": "III^*-II_{l+1}",
    "mrncReductionType": "$\\mathrm{III}^{*}_{l}$",
    "mrncReductionTypePlain": "III^*_l",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-star-ii-l-plus-1.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-star-ii-l-plus-1.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/(2l+3)\\Z$",
    "tamagawaNumber": "$2l+3$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+9$",
    "numberOfComponents": "$l+7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "iii-ii-star-l-plus-1",
    "nuType": "$\\III\\text{-}\\II^*_{l+1}$",
    "nuTypePlain": "III-II^*_{l+1}",
    "mrncReductionType": "$\\mathrm{III}_{(l+1)\\mathrm{D}}$",
    "mrncReductionTypePlain": "III_{(l+1)D}",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-ii-star-l-plus-1.svg",
    "potentialStableType": "$\\II$",
    "potentialStableTypePlain": "II",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/8\\Z$",
    "tamagawaNumber": "$8$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+9$",
    "numberOfComponents": "$l+6$",
    "omegaValuation": "$0$"
  },
  {
    "id": "i-l-m-0",
    "nuType": "$\\I_{l-m-0}$",
    "nuTypePlain": "I_{l-m-0}",
    "mrncReductionType": "$\\mathrm{I}_{l,m}$",
    "mrncReductionTypePlain": "I_{l,m}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-l-m-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-l-m-0.svg",
    "potentialStableType": "$\\III$",
    "potentialStableTypePlain": "III",
    "parameters": [
      "$l$",
      "$m$"
    ],
    "parameterRange": "$l,m>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": null,
    "componentGroup": "$\\Z/l\\Z \\times \\Z/m\\Z$",
    "tamagawaNumber": "$lm$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$l+m$",
    "numberOfComponents": "$l+m-1$",
    "omegaValuation": "$0$"
  },
  {
    "id": "i-star-l-m-0",
    "nuType": "$\\I^*_{l-m-0}$",
    "nuTypePlain": "I^*_{l-m-0}",
    "mrncReductionType": "$\\mathrm{I}^{*}_{l,m\\mathrm{D}}=\\mathrm{I}^{*}_{m,l\\mathrm{D}}$",
    "mrncReductionTypePlain": "I^*_{l,mD}=I^*_{m,lD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star-l-m-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star-l-m-0.svg",
    "potentialStableType": "$\\III$",
    "potentialStableTypePlain": "III",
    "parameters": [
      "$l$",
      "$m$"
    ],
    "parameterRange": "$l,m>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$X_l \\times X_m$",
    "tamagawaNumber": "$16$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+m+10$",
    "numberOfComponents": "$l+m+7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "2i-l-0",
    "nuType": "$2\\I_{l-0}$",
    "nuTypePlain": "2I_{l-0}",
    "mrncReductionType": "$\\mathrm{D}_{\\{2-2\\}l}$",
    "mrncReductionTypePlain": "D_{2-2,l}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2i-l-0.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2i-l-0.svg",
    "potentialStableType": "$\\III$",
    "potentialStableTypePlain": "III",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/l\\Z$",
    "tamagawaNumber": "$l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+15$",
    "numberOfComponents": "$l+2$",
    "omegaValuation": "$-1$"
  },
  {
    "id": "iii-l",
    "nuType": "$\\III_l$",
    "nuTypePlain": "III_l",
    "mrncReductionType": "$4^{1,3}_{l\\mathrm{D}}$",
    "mrncReductionTypePlain": "4^{1,3}_{lD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-l.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-l.svg",
    "potentialStableType": "$\\III$",
    "potentialStableTypePlain": "III",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$X_l$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+10$",
    "numberOfComponents": "$l+7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii-m-l-or-l-m-p182",
    "nuType": "$\\II_{m-l}\\;(\\mathrm{p182})$",//\\,/\\,\\II_{l-m}\\;(\\mathrm{p182})$",
    "nuTypePlain": "II_{m-l} (p182)", /// II_{l-m}
    "mrncReductionType": "$\\mathrm{I}^{*}_{l,m-1}$", //\\,/\\,\\mathrm{I}^{*}_{m,l-1},
    "mrncReductionTypePlain": "I^*_{l,m-1}", /// I^*_{m,l-1}
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-m-l-or-l-m-p182.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-m-l-or-l-m-p182.svg",
    "potentialStableType": "$\\III$",
    "potentialStableTypePlain": "III",
    "parameters": [
      "$l$",
      "$m$"
    ],
    "parameterRange": "$l,m>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$Z_{l,m}$", //\\,/\\,Z_{m,l}
    "tamagawaNumber": "$4m$", //\\,/\\,4l
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+m+5$",
    "numberOfComponents": "$l+m+3$",
    "omegaValuation": "$0$"
  },
  {
    "id": "i-l-m-n",
    "nuType": "$\\I_{l-m-n}$",
    "nuTypePlain": "I_{l-m-n}",
    "mrncReductionType": "$\\mathrm{I}\\!\\underset{l}{-}\\!\\underset{m}{-}\\!\\underset{n}{-}\\!\\mathrm{I}$",
    "mrncReductionTypePlain": "I-l-m-n-I",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-l-m-n.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-l-m-n.svg",
    "potentialStableType": "$\\IV$",
    "potentialStableTypePlain": "IV",
    "parameters": [
      "$l$",
      "$m$",
      "$n$"
    ],
    "parameterRange": "$l,m,n>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": null,
    "componentGroup": "$\\Z/\\frac{lm+mn+nl}{\\gcd(l,m,n)}\\Z \\times \\Z/\\gcd(l,m,n)\\Z$",
    "tamagawaNumber": "$lm+mn+nl$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$l+m+n$",
    "numberOfComponents": "$l+m+n-1$",
    "omegaValuation": "$0$"
  },
  {
    "id": "i-star-l-m-n",
    "nuType": "$\\I^*_{l-m-n}$",
    "nuTypePlain": "I^*_{l-m-n}",
    "mrncReductionType": "$[2]\\mathrm{I}_{l\\mathrm{D},m\\mathrm{D},n\\mathrm{D}}$",
    "mrncReductionTypePlain": "[2]I_{lD,mD,nD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star-l-m-n.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star-l-m-n.svg",
    "potentialStableType": "$\\IV$",
    "potentialStableTypePlain": "IV",
    "parameters": [
      "$l$",
      "$m$",
      "$n$"
    ],
    "parameterRange": "$l,m,n>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$X_{(lm+mn+nl)/\\gcd(l,m,n)} \\times X_{\\gcd(l,m,n)}$",
    "tamagawaNumber": "$16$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+m+n+10$",
    "numberOfComponents": "$l+m+n+7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii-l-m-p183",
    "nuType": "$\\II_{l-m}\\;(\\mathrm{p183})$",
    "nuTypePlain": "II_{l-m} (p183)",
    "mrncReductionType": "$\\mathrm{D}\\!\\underset{l-1}{-}\\!\\underset{m}{\\overset{2-2}{-}}\\!\\mathrm{D}$",
    "mrncReductionTypePlain": "D-(l-1)-{2-2}-m-D",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-l-m-p183.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-l-m-p183.svg",
    "potentialStableType": "$\\IV$",
    "potentialStableTypePlain": "IV",
    "parameters": [
      "$l$",
      "$m$"
    ],
    "parameterRange": "$l,m>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/(4l+m)\\Z$",
    "tamagawaNumber": "$4l+m$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+m+5$",
    "numberOfComponents": "$l+m+3$",
    "omegaValuation": "$0$"
  },
  {
    "id": "ii-star-l-m",
    "nuType": "$\\II^*_{l-m}$",
    "nuTypePlain": "II^*_{l-m}",
    "mrncReductionType": "$[2]\\mathrm{I}_{m,l\\mathrm{D}}$",
    "mrncReductionTypePlain": "[2]I_{m,lD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-l-m.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-l-m.svg",
    "potentialStableType": "$\\IV$",
    "potentialStableTypePlain": "IV",
    "parameters": [
      "$l$",
      "$m$"
    ],
    "parameterRange": "$l,m>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/m\\Z$",
    "tamagawaNumber": "$m$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$l+m+15$",
    "numberOfComponents": "$l+m+2$",
    "omegaValuation": "$-1$"
  },
  {
    "id": "iii-l-p184",
    "nuType": "$\\III_l\\;(\\mathrm{p184})$",
    "nuTypePlain": "III_l (p184)",
    "mrncReductionType": "$\\mathrm{T}\\!\\underset{l}{\\overset{3-3}{-}}\\mathrm{T}$",
    "mrncReductionTypePlain": "T-l-{3-3}-T",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-l-p184.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-l-p184.svg",
    "potentialStableType": "$\\IV$",
    "potentialStableTypePlain": "IV",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$Y_l$",
    "tamagawaNumber": "$9$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+10$",
    "numberOfComponents": "$l+7$",
    "omegaValuation": "$0$"
  },
  {
    "id": "iii-star-l-stable-iv",
    "nuType": "$\\III^*_l$",
    "nuTypePlain": "III^*_l",
    "mrncReductionType": "$[2]\\mathrm{T}_{\\{6\\}l\\mathrm{D}}$",
    "mrncReductionTypePlain": "[2]T_{6,lD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-star-l-stable-iv.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-star-l-stable-iv.svg",
    "potentialStableType": "$\\IV$",
    "potentialStableTypePlain": "IV",
    "parameters": [
      "$l$"
    ],
    "parameterRange": "$l>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$l+20$",
    "numberOfComponents": "$l+6$",
    "omegaValuation": "$-1$"
  },
  {
    "id": "i0-i0-t",
    "nuType": "$\\I_0\\text{-}\\I_0\\text{-}t$",
    "nuTypePlain": "I0-I0-t",
    "mrncReductionType": "$\\I_0\\text{-}\\I_0\\text{-}t$",
    "mrncReductionTypePlain": "I0-I0-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i0-i0-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-i0-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": null,
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$0$",
    "minimalDiscriminant": "$12t$",
    "numberOfComponents": "$t+1$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-i-star0-t",
    "nuType": "$\\I_0\\text{-}\\I^*_0\\text{-}t$",
    "nuTypePlain": "I0-I^*0-t",
    "mrncReductionType": "$\\I_0\\text{-}\\I^*_0\\text{-}t$",
    "mrncReductionTypePlain": "I0-I^*0-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i0-i-star0-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-i-star0-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z\\times\\Z/2\\Z$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+6$",
    "numberOfComponents": "$t+5$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-i-star0-t",
    "nuType": "$\\I^*_0\\text{-}\\I^*_0\\text{-}t$",
    "nuTypePlain": "I^*0-I^*0-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\I^*_0\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-I^*0-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star0-i-star0-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-i-star0-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^4$",
    "tamagawaNumber": "$16$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+12$",
    "numberOfComponents": "$t+9$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-iii-t",
    "nuType": "$\\I_0\\text{-}\\III\\text{-}t$",
    "nuTypePlain": "I0-III-t",
    "mrncReductionType": "$\\I_0\\text{-}\\III\\text{-}t$",
    "mrncReductionTypePlain": "I0-III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+3$",
    "numberOfComponents": "$t+2$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-iii-star-t",
    "nuType": "$\\I^*_0\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "I^*0-III^*-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-III^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star0-iii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^3$",
    "tamagawaNumber": "$8$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+15$",
    "numberOfComponents": "$t+12$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-iii-t",
    "nuType": "$\\I^*_0\\text{-}\\III\\text{-}t$",
    "nuTypePlain": "I^*0-III-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\III\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^3$",
    "tamagawaNumber": "$8$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+9$",
    "numberOfComponents": "$t+6$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-iii-star-t",
    "nuType": "$\\I_0\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "I0-III^*-t",
    "mrncReductionType": "$\\I_0\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "I0-III^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i0-iii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+9$",
    "numberOfComponents": "$t+8$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-ii-t",
    "nuType": "$\\I_0\\text{-}\\II\\text{-}t$",
    "nuTypePlain": "I0-II-t",
    "mrncReductionType": "$\\I_0\\text{-}\\II\\text{-}t$",
    "mrncReductionTypePlain": "I0-II-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-ii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+2$",
    "numberOfComponents": "$t+1$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-iv-star-t",
    "nuType": "$\\I^*_0\\text{-}\\IV^*\\text{-}t$",
    "nuTypePlain": "I^*0-IV^*-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\IV^*\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-IV^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star0-iv-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-iv-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/2\\Z\\times\\Z/6\\Z$",
    "tamagawaNumber": "$12$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+14$",
    "numberOfComponents": "$t+11$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-ii-t",
    "nuType": "$\\I^*_0\\text{-}\\II\\text{-}t$",
    "nuTypePlain": "I^*0-II-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\II\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-II-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-ii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+8$",
    "numberOfComponents": "$t+5$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-iv-star-t",
    "nuType": "$\\I_0\\text{-}\\IV^*\\text{-}t$",
    "nuTypePlain": "I0-IV^*-t",
    "mrncReductionType": "$\\I_0\\text{-}\\IV^*\\text{-}t$",
    "mrncReductionTypePlain": "I0-IV^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i0-iv-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-iv-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+8$",
    "numberOfComponents": "$t+7$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-iv-t",
    "nuType": "$\\I_0\\text{-}\\IV\\text{-}t$",
    "nuTypePlain": "I0-IV-t",
    "mrncReductionType": "$\\I_0\\text{-}\\IV\\text{-}t$",
    "mrncReductionTypePlain": "I0-IV-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-iv-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+4$",
    "numberOfComponents": "$t+3$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-ii-star-t",
    "nuType": "$\\I^*_0\\text{-}\\II^*\\text{-}t$",
    "nuTypePlain": "I^*0-II^*-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\II^*\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-II^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star0-ii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-ii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+16$",
    "numberOfComponents": "$t+13$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-iv-t",
    "nuType": "$\\I^*_0\\text{-}\\IV\\text{-}t$",
    "nuTypePlain": "I^*0-IV-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\IV\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-IV-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-iv-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/2\\Z\\times\\Z/6\\Z$",
    "tamagawaNumber": "$12$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+10$",
    "numberOfComponents": "$t+7$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-ii-star-t",
    "nuType": "$\\I_0\\text{-}\\II^*\\text{-}t$",
    "nuTypePlain": "I0-II^*-t",
    "mrncReductionType": "$\\I_0\\text{-}\\II^*\\text{-}t$",
    "mrncReductionTypePlain": "I0-II^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i0-ii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-ii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+10$",
    "numberOfComponents": "$t+9$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iii-iii-t",
    "nuType": "$\\III\\text{-}\\III\\text{-}t$",
    "nuTypePlain": "III-III-t",
    "mrncReductionType": "$\\III\\text{-}\\III\\text{-}t$",
    "mrncReductionTypePlain": "III-III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+6$",
    "numberOfComponents": "$t+3$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iii-star-iii-star-t",
    "nuType": "$\\III^*\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "III^*-III^*-t",
    "mrncReductionType": "$\\III^*\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "III^*-III^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-star-iii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-star-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+18$",
    "numberOfComponents": "$t+15$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iii-iii-star-t",
    "nuType": "$\\III\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "III-III^*-t",
    "mrncReductionType": "$\\III\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "III-III^*-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+12$",
    "numberOfComponents": "$t+9$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-iii-t",
    "nuType": "$\\II\\text{-}\\III\\text{-}t$",
    "nuTypePlain": "II-III-t",
    "mrncReductionType": "$\\II\\text{-}\\III\\text{-}t$",
    "mrncReductionTypePlain": "II-III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+5$",
    "numberOfComponents": "$t+2$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-star-iii-star-t",
    "nuType": "$\\IV^*\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "IV^*-III^*-t",
    "mrncReductionType": "$\\IV^*\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "IV^*-III^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iv-star-iii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-star-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/6\\Z$",
    "tamagawaNumber": "$6$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+17$",
    "numberOfComponents": "$t+14$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-iii-t",
    "nuType": "$\\IV\\text{-}\\III\\text{-}t$",
    "nuTypePlain": "IV-III-t",
    "mrncReductionType": "$\\IV\\text{-}\\III\\text{-}t$",
    "mrncReductionTypePlain": "IV-III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/6\\Z$",
    "tamagawaNumber": "$6$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+7$",
    "numberOfComponents": "$t+4$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-star-iii-star-t",
    "nuType": "$\\II^*\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "II^*-III^*-t",
    "mrncReductionType": "$\\II^*\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "II^*-III^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-iii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+19$",
    "numberOfComponents": "$t+16$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-iii-star-t",
    "nuType": "$\\IV\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "IV-III^*-t",
    "mrncReductionType": "$\\IV\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "IV-III^*-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/6\\Z$",
    "tamagawaNumber": "$6$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+13$",
    "numberOfComponents": "$t+10$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-star-iii-t",
    "nuType": "$\\II^*\\text{-}\\III\\text{-}t$",
    "nuTypePlain": "II^*-III-t",
    "mrncReductionType": "$\\II^*\\text{-}\\III\\text{-}t$",
    "mrncReductionTypePlain": "II^*-III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+13$",
    "numberOfComponents": "$t+10$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-star-iii-t",
    "nuType": "$\\IV^*\\text{-}\\III\\text{-}t$",
    "nuTypePlain": "IV^*-III-t",
    "mrncReductionType": "$\\IV^*\\text{-}\\III\\text{-}t$",
    "mrncReductionTypePlain": "IV^*-III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-star-iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/6\\Z$",
    "tamagawaNumber": "$6$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+11$",
    "numberOfComponents": "$t+8$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-iii-star-t",
    "nuType": "$\\II\\text{-}\\III^*\\text{-}t$",
    "nuTypePlain": "II-III^*-t",
    "mrncReductionType": "$\\II\\text{-}\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "II-III^*-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+11$",
    "numberOfComponents": "$t+8$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-ii-t",
    "nuType": "$\\II\\text{-}\\II\\text{-}t$",
    "nuTypePlain": "II-II-t",
    "mrncReductionType": "$\\II\\text{-}\\II\\text{-}t$",
    "mrncReductionTypePlain": "II-II-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-ii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+4$",
    "numberOfComponents": "$t+1$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-star-iv-star-t",
    "nuType": "$\\IV^*\\text{-}\\IV^*\\text{-}t$",
    "nuTypePlain": "IV^*-IV^*-t",
    "mrncReductionType": "$\\IV^*\\text{-}\\IV^*\\text{-}t$",
    "mrncReductionTypePlain": "IV^*-IV^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iv-star-iv-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-star-iv-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$(\\Z/3\\Z)^2$",
    "tamagawaNumber": "$9$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+16$",
    "numberOfComponents": "$t+13$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-iv-t",
    "nuType": "$\\II\\text{-}\\IV\\text{-}t$",
    "nuTypePlain": "II-IV-t",
    "mrncReductionType": "$\\II\\text{-}\\IV\\text{-}t$",
    "mrncReductionTypePlain": "II-IV-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-iv-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+6$",
    "numberOfComponents": "$t+3$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-star-iv-star-t",
    "nuType": "$\\II^*\\text{-}\\IV^*\\text{-}t$",
    "nuTypePlain": "II^*-IV^*-t",
    "mrncReductionType": "$\\II^*\\text{-}\\IV^*\\text{-}t$",
    "mrncReductionTypePlain": "II^*-IV^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-iv-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-iv-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+18$",
    "numberOfComponents": "$t+15$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-iv-star-t",
    "nuType": "$\\II\\text{-}\\IV^*\\text{-}t$",
    "nuTypePlain": "II-IV^*-t",
    "mrncReductionType": "$\\II\\text{-}\\IV^*\\text{-}t$",
    "mrncReductionTypePlain": "II-IV^*-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-iv-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+10$",
    "numberOfComponents": "$t+7$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-iv-t",
    "nuType": "$\\IV\\text{-}\\IV\\text{-}t$",
    "nuTypePlain": "IV-IV-t",
    "mrncReductionType": "$\\IV\\text{-}\\IV\\text{-}t$",
    "mrncReductionTypePlain": "IV-IV-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-iv-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$(\\Z/3\\Z)^2$",
    "tamagawaNumber": "$9$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+8$",
    "numberOfComponents": "$t+5$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-star-ii-star-t",
    "nuType": "$\\II^*\\text{-}\\II^*\\text{-}t$",
    "nuTypePlain": "II^*-II^*-t",
    "mrncReductionType": "$\\II^*\\text{-}\\II^*\\text{-}t$",
    "mrncReductionTypePlain": "II^*-II^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-ii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-ii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+20$",
    "numberOfComponents": "$t+17$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-iv-star-t",
    "nuType": "$\\IV\\text{-}\\IV^*\\text{-}t$",
    "nuTypePlain": "IV-IV^*-t",
    "mrncReductionType": "$\\IV\\text{-}\\IV^*\\text{-}t$",
    "mrncReductionTypePlain": "IV-IV^*-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-iv-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$(\\Z/3\\Z)^2$",
    "tamagawaNumber": "$9$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+12$",
    "numberOfComponents": "$t+9$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-ii-star-t",
    "nuType": "$\\II\\text{-}\\II^*\\text{-}t$",
    "nuTypePlain": "II-II^*-t",
    "mrncReductionType": "$\\II\\text{-}\\II^*\\text{-}t$",
    "mrncReductionTypePlain": "II-II^*-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-ii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+12$",
    "numberOfComponents": "$t+9$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-star-iv-t",
    "nuType": "$\\II^*\\text{-}\\IV\\text{-}t$",
    "nuTypePlain": "II^*-IV-t",
    "mrncReductionType": "$\\II^*\\text{-}\\IV\\text{-}t$",
    "mrncReductionTypePlain": "II^*-IV-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-iv-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+14$",
    "numberOfComponents": "$t+11$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "2i0-t",
    "nuType": "$2\\I_0\\text{-}t$",
    "nuTypePlain": "2I0-t",
    "mrncReductionType": "$2\\I_0\\text{-}t$",
    "mrncReductionTypePlain": "2I0-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2i0-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2i0-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+15$",
    "numberOfComponents": "$t+3$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2i-star0-t",
    "nuType": "$2\\I^*_0\\text{-}t$",
    "nuTypePlain": "2I^*0-t",
    "mrncReductionType": "$2\\I^*_0\\text{-}t$",
    "mrncReductionTypePlain": "2I^*0-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2i-star0-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2i-star0-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+21$",
    "numberOfComponents": "$t+7$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2iv-t",
    "nuType": "$2\\IV\\text{-}t$",
    "nuTypePlain": "2IV-t",
    "mrncReductionType": "$2\\IV\\text{-}t$",
    "mrncReductionTypePlain": "2IV-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2iv-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+19$",
    "numberOfComponents": "$t+5$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2iv-star-t",
    "nuType": "$2\\IV^*\\text{-}t$",
    "nuTypePlain": "2IV^*-t",
    "mrncReductionType": "$2\\IV^*\\text{-}t$",
    "mrncReductionTypePlain": "2IV^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2iv-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2iv-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z$",
    "tamagawaNumber": "$3$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+23$",
    "numberOfComponents": "$t+9$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2iii-t",
    "nuType": "$2\\III\\text{-}t$",
    "nuTypePlain": "2III-t",
    "mrncReductionType": "$2\\III\\text{-}t$",
    "mrncReductionTypePlain": "2III-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2iii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+18$",
    "numberOfComponents": "$t+4$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2iii-star-t",
    "nuType": "$2\\III^*\\text{-}t$",
    "nuTypePlain": "2III^*-t",
    "mrncReductionType": "$2\\III^*\\text{-}t$",
    "mrncReductionTypePlain": "2III^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2iii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2iii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z$",
    "tamagawaNumber": "$2$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+24$",
    "numberOfComponents": "$t+10$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2ii-t",
    "nuType": "$2\\II\\text{-}t$",
    "nuTypePlain": "2II-t",
    "mrncReductionType": "$2\\II\\text{-}t$",
    "mrncReductionTypePlain": "2II-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2ii-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+17$",
    "numberOfComponents": "$t+3$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2ii-star-t",
    "nuType": "$2\\II^*\\text{-}t$",
    "nuTypePlain": "2II^*-t",
    "mrncReductionType": "$2\\II^*\\text{-}t$",
    "mrncReductionTypePlain": "2II^*-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2ii-star-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2ii-star-t.svg",
    "potentialStableType": "$\\V$",
    "potentialStableTypePlain": "V",
    "parameters": [
      "$t$"
    ],
    "parameterRange": "$t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$(0)$",
    "tamagawaNumber": "$1$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+25$",
    "numberOfComponents": "$t+11$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "i0-i-l-t",
    "nuType": "$\\I_0\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "I0-I_l-t",
    "mrncReductionType": "$\\I_0\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "I0-I_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i0-i-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": null,
    "componentGroup": "$\\Z/l\\Z$",
    "tamagawaNumber": "$l$",
    "conductorExponent": "$1$",
    "minimalDiscriminant": "$12t+l$",
    "numberOfComponents": "$l+t$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-i-star-l-t",
    "nuType": "$\\I^*_0\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "I^*0-I^*_l-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-I^*_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star0-i-star-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2\\times X_l$",
    "tamagawaNumber": "$16$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+12$",
    "numberOfComponents": "$l+t+9$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i0-i-star-l-t",
    "nuType": "$\\I_0\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "I0-I^*_l-t",
    "mrncReductionType": "$\\I_0\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "I0-I^*_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i0-i-star-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i0-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$X_l$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+l+6$",
    "numberOfComponents": "$l+t+5$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star0-i-l-t",
    "nuType": "$\\I^*_0\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "I^*0-I_l-t",
    "mrncReductionType": "$\\I^*_0\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "I^*0-I_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star0-i-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star0-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$(\\Z/2\\Z)^2\\times\\Z/l\\Z$",
    "tamagawaNumber": "$4l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+6$",
    "numberOfComponents": "$l+t+4$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iii-i-l-t",
    "nuType": "$\\III\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "III-I_l-t",
    "mrncReductionType": "$\\III\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "III-I_l-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z\\times\\Z/l\\Z$",
    "tamagawaNumber": "$2l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+3$",
    "numberOfComponents": "$l+t+1$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iii-star-i-star-l-t",
    "nuType": "$\\III^*\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "III^*-I^*_l-t",
    "mrncReductionType": "$\\III^*\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "III^*-I^*_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-star-i-star-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-star-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z\\times X_l$",
    "tamagawaNumber": "$8$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+15$",
    "numberOfComponents": "$l+t+12$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iii-i-star-l-t",
    "nuType": "$\\III\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "III-I^*_l-t",
    "mrncReductionType": "$\\III\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "III-I^*_l-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z\\times X_l$",
    "tamagawaNumber": "$8$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+9$",
    "numberOfComponents": "$l+t+6$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iii-star-i-l-t",
    "nuType": "$\\III^*\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "III^*-I_l-t",
    "mrncReductionType": "$\\III^*\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "III^*-I_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iii-star-i-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iii-star-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/2\\Z\\times\\Z/l\\Z$",
    "tamagawaNumber": "$2l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+9$",
    "numberOfComponents": "$l+t+7$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-i-l-t",
    "nuType": "$\\II\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "II-I_l-t",
    "mrncReductionType": "$\\II\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "II-I_l-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/l\\Z$",
    "tamagawaNumber": "$l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+2$",
    "numberOfComponents": "$l+t$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-star-i-star-l-t",
    "nuType": "$\\IV^*\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "IV^*-I^*_l-t",
    "mrncReductionType": "$\\IV^*\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "IV^*-I^*_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iv-star-i-star-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-star-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z\\times X_l$",
    "tamagawaNumber": "$12$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+14$",
    "numberOfComponents": "$l+t+11$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-i-star-l-t",
    "nuType": "$\\II\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "II-I^*_l-t",
    "mrncReductionType": "$\\II\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "II-I^*_l-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$X_l$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+8$",
    "numberOfComponents": "$l+t+5$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-star-i-l-t",
    "nuType": "$\\IV^*\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "IV^*-I_l-t",
    "mrncReductionType": "$\\IV^*\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "IV^*-I_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/iv-star-i-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-star-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z\\times\\Z/l\\Z$",
    "tamagawaNumber": "$3l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+8$",
    "numberOfComponents": "$l+t+6$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-i-l-t",
    "nuType": "$\\IV\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "IV-I_l-t",
    "mrncReductionType": "$\\IV\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "IV-I_l-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z\\times\\Z/l\\Z$",
    "tamagawaNumber": "$3l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+4$",
    "numberOfComponents": "$l+t+2$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-star-i-star-l-t",
    "nuType": "$\\II^*\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "II^*-I^*_l-t",
    "mrncReductionType": "$\\II^*\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "II^*-I^*_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-i-star-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq -1$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$X_l$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+16$",
    "numberOfComponents": "$l+t+13$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "iv-i-star-l-t",
    "nuType": "$\\IV\\text{-}\\I^*_l\\text{-}t$",
    "nuTypePlain": "IV-I^*_l-t",
    "mrncReductionType": "$\\IV\\text{-}\\I^*_l\\text{-}t$",
    "mrncReductionTypePlain": "IV-I^*_l-t",
    "mrmfibre": "—",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/iv-i-star-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/3\\Z\\times X_l$",
    "tamagawaNumber": "$12$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+10$",
    "numberOfComponents": "$l+t+7$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "ii-star-i-l-t",
    "nuType": "$\\II^*\\text{-}\\I_l\\text{-}t$",
    "nuTypePlain": "II^*-I_l-t",
    "mrncReductionType": "$\\II^*\\text{-}\\I_l\\text{-}t$",
    "mrncReductionTypePlain": "II^*-I_l-t",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/ii-star-i-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/ii-star-i-l-t.svg",
    "potentialStableType": "$\\VI$",
    "potentialStableTypePlain": "VI",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$",
      "$3$"
    ],
    "componentGroup": "$\\Z/l\\Z$",
    "tamagawaNumber": "$l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+10$",
    "numberOfComponents": "$l+t+8$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-l-i-m-t",
    "nuType": "$\\I_l\\text{-}\\I_m\\text{-}t$",
    "nuTypePlain": "I_l-I_m-t",
    "mrncReductionType": "$\\mathrm{I}_{l}\\!\\underset{t}{-}\\!\\mathrm{I}_{m}$",
    "mrncReductionTypePlain": "I_l-t-I_m",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-l-i-m-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-l-i-m-t.svg",
    "potentialStableType": "$\\VII$",
    "potentialStableTypePlain": "VII",
    "parameters": [
      "$l$",
      "$m$",
      "$t$"
    ],
    "parameterRange": "$l,m>0,\\ t>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": null,
    "componentGroup": "$\\Z/l\\Z\\times\\Z/m\\Z$",
    "tamagawaNumber": "$lm$",
    "conductorExponent": "$2$",
    "minimalDiscriminant": "$12t+l+m$",
    "numberOfComponents": "$l+m+t\\!-\\!1$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "i-star-l-i-star-m-t",
    "nuType": "$\\I^*_l\\text{-}\\I^*_m\\text{-}t$",
    "nuTypePlain": "I^*_l-I^*_m-t",
    "mrncReductionType": "$\\mathrm{I}^{*}_{l}\\!\\underset{t}{-}\\!\\mathrm{I}^{*}_{m}$",
    "mrncReductionTypePlain": "I^*_l-t-I^*_m",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/i-star-l-i-star-m-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/i-star-l-i-star-m-t.svg",
    "potentialStableType": "$\\VII$",
    "potentialStableTypePlain": "VII",
    "parameters": [
      "$l$",
      "$m$",
      "$t$"
    ],
    "parameterRange": "$l,m>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$X_l\\times X_m$",
    "tamagawaNumber": "$16$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+m+12$",
    "numberOfComponents": "$l+m+t+9$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "mixed-i-star-l-i-m-t",
    "nuType": "$\\I^*_l\\text{-}\\I_m\\text{-}t$",//\\,/\\,\\I_l\\text{-}\\I^*_m\\text{-}t$",
    "nuTypePlain": "I^*_l-I_m-t",// / I_l-I^*_m-t",
    "mrncReductionType": "$\\mathrm{I}^{*}_{l}\\!\\underset{t}{-}\\!\\mathrm{I}_{m}$",//\\,/\\,\\mathrm{I}_{l}\\,\\underset{t}{-}\\,\\mathrm{I}^{*}_{m}$",
    "mrncReductionTypePlain": "I^*_l-t-I_m",// / I_l-t-I^*_m",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/mixed-i-star-l-i-m-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/mixed-i-star-l-i-m-t.svg",
    "potentialStableType": "$\\VII$",
    "potentialStableTypePlain": "VII",
    "parameters": [
      "$l$",
      "$m$",
      "$t$"
    ],
    "parameterRange": "$l,m>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$X_l\\times\\Z/m\\Z$",//\\,/\\,X_m\\times\\Z/l\\Z$",
    "tamagawaNumber": "$4m$",//\\,/\\,4l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+m+6$",
    "numberOfComponents": "$l+m+t+4$",
    "omegaValuation": "$-t$"
  },
  {
    "id": "2i-l-t",
    "nuType": "$2\\I_l\\text{-}t$",
    "nuTypePlain": "2I_l-t",
    "mrncReductionType": "$[2]\\mathrm{I}_{l,t\\mathrm{D}}$",
    "mrncReductionTypePlain": "[2]I_{l,tD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2i-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2i-l-t.svg",
    "potentialStableType": "$\\VII$",
    "potentialStableTypePlain": "VII",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t>0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$\\Z/l\\Z$",
    "tamagawaNumber": "$l$",
    "conductorExponent": "$3$",
    "minimalDiscriminant": "$12t+l+15$",
    "numberOfComponents": "$l+t+2$",
    "omegaValuation": "$-(t+1)$"
  },
  {
    "id": "2i-star-l-t",
    "nuType": "$2\\I^*_l\\text{-}t$",
    "nuTypePlain": "2I^*_l-t",
    "mrncReductionType": "$[2]\\mathrm{I}^{*}_{l,t\\mathrm{D}}$",
    "mrncReductionTypePlain": "[2]I^*_{l,tD}",
    "mrmfibre": "genus2-special-fibres/images/special-fibres/2i-star-l-t.svg",
    "mrncfibre": "genus2-special-fibres/images/special-fibres/2i-star-l-t.svg",
    "potentialStableType": "$\\VII$",
    "potentialStableTypePlain": "VII",
    "parameters": [
      "$l$",
      "$t$"
    ],
    "parameterRange": "$l>0,\\ t\\geq 0$",
    "leadingCoefficientParity": null,
    "wildPrimes": [
      "$2$"
    ],
    "componentGroup": "$X_l$",
    "tamagawaNumber": "$4$",
    "conductorExponent": "$4$",
    "minimalDiscriminant": "$12t+l+21$",
    "numberOfComponents": "$l+t+7$",
    "omegaValuation": "$-(t+1)$"
  }
];

