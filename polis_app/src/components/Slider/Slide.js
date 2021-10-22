/** @jsxRuntime classic /
/* @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
import React, { memo } from 'react'



// JUST SEND THE API ALREADY
const Slide = ({ content, width, title, date, summary, url }) => {

  const titlesplit = String(title).split(',').slice(1)
  console.log(titlesplit,"title=")
  return (
    <div
      css={css`
        
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-repeat: no-repeat;
        background-size: cover;
        
        
      `}
    >
      <a href={"https://polisen.se/" + url}>
      <div className="sliderEvent">
        <ol css={css`
        text-align: center;
        margin: auto;
        align-content: center;
      `}>
          <ui>
            <h2 className="SliderTitle">
              {titlesplit}
              <hr ></hr>

            </h2>
          </ui>
          <ui>
            <h2>
              {date}
            </h2>
          </ui>
          <p>{summary}
          </p>
        </ol>
      </div>
      </a>
    </div>

  )
}

export default memo(Slide)