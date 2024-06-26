import {useState} from 'react';

function Ocenabtn(props) {
  const [isactive, setIsactive] = useState(false);
  
  function handleClick(){
    setIsactive(isactive => !isactive);
  }

  let toggleClassChange = isactive ? ' active' : '';
  return (
    <button className={`ocena_button${toggleClassChange}`} onClick={handleClick}>{props.buttontext}</button>
  );
}

export default Ocenabtn;