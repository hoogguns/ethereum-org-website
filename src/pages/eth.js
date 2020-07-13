import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Card from "../components/Card"
import EthVideo from "../components/EthVideo"
import Callout from "../components/Callout"
import Button from "../components/Button"
import CalloutBanner from "../components/CalloutBanner"
import Link from "../components/Link"
import CardList from "../components/CardList"
import HorizontalCard from "../components/HorizontalCard"
import { Page } from "../components/SharedStyledComponents"

const Content = styled.div`
  width: 100%;
  padding: 1rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 1rem 2rem;
  }
`

const Slogan = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 140%;
`

const Title = styled.h1`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSidebar};
`

const Caption = styled.p`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSidebar};
`
const CaptionLink = styled.a`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
`
const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text300};
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
`

const StyledVideo = styled(EthVideo)`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  flex: 1 1 50%;
  margin-top: 8rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 0;
  }
`

// TODO move to shared styles
const GrayContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background: ${(props) => props.theme.colors.grayBackground};
  box-shadow: inset 0px 1px 0px
    ${(props) => props.theme.colors.tableItemBoxShadow};
`

const Intro = styled.div`
  max-width: 608px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
`

const ActionCardContainer = styled(CardContainer)`
  justify-content: center;
  margin-bottom: 3rem;
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  max-width: 420px;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const TokenCard = styled(StyledCard)`
  flex: 1 1 25%;
  max-width: 320px;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 25%;
    max-width: 100%;
    min-width: 240px;
  }
`

const TokenCardVert = styled(HorizontalCard)`
  min-width: 100%;
  margin: 0rem;
  border-radius: 0px;
`

const Banner = styled(Img)`
  height: fit-content;
  width: 100%;
`

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 4rem;
`

const BannerContent = styled.div`
  position: absolute;
  padding: 0.5rem;
  top: 0%;
  left: 29%;
  width: 40%;
  text-align: center;
  justify-content: center;
`

const BannerMessage = styled.h2`
  font-size: 48px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 32px;
    top: 35%;
  }
`

const BannerCopy = styled.p`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 32px;
    top: 35%;
  }
`

const TwoColumnContent = styled(Content)`
  display: flex;
  margin-top: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
  }
`

const Column = styled.div`
  flex: 0 0 50%;
  max-width: 75%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 100%;
  }
  margin-right: 1rem;
`

const CardColumn = styled.div`
  flex: 0 1 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

const SingleCard = styled(StyledCard)`
  margin: 0;
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 2rem;
  }
  a {
    text-decoration: underline;
  }
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
`

const EthPrice = styled.div`
  background: linear-gradient(
    180deg,
    rgba(207, 236, 224, 0.4) 0%,
    rgba(207, 236, 224, 0) 100%
  );
  border-radius: 2px;
  padding: 1.5rem;
  margin-top: 3rem;
  border: 1px solid ${(props) => props.theme.colors.lightBorder};

  display: flex;
  max-width: 424px;
`

const EthPriceValue = styled.p`
  font-size: 40px;
`

const EthPriceCurrent = styled.div`
  flex: 1 0 50%;
`

const EthPriceSwitcher = styled.div`
  flex: 1 0 33%;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-content: space-between;
`

const PriceTrendUp = styled.p`
  font-color: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    #109e62;
  font-size: 24px;
  line-height: 140%;
`

const tests = [
  {
    link: "#",
    title: "Money",
    description:
      "If you have ETH you can send it cheaply to anyone with a wallet, anywhere in the world. You can also use it to buy goods, services and other crypto tokens.",
  },
  {
    link: "#",
    title: "Money",
    description:
      "If you have ETH you can send it cheaply to anyone with a wallet, anywhere in the world. You can also use it to buy goods, services and other crypto tokens.",
  },
]

// TODO fill out copy
const cards = [
  {
    emoji: ":money_bag:",
    title: "Money",
    description:
      "If you have ETH you can send it cheaply to anyone with a wallet, anywhere in the world. You can also use it to buy goods, services and other crypto tokens.",
  },
  {
    emoji: ":gem_stone:",
    title: "Collateral",
    description:
      "You can use your ETH as collateral or a deposit for borrowing other crypto tokens. This means you can use other tokens without having to spend or trade your ETH.",
  },
  {
    emoji: ":fuel_pump:",
    title: "Fuel",
    description:
      "Transactions require a fee paid in ETH. This powers your transaction and helps keep the network secure. Some applications pay your fee for you.",
  },
]

