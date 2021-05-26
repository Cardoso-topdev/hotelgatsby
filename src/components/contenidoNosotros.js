import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Image from 'gatsby-image';
import {css} from '@emotion/react';

const ContenidoNosotros = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slog: { eq: "Nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
                ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];
  console.log(imagen);

  return (
    <>
      <h2
      css={css`
      text-align: center;
      font-size: 4rem;
      margin-top: 4rem;`}
      >{titulo}</h2>
      <div>
      <p>{contenido}</p>
      <Image fluid={imagen.fluid} />
      </div>
    </>
  )
}

export default ContenidoNosotros
