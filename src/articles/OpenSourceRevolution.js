import React from 'react';
import ArticleTemplate from '../components/ArticleTemplate';
import { articles } from '../data/articleContent';

const OpenSourceRevolution = () => {
  const articleContent = articles.find(
    article => article.id === 'open-source-revolution'
  );

  return <ArticleTemplate article={articleContent} />;
};

export default OpenSourceRevolution; 