const tokens = [
  {
    emoji: ":scales:",
    title: "Stablecoins",
    description:
      "Tokens with value that mirror traditional currency like dollars. This makes them less volatile and better for earning/spending. Still accessible to anyone and censorship-resistant like ETH.",
  },
  {
    emoji: ":ballot_box_with_ballot:",
    title: "Governance tokens",
    description:
      "These represent voting power in decentralized organisations. Invest to have a say in strategic votes. If strategy decisions go well, the tokens should increase in value.",
  },
  {
    emoji: ":pile_of_poo:",
    title: "Sh*t coins",
    description:
      "Anyone can build on Ethereum so anyone can make their own tokens. Please make sure you do your research before investing in any tokens – there are some that are worthless. ",
  },
  {
    emoji: ":frame_with_picture:",
    title: "Non-fungible tokens (NFTs)",
    description:
      "Tokens that you can’t send or receive in decimal parts. Usually, they represent a unique digital asset, like a piece of artwork. Or a physical object that has been tokenised and added to Ethereum to prove ownership. ",
  },
]

const benefits = [
  {
    emoji: ":wind:",
    title: "Fast, cheap global payments",
    description:
      "The Ethereum blockchain has no borders. That means you can quickly send ETH to folks abroad with just a small transaction fee. Transaction fees are higher when the network is busy.",
  },
  {
    emoji: ":shield:",
    title: "Censorship resistant",
    description:
      "ETH is not created or controlled by institutions or governments. While the Ethereum blockchain is still available, you can’t stop or censor ETH.",
  },
  {
    emoji: ":fuel_pump:",
    title: "It's really yours",
    description:
      "Unlike traditional banking, no entity holds your ETH on your behalf. With Ethereum you are your own bank and your wallet is your proof of ownership . You must protect your wallet – without it, you’ll lose access to your funds forever. ",
  },
  {
    emoji: ":money_bag:",
    title: "Open to anyone",
    description:
      "Anyone with a data connection and a wallet can accept Ether. No one needs access to a bank account to accept payments. ",
  },
  {
    emoji: ":gem_stone:",
    title: "Bedrock of a new financial system",
    description:
      "Ethereum is home to a whole new financial system known as Defi (decentralized finance). Defi services allow you to lend, borrow and earn interest on your crypto.",
  },
  {
    emoji: ":fuel_pump:",
    title: "It's native to Ethereum",
    description:
      "Using your ETH in Ethereum applications is simple because payments are built into the infrastucture. Things like paypal and other third-party payment systems aren’t necessary.",
  },
]

const cardListContent = [
  {
    link: "https://docs.ethhub.io/using-ethereum/how-to-buy-ether/",
    title: "How to Buy Ether",
    description: "EthHub",
    caption: "Updated often",
  },
  {
    link: "https://docs.ethhub.io/using-ethereum/how-to-buy-ether/",
    title: "How to Buy Ether",
    description: "EthHub",
    caption: "Updated often",
  },
  {
    link: "https://docs.ethhub.io/using-ethereum/how-to-buy-ether/",
    title: "How to Buy Ether",
    description: "EthHub",
    caption: "Updated often",
  },
]

