import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/wave1.png"
        alt="waveImg"
        style={{ top: "0px" }}
      />
      <Wave
        src="/images/waves/hero-wave2.svg"
        alt="waveImg"
        style={{ top: "350px" }}
      />
      <Wave
        src="/images/waves/hero-wave3.svg"
        alt="waveImg"
        style={{ top: "550px" }}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;
  @media (min-width: 1440px) {
    width: 100%;
  }
`
const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 800px;
`
