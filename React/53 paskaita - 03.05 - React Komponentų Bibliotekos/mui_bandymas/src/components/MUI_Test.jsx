import Skeleton from './Skeleton';
import CutOutStuff from './CutOutStuff';

const MUI_Test = () => {
  return (
    <>
      <Skeleton />
      <CutOutStuff
        minDistance={30}
      />
      <CutOutStuff
        minDistance={5}
      />
    </>
  );
}
 
export default MUI_Test;