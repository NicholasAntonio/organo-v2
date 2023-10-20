import './Banner.css'
import React from 'react'


interface BannerProps{
    enderecoImagem: string
    textoAlternativo?: string
}

// analogamente abaixo, poderia ser usado  BannerProps props e fazer props.enderecoImagem , props.textoAlternativo

const Banner = ({enderecoImagem, textoAlternativo }: BannerProps) => {
    return (<header className="cabecalho">
        {/* <img src='/imagens/banner.png' alt='Logo do Organo'/> */}
        <img src={enderecoImagem} alt={textoAlternativo}/>
    </header>)
}

export default Banner