import Heading from "./Heading";
import Card from "./Card";

const Korteles = ({ data }) => {
  return (
    <>
      <Heading 
        text="Lankytinios Lietuvos vietos"
      />
      <div>
        {
          data.map(el => {
            return <Card 
              key={el.id}
              info={el}
            />
          })
        }
      </div>
    </>
  );
}
 
export default Korteles;