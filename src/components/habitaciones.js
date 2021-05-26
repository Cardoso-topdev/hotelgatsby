import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  query($slog: String!) {
    allDatoCmsHabitacion(filter: { slog: { eq: $slog } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionTemplate = ({ data }) => {
  console.log(data.allDatoCmsHabitacion.nodes[0]);
  return (<h1>Desde habitaciones</h1>);
}

export default HabitacionTemplate
