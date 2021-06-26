var allMovies = [];

var publicUrls = [
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=72&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=108&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=144&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=180&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=216&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=252&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=288&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=324&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=360&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=396&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=432&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=468&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/drama-historical-drama/?No=504&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',

  'https://www.public.gr/cat/films/dvd/hristoygenniatika/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/hristoygenniatika/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',

  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=72&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=108&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=144&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=180&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=216&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=252&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=288&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=324&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/action-adventure-crime/?No=360&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',

  'https://www.public.gr/cat/films/dvd/greek/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/greek/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',

  'https://www.public.gr/cat/films/dvd/fantasy-science-fiction/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/fantasy-science-fiction/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/fantasy-science-fiction/?No=72&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/fantasy-science-fiction/?No=108&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/fantasy-science-fiction/?No=144&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/fantasy-science-fiction/?No=180&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',

  'https://www.public.gr/cat/films/dvd/erotic/',

  'https://www.public.gr/cat/films/dvd/thriller-mystery/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/thriller-mystery/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/thriller-mystery/?No=72&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/thriller-mystery/?No=108&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',

  'https://www.public.gr/cat/films/dvd/classic-film/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/classic-film/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',

  'https://www.public.gr/cat/films/dvd/comedy/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=72&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=108&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=144&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=180&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=216&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=252&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=288&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=324&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=360&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/comedy/?No=396&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',

  'https://www.public.gr/cat/films/dvd/war/',

  'https://www.public.gr/cat/films/dvd/cinephile-special-interest/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/cinephile-special-interest/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/cinephile-special-interest/?No=72&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',
  'https://www.public.gr/cat/films/dvd/cinephile-special-interest/?No=108&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&Nf=&N=&Ntk=',

  'https://www.public.gr/cat/films/dvd/horror/?No=0&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/horror/?No=36&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/horror/?No=72&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/horror/?No=108&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/horror/?No=144&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk=',
  'https://www.public.gr/cat/films/dvd/horror/?No=180&Ntt=&Nrpp=36&Ns=&_dyncharset=UTF-8&N=&Nf=&Ntk='
];

function scrape(html) {
  document.body.innerHTML = html;
  var t = document.querySelectorAll('.istile');
  for (var i = 0; i < t.length; i++) {
    var movie = t[i];
    if (movie.nodeName == 'A' && movie.innerText.trim()) {
      var title = movie.innerText.trim();
      if (title && !title.match(/^(?=.*[A-Za-z])/)) {
        if (allMovies.map((m) => m.toUpperCase()).indexOf(title.toUpperCase()) === -1) allMovies.push(title);
      }
    }
  }
}

publicUrls.forEach((url) => {
  fetch(url)
    .then(function (response) {
      // The API call was successful!
      return response.text();
    })
    .then(function (html) {
      // This is the HTML from our response as a text string
      scrape(html);
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
});
