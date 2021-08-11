import React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Section from 'gatsby-theme-mate/src/components/Section';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import styled from 'styled-components'

const NotFoundPage = () => (
  <Layout>
    <Section.Container Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="text" fontSize={['8rem', '12rem', '14rem']} as="h1">
          404
        </Heading>
        <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']} as="h2">
          There isn&apos;t anything here
        </Heading>
        <EllipsisHeading>
          Go back to homepage.
        </EllipsisHeading>
      </Box>
    </Section.Container>
  </Layout>
);

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="secondary"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />
  </>
);

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default NotFoundPage;
