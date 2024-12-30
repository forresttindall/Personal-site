import React from 'react';
import ArticleTemplate from '../components/ArticleTemplate';
import { articles } from '../data/articleContent';

const SolutionParadox = () => {
  const articleContent = articles.find(
    article => article.id === 'solution-paradox'
  );

  return <ArticleTemplate article={articleContent} />;
};

export default SolutionParadox; 