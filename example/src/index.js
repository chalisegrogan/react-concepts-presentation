import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../src';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';

import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  logo: require('../assets/logo.png'),
  reactLogo: require('../assets/reactlogo.svg'),
  question: require('../assets/question.png'),
};

preloader(images);

const theme = createTheme({
  primary: '#ff4081'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Top <code style={{textTransform: 'lowercase'}}>n</code> Concepts
          </Heading>
          <Heading size={1} fit caps lineHeight={1}>
            to totally get in react
          </Heading>
          <Image width="20%" src={images.reactLogo} />
          <Text bold caps textColor="tertiary">
            by Chalise Grogan
          </Text>
          <Link href="https://github.com/chalisegrogan/react-concepts-presentation">
            <Text caps textColor="black">
              View on Github
            </Text>
          </Link>
        </Slide>
        <Slide bgColor="tertiary" transition={['slide']}>
          <Heading fit textColor="primary">
            Before we begin...
          </Heading>
        </Slide>
        <Slide
          transition={['slide']}
          bgImage={images.city.replace('/', '')}
          bgDarken={0.75}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            We'll go over:
          </Heading>
          <List size={1} bold fit textColor="primary">
            <Appear>
              <ListItem>Components</ListItem>
            </Appear>
            <Appear>
              <ListItem>Props and internal state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Re-renders</ListItem>
            </Appear>
            <Appear>
              <ListItem>React Classes</ListItem>
            </Appear>
            <Appear>
              <ListItem>The React lifecycle</ListItem>
            </Appear>
            <Appear>
              <ListItem>For next time: Presentational and Higher-order components</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2} caps fit textColor="secondary">
            The concept: Component
          </Heading>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              A React component is a single object
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
              It outputs HTML <i>and</i> the code to control that output
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              Ideally, it has a single responsibility
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2} caps fit textColor="secondary">
            The concept: Props
          </Heading>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              Props are passed into a component
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
              They are the arbitrary inputs that help indicate what should appear on screen
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              They are unidirectional: data flows from parent to child
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
            They should never be mutated directly by the component that receives them
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2} caps fit textColor="secondary">
            The concept: Internal state
          </Heading>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              Good for handling user input
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
              Components can manage their own internal state
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              State should not be mutated directly, use <code>this.setState</code>
            </Heading>
          </Appear>
          <Appear>
            <Text textColor="secondary"><code>this.setState</code> is asynchronous, so think of it like a "request to update", not an immediate change</Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">There are ways to handle the potential problems that arise from this</Text>
          </Appear>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2} caps fit textColor="secondary">
            The concept: React Classes
          </Heading>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              React has a <code>Component</code> class
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
              To use it, extend from <code>React.Component</code>
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              Now you have access to the lifecycle methods!
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2} caps fit textColor="secondary">
            The concept: Lifecycle Methods
          </Heading>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              All components have a lifecycle
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
              They are born, they respond to stimulai, then they die
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              Using these methods allow you to hook into different stages of a component's life
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2} caps fit textColor="secondary">
            The concept: Renders
          </Heading>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              When props or state change, React kicks off reconciliation
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
             It compares the new element with the previously rendered one
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              If they are not equal, React will update the DOM
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="secondary">
              How does it know props or state changed?<br />
              JS Equality
            </Heading>
          </Appear>
          <Appear>
            <Heading fit size={6} textColor="tertiary">
              How does it accomplish comparisons?<br /><code>shouldComponentUpdate</code>
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" transition={['slide']}>
          <Heading fit caps textColor="primary">
            Questions?
          </Heading>
          <Image width="50%" src={images.question} />
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love for the Front-end Symposium at
          </Heading>
          <Link href="http://www.23andme.com">
            <Image width="100%" src={images.logo} />
          </Link>
          <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
            Additional resources:
          </Heading>
          <List size={1} bold fit textColor="primary">
            <ListItem>
              <Link href="https://medium.freecodecamp.org/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3">
                <Text textColor="primary">
                  React's 5 Fingers of Death
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">
                <Text textColor="primary">
                  React Dev Tools (chrome)
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://stackblitz.com/edit/github-faemp9?file=src%2Fsamples%2FLegacy.js">
                <Text textColor="primary">
                  Lifecycle Visualizer
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/MalucoMarinero/react-wastage-monitor">
                <Text textColor="primary">
                  <code>react-wastage-monitor</code>
                </Text>
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
