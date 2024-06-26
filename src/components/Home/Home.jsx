import React, { useState, useEffect , useCallback} from 'react';

import spad from '../../scripts/wscrach';
import './Home.css';
import Ocena from '../Ocena/Ocena';
import { useTelegram } from '../../hooks/useTelegram';
import dane from "../../data.json";


function Home(props) {
  const { tg, showMainButton, queryId } = useTelegram();
  const [percent, setPercent] = useState(0);
  const [lampa, setLampa] = useState("aaa");
  const [img, setImg] = useState(dane[0]);
  const [ocenka, setOcenka] = useState(0);

   const changePercent = useCallback((perc) => {
    setPercent( perc);
  },[setPercent])


  
 let kart_height = img.prop * 100 + 'vw';

  useEffect(() => {

    spad(img.img, changePercent);
  }, [img, changePercent]);

  const newKartinka = () => {
    setImg(dane[1]);
  }

  const onSendData = useCallback(() => {
    const data = {
      ocenka: ocenka,
      imageId: img.id,
      queryId:queryId
    }
    setLampa(JSON.stringify(data))
    console.log(data);
    // fetch('https://botshop.maz-manipulator.by/web-data',
    //   {
    //     method: 'POST',
    //      headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   }
    // )
    //   .then((response) => {
    //   setLampa(response)

    // });
   
  }, [ocenka, img, queryId])

   useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
   }, [tg, onSendData])
  
  
  
  const handleChange = useCallback((e) => {
    setOcenka(e.target.value);
    tg.MainButton.setParams({
        text: `Следующая`
      });
    showMainButton();
    console.log("showMainButton");
  },[tg, showMainButton])
  
  return (
    <div>
     
      <button onClick={newKartinka}>nowaja</button>
      home lampa:{lampa} ocenka:{ocenka}
      <div id='demo1' style={{height:kart_height}}></div>
      <Ocena percent={percent} onRate={handleChange} />
      <div>
        <h1>Name family</h1>
        <p>fsdsdgsfd dsfhgfdg fdgfd gfd gdfs gsdfg a sdfgs dfg sfd gdsf gfdg df gdsfg d fsgdfg dfg dsfg sdgdsfg gasdgf sadgsdagsda fsdfsafsadfasd fsad fsad fsda fsafsa Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem error a laboriosam, aut illum officia! Ad, error recusandae? Ducimus voluptatem voluptatibus illo enim sapiente necessitatibus ut dolores, doloremque recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis delectus ratione pariatur distinctio laudantium iure numquam. Hic suscipit accusantium alias temporibus non, perferendis velit placeat ut eaque modi sapiente ab impedit officia quam natus obcaecati consequuntur. Aut ab, nostrum itaque dolorum eveniet nobis quibusdam. Quia officia molestiae commodi quaerat voluptatum autem et! Ea cum beatae deleniti molestias saepe vitae aliquid dolores amet quasi hic, adipisci dolorum numquam sunt voluptate assumenda, nisi officiis. Iusto facere sit quas vel architecto, ut, ullam voluptatum impedit vero, illo odio. Quae assumenda odio dolorum ab debitis, accusantium, vel accusamus ad, repudiandae deserunt exercitationem magnam dolorem aspernatur. Corrupti laboriosam recusandae maxime repudiandae nemo dolorem facere ratione obcaecati tempore, repellendus laudantium? Minima tempora iste reiciendis facere possimus mollitia nostrum, veniam ipsam fugit pariatur, incidunt recusandae dolores ex quod laborum provident officia exercitationem hic libero ratione commodi, adipisci voluptates. Ut fugiat neque dignissimos ullam. Dolorem esse voluptate ea magni cum reprehenderit, distinctio voluptatem illo doloremque, pariatur nesciunt, optio repellendus excepturi ipsa tempora similique vel possimus provident soluta sint vitae incidunt architecto ratione non. Quaerat corrupti, dolor reiciendis blanditiis expedita molestiae obcaecati. Quidem vitae voluptatibus officiis accusantium nesciunt consequatur ratione odit, ab iusto. Culpa laborum atque corrupti quis!</p>
      </div>
    
    </div>
  );
}

export default Home;