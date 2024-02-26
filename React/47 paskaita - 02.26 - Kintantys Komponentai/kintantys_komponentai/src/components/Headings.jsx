import Heading from "./Heading";

const Headings = ({ stuff:tekstai }) => {
  return (
    <>
      {/* <h1>Labas rytas</h1>
      <h1>Pietų metas</h1>
      <h1>Geros dienos</h1>
      <h1>Labanaktis</h1> */}
      {/* <Heading 
        text='Labas rytas'
      />
      <Heading 
        text='Pietų metas'
      />
      <Heading 
        text='Geros dienos'
      />
      <Heading 
        text='Labanaktis'
      /> */}
      {
        tekstai.map((el, i) => {
          return <Heading 
            key={i}
            text={el}
          />
        })
      }
    </>
  );
}
 
export default Headings;