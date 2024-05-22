import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NaoEncontrada from 'pages/NaoEncontrada';

function Player(){
    const [video, setVideo] = useState([]);
    const parametros = useParams();

    useEffect( () => {
        fetch(`https://my-json-server.typicode.com/ismaelirc/cine-tag/videos?id=${parametros.id}`)
        .then( resposta => resposta.json())
        .then( dados => {
            setVideo(...dados);
        })
    },[])
    
    if(!video){
        <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="560"
                    height="315"
                    src={video.link}
                    title={video.title} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;