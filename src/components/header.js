import React from "react"
import { css } from "@emotion/react"
import Navbar from "./nav"

const Header = () => {
  return (
    <header
      css={css`
        background-color: #222;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      >
        <h1
        css={css`
        color: #fff;
        text-align: center;
        `}>Hotel Gatsby</h1>

        <Navbar />
      </div>
    </header>
  )
}

export default Header
