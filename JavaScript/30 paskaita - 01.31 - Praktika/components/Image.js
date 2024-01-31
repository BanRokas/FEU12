// export default class Image{
//   constructor(source){
//     this.source = source;
//     return this.render();
//   }
//   render(){
//     const imageEl = document.createElement('img');
//     imageEl.setAttribute('src', this.source);

//     return imageEl;
//   }
// }

export default class Image{
  constructor({ attributes }){
    this.attributes = attributes;
    return this.render();
  }
  render(){
    const imageEl = document.createElement('img');
    
    // console.log(this.attributes);
    this.attributes.forEach(attr => {
      // console.log(attr);
      imageEl.setAttribute(attr.name, attr.value);
    });

    return imageEl;
  }
}