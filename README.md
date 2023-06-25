# Decentralized Prediction Market Platform

*This repository contains the code and documentation for a decentralized prediction market platform built on Chain. Users can place bets on various outcomes using Worldcoin as the native currency.*


#### Table of Contents
1. Overview
2. Features
3. Getting Started
    * Prerequisites
    * Installation
4. Usage
    * Account Management
    * Event Creation
    * Betting Mechanisms
    * Outcome Resolution
5. Testing
6. Security
7. Contributing
8. License

#### Overview
    The decentralized prediction market platform allows users to participate in prediction markets using on Chain and Worldcoin. It leverages the features provided by omn Chain for scalability, security, and permissionless transactions. The platform enables users to create events, place bets, and receive rewards based on the outcomes of those events.

#### Features

   *  User registration and account management
   *  Event creation and management
   *  Betting mechanisms for users to place bets on different outcomes
   *  Outcome resolution and reward distribution
   *  Integration of Worldcoin as the native currency

#### Getting Started
##### Prerequisites

* Gnosis Chain: Follow the installation instructions to set up a Gnosis Chain node.
* Worldcoin: Obtain Worldcoin tokens for testing and deployment.

##### Installation
1. Clone this repository: 
[GitHub](https://github.com/JeelTikiwala/starship)
2. Install dependencies using yarn or npm install 
This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit).
3. Run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about this stack, take a look at the following resources:

- [RainbowKit Documentation](https://rainbowkit.com) - Learn how to customize your wallet connection flow.
- [wagmi Documentation](https://wagmi.sh) - Learn how to interact with Ethereum.
- [Next.js Documentation](https://nextjs.org/docs) - Learn how to build a Next.js application.

You can check out [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#### Usage
##### Account Management
Users can create an account, manage their balances, and deposit/withdraw Worldcoin tokens. Account management includes functionalities such as:
* Account creation: Users can create a new account using their Gnosis Chain wallet.
* Balances: Users can check their Worldcoin token balances.
* Deposits: Users can deposit Worldcoin tokens from their external wallets into their prediction market platform account.
* Withdrawals: Users can withdraw Worldcoin tokens from their prediction market platform account to their external wallets.

#### Event Creation
Users can create prediction events with defined outcomes and timeframes. Event creation includes functionalities such as:

* Event creation form: Users can specify the event details, including the event name, description, possible outcomes, and deadline for predictions.
* Event management: Users can view and edit the events they have created.
* Event listing: Users can explore and participate in events created by other users.

#### Betting Mechanisms
Users can place bets on different outcomes within an event. Betting mechanisms include functionalities such as:

* Bet placement: Users can select an outcome and place their bets, specifying the amount of Worldcoin tokens they want to bet.
* Bet monitoring: Users can track their placed bets and their associated Worldcoin token amounts.
* Bet cancellation: Users can cancel their placed bets before the event deadline.
Outcome Resolution
* After the event deadline, the platform will resolve the outcome based on an external source or an oracle. Outcome resolution includes functionalities such as:

#### Outcome determination: 
* The platform will fetch the outcome from the designated external source or oracle.
* Reward distribution: Users who placed bets on the correct outcome will receive rewards in Worldcoin tokens based on their bet amounts.

#### Testing
* The prediction market platform includes a comprehensive testing suite to ensure reliability and accuracy. To run the tests, execute the following command:

#### Security
Security is of utmost importance in a decentralized platform. The prediction market platform implements the following security measures:

* Smart contract security best practices and code audits
* Secure handling of user funds and private data
* Proper access control and permissions management
* Regular security vulnerability assessments and updates
* If you discover any security vulnerabilities or have security-related suggestions, please follow responsible disclosure practices and reach out to our team.

#### Contributing
We welcome contributions to enhance the prediction market platform. To contribute, follow these steps:

* Fork the repository and create a new branch for your contribution.
* Make your changes and ensure they follow the project's coding style and guidelines.
* Test your changes thoroughly and ensure they do not introduce any regressions.
* Submit a pull request, clearly describing the changes you've made and their purpose.

#### License
MIT License.
Please refer to the LICENSE file for more details.

Feel free to customize and expand upon this documentation template based on the specific needs and requirements of your project.