export default class List{
  constructor({ listType, attributes, listItems }){
    this.listType = listType;
    this.attributes = attributes;
    this.listItems = listItems;
    return this.render();
  }
  render(){
    const list = document.createElement(this.listType);

    this.attributes && this.attributes.forEach(attr => {
      // console.log(attr);
      list.setAttribute(attr.name, attr.value);
    });

    this.listItems.forEach(item => {
      // console.log(item);
      const li = document.createElement('li');
      const liText = document.createTextNode(item.text);
      li.appendChild(liText);

      item.attributes && item.attributes.forEach(attr => {
        li.setAttribute(attr.name, attr.value);
      });

      // console.log(li);
      list.appendChild(li);
    });

    return list;
  }
}