const tg = window.Telegram.WebApp;

export function useTelegram(){
  const onClose = () => {
    tg.close();
  }

  const onToggleButton = () =>{
    if(tg.MainButton.isVisible){
      tg.MainButton.hide();
    }else{
      tg.MainButton.show();
    }
  }

  const showMainButton = () => {
       tg.MainButton.show();
  }
  const hideMainButton = () => {
       tg.MainButton.hide();
  }

  return{
    onClose,
    onToggleButton,
    showMainButton,
    hideMainButton,
    tg,
    user:tg.initDataUnsafe?.user,
    queryId:tg.initDataUnsafe?.query_id
  }
}