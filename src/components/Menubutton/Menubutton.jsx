import './Menubutton.css';

function Menubutton(props) {

  return (
    
     <div className={props.menuopen ? 'menu_buton active': 'menu_buton'} >
       
        <div onClick={props.onClick} className='menu_btn_wrap'>
          <span></span>
          <span></span>
          <span></span>
        </div>
         <div className='menu_buton_text'>
          MENU
        </div>
    </div>    
    
  );
}

export default Menubutton;