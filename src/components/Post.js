import React from 'react';
import styled, { css } from 'styled-components';

import ExternalLink from './ExternalLink';

const Wrapper = styled.article`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 70px auto;
  padding: 10px;
  background: ${props => props.theme.postBgColor};
  border: solid 1px ${props => props.theme.postBorderColor};
  border-radius: 5px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: min-content auto;
  grid-auto-rows: min-content;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const metadataStyle = css`
  font-size: 12px;

  a {
    color: ${props => props.theme.postMetaColor};
    &:hover {
      color: ${props => props.theme.postMetaHoverColor};
    }
  }
`;

const Sub = styled.span`
  ${metadataStyle}
  font-weight: bold;
`;

const User = styled.span`
  ${metadataStyle}
`;

const Title = styled.h2`
  font-size: 16px;
  grid-column: 1/3;

  a {
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: ${props => props.theme.linkVisitedColor};
    }
  }
`;

const Post = ({ data }) => {
  return (
    <Wrapper>
      <Img
        src={data.thumbnail}
        width={data.thumbnail_width}
        height={data.thumbnail_height}
        alt="Post thumbnail"
        onError={e => (e.target.style.visibility = 'hidden')}
      />
      <Content>
        <Sub>
          <ExternalLink
            href={`${process.env.REACT_APP_REDDIT_URL}/${data.subreddit_name_prefixed}`}
          >
            {data.subreddit_name_prefixed}
          </ExternalLink>
        </Sub>
        <User>
          <ExternalLink
            href={`${process.env.REACT_APP_REDDIT_URL}/u/${data.author}`}
          >
            {data.author}
          </ExternalLink>
        </User>
        <Title>
          <ExternalLink href={data.url}>{data.title}</ExternalLink>
        </Title>
      </Content>
    </Wrapper>
  );
};

export default Post;
