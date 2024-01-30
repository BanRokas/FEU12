export default class Dog{
  //      1 būdas
  // constructor({veisle, vardas, spalva, amzius, svoris, lytis, cipuotas, nuotrauka}){
  //   this.veisle = veisle;
  //   this.vardas = vardas;
  //   this.spalva = spalva;
  //   this.amzius = amzius;
  //   this.svoris = svoris;
  //   this.lytis = lytis;
  //   this.cipuotas = cipuotas;
  //   this.nuotrauka = nuotrauka;
  // }
  //      2 būdas
  // constructor(props){
  //   this.props = props;
  // }
  // metodas(){
  //   return this.props.amzius;
  // }
  //      3 būdas
  constructor({ veisle, vardas, spalva, lytis, cipuotas, amzius, svoris, nuotrauka, ...rest }){
    this.veisle = veisle;
    this.vardas = vardas;
    this.spalva = spalva;
    this.amzius = amzius;
    this.svoris = svoris;
    this.lytis = lytis;
    this.cipuotas = cipuotas;
    this.nuotrauka = nuotrauka;
    this.rest = rest;
    return this.render();
  }
  render(){
    const divCard = document.createElement('div');



    
    return divCard;
  }
}

export const graziausiVardai = ['Pikachu', 'Šuo', 'Kapučinas', 'Patriotas'];

// export default Dog;