import Button from "./components/button"
import Card from "./components/card"
import Hero from "./components/hero"
import Logo from "./components/logo"
import Navbar from "./components/nav"
import heroBg from "./assets/cryptocurrencies.jpg"
import Footer from "./components/footer"
import Callout from "./components/callout"
import piggyBank from "./assets/piggybank.jpg"
import bitcoin from "./assets/bitcoin.svg"
import ethereum from "./assets/ethereum.svg"
import separatorPath from "./assets/path.svg"
import CurrencyCard from "./components/currency-card"
import useCoinInfo from "./hooks/use-coin-info"

function App() {
  const btcInfo = useCoinInfo("BTC");
  const ethInfo = useCoinInfo("ETH");
  const solInfo = useCoinInfo("SOL");

  return (
    <>
      <Navbar>
        <Logo />
        <ul>
          <li><a className="link" href="#prices">Prices</a></li>
          <li><a className="link" href="#learn">Learn</a></li>
          <li><a className="link" href="#wallet">Wallet</a></li>
          <li><a className="link" href="#buy-and-sell">Buy & Sell</a></li>
          <li><a className="link" href="#about">About</a></li>
          <li><a className="link" href="#faq">FAQ</a></li>
        </ul>
        <a href="/signup" className="font-bold color-green">sign up</a>
      </Navbar>
      <Hero backgroundImg={heroBg}>
        <p className="tagline">Crypto for future</p>
        <h1 className="font-bold color-white">Buy, Sell and Trade Crypto</h1>
        <p>Buy $500 worth of crypto and get a bonus of $50! Build a diversified portofolio with Bitcoin, Ethereum, and other popular coins</p>
        <div className="mt-2">
          <Button>Get Started</Button>
        </div>
      </Hero>
      <div className="p-5">
        <section id="wallet" className="block block--dark">
          <p className="tagline">Wallet</p>
          <h2>Connect Your Wallet</h2>
          <CurrencyCard
            name="Bitcoin"
            variant="green"
            symbol={btcInfo.symbol}
            currPrice={btcInfo.currPrice}
            priceChangePercent={btcInfo.priceChangePercent}
            icon={bitcoin}
            graphData={btcInfo.graphData} />
          <CurrencyCard
            name="Ethereum"
            variant="blue"
            symbol={ethInfo.symbol}
            currPrice={ethInfo.currPrice}
            priceChangePercent={ethInfo.priceChangePercent}
            icon={ethereum}
            graphData={ethInfo.graphData} />
          <CurrencyCard
            name="Solana"
            variant="purple"
            symbol={solInfo.symbol}
            currPrice={solInfo.currPrice}
            priceChangePercent={solInfo.priceChangePercent}
            icon={ethereum}
            graphData={solInfo.graphData} />
          <ol className="grid grid-2x2 gap-1">
            <li>
              <span className="font-bold color-white">Buy and Sel Crypto in Minutes</span>
              <p>Instantly buy Bitcoin with credit card, debit card, or by linking your bank</p>
            </li>
            <li>
              <span className="font-bold color-white">Buy and Sel Crypto in Minutes</span>
              <p>Instantly buy Bitcoin with credit card, debit card, or by linking your bank</p>
            </li>
            <li>
              <span className="font-bold color-white">Buy and Sel Crypto in Minutes</span>
              <p>Instantly buy Bitcoin with credit card, debit card, or by linking your bank</p>
            </li>
            <li>
              <span className="font-bold color-white">Buy and Sel Crypto in Minutes</span>
              <p>Instantly buy Bitcoin with credit card, debit card, or by linking your bank</p>
            </li>
          </ol>
          <Button outline>Connect Wallet</Button>
        </section>
        <section id="about" className="p-5 flex flex--center flex--1">
          <div>
            <p className="tagline">About Us</p>
            <h2 className="font-bold color-white">About Crypma</h2>
            <p>We are building the cryptoeconomy - a more fair, accessible, efficient, and transparent financial system enabled by crypto</p>
          </div>
          <div className="grid grid-2x2 gap-1 text-center">
            <div>
              <p className="font-bold font-lg color-green m-0">25M+</p>
              <p>USERS WORLDWIDE</p>
            </div>
            <div>
              <p className="font-bold font-lg color-green m-0">140</p>
              <p>COUNTRIES SUPPORTED</p>
            </div>
            <div>
              <p className="font-bold font-lg color-green m-0">56M+</p>
              <p>CRYPTO TRANSACTIONS</p>
            </div>
            <div>
              <p className="font-bold font-lg color-green m-0">$180B</p>
              <p>ASSETS ON PLATFORM</p>
            </div>
          </div>
        </section>
        <section className="p-5 text-center">
          <p className="tagline">Process</p>
          <h2>How It Works</h2>
          <div className="step-list">
            <div>
              <img src={bitcoin} />
              <p className="step-list__counter">Step 1</p>
              <h3>Download</h3>
              <p>Available to download on IOS and Android</p>
            </div>
            <img className="step-list__separator" src={separatorPath} />
            <div>
              <img src={bitcoin} />
              <p className="step-list__counter">Step 2</p>
              <h3>Connect Wallet</h3>
              <p>Available to download on IOS and Android</p>
            </div>
            <img className="step-list__separator" src={separatorPath} />
            <div>
              <img src={bitcoin} />
              <p className="step-list__counter">Step 3</p>
              <h3>Start Trading</h3>
              <p>Available to download on IOS and Android</p>
            </div>
            <img className="step-list__separator" src={separatorPath} />
            <div>
              <img src={bitcoin} />
              <p className="step-list__counter">Step 4</p>
              <h3>Earn Money</h3>
              <p>Available to download on IOS and Android</p>
            </div>
          </div>
        </section>
        <section className="p-5">
          <div className="flex justify-between align-center">
            <div>
              <p className="tagline">About Crypto</p>
              <h2>Learn Crypto</h2>
            </div>
            <Button outline>View more</Button>
          </div>
          <div className="articles-grid">
            <article className="article">
              <div>
                <h3>How to buy and sell cryptocurrency</h3>
                <p>Buying and selling cryptocurency on Crypma is as easy as following a few easy steps</p>
              </div>
              <div className="img-container">
                <img src={heroBg} className="article__img" />
              </div>
            </article>
            <article className="article">
              <div>
                <h3>How to buy and sell cryptocurrency</h3>
                <p>Buying and selling cryptocurency on Crypma is as easy as following a few easy steps</p>
              </div>
              <img src={heroBg} className="article__img" />
            </article>
            <article className="article">
              <div>
                <h3>How to buy and sell cryptocurrency</h3>
                <p>Buying and selling cryptocurency on Crypma is as easy as following a few easy steps</p>
              </div>
              <img src={heroBg} className="article__img" />
            </article>
            <article className="article">
              <div>
                <h3>How to buy and sell cryptocurrency</h3>
                <p>Buying and selling cryptocurency on Crypma is as easy as following a few easy steps</p>
              </div>
              <img src={heroBg} className="article__img" />
            </article>
          </div>
        </section>
        <section className="p-5 text-center">
          <p className="tagline">Our Speciality</p>
          <h2>WHY Choose Us</h2>
          <div className="flex flex--center flex--1">
            <Card variant="green">
              <p className="font-bold color-white">Security</p>
              <p>Your funds are protected by industry-leading security protocols</p>
            </Card>
            <Card variant="purple">
              <p className="font-bold color-white">Protection</p>
              <p>Your funds are protected by industry-leading security protocols</p>
            </Card>
            <Card variant="blue">
              <p className="font-bold color-white">Trust</p>
              <p>Your funds are protected by industry-leading security protocols</p>
            </Card>
          </div>
        </section>
        <section className="p-5 text-center">
          <p className="tagline">Portofolio</p>
          <h2>Create Portofolio</h2>
          <ol className="grid grid-2x2 gap-1">
            <Card variant="green">
              <li>
                <span className="font-bold color-white">Manage your portofolio</span>
                <p>Buy and sell popular digital currencies, keep track of them in one place</p>
              </li>
            </Card>
            <Card variant="blue">
              <li>
                <span className="font-bold color-white">Manage your portofolio</span>
                <p>Buy and sell popular digital currencies, keep track of them in one place</p>
              </li>
            </Card>
            <Card variant="purple">
              <li>
                <span className="font-bold color-white">Manage your portofolio</span>
                <p>Buy and sell popular digital currencies, keep track of them in one place</p>
              </li>
            </Card>
            <Card variant="green">
              <li>
                <span className="font-bold color-white">Manage your portofolio</span>
                <p>Buy and sell popular digital currencies, keep track of them in one place</p>
              </li>
            </Card>
          </ol>
        </section>
        <section className="p-5 flex flex--1 gap-5">
          <div className="flex flex-center">
            <div>
              <p className="tagline">Earn</p>
              <h2>Earn Up to $32</h2>
              <p>Discover how specific cryptocurrencies work - and get a bit of each crypto to try for yourself</p>
            </div>
          </div>
          <ul className="coin-list">
            <li>
              <div className="flex flex--center gap-1">
                <img src={bitcoin} className="coin-list__icon" />
                <p className="coin-list__coin-name">
                  Orchid
                  <span>OXT</span>
                </p>
              </div>
              <p className="color-green">Earn $4 OXT</p>
            </li>
            <li>
              <div className="flex flex--center gap-1">
                <img src={bitcoin} className="coin-list__icon" />
                <p className="coin-list__coin-name">
                  Marker
                  <span>MKR</span>
                </p>
              </div>
              <p className="color-green">Earn $4 MKR</p>
            </li>
            <li>
              <div className="flex flex--center gap-1">
                <img src={bitcoin} className="coin-list__icon" />
                <p className="coin-list__coin-name">
                  Palkadot
                  <span>DOT</span>
                </p>
              </div>
              <p className="color-green">Earn $3 DOT</p>
            </li>
            <li>
              <div className="flex flex--center gap-1">
                <img src={bitcoin} className="coin-list__icon" />
                <p className="coin-list__coin-name">
                  Stellar Lumens
                  <span>XLM</span>
                </p>
              </div>
              <p className="color-green">Earn $2 XLM</p>
            </li>
          </ul>
        </section>
        <Callout backgroundImg={piggyBank}>
          <h2 className="m-0">Secure an Easy Way to Trade Online</h2>
          <p>Sign up today to receive your free digital wallet. You can immediately start buying or selling Bitcoin, hassle-free.</p>
          <div className="mt-2">
            <Button>Get Started</Button>
          </div>
        </Callout>
      </div>
      <Footer />
    </>
  )
}

export default App