const WhatIsEthereumPage = (props) => {
  const data = props.data
  return (
    <Page>
      <Content>
        <HeroContainer>
          <Header>
            <Title>What is Eth?</Title>
            <Slogan>The fuel for our digital future</Slogan>
            <Subtitle>
              ETH is the currency of Ethereum – it powers the network.
            </Subtitle>
            <SubtitleTwo>
              You can use it, send it, receieve it, earn it and so much more...
            </SubtitleTwo>
            <EthPrice>
              <EthPriceCurrent>
                <Caption>Current price</Caption>
                <EthPriceValue>$200.89</EthPriceValue>
                <Button to="#">Get ETH</Button>
              </EthPriceCurrent>
              <EthPriceSwitcher>
                <CaptionLink href="#">1 day</CaptionLink>
                <CaptionLink href="#">1 week</CaptionLink>
                <CaptionLink href="#">1 month</CaptionLink>
                <PriceTrendUp>1.67%</PriceTrendUp>
              </EthPriceSwitcher>
            </EthPrice>
          </Header>
          <StyledVideo />
        </HeroContainer>
      </Content>
      <GrayContainer>
        <Intro>
          <h2>You can use ETH as:</h2>
        </Intro>
        <CardContainer>
          {cards.map((card, idx) => {
            return (
              <StyledCard
                key={idx}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
              />
            )
          })}
        </CardContainer>
      </GrayContainer>
      <TwoColumnContent>
        <Column>
          <h2>Ether (ETH)</h2>
          <p>ETH is the native currency of the Ethereum blockchain</p>
          <p>
            This means when you transact on Ethereum, like sending ETH to a
            friend, you pay your transaction fees using ETH.
          </p>
          <p>
            For Ethereum to remain decentralized, secure and usable, someone
            needs to check transactions. The way to incentivise folks to do this
            is transaction fees. This is a process known as mining. It's quite
            technical, but you can think of it like when you pay a fee to use a
            credit card or to book theatre tickets. Your fees help cover
            operational costs and are usually cheaper than traditional service
            fees.
          </p>
          <p>Of course, ETH has uses beyond transaction fees...</p>
        </Column>
        <Column>
          <h2>The community on ETH</h2>
          <CardList content={cardListContent} />
        </Column>
      </TwoColumnContent>
      <TwoColumnContent>
        <Column>
          <h2>What makes ETH powerful?</h2>
        </Column>
      </TwoColumnContent>
      <Content>
        <CardContainer>
          {benefits.map((benefits, idx) => {
            return (
              <StyledCard
                key={idx}
                emoji={benefits.emoji}
                title={benefits.title}
                description={benefits.description}
              />
            )
          })}
        </CardContainer>
      </Content>
      <CalloutBanner
        title="Where to get ETH"
        description="You can get ETH from an exchange or a wallet that lets you buy ETH directly. Different regions and countries have different policies, so we’ve put together a list to help you find the best places to buy ETH based on where you are."
        image={data.dapps.childImageSharp.fixed}
      >
        <div>
          <Button to="#">Get ETH</Button>
        </div>
      </CalloutBanner>

      <BannerContainer>
        <Banner fluid={data.banner.childImageSharp.fluid} />
        <BannerContent>
          <BannerMessage>Where to get ETH</BannerMessage>
          <BannerCopy>
            You can get ETH from an exchange or a wallet that lets you buy ETH
            directly. We’ve put together a list to help you find the best places
            to buy ETH based on where you are.
          </BannerCopy>
          <Button to="#">Get ETH</Button>
        </BannerContent>
      </BannerContainer>

      <h2>ETH is not the only crypto on Ethereum</h2>
      <TwoColumnContent>
        <Column>
          <h3>Tokenise all the things</h3>
          <p>
            Anyone can create tokens and trade them on Ethereum. People have
            tokenised traditional currencies, their real estate, their art and
            even themselves!{" "}
          </p>
          <p>
            So Ethereum is home to thousands of tokens – some more useful and
            valuable than others. Developers are constantly building new tokens
            that unlock new possibilities and open new markets.
          </p>
          <h3>ETH is irreplaceable in Ethereum </h3>
          <p>
            With all these tokens, what about ETH? Well, no token can replace
            ETH because it’s the native token of Ethereum – it’s how you pay
            your transaction fees. It’s also tied to the security of the
            network. Ether is designed to make network hacks unprofitable. A
            hack would decimate the price of ETH and make it nearly impossible
            to sell. Plus, preparing the computing power you’d need would be an
            investment in itself. Thanks to ETH, hacking Ethereum would cost you
            more than you’d gain.
          </p>
          <br />
          <p>
            {" "}
            If you'd like to learn more about tokens, our friends at EthHub have
            written a couple of great overviews:{" "}
          </p>
          <Link to="https://docs.ethhub.io/guides/a-straightforward-guide-erc20-tokens/">
            Ethereum tokens
          </Link>
          <br />
          <Link to="https://docs.ethhub.io/built-on-ethereum/erc-token-standards/erc721/#summary">
            Non-fungible tokens
          </Link>
        </Column>
        <Column>
          <h3>Popular types of token</h3>

          {tokens.map((token, idx) => {
            return (
              <TokenCardVert
                key={idx}
                emoji={token.emoji}
                title={token.title}
                description={token.description}
              />
            )
          })}
        </Column>
      </TwoColumnContent>
    </Page>
  )
}

export default WhatIsEthereumPage

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "home/eth_tokens.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dapps: file(relativePath: { eq: "home/doge_computer.png" }) {
      childImageSharp {
        fixed(width: 372) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
