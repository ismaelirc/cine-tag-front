import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import styles from './Inicio.module.css'
import { useEffect, useState } from "react"

function Inicio(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ismaelirc/cine-tag/videos")
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, []);

    return (
        < >
            <Banner imagem="home"></Banner>
            <Titulo>
                <h1>Um lugar para quardar seus videos e filmes</h1>
            </Titulo>
            <section className={styles.container}>
            {
                videos.map((video) => {
                    return <Card id={video.id} titulo={video.titulo} capa={video.capa} key={video.id}></Card>
                })
            }
            </section>
            
        </>
    )
}

export default Inicio