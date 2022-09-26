import * as React from "react";

const workexps = [
  {
    title: "ML Applied Research Intern",
    company: {
      name: "Crossing Minds",
      icon: "https://assets.website-files.com/614a4327e767a4e698f7f94c/6160c32b49a28a20e3bb9ab3_Logo_THE_FINAL_color.svg",
    },
    details: [
      "Implemented a transfer-learning approach for Bayesian Hyperparameter Optimization to speed up the process by utilizing knowledge from historical hyperparameter tuning runs (RGPE).",
      "Formalized methods to extract dataset-level features which can uniquely characterize recommender datasets based on temporal-based information.",
    ],
    startDate: new Date("2022-05-03"),
    endDate: new Date("2022-12-31"),
  },
  {
    title: "Data Scientist",
    company: {
      name: "Agoda",
      icon: "https://media-exp1.licdn.com/dms/image/C510BAQFlzwnDh-1n8g/company-logo_200_200/0/1564993524217?e=1630540800&v=beta&t=QhZLgxs8zmsnggvwqjNJckrgQDzDefHSNeY-xqgE-lY",
    },
    details: [
      "Applied machine learning, deep learning, and statistical methods on user-generated data to improve the hotel ranking system and maximize the company’s number of bookings, revenues, and lifetime values.",
      "Built Hotel embeddings Recommendation using neural networks, Ranking Diversification, Personalized Filter Recommendation, Hotel Image Selection, etc. (Scala & Python)",
      "Explored traffic data to learn user behavior to help in business decisions (SQL + Spark).",
      "Served Tree-based model trained in Python on production with Scala code.",
    ],
    startDate: new Date("2020-03-10"),
    endDate: new Date("2021-08-10"),
  },
  {
    title: "Machine Learning Engineer",
    company: {
      name: "Agoda",
      icon: "https://media-exp1.licdn.com/dms/image/C510BAQFlzwnDh-1n8g/company-logo_200_200/0/1564993524217?e=1630540800&v=beta&t=QhZLgxs8zmsnggvwqjNJckrgQDzDefHSNeY-xqgE-lY",
    },
    details: [
      "Implemented machine learning products from end-to-end, from preprocessing the training data using Spark, serving the trained models on production codebase written in Scala, and deploying the new features with in-house tools.",
      "Built Hotel embeddings Recommendation using neural networks, Ranking Diversification, Personalized Filter Recommendation, Hotel Image Selection, etc. (Scala & Python)",
      "Explored traffic data to learn user behavior to help in business decisions (SQL + Spark).",
      "Served Tree-based model trained in Python on production with Scala code.",
    ],
    startDate: new Date("2018-08-10"),
    endDate: new Date("2020-03-10"),
  },
  {
    title: "NLP Researcher",
    company: {
      name: "Kasikorn Business Technology Group",
      icon: "https://image-dev.wi.th/uploads/images/profiles/KBTG-Kasikorn",
    },
    details: [
      <div>
        Co-authored a publication to create the first benchmark for Thai NLP
        tasks on Thai social media text data, responsible for the “Word
        Correction and Variant” section. [
        <a
          className="custom_anchor"
          href="https://www.researchgate.net/publication/329530389_A_Preliminary_Study_on_Fundamental_Thai_NLP_Tasks_for_User-generated_Web_Content"
          target="_blank"
        >
          pdf
        </a>
        ]
      </div>,
      "Developed a character embedding convolutional neural networks model for capturing a character-level misspelling for Thai social media chat messages of Kasikorn Bank help center with PyTorch.",
      "Applied clustering technique on Word2vec embeddings on the chat messages to recognize spelling variations of words with the same meaning common in the unconventional language in a social media context.",
    ],
    startDate: new Date("2018-05-10"),
    endDate: new Date("2018-08-10"),
  },
  {
    title: "Data Scientist Intern",
    company: {
      name: "DTAC",
      icon: "https://media-exp1.licdn.com/dms/image/C510BAQGx_Me3EkEY6A/company-logo_200_200/0/1519856321144?e=1630540800&v=beta&t=jUKeD5gsUCg5uHTTwuEJ8YyWKsrmaAloQzHSR2ruELw",
    },
    details: [
      "Created a social listening platform for brand tracking and crisis detection for the marketing and call-center team.",
      "Implemented the sentiment classifier on Thai social media text data using Bidirectional long short term memory (Bi-LSTM) on Word2Vec embeddings - f1-score of 0.74, 20% higher than the N-gram baseline.",
      "Coded a website platform for call-center teams at DTAC to label the social media comment’s sentiment to combat the lack of labels problem.",
    ],
    startDate: new Date("2017-06-10"),
    endDate: new Date("2017-08-10"),
  },
];

export default workexps;
