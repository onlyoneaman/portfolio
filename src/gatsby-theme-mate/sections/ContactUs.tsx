import React from 'react';
import { Box, Image, Flex, Heading } from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import markdownRenderer from 'gatsby-theme-mate/src/components/MarkdownRenderer';
import { useContactUsQuery } from '../queries/useContactUsQuery';
import { SECTION } from '../utils/constants';
import styled from 'styled-components';

const ContactUs = () => {
  const { socialLinks } = useContactUsQuery();

  console.log(socialLinks)
  
  const [twitterSocial] = socialLinks.filter(item => item.name === 'Twitter')

  return (
    <Section.Container id={SECTION.contact} Background={Background}>
{/*       <Section.Header name={SECTION.contact} icon="🙋‍♂️" label="person" /> */}
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <EllipsisHeading fontSize={7} pb="3" color="text">
              Get in touch
            </EllipsisHeading>
            <EllipsisHeading fontSize={5}color="text">
              Contact me at <a target='_blank' href={twitterSocial.url}>Twitter
              </a>
            </EllipsisHeading>
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="secondary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

{/*     <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    /> */}
  </>
);

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default ContactUs;
