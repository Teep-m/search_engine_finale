import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';


export const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm !== '') {
      if(location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=12`);
      }
    }
      // eslint-disable-next-line
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
              
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
    case '/about':
      return (
        <div>
          <h1 className="text-4xl mb-6">About</h1>

          <h2 className="text-3xl ml-6">はじめに</h2>
          <pre className="text-lg font-sans">{`  
          大変ご多忙の中、閲覧及びお越し頂きありがとうございます。
          また平素よりカーナビやショッピングを始めとする御社の様々なサービスを快適にご利用させていただき誠にありがとうございます。
          
          私は松葉 哲平と申します。
          生まれは大阪府の吹田市という大阪市内より電車で10分の郊外になります。
          拙い文章にはなりますが、これから私についての自己紹介と当ポートフォリオにつきましてお話いたしますのでお付き合いの程、よろしくお願い致します。
          `}</pre>

          <h2 className="text-3xl ml-6">私について</h2>
          <pre className="text-lg font-sans">{`
          私は大阪府出身の25歳です。諸事情により関西大学 経済学部を3年次まで修了したのち自主退学後、自動車業界で整備業務に携わり、
          当時の会社が倒産後、現在の医療機器メーカーにてシステムを含む滅菌装置のメンテナンス業務に携わっております。`}</pre>
          <p className="text-lg ml-11 font-sans">今年の2月に仕事でコロナウィルスに感染し自宅療養中に御社公式ニュースサイト(<a className="text-blue-500" href="https://about.yahoo.co.jp/pr/" rel="noopener noreferrer" target="_blank">ニュース-ヤフー株式会社</a>)にてDS.INSIGHT Personaについての記事を拝見し、大学時代に学んでいた複雑系の面白さを思い出し当日にオンラインでMacBookを購入しプログラミングを学習し始めました。以来周囲の人々に恵まれていることもあり独学でプログラミング学習を行なっております。</p>
          <p className="text-sm text-right">※上記リンクにはnoopener noreferrer属性を追加しております。</p>

          <h1 className="text-3xl ml-6 mb-6">当ブラウザについて</h1>

          <p className="text-lg ml-11 font-sans">使用技術</p>
          <ul className="list-disc ml-14">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>RapidAPI</li>
          </ul>
          <p className="text-lg ml-11 font-sans mt-2">Google Chromeブラウザのコピーとなります。</p>
          <pre className="flex text-lg font-sans -mt-6">{`
          当ブラウザを作成するにあたり経験したことはミスタイピングなどやパッケージのバージョンに合うように調べながらの作業になり、エラーも多発しました。
          素直に申し上げますと現在も修正/調整中であり、画像の検索結果が出ない状態です。誠に申し訳ございません。
          しかし、このポートフォリオを作成する中で最新の情報へのキャッチアップの大切さや調べることで学んできたことを更に深く学べたのが大きな成果だと思い
          ます。`}</pre>

          <p className="text-center mt-16">以上、拙い文章及び不完全な状態ではありますが私のポートフォリオを閲覧してくださり本当にありがとうございました。</p>
          <p className="text-center">引き続きPDCAに努め自身の能力を高めることを続けて参ります。</p>
          <p className="text-center">御社、ヤフー株式会社様からご縁を頂けるのであれば、同期ではもちろん社内で一番を目指して精進して参ります。</p>
        </div>
      )
    default:
      return 'ERROR';
  }
};
