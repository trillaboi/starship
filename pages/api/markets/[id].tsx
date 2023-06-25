import { NextApiRequest, NextApiResponse } from 'next';

interface Market {
  id: number;
  title: string;
  description: string;
}

const marketData: Market[] = [
    {
    id: 1,
    title: "Will the price of Bitcoin reach $100,000 by the end of the year?",
    description: "Predict whether the price of Bitcoin will reach $100,000 by December 31st.",
    },
    {
    id: 2,
    title: "Will the US Federal Reserve raise interest rates in the next meeting?",
    description: "Predict whether the US Federal Reserve will announce an interest rate increase in the upcoming meeting.",
    },
    {
    id: 3,
    title: "Will SpaceX successfully land humans on Mars by 2030?",
    description: "Predict whether SpaceX will achieve a successful manned mission to Mars by the year 2030.",
    },
    {
    id: 4,
    title: "Will the S&P 500 index close above 4,000 points by the end of the quarter?",
    description: "Predict whether the S&P 500 stock market index will finish the quarter above the 4,000 point level.",
    },
    {
    id: 5,
    title: "Will the European Central Bank introduce negative interest rates?",
    description: "Predict whether the European Central Bank will implement negative interest rates in the near future.",
    },
    {
    id: 6,
    title: "Will Amazon acquire another major retail company within the next six months?",
    description: "Predict whether Amazon will make an acquisition of a major retail company in the next six months.",
    },
    {
    id: 7,
    title: "Will the price of gold exceed $2,000 per ounce by the end of the year?",
    description: "Predict whether the price of gold will surpass $2,000 per ounce by December 31st.",
    },
    {
    id: 8,
    title: "Will a major cryptocurrency experience a 50% price crash in the next month?",
    description: "Predict whether a major cryptocurrency will undergo a 50% price crash within the next 30 days.",
    },
    {
    id: 9,
    title: "Will the United Kingdom officially leave the European Union by the given deadline?",
    description: "Predict whether the United Kingdom will complete its departure from the European Union by the specified deadline.",
    },
    {
    id: 10,
    title: "Will a new COVID-19 variant lead to a worldwide lockdown in the coming months?",
    description: "Predict whether the emergence of a new COVID-19 variant will result in a global lockdown in the near future.",
    },
    {
    id: 11,
    title: "Will the price of oil reach $100 per barrel within the next year?",
    description: "Predict whether the price of oil will surge to $100 per barrel within the next 12 months.",
    },
    {
    id: 12,
    title: "Will a new technology breakthrough lead to commercial fusion power within the next decade?",
    description: "Predict whether a new technological breakthrough will enable commercial fusion power within the next ten years.",
    },
    {
    id: 13,
    title: "Will the US stock market experience a major correction in the near future?",
    description: "Predict whether the US stock market will undergo a significant correction in the coming months.",
    },
    {
    id: 14,
    title: "Will a cryptocurrency become the primary global medium of exchange by 2030?",
    description: "Predict whether a cryptocurrency will become the dominant worldwide medium of exchange by the year 2030.",
    },
    {
    id: 15,
    title: "Will a major social media platform face a massive data breach this year?",
    description: "Predict whether a leading social media platform will encounter a substantial data breach during the current year.",
    },
    {
    id: 16,
    title: "Will the US Congress pass significant climate change legislation in the next session?",
    description: "Predict whether the US Congress will approve notable climate change legislation during the upcoming session.",
    },
    {
    id: 17,
    title: "Will a new drug be approved for the treatment of Alzheimer's disease within the next five years?",
    description: "Predict whether a new drug will receive approval for the treatment of Alzheimer's disease within the next five years.",
    },
    {
    id: 18,
    title: "Will the Eurozone experience a recession in the next quarter?",
    description: "Predict whether the Eurozone will enter into a recession within the next quarter.",
    },
    {
    id: 19,
    title: "Will a major celebrity announce a run for political office in the upcoming election cycle?",
    description: "Predict whether a prominent celebrity will declare their candidacy for political office in the forthcoming election cycle.",
    },
    {
    id: 20,
    title: "Who will win the World Cup in 2022?",
    description: "Predict the winner of the FIFA World Cup 2022.",
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  const marketId = parseInt(id as string, 10);
  const market = marketData.find((item) => item.id === marketId);

  if (!market) {
    res.status(404).json({ error: 'Market not found' });
    return;
  }

  res.status(200).json(market);
}