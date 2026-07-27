// for latex formatting
window.MathJax = {
    tex: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']],
  
      macros: {
        Z: '\\mathbb{Z}',
        Q: '\\mathbb{Q}',
        C: '\\mathbb{C}',
  
        D: '\\mathrm{D}',
  
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
        IX: '\\mathrm{IX}'
  
        cR: '\\mathcal{R}'
      }
    },
  
    svg: {
      fontCache: 'global'
    }
  };

  //Namikawa Ueno data
  window.namikawaUenoTypes = [
    {
      id: "i-0-0-0",
      nuType: "$\\I_{0-0-0}$",
      nuTypePlain: "I_{0-0-0}",
      mrncReductionType: "$\\mathrm{1g2}$",
      mrncReductionTypePlain: "1g2",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_1$",
      tamagawaNumber: 1,
      conductorExponent: 0,
      minimalDiscriminantExponent: 0,
      numberOfComponents: 1
    },
  
    {
      id: "i-star-0-0-0",
      nuType: "$\\I^*_{0-0-0}$",
      nuTypePlain: "I^*_{0-0-0}",
      mrncReductionType: "$2^{1,1,1,1,1,1}$",
      mrncReductionTypePlain: "2^{1,1,1,1,1,1}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_2^4$",
      tamagawaNumber: 16,
      conductorExponent: 4,
      minimalDiscriminantExponent: 10,
      numberOfComponents: 7
    },
  
    {
      id: "ii",
      nuType: "$\\II$",
      nuTypePlain: "II",
      mrncReductionType: "$\\mathrm{Dg1}$",
      mrncReductionTypePlain: "Dg1",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_1$",
      tamagawaNumber: 1,
      conductorExponent: 2,
      minimalDiscriminantExponent: 15,
      numberOfComponents: 3
    },
  
    {
      id: "iii",
      nuType: "$\\III$",
      nuTypePlain: "III",
      mrncReductionType: "$3^{1,1,2,2}$",
      mrncReductionTypePlain: "3^{1,1,2,2}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_3^2$",
      tamagawaNumber: 9,
      conductorExponent: 4,
      minimalDiscriminantExponent: 10,
      numberOfComponents: 7
    },
  
    {
      id: "iv",
      nuType: "$\\IV$",
      nuTypePlain: "IV",
      mrncReductionType: "$6^{2,4,3,3}$",
      mrncReductionTypePlain: "6^{2,4,3,3}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_1$",
      tamagawaNumber: 1,
      conductorExponent: 4,
      minimalDiscriminantExponent: 20,
      numberOfComponents: 6
    },
  
    {
      id: "v",
      nuType: "$\\V$",
      nuTypePlain: "V",
      mrncReductionType: "$6^{1,1,4}$",
      mrncReductionTypePlain: "6^{1,1,4}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_3$",
      tamagawaNumber: 3,
      conductorExponent: 4,
      minimalDiscriminantExponent: 5,
      numberOfComponents: 5
    },
  
    {
      id: "v-star",
      nuType: "$\\V^*$",
      nuTypePlain: "V^*",
      mrncReductionType: "$6^{5,5,2}$",
      mrncReductionTypePlain: "6^{5,5,2}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_3$",
      tamagawaNumber: 3,
      conductorExponent: 4,
      minimalDiscriminantExponent: 15,
      numberOfComponents: 12
    },
  
    {
      id: "vi",
      nuType: "$\\VI$",
      nuTypePlain: "VI",
      mrncReductionType: "$4^{1,3,2,2}$",
      mrncReductionTypePlain: "4^{1,3,2,2}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_2^2$",
      tamagawaNumber: 4,
      conductorExponent: 4,
      minimalDiscriminantExponent: 10,
      numberOfComponents: 7
    },
  
    {
      id: "vii",
      nuType: "$\\VII$",
      nuTypePlain: "VII",
      mrncReductionType: "$8^{1,3,4}$",
      mrncReductionTypePlain: "8^{1,3,4}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_2$",
      tamagawaNumber: 2,
      conductorExponent: 4,
      minimalDiscriminantExponent: 5,
      numberOfComponents: 5
    },
  
    {
      id: "vii-star",
      nuType: "$\\VII^*$",
      nuTypePlain: "VII^*",
      mrncReductionType: "$8^{5,7,4}$",
      mrncReductionTypePlain: "8^{5,7,4}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_2$",
      tamagawaNumber: 2,
      conductorExponent: 4,
      minimalDiscriminantExponent: 15,
      numberOfComponents: 12
    },
  
    {
      id: "viii-1",
      nuType: "$\\VIII\\text{-}1$",
      nuTypePlain: "VIII-1",
      mrncReductionType: "$10^{1,4,5}$",
      mrncReductionTypePlain: "10^{1,4,5}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_1$",
      tamagawaNumber: 1,
      conductorExponent: 4,
      minimalDiscriminantExponent: 4,
      numberOfComponents: 5
    },
  
    {
      id: "viii-3",
      nuType: "$\\VIII\\text{-}3$",
      nuTypePlain: "VIII-3",
      mrncReductionType: "$10^{3,2,5}$",
      mrncReductionTypePlain: "10^{3,2,5}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_1$",
      tamagawaNumber: 1,
      conductorExponent: 4,
      minimalDiscriminantExponent: 12,
      numberOfComponents: 9
    },
  
    {
      id: "viii-2",
      nuType: "$\\VIII\\text{-}2$",
      nuTypePlain: "VIII-2",
      mrncReductionType: "$10^{7,8,5}$",
      mrncReductionTypePlain: "10^{7,8,5}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_1$",
      tamagawaNumber: 1,
      conductorExponent: 4,
      minimalDiscriminantExponent: 18,
      numberOfComponents: 6
    },
  
    {
      id: "viii-4",
      nuType: "$\\VIII\\text{-}4$",
      nuTypePlain: "VIII-4",
      mrncReductionType: "$10^{9,6,5}$",
      mrncReductionTypePlain: "10^{9,6,5}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_1$",
      tamagawaNumber: 1,
      conductorExponent: 4,
      minimalDiscriminantExponent: 16,
      numberOfComponents: 13
    },
  
    {
      id: "ix-1",
      nuType: "$\\IX\\text{-}1$",
      nuTypePlain: "IX-1",
      mrncReductionType: "$5^{1,2,2}$",
      mrncReductionTypePlain: "5^{1,2,2}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_5$",
      tamagawaNumber: 5,
      conductorExponent: 4,
      minimalDiscriminantExponent: 8,
      numberOfComponents: 6
    },
  
    {
      id: "ix-2",
      nuType: "$\\IX\\text{-}2$",
      nuTypePlain: "IX-2",
      mrncReductionType: "$5^{1,1,3}$",
      mrncReductionTypePlain: "5^{1,1,3}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_5$",
      tamagawaNumber: 5,
      conductorExponent: 4,
      minimalDiscriminantExponent: 6,
      numberOfComponents: 5
    },
  
    {
      id: "ix-3",
      nuType: "$\\IX\\text{-}3$",
      nuTypePlain: "IX-3",
      mrncReductionType: "$5^{2,4,4}$",
      mrncReductionTypePlain: "5^{2,4,4}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_5$",
      tamagawaNumber: 5,
      conductorExponent: 4,
      minimalDiscriminantExponent: 14,
      numberOfComponents: 11
    },
  
    {
      id: "ix-4",
      nuType: "$\\IX\\text{-}4$",
      nuTypePlain: "IX-4",
      mrncReductionType: "$5^{3,3,4}$",
      mrncReductionTypePlain: "5^{3,3,4}",
      potentialStableType: "$\\I$",
      potentialStableTypePlain: "I",
      leadingCoefficientParity: [0, 1],
      wildPrimes: null,
      componentGroup: "$\\mathrm{C}_5$",
      tamagawaNumber: 5,
      conductorExponent: 4,
      minimalDiscriminantExponent: 12,
      numberOfComponents: 9
    }
  ];
  
  