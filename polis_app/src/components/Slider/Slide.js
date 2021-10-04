/** @jsxRuntime classic /
/* @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
import React, { memo } from 'react'


const Slide = ({ content, width, title }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    >
      <h2 >
        {title}
      </h2>
    </div>
  )
}

export default memo(Slide)